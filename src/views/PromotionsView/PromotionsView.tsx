'use client'

import { AnimLink } from "@/layouts/AnimatedRouterLayout/AnimatedRouterLayout"
import { colors, media, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"
import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { validateBelarusPhone } from "@/utils/validateBelarusPhone"

interface FormErrors {
    name?: string
    phone?: string
    email?: string
    company?: string
    message?: string
    consent?: string
}

/**
 * Краткая выжимка из Положения О применении скидок на продукцию (ООО «Мастерпринт-Пак»).
 * Полный текст утверждённой редакции хранится у организации и публикуется на сайте.
 */
export default function PromotionsView() {
    const router = useRouter()
    const formRef = useRef<HTMLDivElement>(null)

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        company: '',
        email: '',
        message: '',
        consent: false
    })
    const [errors, setErrors] = useState<FormErrors>({})
    const [isLoading, setIsLoading] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [submitMessage, setSubmitMessage] = useState('')

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}
        if (!formData.name.trim()) {
            newErrors.name = 'Имя обязательно для заполнения'
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Имя должно содержать минимум 2 символа'
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Номер телефона обязателен для заполнения'
        } else if (!validateBelarusPhone(formData.phone)) {
            newErrors.phone = 'Введите корректный белорусский номер (+375XXXXXXXXX)'
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email обязателен для заполнения'
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(formData.email.trim())) {
                newErrors.email = 'Неверный формат email'
            }
        }
        if (!formData.consent) {
            newErrors.consent = 'Необходимо согласие на обработку персональных данных'
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target
        const checked = (e.target as HTMLInputElement).checked
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value })
        if (errors[name as keyof FormErrors]) {
            setErrors({ ...errors, [name]: undefined })
        }
        if (submitStatus !== 'idle') {
            setSubmitStatus('idle')
            setSubmitMessage('')
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!validateForm()) return
        setIsLoading(true)
        setSubmitStatus('idle')
        setSubmitMessage('')
        try {
            const response = await fetch('/api/partner', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
            const data = await response.json()
            if (!response.ok) throw new Error(data.error || 'Ошибка при отправке заявки')
            router.push('/form-success')
        } catch (error) {
            setSubmitStatus('error')
            setSubmitMessage(error instanceof Error ? error.message : 'Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <StyledPage>
            <StyledContainer>
                <StyledTitle>Скидки и акции</StyledTitle>

                <StyledIntro>
                    <StyledText>
                        Ниже приведены <strong>ключевые положения</strong> из документа{' '}
                        <strong>«О применении скидок на продукцию»</strong> ООО «Мастерпринт-Пак»
                        (г. Скидель, утверждено 01.03.2026 г.). Это не полный текст Положения, а
                        справочная информация для покупателей интернет-магазина{' '}
                        <strong>mppshop.by</strong>.
                    </StyledText>
                </StyledIntro>

                <StyledHighlightCards>
                    <StyledPromoCard>
                        <StyledIconWrap aria-hidden>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </StyledIconWrap>
                        <StyledCardTitle>Скидки на самовывоз</StyledCardTitle>
                        <StyledCardDesc>
                            Скидка 3% при самовывозе с пункта выдачи в Гродно.
                        </StyledCardDesc>
                    </StyledPromoCard>
                    <StyledPromoCard>
                        <StyledIconWrap aria-hidden>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.5 5.5L5.5 18.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <circle cx="8.5" cy="8.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                                <circle cx="15.5" cy="15.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                        </StyledIconWrap>
                        <StyledCardTitle>Удобные цены</StyledCardTitle>
                        <StyledCardDesc>
                            При заказах от 700 руб. и 1&nbsp;500 руб. скидки 5% и 20%, соответственно.
                        </StyledCardDesc>
                    </StyledPromoCard>
                </StyledHighlightCards>

                <StyledContent>
                    <StyledBlockTitle>Скидки, установленные Положением</StyledBlockTitle>
                    <StyledSection>
                        <StyledSubTitle>За объём приобретённой продукции</StyledSubTitle>
                        <StyledText>
                            Скидка с <strong>отпускной цены (с НДС)</strong> при сумме заказа:
                        </StyledText>
                        <StyledList>
                            <li>
                                свыше <strong>700,00 BYN</strong> — скидка <strong>5%</strong>;
                            </li>
                            <li>
                                свыше <strong>1&nbsp;500,00 BYN</strong> — скидка <strong>20%</strong>.
                            </li>
                        </StyledList>
                        <StyledSubTitle>Самовывоз</StyledSubTitle>
                        <StyledText>
                            При самовывозе продукции предоставляется скидка с отпускной цены{' '}
                            <strong>3%</strong>. Подробности о пункте выдачи — в разделе{' '}
                            <AnimLink href="/delivery">«Доставка»</AnimLink>.
                        </StyledText>
                    </StyledSection>

                    <StyledBlockTitle>Суммирование скидок, промокодов и акций</StyledBlockTitle>
                    <StyledSection>
                        <StyledList>
                            <li>
                                Скидки за <strong>объём</strong> и за <strong>самовывоз</strong> могут{' '}
                                <strong>суммироваться</strong>, если выполняются условия обоих пунктов
                                Положения одновременно.
                            </li>
                            <li>
                                <strong>Промокод</strong> может применяться к стоимости заказа, товара
                                и/или услуги по доставке. В одном заказе допускается использование{' '}
                                <strong>только одного</strong> промокода. Скидки по промокоду{' '}
                                <strong>суммируются</strong> с иными скидками, действующими на Сайте.
                            </li>
                            <li>
                                <strong>Акции</strong> (в том числе кратковременные): скидки по акции{' '}
                                <strong>суммируются</strong> со скидками по промокодам, другими
                                скидками и иными акциями, проводимыми на Сайте.
                            </li>
                        </StyledList>
                    </StyledSection>

                    <StyledBlockTitle>Изменение и отмена условий продавцом</StyledBlockTitle>
                    <StyledSection>
                        <StyledHighlight>
                            <StyledText>
                                ООО «Мастерпринт-Пак» вправе <strong>вносить изменения</strong> в
                                Положение, в перечень товаров, в отношении которых предоставляются
                                скидка, промокод или акция, а также <strong>изменять размер</strong>{' '}
                                скидки, промокода или акции <strong>в любое время</strong> без
                                предварительного уведомления Покупателя. Сведения об изменениях{' '}
                                <strong>публикуются на сайте</strong> интернет-магазина в день
                                вступления изменений в силу.
                            </StyledText>
                            <StyledText style={{ marginTop: rm(16) }}>
                                Продавец оставляет за собой право в любое время{' '}
                                <strong>приостановить, изменить или отменить</strong> Положение с
                                размещением информации на сайте; это <strong>не влечёт</strong> для
                                ООО «Мастерпринт-Пак» <strong>какой-либо ответственности</strong>.
                                При прекращении действия Положения на сайте публикуется сообщение о
                                прекращении действия скидок, промокодов и акций.
                            </StyledText>
                        </StyledHighlight>
                    </StyledSection>

                    <StyledBlockTitle>Кратковременные акции и актуальные предложения</StyledBlockTitle>
                    <StyledSection>
                        <StyledText>
                            ООО «Мастерпринт-Пак» вправе проводить <strong>различные акции</strong>,
                            в том числе ограниченные по сроку. Срок действия скидок, промокодов и
                            акций, а также иные условия их применения указываются в{' '}
                            <strong>информационных материалах</strong> (на сайте, в описаниях акций,
                            при необходимости — в SMS, e-mail, социальных сетях и др.).
                        </StyledText>
                        <StyledText>
                            Товары со сниженной ценой в рамках акций вы можете посмотреть в{' '}
                            <strong>каталоге</strong>: откройте нужную категорию и включите фильтр{' '}
                            <strong>«Акции»</strong>.
                        </StyledText>
                        <StyledCta>
                            <AnimLink href="/catalog">Перейти в каталог</AnimLink>
                        </StyledCta>
                    </StyledSection>

                    <StyledBlockTitle>Акция «На все случаи жизни!»</StyledBlockTitle>
                    <StyledSection>
                        <StyledList>
                            <li>
                                <strong>Срок проведения:</strong> с 27 апреля 2026 года по 26 апреля
                                2027 года.
                            </li>
                            <li>
                                <strong>Участники и место проведения:</strong> физические лица, а
                                также юридические лица, индивидуальные предприниматели и лица,
                                осуществляющие самостоятельную профессиональную деятельность,
                                приобретающие товары по образцам, представленным в
                                интернет-магазине <strong>https://mppshop.by</strong>.
                            </li>
                            <li>
                                <strong>Условия акции:</strong> в период с 27.04.2026 по 26.04.2027
                                на наборы по акции «На все случаи жизни!» предоставляется скидка
                                <strong> 15%</strong> для покупателей, приобретающих наборы по
                                образцам, представленным в интернет-магазине{' '}
                                <strong>https://mppshop.by</strong>.
                            </li>
                            <li>
                                <strong>Наборы, участвующие в акции:</strong>
                                <br />Набор «На все случаи жизни!» Мини;
                                <br />Набор «На все случаи жизни!» Миди;
                                <br />Набор «На все случаи жизни!» Макси.
                            </li>
                        </StyledList>
                    </StyledSection>

                    <StyledBlockTitle>Акция «Готовимся к праздникам выгодно!»</StyledBlockTitle>
                    <StyledSection>
                        <StyledList>
                            <li>
                                <strong>Срок проведения:</strong> с 27 апреля 2026 года по 26 октября
                                2026 года.
                            </li>
                            <li>
                                <strong>Участники и место проведения:</strong> физические лица, а
                                также юридические лица, индивидуальные предприниматели и лица,
                                осуществляющие самостоятельную профессиональную деятельность,
                                приобретающие товары по образцам, представленным в
                                интернет-магазине <strong>https://mppshop.by</strong>.
                            </li>
                            <li>
                                <strong>Условия акции:</strong> в период с 27.04.2026 по 26.10.2026
                                на товары по акции «Готовимся к праздникам выгодно!» предоставляется
                                скидка <strong>10%</strong> для покупателей, приобретающих товары по
                                образцам, представленным в интернет-магазине{' '}
                                <strong>https://mppshop.by</strong>.
                            </li>
                            <li>
                                <strong>Товары, участвующие в акции:</strong> таблица с
                                наименованиями и артикулами товаров размещается в материалах акции.
                            </li>
                        </StyledList>
                    </StyledSection>

                    <StyledBlockTitle>Дополнительно</StyledBlockTitle>
                    <StyledSection>
                        <StyledList>
                            <li>
                                Положение <strong>не распространяется</strong> на продукцию по
                                индивидуальным заказам и на продукцию для дальнейшей переработки
                                заказчиком.
                            </li>
                            <li>
                                При возврате товара, приобретённого со скидкой, по промокоду или в
                                рамках акции, Покупателю возвращается сумма с учётом предоставленной
                                скидки (фактически уплаченная цена).
                            </li>
                        </StyledList>
                    </StyledSection>
                </StyledContent>
            </StyledContainer>

            <StyledLoyaltyHero>
                <StyledLoyaltyLabel>MPPShop · программа лояльности</StyledLoyaltyLabel>
                <StyledLoyaltyTitle>Особые условия<br />для постоянных клиентов</StyledLoyaltyTitle>
                <StyledLoyaltySubtitle>
                    Для цветочных магазинов, подарочных лавок<br />и всех, кто заказывает регулярно
                </StyledLoyaltySubtitle>
                <StyledLoyaltyButton onClick={scrollToForm}>Стать партнером</StyledLoyaltyButton>
            </StyledLoyaltyHero>

            <StyledLoyaltyBenefits>
                <StyledLoyaltyGrid>
                    <StyledLoyaltyCard>
                        <StyledLoyaltyIconWrap>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 7H4C2.9 7 2 7.9 2 9V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V9C22 7.9 21.1 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16 21V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </StyledLoyaltyIconWrap>
                        <StyledLoyaltyCardTitle>Образцы продукции в каждом заказе</StyledLoyaltyCardTitle>
                        <StyledLoyaltyCardText>
                            Вкладываем 1–5 позиций из нашей линейки — конверты, открытки, упаковка. Можно познакомиться с новинками до того, как они появятся в продаже.
                        </StyledLoyaltyCardText>
                    </StyledLoyaltyCard>
                    <StyledLoyaltyCard>
                        <StyledLoyaltyIconWrap>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69365 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69365 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39462C21.7563 5.72713 21.351 5.1208 20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </StyledLoyaltyIconWrap>
                        <StyledLoyaltyCardTitle>Персональный промокод до 20%</StyledLoyaltyCardTitle>
                        <StyledLoyaltyCardText>
                            Скидка зависит от частоты заказов и обратной связи. Чем активнее сотрудничество — тем выгоднее условия.
                        </StyledLoyaltyCardText>
                    </StyledLoyaltyCard>
                    <StyledLoyaltyCard>
                        <StyledLoyaltyIconWrap>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </StyledLoyaltyIconWrap>
                        <StyledLoyaltyCardTitle>Личное внимание от нашей команды</StyledLoyaltyCardTitle>
                        <StyledLoyaltyCardText>
                            Поздравляем с праздниками, оперативно решаем вопросы и помним о ваших предпочтениях. Персональный менеджер всегда на связи.
                        </StyledLoyaltyCardText>
                    </StyledLoyaltyCard>
                </StyledLoyaltyGrid>
            </StyledLoyaltyBenefits>

            <StyledLoyaltyFormSection ref={formRef}>
                <StyledLoyaltyFormContainer>
                    <StyledLoyaltyFormTitle>Стать партнером</StyledLoyaltyFormTitle>
                    <StyledLoyaltyForm onSubmit={handleSubmit}>
                        <StyledLoyaltyInputGrid>
                            <StyledLoyaltyInputWrapper>
                                <StyledLoyaltyInput type="text" name="name" placeholder="Ваше Имя" value={formData.name} onChange={handleChange} $hasError={!!errors.name} />
                                {errors.name && <StyledLoyaltyError>{errors.name}</StyledLoyaltyError>}
                            </StyledLoyaltyInputWrapper>
                            <StyledLoyaltyInputWrapper>
                                <StyledLoyaltyInput type="tel" name="phone" placeholder="Ваш Номер" value={formData.phone} onChange={handleChange} $hasError={!!errors.phone} />
                                {errors.phone && <StyledLoyaltyError>{errors.phone}</StyledLoyaltyError>}
                            </StyledLoyaltyInputWrapper>
                            <StyledLoyaltyInputWrapper>
                                <StyledLoyaltyInput type="text" name="company" placeholder="Название Фирмы" value={formData.company} onChange={handleChange} $hasError={!!errors.company} />
                                {errors.company && <StyledLoyaltyError>{errors.company}</StyledLoyaltyError>}
                            </StyledLoyaltyInputWrapper>
                            <StyledLoyaltyInputWrapper>
                                <StyledLoyaltyInput type="email" name="email" placeholder="Ваша Почта" value={formData.email} onChange={handleChange} $hasError={!!errors.email} />
                                {errors.email && <StyledLoyaltyError>{errors.email}</StyledLoyaltyError>}
                            </StyledLoyaltyInputWrapper>
                        </StyledLoyaltyInputGrid>
                        <StyledLoyaltyTextareaWrapper>
                            <StyledLoyaltyTextarea name="message" placeholder="Ваше Сообщение" value={formData.message} onChange={handleChange} rows={5} $hasError={!!errors.message} />
                            {errors.message && <StyledLoyaltyError>{errors.message}</StyledLoyaltyError>}
                        </StyledLoyaltyTextareaWrapper>
                        <StyledLoyaltyCheckboxWrapper>
                            <StyledLoyaltyCheckbox type="checkbox" name="consent" id="loyalty-consent" checked={formData.consent} onChange={handleChange} $hasError={!!errors.consent} />
                            <StyledLoyaltyCheckboxLabel htmlFor="loyalty-consent">
                                Я согласен на обработку персональных данных
                            </StyledLoyaltyCheckboxLabel>
                        </StyledLoyaltyCheckboxWrapper>
                        {errors.consent && <StyledLoyaltyError $static>{errors.consent}</StyledLoyaltyError>}
                        <StyledLoyaltyPolicyLink href="/policy.pdf" download>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <polyline points="7 10 12 15 17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Скачать политику конфиденциальности
                        </StyledLoyaltyPolicyLink>
                        {submitStatus !== 'idle' && (
                            <StyledLoyaltyStatusMessage $isSuccess={submitStatus === 'success'}>
                                {submitMessage}
                            </StyledLoyaltyStatusMessage>
                        )}
                        <StyledLoyaltySubmitButton type="submit" disabled={isLoading}>
                            {isLoading ? (
                                <><StyledLoyaltySpinner /><span>Отправка...</span></>
                            ) : (
                                <>
                                    <span>Отправить</span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </>
                            )}
                        </StyledLoyaltySubmitButton>
                    </StyledLoyaltyForm>
                </StyledLoyaltyFormContainer>
            </StyledLoyaltyFormSection>
        </StyledPage>
    )
}

const StyledPage = styled.div`
    min-height: 100vh;
    padding-top: ${rm(80)};
    background-color: #e6e8e6;
    padding-bottom: ${rm(80)};

    ${media.xsm`
        padding-top: ${rm(60)};
        padding-bottom: ${rm(60)};
    `}
`

const StyledContainer = styled.div`
    margin: 0 auto;
    padding: ${rm(80)} ${rm(125)};

    ${media.lg`
        padding: ${rm(60)} ${rm(80)};
    `}

    ${media.md`
        padding: ${rm(50)} ${rm(40)};
    `}

    ${media.xsm`
        padding: ${rm(40)} ${rm(20)};
    `}
`

const StyledTitle = styled.h1`
    ${fontGeist(700)};
    font-size: ${rm(48)};
    color: #111111;
    margin: 0 0 ${rm(28)} 0;
    text-align: center;

    ${media.md`
        font-size: ${rm(36)};
    `}

    ${media.xsm`
        font-size: ${rm(28)};
        margin-bottom: ${rm(20)};
    `}
`

const StyledIntro = styled.div`
    margin-bottom: ${rm(40)};
    padding: ${rm(24)} ${rm(28)};
    background: ${colors.white100};
    border-radius: ${rm(12)};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    ${media.xsm`
        padding: ${rm(18)} ${rm(16)};
        margin-bottom: ${rm(28)};
    `}
`

const StyledHighlightCards = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${rm(24)};
    margin-bottom: ${rm(40)};
    max-width: ${rm(720)};
    margin-left: auto;
    margin-right: auto;

    ${media.xsm`
        grid-template-columns: 1fr;
        gap: ${rm(16)};
        margin-bottom: ${rm(28)};
    `}
`

const StyledPromoCard = styled.div`
    text-align: center;
    background: ${colors.white100};
    border-radius: ${rm(14)};
    padding: ${rm(28)} ${rm(22)} ${rm(32)};
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    border: 1px solid rgba(0, 0, 0, 0.06);

    ${media.xsm`
        padding: ${rm(22)} ${rm(18)} ${rm(26)};
    `}
`

const StyledIconWrap = styled.div`
    width: ${rm(72)};
    height: ${rm(72)};
    margin: 0 auto ${rm(18)};
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eceeec;
    border-radius: ${rm(12)};
    color: #1c1c1c;

    ${media.xsm`
        width: ${rm(64)};
        height: ${rm(64)};
        margin-bottom: ${rm(14)};
    `}
`

const StyledCardTitle = styled.h3`
    margin: 0 0 ${rm(12)} 0;
    ${fontGeist(700)};
    font-size: ${rm(18)};
    color: #111111;
    line-height: 1.3;

    ${media.xsm`
        font-size: ${rm(16)};
        margin-bottom: ${rm(10)};
    `}
`

const StyledCardDesc = styled.p`
    margin: 0;
    ${fontGeist(400)};
    font-size: ${rm(15)};
    color: #4a4a4a;
    line-height: 1.55;

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(36)};

    ${media.xsm`
        gap: ${rm(28)};
    `}
`

const StyledBlockTitle = styled.h2`
    ${fontGeist(700)};
    font-size: ${rm(24)};
    color: #111111;
    margin: 0;
    padding-bottom: ${rm(10)};
    border-bottom: 2px solid rgba(0, 0, 0, 0.08);

    ${media.xsm`
        font-size: ${rm(20)};
    `}
`

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${rm(16)};
    background-color: ${colors.white100};
    padding: ${rm(32)};
    border-radius: ${rm(12)};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    ${media.xsm`
        padding: ${rm(22)} ${rm(18)};
    `}
`

const StyledSubTitle = styled.h3`
    ${fontGeist(600)};
    font-size: ${rm(18)};
    color: #1c1c1c;
    margin: ${rm(8)} 0 0 0;

    ${media.xsm`
        font-size: ${rm(16)};
    `}
`

const StyledText = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(17)};
    color: #1c1c1c;
    line-height: 1.65;
    margin: 0;

    ${media.md`
        font-size: ${rm(16)};
    `}

    ${media.xsm`
        font-size: ${rm(14)};
    `}

    strong {
        ${fontGeist(600)};
        color: #111;
    }

    a {
        color: #1c1c1c;
        text-decoration: underline;
        text-underline-offset: 3px;
    }
`

const StyledList = styled.ul`
    margin: 0;
    padding-left: ${rm(22)};
    ${fontGeist(400)};
    font-size: ${rm(17)};
    color: #1c1c1c;
    line-height: 1.65;

    ${media.md`
        font-size: ${rm(16)};
    `}

    ${media.xsm`
        font-size: ${rm(14)};
        padding-left: ${rm(18)};
    `}

    li {
        margin-bottom: ${rm(10)};
    }

    strong {
        ${fontGeist(600)};
    }
`

const StyledHighlight = styled.div`
    border-left: 4px solid #1c1c1c;
    padding-left: ${rm(20)};
    margin: 0;

    ${media.xsm`
        padding-left: ${rm(14)};
    `}
`

const StyledCta = styled.div`
    margin-top: ${rm(8)};

    a {
        display: inline-block;
        ${fontGeist(600)};
        font-size: ${rm(16)};
        color: ${colors.white100};
        background: #1c1c1c;
        padding: ${rm(12)} ${rm(24)};
        border-radius: ${rm(8)};
        text-decoration: none;
        transition: opacity 0.2s;

        &:hover {
            opacity: 0.88;
        }
    }
`

// ─── Loyalty section styled components ───────────────────────────────────────

const StyledLoyaltyHero = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: ${rm(100)} ${rm(40)} ${rm(80)};

    ${media.md`
        padding: ${rm(80)} ${rm(30)} ${rm(60)};
    `}

    ${media.xsm`
        padding: ${rm(60)} ${rm(20)} ${rm(50)};
    `}
`

const StyledLoyaltyLabel = styled.span`
    ${fontGeist(500)};
    font-size: ${rm(14)};
    color: #555555;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: ${rm(24)};

    ${media.xsm`
        font-size: ${rm(12)};
        margin-bottom: ${rm(16)};
    `}
`

const StyledLoyaltyTitle = styled.h2`
    ${fontGeist(700)};
    font-size: ${rm(56)};
    color: #111111;
    margin: 0 0 ${rm(24)} 0;
    line-height: 1.1;

    ${media.lg`
        font-size: ${rm(46)};
    `}

    ${media.md`
        font-size: ${rm(38)};
    `}

    ${media.xsm`
        font-size: ${rm(30)};
        margin-bottom: ${rm(16)};
    `}
`

const StyledLoyaltySubtitle = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(18)};
    color: #1C1C1C;
    line-height: 1.6;
    margin: 0 0 ${rm(40)} 0;
    opacity: 0.75;

    ${media.md`
        font-size: ${rm(16)};
    `}

    ${media.xsm`
        font-size: ${rm(14)};
        margin-bottom: ${rm(28)};
    `}
`

const StyledLoyaltyButton = styled.button`
    display: inline-flex;
    align-items: center;
    gap: ${rm(10)};
    padding: ${rm(18)} ${rm(48)};
    background-color: #1C1C1C;
    color: #FFFFFF;
    border: none;
    border-radius: ${rm(8)};
    font-size: ${rm(18)};
    ${fontGeist(600)};
    cursor: pointer;
    transition: all 0.3s ease;

    ${media.xsm`
        padding: ${rm(14)} ${rm(32)};
        font-size: ${rm(16)};
    `}

    &:hover {
        background-color: #2C2C2C;
        transform: translateY(-2px);
        box-shadow: 0 ${rm(8)} ${rm(24)} rgba(28, 28, 28, 0.2);
    }

    &:active {
        transform: translateY(0);
    }
`

const StyledLoyaltyBenefits = styled.section`
    padding: ${rm(0)} ${rm(125)} ${rm(80)};

    ${media.lg`
        padding: 0 ${rm(80)} ${rm(60)};
    `}

    ${media.md`
        padding: 0 ${rm(40)} ${rm(50)};
    `}

    ${media.xsm`
        padding: 0 ${rm(20)} ${rm(40)};
    `}
`

const StyledLoyaltyGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${rm(32)};
    max-width: ${rm(1400)};
    margin: 0 auto;

    ${media.md`
        grid-template-columns: 1fr;
        gap: ${rm(24)};
    `}
`

const StyledLoyaltyCard = styled.div`
    background-color: #FFFFFF;
    border-radius: ${rm(16)};
    padding: ${rm(40)} ${rm(36)};
    display: flex;
    flex-direction: column;
    gap: ${rm(16)};
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    ${media.xsm`
        padding: ${rm(28)} ${rm(24)};
    `}

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    }
`

const StyledLoyaltyIconWrap = styled.div`
    width: ${rm(52)};
    height: ${rm(52)};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F5F5F5;
    border-radius: ${rm(12)};
    color: #111111;
    flex-shrink: 0;

    svg {
        width: ${rm(28)};
        height: ${rm(28)};
    }
`

const StyledLoyaltyCardTitle = styled.h3`
    ${fontGeist(700)};
    font-size: ${rm(20)};
    color: #111111;
    margin: 0;
    line-height: 1.3;

    ${media.xsm`
        font-size: ${rm(17)};
    `}
`

const StyledLoyaltyCardText = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(15)};
    color: #1C1C1C;
    line-height: 1.65;
    margin: 0;
    opacity: 0.8;

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledLoyaltyFormSection = styled.section`
    padding: ${rm(0)} ${rm(125)} ${rm(80)};

    ${media.lg`
        padding: 0 ${rm(80)} ${rm(60)};
    `}

    ${media.md`
        padding: 0 ${rm(40)} ${rm(50)};
    `}

    ${media.xsm`
        padding: 0 ${rm(20)} ${rm(40)};
    `}
`

const StyledLoyaltyFormContainer = styled.div`
    max-width: ${rm(800)};
    margin: 0 auto;
    background-color: #FFFFFF;
    padding: ${rm(40)};
    border-radius: ${rm(12)};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    ${media.xsm`
        padding: ${rm(30)} ${rm(20)};
    `}
`

const StyledLoyaltyFormTitle = styled.h2`
    ${fontGeist(700)};
    font-size: ${rm(34)};
    color: #111111;
    margin: 0 0 ${rm(30)} 0;

    ${media.md`
        font-size: ${rm(28)};
        margin-bottom: ${rm(24)};
    `}

    ${media.xsm`
        font-size: ${rm(24)};
        margin-bottom: ${rm(20)};
    `}
`

const StyledLoyaltyForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${rm(24)};
`

const StyledLoyaltyInputGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${rm(20)};

    ${media.xsm`
        grid-template-columns: 1fr;
        gap: ${rm(16)};
    `}
`

const StyledLoyaltyInputWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`

const StyledLoyaltyTextareaWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`

const StyledLoyaltyInput = styled.input<{ $hasError?: boolean }>`
    width: 100%;
    padding: ${rm(16)} ${rm(20)};
    border: 1px solid ${props => props.$hasError ? '#dc3545' : '#1C1C1C'};
    border-radius: ${rm(8)};
    background-color: #FFFFFF;
    font-size: ${rm(16)};
    ${fontGeist(400)};
    color: #1C1C1C;
    outline: none;
    transition: all 0.3s ease;

    ${media.xsm`
        padding: ${rm(14)} ${rm(16)};
        font-size: ${rm(14)};
    `}

    &::placeholder { color: #1C1C1C; opacity: 0.6; }

    &:focus {
        border-color: ${props => props.$hasError ? '#dc3545' : '#1C1C1C'};
        box-shadow: 0 0 0 3px ${props => props.$hasError ? 'rgba(220, 53, 69, 0.1)' : 'rgba(28, 28, 28, 0.1)'};
    }

    &:hover { background-color: #F5F5F5; }
`

const StyledLoyaltyTextarea = styled.textarea<{ $hasError?: boolean }>`
    width: 100%;
    padding: ${rm(16)} ${rm(20)};
    border: 1px solid ${props => props.$hasError ? '#dc3545' : '#1C1C1C'};
    border-radius: ${rm(8)};
    background-color: #FFFFFF;
    font-size: ${rm(16)};
    ${fontGeist(400)};
    color: #1C1C1C;
    outline: none;
    resize: vertical;
    min-height: ${rm(120)};
    font-family: inherit;
    transition: all 0.3s ease;

    ${media.xsm`
        padding: ${rm(14)} ${rm(16)};
        font-size: ${rm(14)};
        min-height: ${rm(100)};
    `}

    &::placeholder { color: #1C1C1C; opacity: 0.6; }

    &:focus {
        border-color: ${props => props.$hasError ? '#dc3545' : '#1C1C1C'};
        box-shadow: 0 0 0 3px ${props => props.$hasError ? 'rgba(220, 53, 69, 0.1)' : 'rgba(28, 28, 28, 0.1)'};
    }

    &:hover { background-color: #F5F5F5; }
`

const StyledLoyaltyCheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: ${rm(12)};
`

const StyledLoyaltyCheckbox = styled.input<{ $hasError?: boolean }>`
    width: ${rm(20)};
    height: ${rm(20)};
    cursor: pointer;
    accent-color: #1C1C1C;
    flex-shrink: 0;
`

const StyledLoyaltyCheckboxLabel = styled.label`
    ${fontGeist(400)};
    font-size: ${rm(16)};
    color: #1C1C1C;
    cursor: pointer;

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledLoyaltyError = styled.span<{ $static?: boolean }>`
    position: ${props => props.$static ? 'static' : 'absolute'};
    bottom: ${props => props.$static ? 'auto' : '100%'};
    left: 0;
    margin-bottom: ${props => props.$static ? '0' : rm(4)};
    font-size: ${rm(12)};
    ${fontGeist(400)};
    color: #dc3545;
    white-space: nowrap;
    z-index: 10;
    pointer-events: none;

    ${media.xsm`
        font-size: ${rm(11)};
    `}
`

const StyledLoyaltyPolicyLink = styled.a`
    display: flex;
    align-items: center;
    gap: ${rm(8)};
    font-size: ${rm(14)};
    color: #1C1C1C;
    text-decoration: none;
    transition: color 0.3s ease;
    ${fontGeist(400)};
    margin-top: ${rm(8)};

    ${media.xsm`
        font-size: ${rm(12)};
    `}

    svg { width: ${rm(16)}; height: ${rm(16)}; flex-shrink: 0; }

    &:hover { color: #007bff; text-decoration: underline; }
`

const StyledLoyaltyStatusMessage = styled.div<{ $isSuccess: boolean }>`
    padding: ${rm(12)} ${rm(16)};
    border-radius: ${rm(8)};
    font-size: ${rm(14)};
    ${fontGeist(400)};
    text-align: center;
    background-color: ${props => props.$isSuccess ? '#d4edda' : '#f8d7da'};
    color: ${props => props.$isSuccess ? '#155724' : '#721c24'};
    border: 1px solid ${props => props.$isSuccess ? '#c3e6cb' : '#f5c6cb'};
`

const StyledLoyaltySubmitButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${rm(12)};
    padding: ${rm(16)} ${rm(32)};
    background-color: #1C1C1C;
    color: #FFFFFF;
    border: none;
    border-radius: ${rm(8)};
    font-size: ${rm(18)};
    ${fontGeist(500)};
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: ${rm(8)};
    align-self: center;
    min-width: ${rm(200)};

    ${media.xsm`
        padding: ${rm(14)} ${rm(24)};
        font-size: ${rm(16)};
        min-width: ${rm(180)};
    `}

    svg {
        width: ${rm(24)};
        height: ${rm(24)};
        transition: transform 0.3s ease;
    }

    &:hover:not(:disabled) {
        background-color: #2C2C2C;
        transform: translateY(-2px);
        box-shadow: 0 ${rm(4)} ${rm(12)} rgba(28, 28, 28, 0.2);
        svg { transform: translateX(4px); }
    }

    &:active:not(:disabled) {
        transform: translateY(0);
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
        transform: none;
    }
`

const StyledLoyaltySpinner = styled.div`
    width: ${rm(20)};
    height: ${rm(20)};
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: #FFFFFF;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;

    @keyframes spin {
        to { transform: rotate(360deg); }
    }
`
