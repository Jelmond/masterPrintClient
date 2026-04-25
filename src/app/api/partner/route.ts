import { NextRequest, NextResponse } from 'next/server'

const BOT_TOKEN = process.env.TELEGRAM_REQUESTS_BOT_TOKEN
const CHAT_ID = process.env.TELEGRAM_REQUESTS_CHAT_ID

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, phone, company, email, circulation, productType, message } = body

        if (!name || !phone || !email) {
            return NextResponse.json(
                { error: 'Пожалуйста, заполните все обязательные поля' },
                { status: 400 }
            )
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: 'Неверный формат email' }, { status: 400 })
        }

        if (!BOT_TOKEN || !CHAT_ID) {
            console.error('Partner Telegram bot token or chat ID is not configured')
            return NextResponse.json({ error: 'Сервис временно недоступен' }, { status: 500 })
        }

        const lines = [
            '📋 <b>Новая заявка — Программа лояльности</b>',
            '',
            `👤 <b>Имя:</b> ${name}`,
            `📞 <b>Телефон:</b> ${phone}`,
            company ? `🏢 <b>Компания:</b> ${company}` : '',
            `📧 <b>Email:</b> ${email}`,
            circulation ? `📦 <b>Тираж:</b> ${circulation}` : '',
            productType ? `🗂 <b>Вид продукции:</b> ${productType}` : '',
            message ? `💬 <b>Сообщение:</b>\n${message}` : '',
        ].filter(Boolean).join('\n')

        const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`
        const response = await fetch(telegramUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: CHAT_ID, text: lines, parse_mode: 'HTML' }),
        })

        if (!response.ok) {
            const err = await response.json()
            console.error('Telegram API error:', err)
            throw new Error('Failed to send message to Telegram')
        }

        return NextResponse.json({ success: true, message: 'Заявка успешно отправлена!' })
    } catch (error) {
        console.error('Partner form API error:', error)
        return NextResponse.json(
            { error: 'Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.' },
            { status: 500 }
        )
    }
}
