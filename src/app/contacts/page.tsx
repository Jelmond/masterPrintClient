'use client'


import { colors, media, rm } from "@/styles"
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

export default function ContactsPage() {
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
        <StyledContactsPage>
            <StyledContainer>
                <StyledTitle>Контакты</StyledTitle>
                
                <StyledContent>
                    <StyledLeftColumn>
                        <StyledSection>
                            <StyledSectionTitle>Свяжитесь с Нами</StyledSectionTitle>
                            <StyledText>
                                Мы всегда готовы ответить на ваши вопросы и помочь с выбором продукции. 
                                Свяжитесь с нами любым удобным способом.
                            </StyledText>
                        </StyledSection>

                        <StyledContactInfo>
                            <StyledContactItem>
                                <StyledContactIcon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9843 21.5573 21.2126 21.3528 21.3979C21.1482 21.5832 20.9074 21.7212 20.6446 21.8025C20.3818 21.8838 20.1028 21.9065 19.8288 21.8688C16.7432 21.3861 13.787 20.2103 11.19 18.41C8.77382 16.7368 6.72533 14.5907 5.19 12.11C3.38667 9.506 2.21667 6.546 1.75 3.46C1.71229 3.18697 1.73504 2.90885 1.81641 2.64665C1.89779 2.38445 2.03568 2.14419 2.22079 1.93996C2.4059 1.73574 2.63395 1.57212 2.88912 1.46026C3.14429 1.34839 3.42038 1.29099 3.7 1.292H6.7C7.23652 1.29481 7.73714 1.54578 8.06 1.97L10.22 4.97C10.4506 5.29599 10.5654 5.68607 10.545 6.082C10.5246 6.47793 10.37 6.85412 10.11 7.15L8.41 8.85C10.0743 11.5827 12.4173 13.9257 15.15 15.59L16.85 13.89C17.1459 13.63 17.5221 13.4754 17.918 13.455C18.3139 13.4346 18.704 13.5494 19.03 13.78L22.03 15.94C22.4542 16.2629 22.7052 16.7635 22.708 17.3L22.708 17.31Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </StyledContactIcon>
                                <div>
                                    <StyledContactLabel>Заведующий пунктом выдачи</StyledContactLabel>
                                    <StyledContactValue href="tel:+375447495465">+375 44 749 54 65</StyledContactValue>
                                </div>
                            </StyledContactItem>

                            <StyledContactItem>
                                <StyledContactIcon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9843 21.5573 21.2126 21.3528 21.3979C21.1482 21.5832 20.9074 21.7212 20.6446 21.8025C20.3818 21.8838 20.1028 21.9065 19.8288 21.8688C16.7432 21.3861 13.787 20.2103 11.19 18.41C8.77382 16.7368 6.72533 14.5907 5.19 12.11C3.38667 9.506 2.21667 6.546 1.75 3.46C1.71229 3.18697 1.73504 2.90885 1.81641 2.64665C1.89779 2.38445 2.03568 2.14419 2.22079 1.93996C2.4059 1.73574 2.63395 1.57212 2.88912 1.46026C3.14429 1.34839 3.42038 1.29099 3.7 1.292H6.7C7.23652 1.29481 7.73714 1.54578 8.06 1.97L10.22 4.97C10.4506 5.29599 10.5654 5.68607 10.545 6.082C10.5246 6.47793 10.37 6.85412 10.11 7.15L8.41 8.85C10.0743 11.5827 12.4173 13.9257 15.15 15.59L16.85 13.89C17.1459 13.63 17.5221 13.4754 17.918 13.455C18.3139 13.4346 18.704 13.5494 19.03 13.78L22.03 15.94C22.4542 16.2629 22.7052 16.7635 22.708 17.3L22.708 17.31Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </StyledContactIcon>
                                <div>
                                    <StyledContactLabel>Менеджер</StyledContactLabel>
                                    <StyledContactValue href="tel:+375445842911">+375 44 584 29 11</StyledContactValue>
                                </div>
                            </StyledContactItem>

                            <StyledContactItem>
                                <StyledContactIcon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="L22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </StyledContactIcon>
                                <div>
                                    <StyledContactLabel>Email (общая)</StyledContactLabel>
                                    <StyledContactValue href="mailto:shop@mpp.by">shop@mpp.by</StyledContactValue>
                                </div>
                            </StyledContactItem>

                            <StyledContactItem>
                                <StyledContactIcon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="L22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </StyledContactIcon>
                                <div>
                                    <StyledContactLabel>Email (менеджер)</StyledContactLabel>
                                    <StyledContactValue href="mailto:svirydchuk@shop.mpp.by">svirydchuk@shop.mpp.by</StyledContactValue>
                                </div>
                            </StyledContactItem>

                            <StyledContactItem>
                                <StyledContactIcon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </StyledContactIcon>
                                <div>
                                    <StyledContactLabel>Адрес</StyledContactLabel>
                                    <StyledContactValue>231761, г. Скидель, ул. Промышленная, 6Б</StyledContactValue>
                                </div>
                            </StyledContactItem>
                        </StyledContactInfo>
                    </StyledLeftColumn>

                    <StyledRightColumn>
                        <StyledFormContainer>
                            <StyledFormTitle>Оставить Заявку</StyledFormTitle>
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
                    </StyledRightColumn>
                </StyledContent>
            </StyledContainer>
        </StyledContactsPage>
    )
}

const StyledContactsPage = styled.div`
    min-height: 100vh;
    padding-top: ${rm(80)};
    background-color: #E6E8E6;
    padding-bottom: ${rm(80)};

    ${media.xsm`
        padding-top: ${rm(60)};
        padding-bottom: ${rm(60)};
    `}
`

const StyledContainer = styled.div`
    max-width: ${rm(1400)};
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
    font-size: ${rm(60)};
    color: #111111;
    margin: 0 0 ${rm(60)} 0;
    text-align: center;

    ${media.lg`
        font-size: ${rm(48)};
        margin-bottom: ${rm(50)};
    `}

    ${media.md`
        font-size: ${rm(40)};
        margin-bottom: ${rm(40)};
    `}

    ${media.xsm`
        font-size: ${rm(32)};
        margin-bottom: ${rm(30)};
    `}
`

const StyledContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${rm(80)};

    ${media.lg`
        gap: ${rm(60)};
    `}

    ${media.md`
        grid-template-columns: 1fr;
        gap: ${rm(50)};
    `}

    ${media.xsm`
        gap: ${rm(40)};
    `}
`

const StyledLeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(40)};
`

const StyledRightColumn = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(20)};
`

const StyledSectionTitle = styled.h2`
    ${fontGeist(700)};
    font-size: ${rm(34)};
    color: #111111;
    margin: 0;

    ${media.md`
        font-size: ${rm(28)};
    `}

    ${media.xsm`
        font-size: ${rm(24)};
    `}
`

const StyledText = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(18)};
    color: #1C1C1C;
    line-height: 1.6;
    margin: 0;

    ${media.md`
        font-size: ${rm(16)};
    `}

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(30)};
`

const StyledContactItem = styled.div`
    display: flex;
    gap: ${rm(20)};
    align-items: flex-start;
`

const StyledContactIcon = styled.div`
    width: ${rm(48)};
    height: ${rm(48)};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    border-radius: ${rm(8)};
    flex-shrink: 0;
    color: #111111;

    ${media.xsm`
        width: ${rm(40)};
        height: ${rm(40)};
    `}

    svg {
        width: ${rm(24)};
        height: ${rm(24)};

        ${media.xsm`
            width: ${rm(20)};
            height: ${rm(20)};
        `}
    }
`

const StyledContactLabel = styled.div`
    ${fontGeist(600)};
    font-size: ${rm(16)};
    color: #111111;
    margin-bottom: ${rm(4)};

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledContactValue = styled.a`
    ${fontGeist(400)};
    font-size: ${rm(18)};
    color: #1C1C1C;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
    position: relative;

    ${media.xsm`
        font-size: ${rm(16)};
    `}

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #1C1C1C;
        transition: width 0.3s ease;
    }

    &:hover {
        transform: translateX(4px);

        &::after {
            width: 100%;
        }
    }

    &:active {
        transform: translateX(2px);
    }
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

