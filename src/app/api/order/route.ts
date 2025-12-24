import { NextRequest, NextResponse } from 'next/server'

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

