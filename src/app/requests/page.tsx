'use client'

import { colors, media, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"
import { useState } from "react"

interface FormErrors {
    fullName?: string
    address?: string
    phone?: string
    email?: string
    message?: string
    consent?: string
}

export default function RequestsPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        phone: '',
        email: '',
        message: '',
        consent: false
    })
    const [errors, setErrors] = useState<FormErrors>({})
    const [isLoading, setIsLoading] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [submitMessage, setSubmitMessage] = useState('')

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}

        // Full name validation
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'ФИО обязательно для заполнения'
        } else if (formData.fullName.trim().length < 3) {
            newErrors.fullName = 'ФИО должно содержать минимум 3 символа'
        }

        // Address validation
        if (!formData.address.trim()) {
            newErrors.address = 'Адрес места жительства обязателен для заполнения'
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

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Обращение обязательно для заполнения'
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Обращение должно содержать минимум 10 символов'
        }

        // Consent validation
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
            const response = await fetch('/api/requests', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    address: formData.address,
                    phone: formData.phone,
                    email: formData.email,
                    message: formData.message,
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Ошибка при отправке обращения')
            }

            setSubmitStatus('success')
            setSubmitMessage('Обращение успешно отправлено! Мы рассмотрим его в течение 15 календарных дней.')
            
            // Reset form
            setFormData({
                fullName: '',
                address: '',
                phone: '',
                email: '',
                message: '',
                consent: false
            })
            setErrors({})

            // Clear success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus('idle')
                setSubmitMessage('')
            }, 5000)

        } catch (error) {
            setSubmitStatus('error')
            setSubmitMessage(error instanceof Error ? error.message : 'Произошла ошибка при отправке обращения. Пожалуйста, попробуйте позже.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <StyledRequestsPage>
            <StyledContainer>
                <StyledTitle>ОБРАЩЕНИЯ ПОКУПАТЕЛЕЙ</StyledTitle>
                
                <StyledIntro>
                    До подачи письменного или электронного обращения просим ознакомиться с порядком подачи и рассмотрения обращений.
                </StyledIntro>

                <StyledContent>
                    <StyledSection>
                        <StyledSectionTitle>1. Порядок подачи письменных и электронных обращений.</StyledSectionTitle>
                        
                        <StyledParagraph>
                            <strong>1.1.</strong> Электронные обращения подаются заявителем на официальном сайте интернет-магазина (mppshop.by) в разделе «Обращения покупателей», путем заполнения указанной ниже формы. Письменные обращения направляются почтовой корреспонденцией по адресу: 231761, г. Скидель, ул. Промышленная, 6Б.
                        </StyledParagraph>
                        
                        <StyledParagraph>
                            <strong>1.2.</strong> Письменные и электронные обращения должны содержать:
                        </StyledParagraph>
                        <StyledList>
                            <li>Фамилия, собственное имя, отчество (если таковое имеется) заявителя;</li>
                            <li>адрес места жительства заявителя;</li>
                            <li>номер мобильного телефона;</li>
                            <li>адрес электронной почты;</li>
                            <li>изложение сути обращения;</li>
                            <li>подпись заявителя и дату (для письменных обращений).</li>
                        </StyledList>
                        
                        <StyledParagraph>
                            <strong>1.3.</strong> Текст обращения излагается на белорусском или русском языках.
                        </StyledParagraph>
                        
                        <StyledParagraph>
                            <strong>1.4.</strong> К обращению, подаваемому представителем заявителя, должны быть приложены документы, подтверждающие его полномочия.
                        </StyledParagraph>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>2. Рассмотрение обращений.</StyledSectionTitle>
                        
                        <StyledParagraph>
                            <strong>2.1.</strong> Обращение считается рассмотренным, если заявителю дан ответ по существу.
                        </StyledParagraph>
                        
                        <StyledParagraph>
                            <strong>2.2.</strong> Ответ на электронное обращение предоставляется в электронном виде путём отправки скана письменного ответа, подписанного уполномоченным лицом организации, на адрес электронной почты, указанной заявителем.
                        </StyledParagraph>
                        
                        <StyledParagraph>
                            <strong>2.3.</strong> Ответ на письменное обращение предоставляется путём отправки почтовой корреспонденцией письменного ответа, подписанного уполномоченным лицом организации, на адрес места жительства, указанный заявителем.
                        </StyledParagraph>
                        
                        <StyledParagraph>
                            <strong>2.4.</strong> Срок рассмотрения обращения составляет 15 (пятнадцать) календарных дней.
                        </StyledParagraph>
                        
                        <StyledParagraph>
                            <strong>2.5.</strong> Не рассматриваются обращения:
                        </StyledParagraph>
                        <StyledList>
                            <li>несоответствующие требованиям, установленным пунктам 1.2., 1.3. настоящего Раздела;</li>
                            <li>содержащие вопросы, решение которых не относится к компетенции организации;</li>
                            <li>не относящиеся к качеству реализуемых товаров;</li>
                            <li>имеющие нецензурные либо оскорбительные слова или выражения;</li>
                            <li>содержащие текст, не поддающийся прочтению;</li>
                            <li>пропущен без уважительной причины срок подачи жалобы;</li>
                            <li>заявителем подано повторное обращение, в том числе внесенное в книгу замечаний и предложений, и в нем не содержатся новые обстоятельства, имеющие значение для рассмотрения обращения по существу;</li>
                            <li>с заявителем прекращена переписка по изложенным в обращении вопросам;</li>
                            <li>содержащие угрозы жизни, здоровью и имуществу, побуждение к совершению противоправного деяния либо заявитель иным способом злоупотребляет правом на обращение;</li>
                            <li>подлежащие рассмотрению в соответствии с законодательством о конституционном судопроизводстве, гражданским, гражданским процессуальным, хозяйственным процессуальным, уголовно-процессуальным законодательством, законодательством, определяющим порядок административного процесса, законодательством об административных процедурах, обращениям работника к нанимателю, иным обращениям, в отношении которых законодательными актами установлен иной порядок их подачи и рассмотрения, а также на переписку государственных органов при выполнении ими функций, возложенных на них нормативными правовыми актами.</li>
                        </StyledList>
                        
                        <StyledParagraph>
                            <strong>2.6.</strong> Ответы (уведомления) на обращения, оставленные без рассмотрения, заявителю не направляются.
                        </StyledParagraph>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>3. Отзыв обращения.</StyledSectionTitle>
                        
                        <StyledParagraph>
                            <strong>3.1.</strong> Заявитель может отозвать свое обращение до его рассмотрения путём подачи соответствующего заявления.
                        </StyledParagraph>
                        
                        <StyledParagraph>
                            <strong>3.2.</strong> Заявление об отзыве обращения подаётся в той же форме, в которой обращение было подано.
                        </StyledParagraph>
                        
                        <StyledParagraph>
                            <strong>3.3.</strong> При отзыве обращения его рассмотрение прекращается, ответ не предоставляется.
                        </StyledParagraph>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>4. Обжалование ответов на обращения:</StyledSectionTitle>
                        
                        <StyledParagraph>
                            <strong>4.1.</strong> Ответ организации на обращение Вы вправе обжаловать в Местном исполнительном и распорядительном органе, уполномоченном рассматривать обращения покупателей в соответствии с законодательством об обращениях граждан и юридических лиц: Отдел по работе с обращениями граждан и юридических лиц Гродненского райисполкома, номера контактных телефонов: +375 152 738906; + 375 152 738-916).
                        </StyledParagraph>
                    </StyledSection>

                    <StyledFormSection>
                        <StyledFormTitle>Для подачи электронного обращения заполните следующую форму:</StyledFormTitle>
                        <StyledForm onSubmit={handleSubmit}>
                            <StyledInputGrid>
                                <StyledInputWrapper>
                                    <StyledInput
                                        type="text"
                                        name="fullName"
                                        placeholder="ФИО"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        $hasError={!!errors.fullName}
                                    />
                                    {errors.fullName && <StyledError>{errors.fullName}</StyledError>}
                                </StyledInputWrapper>
                                
                                <StyledInputWrapper>
                                    <StyledInput
                                        type="text"
                                        name="address"
                                        placeholder="Адрес места жительства"
                                        value={formData.address}
                                        onChange={handleChange}
                                        $hasError={!!errors.address}
                                    />
                                    {errors.address && <StyledError>{errors.address}</StyledError>}
                                </StyledInputWrapper>
                                
                                <StyledInputWrapper>
                                    <StyledInput
                                        type="tel"
                                        name="phone"
                                        placeholder="Номер телефона"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        $hasError={!!errors.phone}
                                    />
                                    {errors.phone && <StyledError>{errors.phone}</StyledError>}
                                </StyledInputWrapper>
                                
                                <StyledInputWrapper>
                                    <StyledInput
                                        type="email"
                                        name="email"
                                        placeholder="Электронная почта"
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
                                    placeholder="Обращение"
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
                            <StyledPolicyLink href="/policy.pdf" download>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <polyline points="7 10 12 15 17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Скачать политику конфиденциальности
                            </StyledPolicyLink>
                            {errors.consent && <StyledError>{errors.consent}</StyledError>}
                            
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
                    </StyledFormSection>
                </StyledContent>
            </StyledContainer>
        </StyledRequestsPage>
    )
}

const StyledRequestsPage = styled.div`
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
    margin: 0 0 ${rm(40)} 0;
    text-align: center;

    ${media.lg`
        font-size: ${rm(48)};
        margin-bottom: ${rm(35)};
    `}

    ${media.md`
        font-size: ${rm(40)};
        margin-bottom: ${rm(30)};
    `}

    ${media.xsm`
        font-size: ${rm(32)};
        margin-bottom: ${rm(25)};
    `}
`

const StyledIntro = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(18)};
    color: #1C1C1C;
    line-height: 1.6;
    margin: 0 0 ${rm(50)} 0;
    text-align: center;

    ${media.md`
        font-size: ${rm(16)};
        margin-bottom: ${rm(40)};
    `}

    ${media.xsm`
        font-size: ${rm(14)};
        margin-bottom: ${rm(30)};
    `}
`

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(50)};

    ${media.md`
        gap: ${rm(40)};
    `}

    ${media.xsm`
        gap: ${rm(30)};
    `}
`

const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(20)};
    background-color: #FFFFFF;
    padding: ${rm(40)};
    border-radius: ${rm(12)};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    ${media.xsm`
        padding: ${rm(30)} ${rm(20)};
        gap: ${rm(16)};
    `}
`

const StyledSectionTitle = styled.h2`
    ${fontGeist(700)};
    font-size: ${rm(28)};
    color: #111111;
    margin: 0;

    ${media.md`
        font-size: ${rm(24)};
    `}

    ${media.xsm`
        font-size: ${rm(20)};
    `}
`

const StyledParagraph = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(16)};
    color: #1C1C1C;
    line-height: 1.7;
    margin: 0;

    ${media.md`
        font-size: ${rm(15)};
    `}

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledList = styled.ul`
    ${fontGeist(400)};
    font-size: ${rm(16)};
    color: #1C1C1C;
    line-height: 1.7;
    margin: ${rm(10)} 0;
    padding-left: ${rm(30)};

    ${media.md`
        font-size: ${rm(15)};
        padding-left: ${rm(25)};
    `}

    ${media.xsm`
        font-size: ${rm(14)};
        padding-left: ${rm(20)};
    `}

    li {
        margin-bottom: ${rm(8)};
    }
`

const StyledFormSection = styled.div`
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
    font-size: ${rm(28)};
    color: #111111;
    margin: 0 0 ${rm(30)} 0;

    ${media.md`
        font-size: ${rm(24)};
        margin-bottom: ${rm(24)};
    `}

    ${media.xsm`
        font-size: ${rm(20)};
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
    margin-left: ${rm(32)};

    ${media.xsm`
        font-size: ${rm(12)};
        gap: ${rm(6)};
        margin-left: ${rm(28)};
    `}

    svg {
        width: ${rm(16)};
        height: ${rm(16)};
        flex-shrink: 0;

        ${media.xsm`
            width: ${rm(14)};
            height: ${rm(14)};
        `}
    }

    &:hover {
        color: #007bff;
        text-decoration: underline;
    }
`

