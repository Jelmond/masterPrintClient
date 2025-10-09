import { NextRequest, NextResponse } from 'next/server'

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://api.mppshop.by'
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('query')

    if (!query || query.trim().length < 2) {
      return NextResponse.json({
        data: {
          categories: [],
          products: [],
          tags: [],
          searchTerm: query || '',
          totalResults: {
            categories: 0,
            products: 0,
            tags: 0
          }
        }
      })
    }

    const searchQuery = query.trim()
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    }

    if (STRAPI_API_TOKEN) {
      headers['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`
    }

    // Call the existing Strapi search endpoint
    const searchUrl = `${STRAPI_URL}/api/search?query=${encodeURIComponent(searchQuery)}`
    console.log('Calling Strapi search URL:', searchUrl)
    
    const response = await fetch(searchUrl, { headers })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Strapi search API error:', response.status, errorText)
      throw new Error(`Strapi search API error: ${response.status} - ${errorText}`)
    }

    const data = await response.json()
    console.log('Strapi search response:', data)

    return NextResponse.json(data)

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
