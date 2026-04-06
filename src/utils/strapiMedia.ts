/**
 * Достаёт URL файла из поля Media в ответе Strapi v4 (вложенный data.attributes) и v5 / плоского вида.
 */
export function pickStrapiMediaUrl(media: unknown): string | null {
    if (media == null) return null
    if (typeof media === "string" && media.trim()) return media.trim()
    if (typeof media !== "object") return null
    const m = media as Record<string, unknown>
    if (typeof m.url === "string" && m.url) return m.url
    const data = m.data
    if (data == null) return null
    if (typeof data === "object") {
        const d = data as Record<string, unknown>
        const attrs = d.attributes
        if (attrs && typeof attrs === "object") {
            const url = (attrs as Record<string, unknown>).url
            if (typeof url === "string" && url) return url
        }
        if (typeof d.url === "string" && d.url) return d.url
    }
    return null
}

/**
 * Single Type / одиночная запись: v4 — { data: { attributes: { ... } } }, v5 / плоский — поля на `data`.
 */
export function getStrapiSingleEntryPayload(json: unknown): Record<string, unknown> | null {
    if (json == null || typeof json !== "object") return null
    const root = json as Record<string, unknown>
    const d = root.data
    if (d == null || typeof d !== "object") return null
    const inner = d as Record<string, unknown>
    if (inner.attributes && typeof inner.attributes === "object") {
        return inner.attributes as Record<string, unknown>
    }
    return inner
}
