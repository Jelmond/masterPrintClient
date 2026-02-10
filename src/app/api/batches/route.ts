import { NextResponse } from 'next/server'

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://api.mppshop.by'
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN

export async function GET() {
  try {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    }
    if (STRAPI_API_TOKEN) {
      headers['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`
    }
    const url = `${STRAPI_URL}/api/batches`
    const response = await fetch(url, { headers })
    if (!response.ok) {
      const text = await response.text()
      console.error('[api/batches] Strapi error:', response.status, url, text?.slice(0, 200))
      return NextResponse.json({ data: [] })
    }
    const json = await response.json()
    const raw = Array.isArray(json) ? json : json?.data ?? []
    if (!Array.isArray(raw)) {
      console.warn('[api/batches] Unexpected Strapi format, raw is not array:', typeof raw, Object.keys(json || {}))
    }
    // Нормализация: Strapi v4 — { id, documentId, attributes: { name, priority } }; или плоский { id, name, priority }
    const data = (Array.isArray(raw) ? raw : [raw])
      .map((b: any) => ({
        id: b?.id ?? b?.documentId,
        documentId: b?.documentId ?? b?.id,
        name: b?.attributes?.name ?? b?.name ?? String(b?.id ?? b?.documentId ?? ''),
        priority: typeof b?.attributes?.priority === 'number' ? b.attributes.priority : (typeof b?.priority === 'number' ? b.priority : 0),
      }))
      .filter((b: any) => b.id != null || b.name)
      .sort((a: any, b: any) => (a.priority ?? 0) - (b.priority ?? 0))
    if (data.length === 0 && raw.length > 0) {
      console.warn('[api/batches] No batches after normalize. Raw sample:', JSON.stringify((Array.isArray(raw) ? raw[0] : raw) ?? {}).slice(0, 300))
    }
    return NextResponse.json({ data })
  } catch (error) {
    console.error('[api/batches] Error:', error)
    return NextResponse.json({ data: [] })
  }
}
