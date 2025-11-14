import { colors, media } from "@/styles"
import { rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"
import { useState } from "react"

interface FormErrors {
    name?: string
    phone?: string
    email?: string
    company?: string
    message?: string
}

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
            <StyledFormContainer>
                <StyledTitle>Оставить Заявку</StyledTitle>
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
                    {submitMessage && (
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
        </StyledAbout>
    )
}

const StyledAbout = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${rm(100)} ${rm(125)};
    background-color: #E5E5E5;

    ${media.lg`
        padding: ${rm(80)} ${rm(80)};
    `}

    ${media.md`
        padding: ${rm(60)} ${rm(40)};
    `}

    ${media.xsm`
        padding: ${rm(50)} ${rm(20)};
    `}
`

const StyledFormContainer = styled.div`
    width: 100%;
    max-width: ${rm(800)};
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledTitle = styled.h2`
    ${fontGeist(700)};
    font-size: ${rm(48)};
    color: #1C1C1C;
    margin: 0 0 ${rm(50)} 0;
    text-align: center;

    ${media.lg`
        font-size: ${rm(40)};
        margin-bottom: ${rm(40)};
    `}

    ${media.md`
        font-size: ${rm(36)};
        margin-bottom: ${rm(35)};
    `}

    ${media.xsm`
        font-size: ${rm(28)};
        margin-bottom: ${rm(30)};
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
    background-color: #E5E5E5;
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
        background-color: #FFFFFF;
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
    background-color: #E5E5E5;
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
        background-color: #FFFFFF;
        border-color: ${props => props.$hasError ? '#dc3545' : '#1C1C1C'};
        box-shadow: 0 0 0 3px ${props => props.$hasError ? 'rgba(220, 53, 69, 0.1)' : 'rgba(28, 28, 28, 0.1)'};
    }

    &:hover {
        background-color: #F5F5F5;
    }
`

const StyledError = styled.span`
    position: absolute;
    bottom: 100%;
    left: 0;
    margin-bottom: ${rm(4)};
    font-size: ${rm(12)};
    ${fontGeist(400)};
    color: #dc3545;
    white-space: nowrap;
    z-index: 10;
    pointer-events: none;

    ${media.xsm`
        font-size: ${rm(11)};
        margin-bottom: ${rm(3)};
    `}
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
        to {
            transform: rotate(360deg);
        }
    }
`