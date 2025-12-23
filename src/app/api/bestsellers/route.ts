import { NextRequest, NextResponse } from 'next/server'

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://api.mppshop.by'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('query')

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    }

    const response = await fetch(`${STRAPI_URL}/api/bestsellers`, { headers })

    if (!response.ok) {
      throw new Error(`Failed to fetch bestsellers: ${response.statusText}`)
    }

    const data = await response.json()

    return NextResponse.json({
      data: {
        products: data.data,
      },
    })

  } catch (error) {
    console.error('Search API error:', error)
    
    return NextResponse.json(
      {
        error: 'Failed to search',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
