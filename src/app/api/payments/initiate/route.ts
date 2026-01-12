import { NextRequest, NextResponse } from 'next/server'

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL

interface PaymentRequest {
    products: Array<{
        productSlug: string
        quantity: number
    }>
    promocode?: string
    isIndividual: boolean
    paymentMethod: string
    type?: 'shipping' | 'selfShipping'
    comment?: string
    // Individual fields
    fullName?: string
    email?: string
    phone?: string
    city?: string
    address?: string
    // Organization fields
    organization?: string
    UNP?: string
    paymentAccount?: string
    bankAdress?: string
}

export async function POST(request: NextRequest) {
    try {
        const body: PaymentRequest = await request.json()

        // Validate required fields
        if (!body.products || body.products.length === 0) {
            return NextResponse.json(
                {
                    error: {
                        status: 400,
                        name: 'BadRequestError',
                        message: 'Products array is required and must not be empty'
                    }
                },
                { status: 400 }
            )
        }

        // Validate products
        for (const product of body.products) {
            if (!product.productSlug || product.quantity <= 0) {
                return NextResponse.json(
                    {
                        error: {
                            status: 400,
                            name: 'BadRequestError',
                            message: 'Product slug is required and quantity must be greater than 0'
                        }
                    },
                    { status: 400 }
                )
            }
        }

        // Validate individual customer fields
        if (body.isIndividual) {
            if (!body.fullName || !body.email || !body.phone || !body.city || !body.address) {
                return NextResponse.json(
                    {
                        error: {
                            status: 400,
                            name: 'BadRequestError',
                            message: 'For individuals, fullName, email, phone, city, and address are required'
                        }
                    },
                    { status: 400 }
                )
            }

            if (body.paymentMethod !== 'card' && body.paymentMethod !== 'ERIP' && body.paymentMethod !== 'pickupPayment') {
                return NextResponse.json(
                    {
                        error: {
                            status: 400,
                            name: 'BadRequestError',
                            message: 'For individuals, paymentMethod must be ERIP, card, or pickupPayment'
                        }
                    },
                    { status: 400 }
                )
            }

            // Validate pickupPayment requirements
            if (body.paymentMethod === 'pickupPayment') {
                if (body.type !== 'selfShipping') {
                    return NextResponse.json(
                        {
                            error: {
                                status: 400,
                                name: 'BadRequestError',
                                message: 'pickupPayment is only available for self-pickup (type must be selfShipping)'
                            }
                        },
                        { status: 400 }
                    )
                }
            }
        } else {
            // Validate organization fields
            if (!body.organization || !body.fullName || !body.UNP || !body.paymentAccount || 
                !body.bankAdress || !body.email || !body.phone || !body.city || !body.address) {
                return NextResponse.json(
                    {
                        error: {
                            status: 400,
                            name: 'BadRequestError',
                            message: 'For organizations, organization, fullName, UNP, paymentAccount, bankAdress, email, phone, city, and address are required'
                        }
                    },
                    { status: 400 }
                )
            }

            if (body.paymentMethod !== 'ERIP' && body.paymentMethod !== 'paymentAccount') {
                return NextResponse.json(
                    {
                        error: {
                            status: 400,
                            name: 'BadRequestError',
                            message: 'For organizations, paymentMethod must be ERIP or paymentAccount'
                        }
                    },
                    { status: 400 }
                )
            }
        }

        // Prepare request for Strapi API
        const strapiRequest: any = {
            products: body.products,
            isIndividual: body.isIndividual,
            paymentMethod: body.paymentMethod,
            type: body.type || 'shipping',
            ...(body.comment && { comment: body.comment }),
            ...(body.promocode && { promocode: body.promocode })
        }

        // Add customer-specific fields
        if (body.isIndividual) {
            strapiRequest.fullName = body.fullName
            strapiRequest.email = body.email
            strapiRequest.phone = body.phone
            strapiRequest.city = body.city
            strapiRequest.address = body.address
        } else {
            strapiRequest.organization = body.organization
            strapiRequest.fullName = body.fullName
            strapiRequest.UNP = body.UNP
            strapiRequest.paymentAccount = body.paymentAccount
            strapiRequest.bankAdress = body.bankAdress
            strapiRequest.email = body.email
            strapiRequest.phone = body.phone
            strapiRequest.city = body.city
            strapiRequest.address = body.address
        }

        // Call Strapi payment API
        if (!STRAPI_URL) {
            return NextResponse.json(
                {
                    error: {
                        status: 500,
                        name: 'InternalServerError',
                        message: 'Strapi URL is not configured'
                    }
                },
                { status: 500 }
            )
        }

        const response = await fetch(`${STRAPI_URL}/api/payments/initiate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(strapiRequest),
        })

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}))
            return NextResponse.json(
                {
                    error: {
                        status: response.status,
                        name: errorData.error?.name || 'PaymentError',
                        message: errorData.error?.message || 'Failed to initiate payment',
                        details: errorData.error?.details
                    }
                },
                { status: response.status }
            )
        }

        const data = await response.json()

        // Return the response from Strapi
        return NextResponse.json(data)

    } catch (error) {
        console.error('Payment API error:', error)
        return NextResponse.json(
            {
                error: {
                    status: 500,
                    name: 'InternalServerError',
                    message: error instanceof Error ? error.message : 'Failed to initiate payment'
                }
            },
            { status: 500 }
        )
    }
}

