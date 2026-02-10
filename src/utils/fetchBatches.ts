const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://api.mppshop.by'
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN

export interface BatchItem {
  id: number | string
  documentId: string
  name: string
  priority: number
}

/** Загрузка списка батчей из Strapi (для SSR). Не зависит от Next API route. */
export async function fetchBatchesFromStrapi(): Promise<BatchItem[]> {
  try {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    }
    if (STRAPI_API_TOKEN) {
      headers['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`
    }
    const response = await fetch(`${STRAPI_URL}/api/batches`, {
      headers,
      cache: 'no-store',
    })
    if (!response.ok) {
      console.error('[fetchBatches] Strapi error:', response.status, await response.text().then((t) => t.slice(0, 200)))
      return []
    }
    const json = await response.json()
    const raw = Array.isArray(json) ? json : json?.data ?? []
    const arr = Array.isArray(raw) ? raw : [raw]
    const data = arr
      .map((b: any) => ({
        id: b?.id ?? b?.documentId,
        documentId: String(b?.documentId ?? b?.id ?? ''),
        name: b?.attributes?.name ?? b?.name ?? String(b?.id ?? b?.documentId ?? ''),
        priority:
          typeof b?.attributes?.priority === 'number'
            ? b.attributes.priority
            : typeof b?.priority === 'number'
              ? b.priority
              : 0,
      }))
      .filter((b: any) => b.id != null || b.name)
      .sort((a: any, b: any) => (a.priority ?? 0) - (b.priority ?? 0))
    return data
  } catch (error) {
    console.error('[fetchBatches] Error:', error)
    return []
  }
}
