'use client'

import { media, rm } from "@/styles"
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

export default function LoyaltyPage() {
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
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        })
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
            <StyledHero>
                <StyledLabel>MPPShop · программа лояльности</StyledLabel>
                <StyledHeroTitle>Особые условия<br />для постоянных клиентов</StyledHeroTitle>
                <StyledHeroSubtitle>
                    Для цветочных магазинов, подарочных лавок<br />и всех, кто заказывает регулярно
                </StyledHeroSubtitle>
                <StyledPartnerButton onClick={scrollToForm}>Стать партнером</StyledPartnerButton>
            </StyledHero>

            <StyledBenefitsSection>
                <StyledBenefitsGrid>
                    <StyledBenefitCard>
                        <StyledBenefitIconWrap>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 7H4C2.9 7 2 7.9 2 9V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V9C22 7.9 21.1 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16 21V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </StyledBenefitIconWrap>
                        <StyledBenefitTitle>Образцы продукции в каждом заказе</StyledBenefitTitle>
                        <StyledBenefitText>
                            Вкладываем 1–5 позиций из нашей линейки — конверты, открытки, упаковка. Можно познакомиться с новинками до того, как они появятся в продаже.
                        </StyledBenefitText>
                    </StyledBenefitCard>

                    <StyledBenefitCard>
                        <StyledBenefitIconWrap>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69365 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69365 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39462C21.7563 5.72713 21.351 5.1208 20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </StyledBenefitIconWrap>
                        <StyledBenefitTitle>Персональный промокод до 20%</StyledBenefitTitle>
                        <StyledBenefitText>
                            Скидка зависит от частоты заказов и обратной связи. Чем активнее сотрудничество — тем выгоднее условия.
                        </StyledBenefitText>
                    </StyledBenefitCard>

                    <StyledBenefitCard>
                        <StyledBenefitIconWrap>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </StyledBenefitIconWrap>
                        <StyledBenefitTitle>Личное внимание от нашей команды</StyledBenefitTitle>
                        <StyledBenefitText>
                            Поздравляем с праздниками, оперативно решаем вопросы и помним о ваших предпочтениях. Персональный менеджер всегда на связи.
                        </StyledBenefitText>
                    </StyledBenefitCard>
                </StyledBenefitsGrid>
            </StyledBenefitsSection>

            <StyledFormSection ref={formRef}>
                <StyledContainer>
                    <StyledFormContainer>
                        <StyledFormTitle>Стать партнером</StyledFormTitle>
                        <StyledForm onSubmit={handleSubmit}>
                            <StyledInputGrid>
                                <StyledInputWrapper>
                                    <StyledInput
                                        type="text"
                                        name="name"
                                        placeholder="Ваше Имя"
                                        value={formData.name}
                                        onChange={handleChange}
                                        $hasError={!!errors.name}
                                    />
                                    {errors.name && <StyledError>{errors.name}</StyledError>}
                                </StyledInputWrapper>
                                <StyledInputWrapper>
                                    <StyledInput
                                        type="tel"
                                        name="phone"
                                        placeholder="Ваш Номер"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        $hasError={!!errors.phone}
                                    />
                                    {errors.phone && <StyledError>{errors.phone}</StyledError>}
                                </StyledInputWrapper>
                                <StyledInputWrapper>
                                    <StyledInput
                                        type="text"
                                        name="company"
                                        placeholder="Название Фирмы"
                                        value={formData.company}
                                        onChange={handleChange}
                                        $hasError={!!errors.company}
                                    />
                                    {errors.company && <StyledError>{errors.company}</StyledError>}
                                </StyledInputWrapper>
                                <StyledInputWrapper>
                                    <StyledInput
                                        type="email"
                                        name="email"
                                        placeholder="Ваша Почта"
                                        value={formData.email}
                                        onChange={handleChange}
                                        $hasError={!!errors.email}
                                    />
                                    {errors.email && <StyledError>{errors.email}</StyledError>}
                                </StyledInputWrapper>
                            </StyledInputGrid>
                            <StyledTextareaWrapper>
                                <StyledTextarea
                                    name="message"
                                    placeholder="Ваше Сообщение"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    $hasError={!!errors.message}
                                />
                                {errors.message && <StyledError>{errors.message}</StyledError>}
                            </StyledTextareaWrapper>
                            <StyledCheckboxWrapper>
                                <StyledCheckbox
                                    type="checkbox"
                                    name="consent"
                                    id="consent"
                                    checked={formData.consent}
                                    onChange={handleChange}
                                    $hasError={!!errors.consent}
                                />
                                <StyledCheckboxLabel htmlFor="consent">
                                    Я согласен на обработку персональных данных
                                </StyledCheckboxLabel>
                            </StyledCheckboxWrapper>
                            {errors.consent && <StyledError $static>{errors.consent}</StyledError>}
                            <StyledPolicyLink href="/policy.pdf" download>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <polyline points="7 10 12 15 17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Скачать политику конфиденциальности
                            </StyledPolicyLink>
                            {submitStatus !== 'idle' && (
                                <StyledStatusMessage $isSuccess={submitStatus === 'success'}>
                                    {submitMessage}
                                </StyledStatusMessage>
                            )}
                            <StyledSubmitButton type="submit" disabled={isLoading}>
                                {isLoading ? (
                                    <>
                                        <StyledSpinner />
                                        <span>Отправка...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Отправить</span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </>
                                )}
                            </StyledSubmitButton>
                        </StyledForm>
                    </StyledFormContainer>
                </StyledContainer>
            </StyledFormSection>
        </StyledPage>
    )
}

const StyledPage = styled.div`
    min-height: 100vh;
    background-color: #E6E8E6;
`

const StyledHero = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: ${rm(160)} ${rm(40)} ${rm(100)};

    ${media.md`
        padding: ${rm(120)} ${rm(30)} ${rm(80)};
    `}

    ${media.xsm`
        padding: ${rm(100)} ${rm(20)} ${rm(60)};
    `}
`

const StyledLabel = styled.span`
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

const StyledHeroTitle = styled.h1`
    ${fontGeist(700)};
    font-size: ${rm(64)};
    color: #111111;
    margin: 0 0 ${rm(28)} 0;
    line-height: 1.1;

    ${media.lg`
        font-size: ${rm(52)};
    `}

    ${media.md`
        font-size: ${rm(44)};
    `}

    ${media.xsm`
        font-size: ${rm(34)};
        margin-bottom: ${rm(20)};
    `}
`

const StyledHeroSubtitle = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(20)};
    color: #1C1C1C;
    line-height: 1.6;
    margin: 0 0 ${rm(48)} 0;
    opacity: 0.75;

    ${media.md`
        font-size: ${rm(18)};
    `}

    ${media.xsm`
        font-size: ${rm(15)};
        margin-bottom: ${rm(36)};
    `}
`

const StyledPartnerButton = styled.button`
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

const StyledBenefitsSection = styled.section`
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

const StyledBenefitsGrid = styled.div`
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

const StyledBenefitCard = styled.div`
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

const StyledBenefitIconWrap = styled.div`
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

const StyledBenefitTitle = styled.h3`
    ${fontGeist(700)};
    font-size: ${rm(22)};
    color: #111111;
    margin: 0;
    line-height: 1.3;

    ${media.xsm`
        font-size: ${rm(18)};
    `}
`

const StyledBenefitText = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(16)};
    color: #1C1C1C;
    line-height: 1.65;
    margin: 0;
    opacity: 0.8;

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledFormSection = styled.section`
    padding: ${rm(80)} ${rm(125)};
    background-color: #E6E8E6;

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

const StyledContainer = styled.div`
    max-width: ${rm(800)};
    margin: 0 auto;
`

const StyledFormContainer = styled.div`
    width: 100%;
    background-color: #FFFFFF;
    padding: ${rm(40)};
    border-radius: ${rm(12)};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    ${media.xsm`
        padding: ${rm(30)} ${rm(20)};
    `}
`

const StyledFormTitle = styled.h2`
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

const StyledForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${rm(24)};
`

const StyledInputGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${rm(20)};

    ${media.xsm`
        grid-template-columns: 1fr;
        gap: ${rm(16)};
    `}
`

const StyledInputWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`

const StyledTextareaWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`

const StyledInput = styled.input<{ $hasError?: boolean }>`
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

    &::placeholder {
        color: #1C1C1C;
        opacity: 0.6;
    }

    &:focus {
        border-color: ${props => props.$hasError ? '#dc3545' : '#1C1C1C'};
        box-shadow: 0 0 0 3px ${props => props.$hasError ? 'rgba(220, 53, 69, 0.1)' : 'rgba(28, 28, 28, 0.1)'};
    }

    &:hover {
        background-color: #F5F5F5;
    }
`

const StyledTextarea = styled.textarea<{ $hasError?: boolean }>`
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

    &::placeholder {
        color: #1C1C1C;
        opacity: 0.6;
    }

    &:focus {
        border-color: ${props => props.$hasError ? '#dc3545' : '#1C1C1C'};
        box-shadow: 0 0 0 3px ${props => props.$hasError ? 'rgba(220, 53, 69, 0.1)' : 'rgba(28, 28, 28, 0.1)'};
    }

    &:hover {
        background-color: #F5F5F5;
    }
`

const StyledCheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: ${rm(12)};
`

const StyledCheckbox = styled.input<{ $hasError?: boolean }>`
    width: ${rm(20)};
    height: ${rm(20)};
    cursor: pointer;
    accent-color: #1C1C1C;
    flex-shrink: 0;
`

const StyledCheckboxLabel = styled.label`
    ${fontGeist(400)};
    font-size: ${rm(16)};
    color: #1C1C1C;
    cursor: pointer;

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledError = styled.span<{ $static?: boolean }>`
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

const StyledPolicyLink = styled.a`
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
        gap: ${rm(6)};
    `}

    svg {
        width: ${rm(16)};
        height: ${rm(16)};
        flex-shrink: 0;
    }

    &:hover {
        color: #007bff;
        text-decoration: underline;
    }
`

const StyledStatusMessage = styled.div<{ $isSuccess: boolean }>`
    padding: ${rm(12)} ${rm(16)};
    border-radius: ${rm(8)};
    font-size: ${rm(14)};
    ${fontGeist(400)};
    text-align: center;
    background-color: ${props => props.$isSuccess ? '#d4edda' : '#f8d7da'};
    color: ${props => props.$isSuccess ? '#155724' : '#721c24'};
    border: 1px solid ${props => props.$isSuccess ? '#c3e6cb' : '#f5c6cb'};

    ${media.xsm`
        font-size: ${rm(12)};
        padding: ${rm(10)} ${rm(12)};
    `}
`

const StyledSubmitButton = styled.button`
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
        gap: ${rm(10)};
    `}

    svg {
        width: ${rm(24)};
        height: ${rm(24)};
        transition: transform 0.3s ease;

        ${media.xsm`
            width: ${rm(20)};
            height: ${rm(20)};
        `}
    }

    &:hover:not(:disabled) {
        background-color: #2C2C2C;
        transform: translateY(-2px);
        box-shadow: 0 ${rm(4)} ${rm(12)} rgba(28, 28, 28, 0.2);

        svg {
            transform: translateX(4px);
        }
    }

    &:active:not(:disabled) {
        transform: translateY(0);
        box-shadow: 0 ${rm(2)} ${rm(6)} rgba(28, 28, 28, 0.2);
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
        transform: none;
    }
`

const StyledSpinner = styled.div`
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
