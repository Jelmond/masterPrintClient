import { NextRequest, NextResponse } from 'next/server'

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID
const TELEGRAM_REQUESTS_BOT_TOKEN = process.env.TELEGRAM_REQUESTS_BOT_TOKEN
const TELEGRAM_REQUESTS_CHAT_ID = process.env.TELEGRAM_REQUESTS_CHAT_ID

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, company, category, email, message } = body

    // Validate required fields
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Пожалуйста, заполните все обязательные поля' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Неверный формат email' },
        { status: 400 }
      )
    }

    const isRequestsTarget = category === 'Кашпо под заказ'
    const botToken = isRequestsTarget ? TELEGRAM_REQUESTS_BOT_TOKEN : TELEGRAM_BOT_TOKEN
    const chatId = isRequestsTarget ? TELEGRAM_REQUESTS_CHAT_ID : TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      console.error(
        isRequestsTarget
          ? 'Requests Telegram bot token or chat ID is not configured'
          : 'Telegram bot token or chat ID is not configured'
      )
      return NextResponse.json(
        { error: 'Сервис временно недоступен' },
        { status: 500 }
      )
    }

    // Format message for Telegram
    const telegramMessage = [
        '📋 <b>Новая заявка с сайта</b>',
        '',
        `👤 <b>Имя:</b> ${name}`,
        `📞 <b>Телефон:</b> ${phone}`,
        category ? `🗂 <b>Категория:</b> ${category}` : (company ? `🏢 <b>Компания:</b> ${company}` : ''),
        `📧 <b>Email:</b> ${email}`,
        message ? `💬 <b>Сообщение:</b>\n${message}` : '',
    ].filter(Boolean).join('\n')

    // Send message to Telegram
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`
    
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'HTML',
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Telegram API error:', errorData)
      throw new Error('Failed to send message to Telegram')
    }

    return NextResponse.json({ success: true, message: 'Заявка успешно отправлена!' })

  } catch (error) {
    console.error('Contact form API error:', error)
    return NextResponse.json(
      {
        error: 'Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

