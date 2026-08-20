// SEO overrides for specific catalog tag pages (title / h1 / description).
// Keyed by `${categorySlug}/${tagSlug}`.
// If a key isn't in this map, auto-generated values (from category + tag titles)
// are used.
export type TagMetaOverride = {
    title: string
    h1: string
    description: string
}

export const CATALOG_TAG_META_OVERRIDES: Record<string, TagMetaOverride> = {
    'envelops/c-dnem-rozhdeniya': {
        title: 'Конверт с днем рождения – купить готовые конверты с поздравлением',
        h1: 'Конверты с днем рождения',
        description: 'Ищете конверт с днем рождения ▶? У нас вы найдете готовые конверты с поздравлением ⚡. Выберите идеальный вариант для подарка и порадуйте близких ⚡.',
    },
    'envelops/podarochnye-nabory': {
        title: 'Набор для упаковки подарков – готовые упаковочные наборы в Беларуси',
        h1: 'Наборы для упаковки подарков',
        description: 'Выберите набор для упаковки подарков из нашего каталога ☑. Эти наборы помогут красиво оформить любой презент ☑. Создайте праздничное настроение с нашими решениями для упаковки ☑.',
    },
    'kartochki-otkritki/kosmos': {
        title: 'Набор открыток космос – открытки с темой космоса',
        h1: 'Наборы открыток космос',
        description: 'Купите набор открыток космос для вдохновляющих поздравлений ☑. В коллекции представлены открытки по тематике космоса ☑. Выберите идеальный набор открыток для подарка ☑.',
    },
}
