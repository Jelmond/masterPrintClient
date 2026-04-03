import { NextRequest, NextResponse } from 'next/server'

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL

export async function GET(request: NextRequest) {
    try {
        const headers: HeadersInit = {  
            'Content-Type': 'application/json',
        }

        const response = await fetch(`${STRAPI_URL}/api/home?populate=*`, { headers })

        const data = await response.json()

        return NextResponse.json(data)
    } catch (error) {
        console.error('Get home data API error:', error)
        return NextResponse.json(
            {
                error: 'Failed to get home data'
            },
            { status: 500 }
        )
    }
}