'use client'

import { usePathname } from 'next/navigation'
import { Breadcrumbs } from './Breadcrumbs'

// Static pages that get breadcrumbs auto-generated from pathname → label map.
// Dynamic pages (/catalog/[id]/..., /products/[slug]) render breadcrumbs
// inside their own page.tsx so they can include the category/product name
// resolved from Strapi.
const STATIC_LABELS: Record<string, string> = {
    '/about': 'О нас',
    '/bestsellers': 'Бестселлеры',
    '/cart': 'Корзина',
    '/contacts': 'Контакты',
    '/custom-order': 'Индивидуальный заказ',
    '/delivery': 'Доставка',
    '/loyalty': 'Программа лояльности',
    '/on-sale': 'Акции',
    '/order-instructions': 'Как оформить заказ',
    '/payment': 'Оплата',
    '/promotions': 'Скидки и акции',
    '/public-contracts': 'Публичный договор',
    '/return': 'Возврат',
    '/requests': 'Заявки',
    '/search': 'Поиск',
    '/user-agreement': 'Пользовательское соглашение',
}

// Pathnames where breadcrumbs are rendered inside the page itself (or should
// be omitted entirely).
const SKIP_PREFIXES = ['/catalog', '/products', '/order', '/form-success', '/api', '/actual', '/kashpo', '/sales']

export function AutoBreadcrumbs() {
    const pathname = usePathname() || '/'
    if (pathname === '/') return null
    if (SKIP_PREFIXES.some((p) => pathname === p || pathname.startsWith(p + '/'))) return null

    const label = STATIC_LABELS[pathname]
    if (!label) return null

    return <Breadcrumbs items={[{ label }]} />
}
