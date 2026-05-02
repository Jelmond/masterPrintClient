'use client'

import { media, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled, { keyframes } from "styled-components"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { validateBelarusPhone } from "@/utils/validateBelarusPhone"

interface FormErrors {
    name?: string
    phone?: string
    email?: string
    company?: string
    consent?: string
}

const slideInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

export default function CustomOrderPage() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        company: '',
        email: '',
        circulation: '',
        productType: '',
        message: '',
        consent: false
    })
    const [errors, setErrors] = useState<FormErrors>({})
    const [isLoading, setIsLoading] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'error'>('idle')
    const [submitMessage, setSubmitMessage] = useState('')
    const [focusedField, setFocusedField] = useState<string | null>(null)

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

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (formData.email !== '' && !emailRegex.test(formData.email.trim())) {
            newErrors.email = 'Неверный формат email'
        }

        if (!formData.consent) {
            newErrors.consent = 'Необходимо согласие на обработку персональных данных'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

    const handleFocus = (fieldName: string) => setFocusedField(fieldName)
    const handleBlur = () => setFocusedField(null)

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
            <StyledBackgroundDecoration />
            <StyledContainer>
                <StyledHeader>
                    <StyledTitle>Делаем продукцию под заказ!</StyledTitle>
                    <StyledSubtitle>Заполните форму ниже, и мы свяжемся с вами в ближайшее время</StyledSubtitle>
                    <StyledSubtitleSmall>Юридические лица, ИП, и лица осуществляющие самостоятельную профессиональную деятельность могут оформить индивидуальный заказ через менеджера или через форму ниже</StyledSubtitleSmall>
                </StyledHeader>
                <StyledForm onSubmit={handleSubmit}>
                    <StyledInputGrid>
                        <StyledInputWrapper>
                            <StyledLabel $isFocused={focusedField === 'name' || !!formData.name} $hasError={!!errors.name}>
                                Ваше Имя*
                            </StyledLabel>
                            <StyledInput
                                type="text"
                                name="name"
                                placeholder=""
                                value={formData.name}
                                onChange={handleChange}
                                onFocus={() => handleFocus('name')}
                                onBlur={handleBlur}
                                $hasError={!!errors.name}
                                $isFocused={focusedField === 'name'}
                            />
                            {errors.name && <StyledError>{errors.name}</StyledError>}
                        </StyledInputWrapper>
                        <StyledInputWrapper>
                            <StyledLabel $isFocused={focusedField === 'phone' || !!formData.phone} $hasError={!!errors.phone}>
                                Ваш Номер*
                            </StyledLabel>
                            <StyledInput
                                type="tel"
                                name="phone"
                                placeholder=""
                                value={formData.phone}
                                onChange={handleChange}
                                onFocus={() => handleFocus('phone')}
                                onBlur={handleBlur}
                                $hasError={!!errors.phone}
                                $isFocused={focusedField === 'phone'}
                            />
                            {errors.phone && <StyledError>{errors.phone}</StyledError>}
                        </StyledInputWrapper>
                        <StyledInputWrapper>
                            <StyledLabel $isFocused={focusedField === 'company' || !!formData.company} $hasError={!!errors.company}>
                                Название Фирмы
                            </StyledLabel>
                            <StyledInput
                                type="text"
                                name="company"
                                placeholder=""
                                value={formData.company}
                                onChange={handleChange}
                                onFocus={() => handleFocus('company')}
                                onBlur={handleBlur}
                                $hasError={!!errors.company}
                                $isFocused={focusedField === 'company'}
                            />
                            {errors.company && <StyledError>{errors.company}</StyledError>}
                        </StyledInputWrapper>
                        <StyledInputWrapper>
                            <StyledLabel $isFocused={focusedField === 'email' || !!formData.email} $hasError={!!errors.email}>
                                Ваша Почта
                            </StyledLabel>
                            <StyledInput
                                type="email"
                                name="email"
                                placeholder=""
                                value={formData.email}
                                onChange={handleChange}
                                onFocus={() => handleFocus('email')}
                                onBlur={handleBlur}
                                $hasError={!!errors.email}
                                $isFocused={focusedField === 'email'}
                            />
                            {errors.email && <StyledError>{errors.email}</StyledError>}
                        </StyledInputWrapper>
                        <Field>
                            <FieldLabel>Тираж</FieldLabel>
                            <SelectWrap>
                                <Select name="circulation" value={formData.circulation} onChange={handleChange}>
                                    <option value="">Выберите тираж</option>
                                    <option value="до 100">до 100 шт.</option>
                                    <option value="100-500">100–500 шт.</option>
                                    <option value="500-1000">500–1000 шт.</option>
                                    <option value="1000+">1000+ шт.</option>
                                </Select>
                                <SelectArrow>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </SelectArrow>
                            </SelectWrap>
                        </Field>
                        <Field>
                            <FieldLabel>Вид продукции</FieldLabel>
                            <SelectWrap>
                                <Select name="productType" value={formData.productType} onChange={handleChange}>
                                    <option value="">Выберите тип продукции</option>
                                    <option value="открытки">Открытки</option>
                                    <option value="стикеры">Стикеры</option>
                                    <option value="коробки">Коробки</option>
                                    <option value="конверты">Конверты</option>
                                    <option value="переноски">Переноски для цветов</option>
                                    <option value="другое">Другое</option>
                                </Select>
                                <SelectArrow>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </SelectArrow>
                            </SelectWrap>
                        </Field>
                    </StyledInputGrid>
                    <StyledTextareaWrapper>
                        <StyledLabel $isFocused={focusedField === 'message' || !!formData.message} $hasError={false}>
                            Ваше Сообщение
                        </StyledLabel>
                        <StyledTextarea
                            name="message"
                            placeholder=""
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={() => handleFocus('message')}
                            onBlur={handleBlur}
                            rows={5}
                            $isFocused={focusedField === 'message'}
                        />
                    </StyledTextareaWrapper>
                    <StyledCheckboxWrapper>
                        <StyledCheckbox
                            type="checkbox"
                            name="consent"
                            id="custom-order-consent"
                            checked={formData.consent}
                            onChange={handleChange}
                            $hasError={!!errors.consent}
                        />
                        <StyledCheckboxLabel htmlFor="custom-order-consent">
                            Я согласен на обработку персональных данных
                        </StyledCheckboxLabel>
                    </StyledCheckboxWrapper>
                    {errors.consent && <StyledConsentError>{errors.consent}</StyledConsentError>}
                    {submitMessage && (
                        <StyledErrorMessage>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {submitMessage}
                        </StyledErrorMessage>
                    )}
                    <StyledPolicyLink href="/policy.pdf" download>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <polyline points="7 10 12 15 17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Скачать политику конфиденциальности
                    </StyledPolicyLink>
                    <StyledSubmitButton type="submit" disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <StyledSpinner />
                                <span>Отправка...</span>
                            </>
                        ) : (
                            <>
                                <span>Отправить</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </>
                        )}
                    </StyledSubmitButton>
                </StyledForm>
            </StyledContainer>
        </StyledPage>
    )
}

const StyledPage = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${rm(120)} ${rm(125)};
    background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 50%, #f0f4f8 100%);
    overflow: hidden;

    ${media.lg`
        padding: ${rm(100)} ${rm(80)};
    `}

    ${media.md`
        padding: ${rm(80)} ${rm(40)};
    `}

    ${media.xsm`
        padding: ${rm(60)} ${rm(20)};
    `}
`

const StyledBackgroundDecoration = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
        radial-gradient(circle at 20% 30%, rgba(28, 28, 28, 0.03) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(28, 28, 28, 0.03) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
`

const StyledContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: ${rm(900)};
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    animation: ${slideInUp} 0.6s ease-out;
`

const StyledHeader = styled.div`
    text-align: center;
    margin-bottom: ${rm(60)};

    ${media.md`
        margin-bottom: ${rm(50)};
    `}

    ${media.xsm`
        margin-bottom: ${rm(40)};
    `}
`

const StyledTitle = styled.h1`
    ${fontGeist(700)};
    font-size: ${rm(56)};
    color: #1C1C1C;
    margin: 0 0 ${rm(16)} 0;
    background: linear-gradient(135deg, #1C1C1C 0%, #2C2C2C 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.02em;
    line-height: 1.2;

    ${media.lg`
        font-size: ${rm(48)};
    `}

    ${media.md`
        font-size: ${rm(40)};
    `}

    ${media.xsm`
        font-size: ${rm(32)};
    `}
`

const StyledSubtitle = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(18)};
    color: #6B7280;
    margin: 0 auto ${rm(12)};
    line-height: 1.6;
    max-width: ${rm(600)};

    ${media.md`
        font-size: ${rm(16)};
    `}

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledSubtitleSmall = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(14)};
    color: #9CA3AF;
    margin: 0 auto;
    line-height: 1.6;
    max-width: ${rm(600)};
`

const StyledForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${rm(28)};
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(20px);
    padding: ${rm(50)};
    border-radius: ${rm(24)};
    box-shadow:
        0 20px 60px rgba(0, 0, 0, 0.08),
        0 0 0 1px rgba(255, 255, 255, 0.5) inset;

    ${media.md`
        padding: ${rm(40)};
        gap: ${rm(24)};
        border-radius: ${rm(20)};
    `}

    ${media.xsm`
        padding: ${rm(30)} ${rm(24)};
        gap: ${rm(20)};
        border-radius: ${rm(16)};
    `}
`

const StyledInputGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${rm(24)};

    ${media.xsm`
        grid-template-columns: 1fr;
        gap: ${rm(20)};
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

const StyledLabel = styled.label<{ $isFocused?: boolean; $hasError?: boolean }>`
    position: absolute;
    left: ${rm(20)};
    top: ${props => props.$isFocused ? rm(8) : rm(18)};
    font-size: ${props => props.$isFocused ? rm(12) : rm(16)};
    ${fontGeist(400)};
    color: ${props => {
        if (props.$hasError) return '#EF4444';
        if (props.$isFocused) return '#1C1C1C';
        return '#9CA3AF';
    }};
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 2;
    background: ${props => props.$isFocused ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
    padding: ${props => props.$isFocused ? `0 ${rm(8)}` : '0'};

    ${media.xsm`
        left: ${rm(16)};
        top: ${(props: { $isFocused?: boolean }) => props.$isFocused ? rm(6) : rm(16)};
        font-size: ${(props: { $isFocused?: boolean }) => props.$isFocused ? rm(11) : rm(14)};
    `}
`

const StyledInput = styled.input<{ $hasError?: boolean; $isFocused?: boolean }>`
    width: 100%;
    padding: ${rm(20)} ${rm(20)} ${rm(12)} ${rm(20)};
    border: 2px solid ${props => {
        if (props.$hasError) return '#EF4444';
        if (props.$isFocused) return '#1C1C1C';
        return '#E5E7EB';
    }};
    border-radius: ${rm(12)};
    background-color: #FFFFFF;
    font-size: ${rm(16)};
    ${fontGeist(400)};
    color: #1C1C1C;
    outline: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: ${props => props.$isFocused
        ? '0 4px 12px rgba(28, 28, 28, 0.08)'
        : '0 1px 3px rgba(0, 0, 0, 0.05)'};

    ${media.xsm`
        padding: ${rm(18)} ${rm(16)} ${rm(10)} ${rm(16)};
        font-size: ${rm(14)};
        border-radius: ${rm(10)};
    `}

    &:focus {
        border-color: ${props => props.$hasError ? '#EF4444' : '#1C1C1C'};
        box-shadow: 0 4px 16px rgba(28, 28, 28, 0.12);
        transform: translateY(-1px);
    }

    &:hover:not(:focus) {
        border-color: ${props => props.$hasError ? '#EF4444' : '#D1D5DB'};
    }

    &::placeholder {
        opacity: 0;
    }
`

const StyledTextarea = styled.textarea<{ $isFocused?: boolean }>`
    width: 100%;
    padding: ${rm(20)} ${rm(20)} ${rm(12)} ${rm(20)};
    border: 2px solid ${props => props.$isFocused ? '#1C1C1C' : '#E5E7EB'};
    border-radius: ${rm(12)};
    background-color: #FFFFFF;
    font-size: ${rm(16)};
    ${fontGeist(400)};
    color: #1C1C1C;
    outline: none;
    resize: vertical;
    min-height: ${rm(140)};
    font-family: inherit;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: ${props => props.$isFocused
        ? '0 4px 12px rgba(28, 28, 28, 0.08)'
        : '0 1px 3px rgba(0, 0, 0, 0.05)'};

    ${media.xsm`
        padding: ${rm(18)} ${rm(16)} ${rm(10)} ${rm(16)};
        font-size: ${rm(14)};
        min-height: ${rm(120)};
        border-radius: ${rm(10)};
    `}

    &:focus {
        border-color: #1C1C1C;
        box-shadow: 0 4px 16px rgba(28, 28, 28, 0.12);
        transform: translateY(-1px);
    }

    &::placeholder {
        opacity: 0;
    }
`

const StyledError = styled.span`
    position: absolute;
    bottom: 100%;
    left: 0;
    margin-bottom: ${rm(6)};
    font-size: ${rm(12)};
    ${fontGeist(400)};
    color: #EF4444;
    white-space: nowrap;
    z-index: 10;
    pointer-events: none;
    background: rgba(255, 255, 255, 0.95);
    padding: ${rm(4)} ${rm(8)};
    border-radius: ${rm(6)};

    ${media.xsm`
        font-size: ${rm(11)};
    `}
`

const StyledConsentError = styled.span`
    font-size: ${rm(12)};
    ${fontGeist(400)};
    color: #EF4444;
`

const StyledErrorMessage = styled.div`
    display: flex;
    align-items: center;
    gap: ${rm(12)};
    padding: ${rm(16)} ${rm(20)};
    border-radius: ${rm(12)};
    font-size: ${rm(14)};
    ${fontGeist(400)};
    background: linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%);
    color: #991B1B;
    border: 1px solid #FECACA;

    svg {
        width: ${rm(20)};
        height: ${rm(20)};
        flex-shrink: 0;
    }
`

const StyledSubmitButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${rm(12)};
    padding: ${rm(18)} ${rm(40)};
    background: linear-gradient(135deg, #1C1C1C 0%, #2C2C2C 100%);
    color: #FFFFFF;
    border: none;
    border-radius: ${rm(12)};
    font-size: ${rm(18)};
    ${fontGeist(600)};
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    margin-top: ${rm(12)};
    align-self: center;
    min-width: ${rm(220)};
    box-shadow: 0 4px 16px rgba(28, 28, 28, 0.2);

    ${media.xsm`
        padding: ${rm(16)} ${rm(32)};
        font-size: ${rm(16)};
        min-width: ${rm(200)};
        border-radius: ${rm(10)};
    `}

    &:hover:not(:disabled) {
        background: linear-gradient(135deg, #2C2C2C 0%, #1C1C1C 100%);
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(28, 28, 28, 0.3);
    }

    &:active:not(:disabled) {
        transform: translateY(0);
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    svg {
        width: ${rm(20)};
        height: ${rm(20)};
        flex-shrink: 0;
        transition: transform 0.3s ease;
    }

    &:hover:not(:disabled) svg {
        transform: translateX(4px);
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

const StyledPolicyLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${rm(8)};
    font-size: ${rm(14)};
    color: #6B7280;
    text-decoration: none;
    transition: color 0.2s ease;
    ${fontGeist(400)};

    svg {
        width: ${rm(16)};
        height: ${rm(16)};
        flex-shrink: 0;
    }

    &:hover {
        color: #1C1C1C;
        text-decoration: underline;
    }
`

const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(6)};
`

const FieldLabel = styled.label`
    ${fontGeist(500)};
    font-size: ${rm(13)};
    color: #444;
`

const SelectWrap = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`

const SelectArrow = styled.div`
    position: absolute;
    right: ${rm(14)};
    pointer-events: none;
    color: #6B7280;
    display: flex;
    align-items: center;
`

const Select = styled.select`
    width: 100%;
    padding: ${rm(20)} ${rm(44)} ${rm(12)} ${rm(20)};
    border: 2px solid #E5E7EB;
    border-radius: ${rm(12)};
    background-color: #FFFFFF;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    ${fontGeist(400)};
    font-size: ${rm(16)};
    color: #1C1C1C;
    outline: none;
    cursor: pointer;
    transition: border-color 0.2s ease;

    ${media.xsm`
        padding: ${rm(18)} ${rm(40)} ${rm(10)} ${rm(16)};
        font-size: ${rm(14)};
        border-radius: ${rm(10)};
    `}

    &:focus {
        border-color: #1C1C1C;
    }

    &:hover:not(:focus) {
        border-color: #D1D5DB;
    }
`
