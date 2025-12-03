import { NextRequest, NextResponse } from 'next/server'

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

interface OrderItem {
    productId: string
    title: string
    price: number
    quantity: number
    image?: string
}

interface OrderData {
    orderNumber: string
    buyerType: 'individual' | 'legal'
    deliveryMethod: string
    paymentMethod: string
    items: OrderItem[]
    formData: {
        fullName: string
        email: string
        phone: string
        city: string
        address: string
        comment?: string
        organizationName?: string
        unp?: string
        bankAccount?: string
        bankAddress?: string
    }
    totals: {
        productsTotal: number
        baseDiscountAmount: number
        baseDiscountPercent: number
        selfPickupDiscountAmount: number
        selfPickupDiscountPercent: number
        deliveryCost: number
        finalTotal: number
    }
}

function formatOrderItems(items: OrderItem[]): string {
    return items.map(item => `• ${item.title} (${item.quantity} шт.) - ${item.price.toFixed(2)} руб.`).join('\n')
}

function generateEmailSubject(orderNumber: string, paymentMethod?: string): string {
    if (paymentMethod === 'alphabank') {
        return `Ваш заказ №${orderNumber} успешно оплачен`
    }
    return `Ваш заказ №${orderNumber} успешно оформлен`
}

function generateEmailFooter(): string {
    return `С уважением, команда MPP.Shop
г. Гродно, ул. Титова 24
Время работы: Пн–Пт, 9:00–17:00
Тел.: +375 44 749-54-65
Сайт: https://mppshop.by

Мы готовы помочь вам по любым вопросам, связанным с оформлением и оплатой заказа.`
}

function generateEripBankEmail(orderData: OrderData): string {
    const { orderNumber, items, formData, totals } = orderData
    const paymentType = orderData.paymentMethod === 'erip' ? 'ЕРИП' : 'Расчётный счёт'
    
    return `Здравствуйте!

Ваш заказ №${orderNumber} успешно создан. В ближайшее время менеджер подготовит и отправит вам письмо с данными для оплаты через ${paymentType}.

Детали заказа:
${formatOrderItems(items)}
• Итоговая сумма: ${totals.finalTotal.toFixed(2)} руб.

${generateEmailFooter()}`
}

function generateCashCardEmail(orderData: OrderData): string {
    const { orderNumber, items, totals } = orderData
    
    return `Здравствуйте!

Ваш заказ №${orderNumber} успешно создан и принят в обработку. Оплата будет произведена наличными или банковской картой при получении товара в нашем пункте выдачи.

Детали заказа:
${formatOrderItems(items)}
• Итоговая сумма: ${totals.finalTotal.toFixed(2)} руб.

${generateEmailFooter()}`
}

function generateAlphabankEmail(orderData: OrderData): string {
    const { orderNumber, items, totals } = orderData
    
    return `Здравствуйте!

Ваш платеж по заказу №${orderNumber} был успешно выполнен. Мы приняли заказ в работу и подготовим его к выдаче или отправке.

Детали заказа:
${formatOrderItems(items)}
• Итоговая сумма: ${totals.finalTotal.toFixed(2)} руб.

Когда заказ будет готов, вы получите дополнительное уведомление.

${generateEmailFooter()}`
}

function generateTelegramMessage(orderData: OrderData): string {
    const { orderNumber, buyerType, deliveryMethod, paymentMethod, items, formData, totals } = orderData
    
    const buyerInfo = buyerType === 'legal' 
        ? `🏢 <b>Организация:</b> ${formData.organizationName || 'Не указано'}\n📋 <b>УНП:</b> ${formData.unp || 'Не указано'}\n💳 <b>Расчетный счет:</b> ${formData.bankAccount || 'Не указано'}\n🏦 <b>Адрес банка:</b> ${formData.bankAddress || 'Не указано'}`
        : ''
    
    const itemsList = items.map(item => 
        `  • ${item.title} (${item.quantity} шт.) - ${item.price.toFixed(2)} руб.`
    ).join('\n')
    
    return `
📦 <b>Новый заказ #${orderNumber}</b>

👤 <b>Тип покупателя:</b> ${buyerType === 'legal' ? 'Юридическое лицо' : 'Физическое лицо'}
${buyerInfo}
👤 <b>ФИО:</b> ${formData.fullName}
📧 <b>Email:</b> ${formData.email}
📞 <b>Телефон:</b> ${formData.phone}
📍 <b>Город:</b> ${formData.city}
🏠 <b>Адрес:</b> ${formData.address}
🚚 <b>Доставка:</b> ${deliveryMethod === 'self-pickup' ? 'Самовывоз' : deliveryMethod === 'dpd' ? 'DPD' : 'Альтернативная'}
💳 <b>Оплата:</b> ${paymentMethod === 'erip' ? 'ЕРИП' : paymentMethod === 'bank-account' ? 'Расчетный счет' : paymentMethod === 'cash-card-pickup' ? 'Наличными/картой при самовывозе' : 'Альфа-банк'}

🛒 <b>Товары:</b>
${itemsList}

💰 <b>Итого:</b> ${totals.finalTotal.toFixed(2)} руб.
${totals.baseDiscountAmount > 0 ? `🎁 <b>Скидка ${totals.baseDiscountPercent}%:</b> ${totals.baseDiscountAmount.toFixed(2)} руб.` : ''}
${totals.selfPickupDiscountAmount > 0 ? `🎁 <b>Скидка за самовывоз 3%:</b> ${totals.selfPickupDiscountAmount.toFixed(2)} руб.` : ''}
🚚 <b>Доставка:</b> ${totals.deliveryCost === 0 ? 'Бесплатно' : `${totals.deliveryCost.toFixed(2)} руб.`}
${formData.comment ? `💬 <b>Комментарий:</b> ${formData.comment}` : ''}
    `.trim()
}

export async function POST(request: NextRequest) {
    try {
        const orderData: OrderData = await request.json()

        // Validate required fields
        if (!orderData.orderNumber || !orderData.formData.email || !orderData.items || orderData.items.length === 0) {
            return NextResponse.json(
                { error: 'Недостаточно данных для оформления заказа' },
                { status: 400 }
            )
        }

        // Send notification to Telegram
        if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
            const telegramMessage = generateTelegramMessage(orderData)
            const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
            
            try {
                await fetch(telegramUrl, {
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
            } catch (telegramError) {
                console.error('Telegram notification error:', telegramError)
                // Don't fail the order if Telegram fails
            }
        }

        // Send email to customer
        // Note: In a real application, you would use a proper email service like SendGrid, Resend, etc.
        // For now, we'll just log it. You can integrate with your email service here.
        const emailSubject = generateEmailSubject(orderData.orderNumber, orderData.paymentMethod)
        let emailBody: string
        if (orderData.paymentMethod === 'cash-card-pickup') {
            emailBody = generateCashCardEmail(orderData)
        } else if (orderData.paymentMethod === 'alphabank') {
            emailBody = generateAlphabankEmail(orderData)
        } else {
            emailBody = generateEripBankEmail(orderData)
        }

        // TODO: Integrate with email service (SendGrid, Resend, etc.)
        // Email will be sent from: shop@mpp.by
        console.log('Email to send:', {
            from: 'shop@mpp.by',
            to: orderData.formData.email,
            subject: emailSubject,
            body: emailBody
        })

        // In production, you would send the email here:
        // await sendEmail({
        //     from: 'shop@mpp.by',
        //     to: orderData.formData.email,
        //     subject: emailSubject,
        //     text: emailBody
        // })

        return NextResponse.json({ 
            success: true, 
            orderNumber: orderData.orderNumber,
            message: 'Заказ успешно оформлен' 
        })

    } catch (error) {
        console.error('Order API error:', error)
        return NextResponse.json(
            {
                error: 'Произошла ошибка при оформлении заказа. Пожалуйста, попробуйте позже.',
                message: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        )
    }
}

