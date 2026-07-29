import Link from 'next/link'
import styles from './RelatedTags.module.css'

export type RelatedTag = {
    slug?: string
    title: string
}

type Props = {
    catalogSlug: string
    tags: RelatedTag[]
    // slug of the tag we're currently on — excluded from the list so we don't
    // link a page to itself.
    currentTagSlug?: string
    heading?: string
}

// Server-rendered plain <a href> links to sibling tag pages so crawlers
// have real links to orphan tag pages that would otherwise only be reachable
// through client-side filter chips.
export function RelatedTags({ catalogSlug, tags, currentTagSlug, heading }: Props) {
    const items = tags
        .filter((t) => t?.slug && t?.title && t.slug !== currentTagSlug)
        .slice(0, 24)

    if (items.length === 0) return null

    return (
        <nav aria-label="Похожие подборки" className={styles.wrap}>
            {heading && <h2 className={styles.heading}>{heading}</h2>}
            <ul className={styles.list}>
                {items.map((tag) => (
                    <li key={tag.slug}>
                        <Link
                            href={`/catalog/${catalogSlug}/${tag.slug}`}
                            className={styles.chip}
                        >
                            {tag.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
