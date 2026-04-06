import { pickStrapiMediaUrl } from "@/utils/strapiMedia"

type ImageLike = {
    url?: string
    formats?: {
        thumbnail?: { url?: string }
        medium?: { url?: string }
    }
}

function toAbsoluteUrl(pathOrUrl: string | null | undefined, strapiBase: string): string | null {
    if (pathOrUrl == null || pathOrUrl === "") return null
    if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) return pathOrUrl
    const base = strapiBase.replace(/\/$/, "")
    if (!base) return pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`
    const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`
    return `${base}${path}`
}

/**
 * Картинка для поиска: сначала галерея (formats / url), если пусто — preview (как в карточке товара).
 */
export function getSearchProductImageUrl(
    product: {
        images?: ImageLike[] | null
        preview?: unknown
    },
    strapiBase: string,
    size: "thumbnail" | "medium" = "medium"
): string {
    const first = product?.images?.[0]
    let rel: string | null | undefined =
        size === "medium"
            ? first?.formats?.medium?.url || first?.formats?.thumbnail?.url || first?.url
            : first?.formats?.thumbnail?.url || first?.url

    const fromGallery = toAbsoluteUrl(rel ?? null, strapiBase)
    if (fromGallery) return fromGallery

    const previewPath = pickStrapiMediaUrl(product?.preview)
    const fromPreview = toAbsoluteUrl(previewPath, strapiBase)
    if (fromPreview) return fromPreview

    return "/placeholder.jpg"
}
