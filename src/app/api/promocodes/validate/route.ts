import { NextRequest, NextResponse } from 'next/server'

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL

interface ValidatePromocodeRequest {
    name: string
}

export async function POST(request: NextRequest) {
    try {
        const body: ValidatePromocodeRequest = await request.json()

        if (!body.name || typeof body.name !== 'string' || body.name.trim() === '') {
            return NextResponse.json(
                {
                    valid: false,
                    message: 'Promocode name is required'
                },
                { status: 400 }
            )
        }

        if (!STRAPI_URL) {
            return NextResponse.json(
                {
                    valid: false,
                    message: 'Strapi URL is not configured'
                },
                { status: 500 }
            )
        }

        // Call Strapi API to validate promocode
        const response = await fetch(`${STRAPI_URL}/api/promocodes/validate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: body.name.trim()
            }),
        })

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}))
            return NextResponse.json(
                {
                    valid: false,
                    message: errorData.message || 'Failed to validate promocode'
                },
                { status: response.status }
            )
        }

        const data = await response.json()
        return NextResponse.json(data)

    } catch (error) {
        console.error('Validate promocode API error:', error)
        return NextResponse.json(
            {
                valid: false,
                message: error instanceof Error ? error.message : 'Failed to validate promocode'
            },
            { status: 500 }
        )
    }
}

