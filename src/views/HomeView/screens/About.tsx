import { colors, media } from "@/styles"
import { rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled, { keyframes } from "styled-components"
import { useState } from "react"

interface FormErrors {
    name?: string
    phone?: string
    email?: string
    company?: string
    message?: string
}

const floatAnimation = keyframes`
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
`

const shimmerAnimation = keyframes`
    0% {
        background-position: -1000px 0;
    }
    100% {
        background-position: 1000px 0;
    }
`

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

export const About = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        company: '',
        email: '',
        message: ''
    })
    const [errors, setErrors] = useState<FormErrors>({})
    const [isLoading, setIsLoading] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [submitMessage, setSubmitMessage] = useState('')
    const [focusedField, setFocusedField] = useState<string | null>(null)

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Имя обязательно для заполнения'
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Имя должно содержать минимум 2 символа'
        }

        // Phone validation
        if (!formData.phone.trim()) {
            newErrors.phone = 'Номер телефона обязателен для заполнения'
        } else {
            const phoneRegex = /^[\d\s\-\+\(\)]+$/
            if (!phoneRegex.test(formData.phone.trim())) {
                newErrors.phone = 'Неверный формат номера телефона'
            }
        }

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Email обязателен для заполнения'
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(formData.email.trim())) {
                newErrors.email = 'Неверный формат email'
            }
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
        // Clear error for this field when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors({
                ...errors,
                [name]: undefined
            })
        }
        // Clear submit status when user makes changes
        if (submitStatus !== 'idle') {
            setSubmitStatus('idle')
            setSubmitMessage('')
        }
    }

    const handleFocus = (fieldName: string) => {
        setFocusedField(fieldName)
    }

    const handleBlur = () => {
        setFocusedField(null)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        if (!validateForm()) {
            return
        }

        setIsLoading(true)
        setSubmitStatus('idle')
        setSubmitMessage('')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Ошибка при отправке заявки')
            }

            setSubmitStatus('success')
            setSubmitMessage('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.')
            
            // Reset form
            setFormData({
                name: '',
                phone: '',
                company: '',
                email: '',
                message: ''
            })
            setErrors({})

            // Clear success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus('idle')
                setSubmitMessage('')
            }, 5000)

        } catch (error) {
            setSubmitStatus('error')
            setSubmitMessage(error instanceof Error ? error.message : 'Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <StyledAbout>
            <StyledBackgroundDecoration />
            <StyledFormContainer>
                <StyledHeader>
                    <StyledTitle>Оставить Заявку</StyledTitle>
                    <StyledSubtitle>Заполните форму ниже, и мы свяжемся с вами в ближайшее время</StyledSubtitle>
                </StyledHeader>
                <StyledForm onSubmit={handleSubmit}>
                    <StyledInputGrid>
                        <StyledInputWrapper>
                            <StyledLabel $isFocused={focusedField === 'name' || !!formData.name} $hasError={!!errors.name}>
                                Ваше Имя
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
                                Ваш Номер
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
                    </StyledInputGrid>
                    <StyledTextareaWrapper>
                        <StyledLabel $isFocused={focusedField === 'message' || !!formData.message} $hasError={!!errors.message}>
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
                            $hasError={!!errors.message}
                            $isFocused={focusedField === 'message'}
                        />
                        {errors.message && <StyledError>{errors.message}</StyledError>}
                    </StyledTextareaWrapper>
                    {submitMessage && (
                        <StyledStatusMessage $isSuccess={submitStatus === 'success'}>
                            <StyledStatusIcon $isSuccess={submitStatus === 'success'}>
                                {submitStatus === 'success' ? (
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                ) : (
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                )}
                            </StyledStatusIcon>
                            {submitMessage}
                        </StyledStatusMessage>
                    )}
                    <StyledSubmitButton type="submit" disabled={isLoading} $isLoading={isLoading}>
                        {isLoading ? (
                            <>
                                <StyledSpinner />
                                <span>Отправка...</span>
                            </>
                        ) : (
                            <>
                                <span>Отправить</span>
                                <StyledButtonIcon>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </StyledButtonIcon>
                            </>
                        )}
                    </StyledSubmitButton>
                </StyledForm>
            </StyledFormContainer>
        </StyledAbout>
    )
}

const StyledAbout = styled.div`
    position: relative;
    width: 100%;
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

const StyledFormContainer = styled.div`
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
    animation: ${slideInUp} 0.6s ease-out 0.1s both;

    ${media.md`
        margin-bottom: ${rm(50)};
    `}

    ${media.xsm`
        margin-bottom: ${rm(40)};
    `}
`

const StyledTitle = styled.h2`
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
        margin-bottom: ${rm(12)};
    `}

    ${media.xsm`
        font-size: ${rm(32)};
        margin-bottom: ${rm(10)};
    `}
`

const StyledSubtitle = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(18)};
    color: #6B7280;
    margin: 0;
    line-height: 1.6;
    max-width: ${rm(600)};
    margin: 0 auto;

    ${media.md`
        font-size: ${rm(16)};
    `}

    ${media.xsm`
        font-size: ${rm(14)};
    `}
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
    animation: ${slideInUp} 0.6s ease-out 0.2s both;

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
    transform-origin: left top;

    ${media.xsm`
        left: ${rm(16)};
        top: ${(props: { $isFocused?: boolean; $hasError?: boolean }) => props.$isFocused ? rm(6) : rm(16)};
        font-size: ${(props: { $isFocused?: boolean; $hasError?: boolean }) => props.$isFocused ? rm(11) : rm(14)};
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
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    }

    &::placeholder {
        opacity: 0;
    }
`

const StyledTextarea = styled.textarea<{ $hasError?: boolean; $isFocused?: boolean }>`
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
        border-color: ${props => props.$hasError ? '#EF4444' : '#1C1C1C'};
        box-shadow: 0 4px 16px rgba(28, 28, 28, 0.12);
        transform: translateY(-1px);
    }

    &:hover:not(:focus) {
        border-color: ${props => props.$hasError ? '#EF4444' : '#D1D5DB'};
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
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
    box-shadow: 0 2px 8px rgba(239, 68, 68, 0.15);

    ${media.xsm`
        font-size: ${rm(11)};
        margin-bottom: ${rm(4)};
        padding: ${rm(3)} ${rm(6)};
    `}
`

const StyledStatusMessage = styled.div<{ $isSuccess: boolean }>`
    display: flex;
    align-items: center;
    gap: ${rm(12)};
    padding: ${rm(16)} ${rm(20)};
    border-radius: ${rm(12)};
    font-size: ${rm(14)};
    ${fontGeist(400)};
    background: ${props => props.$isSuccess 
        ? 'linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)' 
        : 'linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%)'};
    color: ${props => props.$isSuccess ? '#065F46' : '#991B1B'};
    border: 1px solid ${props => props.$isSuccess ? '#A7F3D0' : '#FECACA'};
    box-shadow: 0 4px 12px ${props => props.$isSuccess 
        ? 'rgba(16, 185, 129, 0.15)' 
        : 'rgba(239, 68, 68, 0.15)'};
    animation: ${slideInUp} 0.4s ease-out;

    ${media.xsm`
        font-size: ${rm(12)};
        padding: ${rm(12)} ${rm(16)};
        gap: ${rm(10)};
    `}
`

const StyledStatusIcon = styled.div<{ $isSuccess: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${rm(24)};
    height: ${rm(24)};
    flex-shrink: 0;
    background: ${props => props.$isSuccess ? '#10B981' : '#EF4444'};
    border-radius: 50%;
    color: white;

    ${media.xsm`
        width: ${rm(20)};
        height: ${rm(20)};
    `}

    svg {
        width: ${rm(14)};
        height: ${rm(14)};
    }
`

const StyledSubmitButton = styled.button<{ $isLoading?: boolean }>`
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
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(28, 28, 28, 0.2);

    ${media.xsm`
        padding: ${rm(16)} ${rm(32)};
        font-size: ${rm(16)};
        min-width: ${rm(200)};
        gap: ${rm(10)};
        border-radius: ${rm(10)};
    `}

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
        );
        transition: left 0.5s;
    }

    &:hover:not(:disabled)::before {
        left: 100%;
    }

    &:hover:not(:disabled) {
        background: linear-gradient(135deg, #2C2C2C 0%, #1C1C1C 100%);
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(28, 28, 28, 0.3);
    }

    &:active:not(:disabled) {
        transform: translateY(0);
        box-shadow: 0 4px 12px rgba(28, 28, 28, 0.2);
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
        transform: none;
    }
`

const StyledButtonIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    svg {
        width: ${rm(20)};
        height: ${rm(20)};
    }

    ${StyledSubmitButton}:hover:not(:disabled) & {
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
        to {
            transform: rotate(360deg);
        }
    }
`