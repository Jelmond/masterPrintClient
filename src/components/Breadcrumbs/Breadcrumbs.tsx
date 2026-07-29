import Link from 'next/link'
import styles from './Breadcrumbs.module.css'

export type Crumb = {
    label: string
    href?: string
}

type Props = {
    items: Crumb[]
}

// Emits schema.org/BreadcrumbList microdata inline per SEO spec:
// - <ol itemscope itemtype="https://schema.org/BreadcrumbList">
// - each middle <li> as ListItem with <a itemprop="item"><span itemprop="name"> + <meta itemprop="position">
// - last <li> is plain text (current page — no link)
// If the first item is not "Главная", it's prepended automatically.
export function Breadcrumbs({ items }: Props) {
    const trail: Crumb[] =
        items[0]?.href === '/'
            ? items
            : [{ label: 'Главная', href: '/' }, ...items]

    if (trail.length < 2) return null

    return (
        <nav aria-label="Хлебные крошки" className={styles.nav}>
            <ol
                className={styles.list}
                itemScope
                itemType="https://schema.org/BreadcrumbList"
            >
                {trail.map((crumb, idx) => {
                    const isLast = idx === trail.length - 1
                    const position = idx + 1
                    return (
                        <li
                            key={`${crumb.label}-${idx}`}
                            className={styles.item}
                            itemProp="itemListElement"
                            itemScope
                            itemType="https://schema.org/ListItem"
                        >
                            {isLast || !crumb.href ? (
                                <span itemProp="name" className={styles.current}>
                                    {crumb.label}
                                </span>
                            ) : (
                                <Link
                                    href={crumb.href}
                                    itemProp="item"
                                    className={styles.link}
                                >
                                    <span itemProp="name">{crumb.label}</span>
                                </Link>
                            )}
                            <meta itemProp="position" content={String(position)} />
                            {!isLast && (
                                <span className={styles.separator} aria-hidden="true">
                                    /
                                </span>
                            )}
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}
