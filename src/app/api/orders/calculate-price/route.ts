import { NextRequest, NextResponse } from 'next/server'

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL

interface CalculatePriceRequest {
    products: Array<{
        productSlug: string
        quantity: number
    }>
    type?: 'shipping' | 'selfShipping'
    promocode?: string
}

export async function POST(request: NextRequest) {
    try {
        const body: CalculatePriceRequest = await request.json()

        // Validate required fields
        if (!body.products || body.products.length === 0) {
            return NextResponse.json(
                {
                    error: {
                        status: 400,
                        message: 'Products array is required and cannot be empty'
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
                            message: 'Product slug is required and quantity must be greater than 0'
                        }
                    },
                    { status: 400 }
                )
            }
        }

        if (!STRAPI_URL) {
            return NextResponse.json(
                {
                    error: {
                        status: 500,
                        message: 'Strapi URL is not configured'
                    }
                },
                { status: 500 }
            )
        }

        // Call Strapi API to calculate price
        const response = await fetch(`${STRAPI_URL}/api/orders/calculate-price`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                products: body.products,
                type: body.type || 'shipping',
                ...(body.promocode && { promocode: body.promocode })
            }),
        })

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}))
            return NextResponse.json(
                {
                    error: {
                        status: response.status,
                        message: errorData.error?.message || 'Failed to calculate price'
                    }
                },
                { status: response.status }
            )
        }

        const data = await response.json()
        return NextResponse.json(data)

    } catch (error) {
        console.error('Calculate price API error:', error)
        return NextResponse.json(
            {
                error: {
                    status: 500,
                    message: error instanceof Error ? error.message : 'Failed to calculate price'
                }
            },
            { status: 500 }
        )
    }
}

