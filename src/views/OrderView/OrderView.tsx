'use client'

import { colors, media } from "@/styles"
import { rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"
import Image from "next/image"
import { CatalogueButton } from "@/components/UI/Buttons/CatalogueButton"
import { useCartStore } from "@/store/cartStore"
import { useEffect, useState } from "react"
import { SimpleInput } from "@/components/UI/Inputs/SimpleInput"
import { PhoneInput } from "@/components/UI/Inputs/PhoneInput"
import { useRouter } from "next/navigation"


export const OrderView = () => {
    const router = useRouter()
    const items = useCartStore(state => state.items)
    const updateQuantity = useCartStore(state => state.updateQuantity)
    const removeFromCart = useCartStore(state => state.removeFromCart)

    // To avoid hydration issues
    const [mounted, setMounted] = useState(false)
    const [deliveryMethod, setDeliveryMethod] = useState<'dpd' | 'self-pickup' | 'alternative'>('dpd')
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [showAlternativeDelivery, setShowAlternativeDelivery] = useState(false) // Hidden by default
    
    // Form state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        address: '',
        comment: ''
    })
    
    // Error state
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        address: ''
    })
    
    useEffect(() => { setMounted(true) }, [])

    if (!mounted) return null

    // Calculate totals
    const productsTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    
    // Step 1: Apply base discount (5% or 20% based on product total)
    let baseDiscountPercent = 0
    if (productsTotal >= 1500) {
        baseDiscountPercent = 20
    } else if (productsTotal >= 700) {
        baseDiscountPercent = 5
    }
    
    const baseDiscountAmount = productsTotal * (baseDiscountPercent / 100)
    const productsTotalAfterBaseDiscount = productsTotal - baseDiscountAmount
    
    // Step 2: Apply self-pickup discount (3% additional) if applicable
    const selfPickupDiscountPercent = deliveryMethod === 'self-pickup' ? 3 : 0
    const selfPickupDiscountAmount = productsTotalAfterBaseDiscount * (selfPickupDiscountPercent / 100)
    const productsTotalAfterAllDiscounts = productsTotalAfterBaseDiscount - selfPickupDiscountAmount

    // Step 3: Calculate delivery cost based on final product total after all discounts
    const calculateDeliveryCost = (): number => {
        switch (deliveryMethod) {
            case 'dpd':
                if (productsTotalAfterAllDiscounts < 200) return 20
                if (productsTotalAfterAllDiscounts < 400) return 10
                return 0
            case 'self-pickup':
                return 0
            case 'alternative':
                if (productsTotalAfterAllDiscounts > 400) return 0
                return 6
            default:
                return 0
        }
    }

    const deliveryCost = calculateDeliveryCost()
    
    // Step 4: Final total
    const finalTotal = productsTotalAfterAllDiscounts + deliveryCost
    
    // Step 5: Check minimum order amount
    const minimumOrderAmount = 50
    const isBelowMinimum = finalTotal < minimumOrderAmount

    // Validation functions
    const validateFirstName = (name: string) => {
        if (!name.trim()) return 'Имя обязательно для заполнения'
        if (name.trim().length < 2) return 'Имя должно содержать минимум 2 символа'
        return ''
    }

    const validateLastName = (name: string) => {
        if (!name.trim()) return 'Фамилия обязательна для заполнения'
        if (name.trim().length < 2) return 'Фамилия должна содержать минимум 2 символа'
        return ''
    }

    const validateEmail = (email: string) => {
        if (!email.trim()) return 'Email обязателен для заполнения'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) return 'Введите корректный email адрес'
        return ''
    }

    const validatePhone = (phone: string) => {
        if (!phone.trim()) return 'Номер телефона обязателен для заполнения'
        // Belarus phone number validation (9 digits only, +375 is already in the field)
        const phoneRegex = /^\d{9}$/
        if (!phoneRegex.test(phone)) return 'Введите корректный номер телефона (9 цифр)'
        return ''
    }

    const validateCity = (city: string) => {
        if (!city.trim()) return 'Город обязателен для заполнения'
        if (city.trim().length < 2) return 'Название города должно содержать минимум 2 символа'
        return ''
    }

    const validateAddress = (address: string) => {
        if (!address.trim()) return 'Адрес обязателен для заполнения'
        if (address.trim().length < 5) return 'Адрес должен содержать минимум 5 символов'
        return ''
    }

    const validateField = (field: string, value: string) => {
        switch (field) {
            case 'firstName':
                return validateFirstName(value)
            case 'lastName':
                return validateLastName(value)
            case 'email':
                return validateEmail(value)
            case 'phone':
                return validatePhone(value)
            case 'city':
                return validateCity(value)
            case 'address':
                return validateAddress(value)
            default:
                return ''
        }
    }

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
        
        // Clear error when user starts typing
        if (errors[field as keyof typeof errors]) {
            setErrors(prev => ({
                ...prev,
                [field]: ''
            }))
        }
    }

    const validateForm = () => {
        const newErrors = {
            firstName: validateFirstName(formData.firstName),
            lastName: validateLastName(formData.lastName),
            email: validateEmail(formData.email),
            phone: validatePhone(formData.phone),
            city: validateCity(formData.city),
            address: validateAddress(formData.address)
        }
        
        setErrors(newErrors)
        
        // Check if form is valid
        return Object.values(newErrors).every(error => error === '')
    }

    const handleSubmit = () => {
        // Check minimum order amount first - prevent any action if below minimum
        if (isBelowMinimum) {
            return // Don't proceed if below minimum
        }
        
        // Validate form
        if (!validateForm()) {
            return // Don't proceed if form is invalid
        }
        
        // Clear the cart when order is successfully submitted
        items.forEach(item => {
            removeFromCart(item.productId)
        })
        setShowSuccessModal(true)
    }

    return (
        <>
            <StyledContainer>
                <StyledCart>
                    <StyledTitle>
                        Оформление заказа
                    </StyledTitle>
                    <StyledSubtitle>
                        Товары покупки
                    </StyledSubtitle>
                    <StyledProducts>
                        {items.map(item => (
                            <StyledProduct key={item.productId}>
                                <StyledImageBox>
                                    {item.image ? (
                                        <Image src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.image}`} alt={item.title} fill style={{objectFit:'cover'}} />
                                    ) : (
                                        <StyledImagePlaceholder />
                                    )}
                                </StyledImageBox>
                                <StyledInfo>
                                    <StyledProductTitle>{item.title}</StyledProductTitle>
                                    <StyledQuantityText>Количество: {item.quantity} шт.</StyledQuantityText>
                                </StyledInfo>
                                <StyledPrice>{item.price} руб.</StyledPrice>
                            </StyledProduct>
                        ))}
                    </StyledProducts>
                    <StyledSubtitle>
                        Данные получателя
                    </StyledSubtitle>
                    <StyledPersonalInfo>
                        <div>
                            <SimpleInput 
                                label="Имя получателя" 
                                placeholder="Введите имя получателя" 
                                value={formData.firstName}
                                onChange={(e) => handleInputChange('firstName', e.target.value)}
                            />
                            {errors.firstName && <StyledErrorMessage>{errors.firstName}</StyledErrorMessage>}
                        </div>
                        <div>
                            <SimpleInput 
                                label="Фамилия получателя" 
                                placeholder="Введите фамилию получателя" 
                                value={formData.lastName}
                                onChange={(e) => handleInputChange('lastName', e.target.value)}
                            />
                            {errors.lastName && <StyledErrorMessage>{errors.lastName}</StyledErrorMessage>}
                        </div>
                        <div>
                            <SimpleInput 
                                label="Email" 
                                placeholder="Введите email" 
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                            />
                            {errors.email && <StyledErrorMessage>{errors.email}</StyledErrorMessage>}
                        </div>
                        <div>
                            <PhoneInput 
                                label="Номер телефона получателя" 
                                placeholder="Номер получателя" 
                                value={formData.phone}
                                onChange={(value) => handleInputChange('phone', value)}
                            />
                            {errors.phone && <StyledErrorMessage>{errors.phone}</StyledErrorMessage>}
                        </div>
                    </StyledPersonalInfo>
                    <StyledSubtitle>
                        Адрес получателя
                    </StyledSubtitle>
                    <StyledAdressContainer>
                        <div>
                            <SimpleInput 
                                label="Город" 
                                placeholder="Введите название города" 
                                value={formData.city}
                                onChange={(e) => handleInputChange('city', e.target.value)}
                            />
                            {errors.city && <StyledErrorMessage>{errors.city}</StyledErrorMessage>}
                        </div>
                        <div>
                            <SimpleInput 
                                label="Улица, дом, квартира" 
                                placeholder="Введите адрес" 
                                value={formData.address}
                                onChange={(e) => handleInputChange('address', e.target.value)}
                            />
                            {errors.address && <StyledErrorMessage>{errors.address}</StyledErrorMessage>}
                        </div>
                    </StyledAdressContainer>
                    <StyledSubtitle>
                        Способ доставки
                    </StyledSubtitle>
                    <StyledDeliveryOptions>
                        <StyledDeliveryOption>
                            <StyledRadioInput 
                                type="radio" 
                                id="dpd" 
                                name="delivery" 
                                value="dpd" 
                                checked={deliveryMethod === 'dpd'}
                                onChange={(e) => setDeliveryMethod(e.target.value as 'dpd' | 'self-pickup' | 'alternative')}
                            />
                            <StyledRadioLabel htmlFor="dpd">
                                <StyledOptionText>
                                    <div>
                                        <StyledOptionTitle>Курьер DPD (дверь-в-дверь)</StyledOptionTitle>
                                        <StyledOptionDescription>
                                            {productsTotalAfterAllDiscounts < 200 ? '20 руб.' : 
                                             productsTotalAfterAllDiscounts < 400 ? '10 руб.' : 
                                             'Бесплатно'}
                                        </StyledOptionDescription>
                                    </div>
                                </StyledOptionText>
                            </StyledRadioLabel>
                        </StyledDeliveryOption>
                        <StyledDeliveryOption>
                            <StyledRadioInput 
                                type="radio" 
                                id="self-pickup" 
                                name="delivery" 
                                value="self-pickup" 
                                checked={deliveryMethod === 'self-pickup'}
                                onChange={(e) => setDeliveryMethod(e.target.value as 'dpd' | 'self-pickup' | 'alternative')}
                            />
                            <StyledRadioLabel htmlFor="self-pickup">
                                <StyledOptionText>
                                    <div>
                                        <StyledOptionTitle>Самовывоз (склад, Гродно)</StyledOptionTitle>
                                        <StyledOptionDescription>Бесплатно + скидка 3%</StyledOptionDescription>
                                    </div>
                                </StyledOptionText>
                            </StyledRadioLabel>
                        </StyledDeliveryOption>
                        {showAlternativeDelivery && (
                            <StyledDeliveryOption>
                                <StyledRadioInput 
                                    type="radio" 
                                    id="alternative" 
                                    name="delivery" 
                                    value="alternative" 
                                    checked={deliveryMethod === 'alternative'}
                                    onChange={(e) => setDeliveryMethod(e.target.value as 'dpd' | 'self-pickup' | 'alternative')}
                                />
                                <StyledRadioLabel htmlFor="alternative">
                                    <StyledOptionText>
                                        <div>
                                            <StyledOptionTitle>Альтернативная доставка (Белпочта)</StyledOptionTitle>
                                            <StyledOptionDescription>
                                                {productsTotalAfterAllDiscounts > 400 ? 'Бесплатно' : '6 руб.'}
                                            </StyledOptionDescription>
                                        </div>
                                    </StyledOptionText>
                                </StyledRadioLabel>
                            </StyledDeliveryOption>
                        )}
                    </StyledDeliveryOptions>
                    <StyledSubtitle>
                        Комментарий к заказу (опционально)
                    </StyledSubtitle>
                    {isBelowMinimum && (
                        <StyledMinimumOrderWarning>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Минимальная сумма заказа — 50 руб. Добавьте товары, чтобы продолжить.
                        </StyledMinimumOrderWarning>
                    )}
                    <StyledCommentSection>
                        <StyledCommentTextarea 
                            placeholder="Добавьте свой комментарий..."
                            rows={4}
                            value={formData.comment}
                            onChange={(e) => handleInputChange('comment', e.target.value)}
                        />
                        <StyledButtonContainer>
                            <StyledBackButton onClick={() => router.push('/cart')}>
                                Назад к корзине
                            </StyledBackButton>
                            <StyledPaymentButton 
                                onClick={handleSubmit}
                                disabled={isBelowMinimum}
                            >
                                Перейти к оплате
                            </StyledPaymentButton>
                        </StyledButtonContainer>
                    </StyledCommentSection>
                </StyledCart>
                
                <StyledOrderSummary className={isBelowMinimum ? 'below-minimum' : ''}>
                    <StyledSummaryTitle>Общая сумма заказа</StyledSummaryTitle>
                    <StyledSummaryRow>
                        <StyledSummaryLabel>Товары:</StyledSummaryLabel>
                        <StyledSummaryValue>{productsTotal.toFixed(2)} руб.</StyledSummaryValue>
                    </StyledSummaryRow>
                    {baseDiscountAmount > 0 && (
                        <StyledSummaryRow className="discount">
                            <StyledSummaryLabel>Скидка {baseDiscountPercent}%:</StyledSummaryLabel>
                            <StyledSummaryValue>-{baseDiscountAmount.toFixed(2)} руб.</StyledSummaryValue>
                        </StyledSummaryRow>
                    )}
                    {selfPickupDiscountAmount > 0 && (
                        <StyledSummaryRow className="discount">
                            <StyledSummaryLabel>Скидка за самовывоз 3%:</StyledSummaryLabel>
                            <StyledSummaryValue>-{selfPickupDiscountAmount.toFixed(2)} руб.</StyledSummaryValue>
                        </StyledSummaryRow>
                    )}
                    <StyledSummaryRow>
                        <StyledSummaryLabel>Доставка:</StyledSummaryLabel>
                        <StyledSummaryValue>
                            {deliveryCost === 0 ? 'Бесплатно' : `${deliveryCost.toFixed(2)} руб.`}
                        </StyledSummaryValue>
                    </StyledSummaryRow>
                    <StyledSummaryRow>
                        <StyledSummaryLabel>Итого:</StyledSummaryLabel>
                        <StyledSummaryValue className="final">{finalTotal.toFixed(2)} руб.</StyledSummaryValue>
                    </StyledSummaryRow>
                    {isBelowMinimum && (
                        <StyledMinimumNotice>
                            Минимальная сумма заказа — 50 руб.
                        </StyledMinimumNotice>
                    )}
                </StyledOrderSummary>
            </StyledContainer>
            
            {showSuccessModal && (
                <StyledModalOverlay>
                    <StyledModal>
                        <StyledModalHeader>
                            Ваш заказ успешно оформлен
                        </StyledModalHeader>
                        <StyledCheckmarkContainer>
                            <StyledCheckmark>
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="white"/>
                                </svg>
                            </StyledCheckmark>
                        </StyledCheckmarkContainer>
                        <StyledThankYou>
                            Спасибо Вам, {formData.firstName || 'пользователь'}
                        </StyledThankYou>
                        <StyledDownloadSection>
                            <StyledDownloadIcon>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="#666" strokeWidth="2" fill="none"/>
                                    <polyline points="14,2 14,8 20,8" stroke="#666" strokeWidth="2" fill="none"/>
                                    <line x1="16" y1="13" x2="8" y2="13" stroke="#666" strokeWidth="2"/>
                                    <line x1="16" y1="17" x2="8" y2="17" stroke="#666" strokeWidth="2"/>
                                    <polyline points="10,9 9,9 8,9" stroke="#666" strokeWidth="2" fill="none"/>
                                </svg>
                            </StyledDownloadIcon>
                            <StyledDownloadText>
                                Нажмите чтобы скачать PDF чек
                            </StyledDownloadText>
                        </StyledDownloadSection>
                        <StyledEmailConfirmation>
                            Чек был отправлен на почту {formData.email || 'указанный email'}
                        </StyledEmailConfirmation>
                        <StyledTrackingButton onClick={() => router.push('/track')}>
                            На страницу отслеживания
                        </StyledTrackingButton>
                    </StyledModal>
                </StyledModalOverlay>
            )}
        </>
    )
}


const StyledContainer = styled.div`
    display: flex;
    gap: ${rm(40)};
    padding: ${rm(110)} ${rm(125)} ${rm(125)} ${rm(125)};
    min-height: 60vh;

    ${media.lg`
        padding: ${rm(90)} ${rm(80)};
        gap: ${rm(30)};
    `}

    ${media.md`
        padding: ${rm(70)} ${rm(40)};
        gap: ${rm(20)};
        flex-direction: column;
    `}

    ${media.xsm`
        padding: ${rm(60)} ${rm(20)};
        gap: ${rm(20)};
    `}
`

const StyledCart = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
`

const StyledAdressContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(40)};
    width: ${rm(520)};

    ${media.lg`
        width: 100%;
        max-width: ${rm(520)};
    `}

    ${media.md`
        width: 100%;
        gap: ${rm(30)};
    `}

    ${media.xsm`
        width: 100%;
        gap: ${rm(20)};
    `}
`

const StyledPersonalInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(40)};
    width: ${rm(520)};
    margin-bottom: ${rm(40)};

    ${media.lg`
        width: 100%;
        max-width: ${rm(520)};
    `}

    ${media.md`
        width: 100%;
        gap: ${rm(30)};
        margin-bottom: ${rm(30)};
    `}

    ${media.xsm`
        width: 100%;
        gap: ${rm(20)};
        margin-bottom: ${rm(20)};
    `}
`

const StyledTotal = styled.div`
    display: flex;
    align-items: center;
    gap: ${rm(10)};
    margin-top: ${rm(40)};

    p{
        ${fontGeist(400)};
        font-size: ${rm(36)};
        margin-bottom: ${rm(40)};
        color: ${colors.black100};
    }

    span{
        ${fontGeist(300)};
        font-size: ${rm(48)};
        margin-bottom: ${rm(40)};
        color: ${colors.black100};
    }
`


const StyledTitle = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(48)};
    margin-bottom: ${rm(60)};
    color: ${colors.black100};

    ${media.lg`
        font-size: ${rm(40)};
        margin-bottom: ${rm(40)};
    `}

    ${media.md`
        font-size: ${rm(32)};
        margin-bottom: ${rm(30)};
    `}

    ${media.xsm`
        font-size: ${rm(28)};
        margin-bottom: ${rm(20)};
    `}
`

const StyledSubtitle = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(36)};
    margin-bottom: ${rm(40)};
    color: ${colors.black100};

    ${media.lg`
        font-size: ${rm(30)};
        margin-bottom: ${rm(30)};
    `}

    ${media.md`
        font-size: ${rm(24)};
        margin-bottom: ${rm(20)};
    `}

    ${media.xsm`
        font-size: ${rm(20)};
        margin-bottom: ${rm(16)};
    `}
`


const StyledProducts = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(25)};
    width: ${rm(781)};

    ${media.lg`
        width: 100%;
        max-width: ${rm(781)};
    `}

    ${media.md`
        width: 100%;
        gap: ${rm(20)};
    `}

    ${media.xsm`
        width: 100%;
        gap: ${rm(15)};
    `}
`

const StyledProduct = styled.div`
    display: flex;
    align-items: center;
    gap: ${rm(20)};
    width: 100%;
    padding: ${rm(20)};
    background: #f8f9fa;
    border-radius: ${rm(12)};
    margin-bottom: ${rm(16)};
    
    ${media.md`
        padding: ${rm(15)};
        gap: ${rm(15)};
    `}

    ${media.xsm`
        padding: ${rm(12)};
        gap: ${rm(12)};
        flex-wrap: wrap;
    `}
    
    &:last-child {
        margin-bottom: 0;
    }
`

const StyledImageBox = styled.div`
    width: ${rm(80)};
    height: ${rm(80)};
    background: #e0e0e0;
    border-radius: ${rm(8)};
    position: relative;
    flex-shrink: 0;
    overflow: hidden;

    ${media.xsm`
        width: ${rm(60)};
        height: ${rm(60)};
    `}
`

const StyledImagePlaceholder = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #d3d3d3;
    border-radius: ${rm(5)};
    &::before {
        content: "";
        display: block;
        width: 40px;
        height: 40px;
        background: url('data:image/svg+xml;utf8,<svg fill=\'gray\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'><rect width=\'100%\' height=\'100%\' fill=\'lightgray\'/><path d=\'M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM7 10l5 5 5-5\' stroke=\'gray\' stroke-width=\'2\' fill=\'none\'/></svg>') center/contain no-repeat;
    }
`

const StyledInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${rm(6)};
`

const StyledProductTitle = styled.div`
    font-size: ${rm(16)};
    color: ${colors.black100};
    ${fontGeist(500)};
    font-weight: 500;

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledQuantityText = styled.div`
    font-size: ${rm(14)};
    color: #666;
    ${fontGeist(400)};

    ${media.xsm`
        font-size: ${rm(12)};
    `}
`


const StyledPrice = styled.div`
    font-size: ${rm(16)};
    color: ${colors.black100};
    ${fontGeist(500)};
    font-weight: 500;
    min-width: ${rm(80)};
    text-align: right;

    ${media.xsm`
        font-size: ${rm(14)};
        min-width: auto;
        width: 100%;
        text-align: left;
        margin-top: ${rm(4)};
    `}
`

const StyledOrderSummary = styled.div`
    position: sticky;
    top: ${rm(120)};
    width: ${rm(500)};
    height: fit-content;
    background: #ffffff;
    border-radius: ${rm(12)};
    padding: ${rm(32)};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    ${media.lg`
        width: ${rm(400)};
        padding: ${rm(28)};
    `}

    ${media.md`
        position: relative;
        top: 0;
        width: 100%;
        padding: ${rm(24)};
        margin-top: ${rm(30)};
    `}

    ${media.xsm`
        padding: ${rm(20)};
        margin-top: ${rm(20)};
    `}

    &.below-minimum {
        border: 2px solid #ff6b6b;
        background: #fff5f5;
        animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
        0%, 100% {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        50% {
            box-shadow: 0 4px 20px rgba(255, 107, 107, 0.3);
        }
    }
`

const StyledSummaryTitle = styled.h3`
    font-size: ${rm(24)};
    font-weight: 600;
    color: ${colors.black100};
    ${fontGeist(600)};
    margin: 0 0 ${rm(24)} 0;

    ${media.xsm`
        font-size: ${rm(20)};
        margin-bottom: ${rm(16)};
    `}
`

const StyledSummaryRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${rm(16)};
    
    &:last-of-type {
        margin-bottom: ${rm(24)};
        padding-top: ${rm(16)};
        border-top: 1px solid #e9ecef;
    }
`

const StyledSummaryLabel = styled.span`
    font-size: ${rm(18)};
    color: ${colors.black100};
    ${fontGeist(400)};

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledSummaryValue = styled.span`
    font-size: ${rm(18)};
    color: ${colors.black100};
    ${fontGeist(500)};
    font-weight: 500;
    
    ${media.xsm`
        font-size: ${rm(14)};
    `}
    
    &.final {
        font-size: ${rm(24)};
        ${fontGeist(600)};
        font-weight: 600;

        ${media.xsm`
            font-size: ${rm(20)};
        `}
    }
    
    ${StyledSummaryRow}.discount & {
        color: #28a745;
    }
`

const StyledSummaryFooter = styled.div`
    display: flex;
    align-items: center;
    gap: ${rm(12)};
    margin-top: ${rm(20)};
`

const StyledFooterLink = styled.a`
    font-size: ${rm(12)};
    color: #666;
    ${fontGeist(400)};
    text-decoration: none;
    cursor: pointer;
    
    &:hover {
        color: ${colors.black100};
        text-decoration: underline;
    }
`

const StyledFooterSeparator = styled.span`
    font-size: ${rm(14)};
    color: #ccc;
    ${fontGeist(400)};
`

const StyledDeliveryOptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(12)};
    margin-bottom: ${rm(20)};

    ${media.xsm`
        gap: ${rm(10)};
        margin-bottom: ${rm(16)};
    `}
`

const StyledDeliveryOption = styled.div`
    position: relative;
`

const StyledRadioInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    
    &:checked + label {
        background: #f8f9fa;
        border-color: #007bff;
    }
    
    &:checked + label::before {
        background: #007bff;
        border-color: #007bff;
    }
    
    &:checked + label::after {
        opacity: 1;
    }
`

const StyledRadioLabel = styled.label`
    display: flex;
    align-items: center;
    padding: ${rm(16)} ${rm(20)};
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: ${rm(8)};
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;

    ${media.xsm`
        padding: ${rm(12)} ${rm(16)};
    `}
    
    &::before {
        content: '';
        width: ${rm(20)};
        height: ${rm(20)};
        border: 2px solid #ccc;
        border-radius: 50%;
        margin-right: ${rm(12)};
        transition: all 0.2s ease;
        flex-shrink: 0;

        ${media.xsm`
            width: ${rm(18)};
            height: ${rm(18)};
            margin-right: ${rm(10)};
        `}
    }
    
    &::after {
        content: '';
        position: absolute;
        left: ${rm(26)};
        top: 50%;
        transform: translateY(-50%);
        width: ${rm(8)};
        height: ${rm(8)};
        background: white;
        border-radius: 50%;
        opacity: 0;
        transition: opacity 0.2s ease;

        ${media.xsm`
            left: ${rm(23)};
            width: ${rm(6)};
            height: ${rm(6)};
        `}
    }
    
    &:hover {
        background: #e9ecef;
        border-color: #dee2e6;
    }
`

const StyledOptionText = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(4)};
    width: 100%;
`

const StyledOptionTitle = styled.span`
    font-size: ${rm(16)};
    color: ${colors.black100};
    ${fontGeist(500)};
    font-weight: 500;

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledOptionDescription = styled.span`
    font-size: ${rm(14)};
    color: #666;
    ${fontGeist(400)};
    font-weight: 400;

    ${media.xsm`
        font-size: ${rm(12)};
    `}
`

const StyledDeliveryTime = styled.p`
    font-size: ${rm(14)};
    color: #666;
    ${fontGeist(400)};
    margin: 0;
    margin-bottom: ${rm(20)};

    ${media.xsm`
        font-size: ${rm(12)};
        margin-bottom: ${rm(16)};
    `}
`

const StyledCommentSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(24)};
    margin-bottom: ${rm(40)};

    ${media.xsm`
        gap: ${rm(16)};
        margin-bottom: ${rm(30)};
    `}
`

const StyledCommentTextarea = styled.textarea`
    width: 100%;
    min-height: ${rm(120)};
    border: 1px solid #DDE2E7;
    border-radius: ${rm(8)};
    font-size: ${rm(16)};
    ${fontGeist(400)};
    padding: ${rm(16)} ${rm(20)};
    background: #ffffff;
    outline: none;
    color: #222;
    resize: vertical;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    ${media.xsm`
        min-height: ${rm(100)};
        padding: ${rm(12)} ${rm(16)};
        font-size: ${rm(14)};
    `}

    &::placeholder {
        color: #A0A0A0;
        font-size: ${rm(16)};
        ${fontGeist(400)};

        ${media.xsm`
            font-size: ${rm(14)};
        `}
    }

    &:focus {
        border-color: #007bff;
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.1);
    }

    &:hover {
        border-color: #80C7FF;
    }
`

const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${rm(20)};

    ${media.xsm`
        flex-direction: column;
        gap: ${rm(12)};
        width: 100%;
    `}
`

const StyledBackButton = styled.button`
    background: #E9ECEF;
    border: none;
    border-radius: ${rm(8)};
    padding: ${rm(16)} ${rm(32)};
    font-size: ${rm(16)};
    color: ${colors.black100};
    ${fontGeist(500)};
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s ease;

    ${media.xsm`
        width: 100%;
        padding: ${rm(14)} ${rm(24)};
        font-size: ${rm(14)};
    `}
    
    &:hover {
        background: #DEE2E6;
    }
    
    &:active {
        background: #CED4DA;
    }
`

const StyledPaymentButton = styled.button`
    background: #6C757D;
    border: none;
    border-radius: ${rm(8)};
    padding: ${rm(16)} ${rm(32)};
    font-size: ${rm(16)};
    color: #ffffff;
    ${fontGeist(500)};
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s ease, opacity 0.2s ease, transform 0.2s ease;

    ${media.xsm`
        width: 100%;
        padding: ${rm(14)} ${rm(24)};
        font-size: ${rm(14)};
    `}
    
    &:hover:not(:disabled) {
        background: #5A6268;
    }
    
    &:active:not(:disabled) {
        background: #495057;
        transform: scale(0.98);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        background: #9ca3af;
        pointer-events: none;
    }
`

const StyledModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: ${rm(20)};
`

const StyledModal = styled.div`
    background: white;
    border-radius: ${rm(16)};
    padding: ${rm(40)};
    max-width: ${rm(500)};
    width: 100%;
    text-align: center;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
`

const StyledModalHeader = styled.h2`
    font-size: ${rm(24)};
    color: ${colors.black100};
    ${fontGeist(600)};
    font-weight: 600;
    margin: 0 0 ${rm(32)} 0;
`

const StyledCheckmarkContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: ${rm(24)};
`

const StyledCheckmark = styled.div`
    width: ${rm(120)};
    height: ${rm(120)};
    background: #6C757D;
    border-radius: ${rm(16)};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(108, 117, 125, 0.3);
`

const StyledThankYou = styled.p`
    font-size: ${rm(18)};
    color: ${colors.black100};
    ${fontGeist(500)};
    font-weight: 500;
    margin: 0 0 ${rm(24)} 0;
`

const StyledDownloadSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${rm(12)};
    margin-bottom: ${rm(16)};
    cursor: pointer;
    transition: opacity 0.2s ease;
    
    &:hover {
        opacity: 0.8;
    }
`

const StyledDownloadIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledDownloadText = styled.span`
    font-size: ${rm(16)};
    color: ${colors.black100};
    ${fontGeist(400)};
    text-decoration: underline;
`

const StyledEmailConfirmation = styled.p`
    font-size: ${rm(14)};
    color: #666;
    ${fontGeist(400)};
    margin: 0 0 ${rm(32)} 0;
`

const StyledTrackingButton = styled.button`
    background: #6C757D;
    border: none;
    border-radius: ${rm(8)};
    padding: ${rm(16)} ${rm(32)};
    font-size: ${rm(16)};
    color: #ffffff;
    ${fontGeist(500)};
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s ease;
    width: 100%;
    
    &:hover {
        background: #5A6268;
    }
    
    &:active {
        background: #495057;
    }
`

const StyledErrorMessage = styled.div`
    color: #dc3545;
    font-size: ${rm(14)};
    ${fontGeist(400)};
    margin-top: ${rm(8)};
    margin-bottom: ${rm(8)};
`

const StyledMinimumOrderWarning = styled.div`
    display: flex;
    align-items: center;
    gap: ${rm(12)};
    padding: ${rm(16)} ${rm(20)};
    background: #fff5f5;
    border: 2px solid #ff6b6b;
    border-radius: ${rm(8)};
    color: #dc3545;
    font-size: ${rm(16)};
    ${fontGeist(500)};
    margin-bottom: ${rm(20)};

    ${media.xsm`
        padding: ${rm(12)} ${rm(16)};
        font-size: ${rm(14)};
        gap: ${rm(10)};
        margin-bottom: ${rm(16)};
        flex-wrap: wrap;
    `}

    svg {
        width: ${rm(20)};
        height: ${rm(20)};
        flex-shrink: 0;

        ${media.xsm`
            width: ${rm(18)};
            height: ${rm(18)};
        `}
    }
`

const StyledMinimumNotice = styled.div`
    padding: ${rm(12)} ${rm(16)};
    background: #fff5f5;
    border: 1px solid #ff6b6b;
    border-radius: ${rm(8)};
    color: #dc3545;
    font-size: ${rm(14)};
    ${fontGeist(500)};
    text-align: center;
    margin-top: ${rm(16)};
    margin-bottom: ${rm(16)};

    ${media.xsm`
        padding: ${rm(10)} ${rm(12)};
        font-size: ${rm(12)};
        margin-top: ${rm(12)};
        margin-bottom: ${rm(12)};
    `}
`
