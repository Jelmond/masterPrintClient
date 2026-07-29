// Meta description overrides per product slug — used to break up duplicate
// <meta name="description"> on product pages whose auto-generated descriptions
// collide (same product.title/price/size/material combination).
// If a slug isn't in this map, the auto-generated description built from
// structured product fields is used.
export const PRODUCT_DESCRIPTION_OVERRIDES: Record<string, string> = {
    'kartochka-happy-birthday-2': 'Ищете открытку Happy Birthday ⭐? Купить можно у нас ⭐! Качественный мелованный картон, размер 105×148 мм ⭐. Доставка по Беларуси ⭐.',
    'kartochka-happy-birthday': 'Закажите классическую открытку Happy Birthday ⭐. Формат 105×148 мм, качественный картон ⭐. Быстрая доставка по всей Беларуси от надёжного производителя ⭐!',
    'kartochka-ot-vsego-serdtsa': 'Милая карточка «От всего сердца» 75×75 мм ⭐. Отличное качество печати на мелованном картоне ⭐. Быстрая доставка по РБ ⭐.',
    'kartochka-ot-vsego-serdtsa-2': 'Стильная карточка «От всего сердца» для ваших подарков ⭐. Размер 75×75 мм, мелованный картон ⭐. Заказывайте с доставкой в любой город Беларуси ⭐!',
    'kartochka-samoy-krasivoy-1': 'Порадуйте близких карточкой «Самой красивой» ⭐. Размер 75×75 мм, плотный картон ⭐. Быстрая доставка по Гродно и Беларуси ⭐.',
    'kartochka-samoy-krasivoy': 'Карточка «Самой красивой» — идеальный акцент к подарку ⭐. Качественная полиграфия (мелованный картон, 75×75 мм) ⭐. Заказывайте онлайн ⭐!',
    'stiker-s-prazdnikom-2': 'Нужны стикеры «С праздником!» ⭐? Купить набор из 10 шт. можно у нас ⭐. Самоклеящаяся бумага, размер 60×60 мм ⭐. Доставка по всей Беларуси.',
    'stiker-s-prazdnikom-2-1': 'Украсьте упаковку подарка стикерами «С праздником!» ⭐. Удобный формат 60×60 мм ⭐. Быстрая доставка и гарантия качества от производителя с 2014 года ⭐.',
}
