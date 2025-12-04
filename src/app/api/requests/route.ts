import { NextRequest, NextResponse } from 'next/server'

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, address, phone, email, message } = body

    // Validate required fields
    if (!fullName || !address || !phone || !email || !message) {
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

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Telegram bot token or chat ID is not configured')
      return NextResponse.json(
        { error: 'Сервис временно недоступен' },
        { status: 500 }
      )
    }

    // Format message for Telegram
    const telegramMessage = `
📋 <b>Новое обращение покупателя</b>

👤 <b>ФИО:</b> ${fullName}
📍 <b>Адрес:</b> ${address}
📞 <b>Телефон:</b> ${phone}
📧 <b>Email:</b> ${email}
💬 <b>Обращение:</b>
${message}
    `.trim()

    // Send message to Telegram
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
    
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: 'HTML',
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Telegram API error:', errorData)
      throw new Error('Failed to send message to Telegram')
    }

    return NextResponse.json({ success: true, message: 'Обращение успешно отправлено!' })

  } catch (error) {
    console.error('Requests form API error:', error)
    return NextResponse.json(
      {
        error: 'Произошла ошибка при отправке обращения. Пожалуйста, попробуйте позже.',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

