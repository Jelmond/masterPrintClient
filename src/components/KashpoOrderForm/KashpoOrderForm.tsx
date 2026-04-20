'use client'

import { useState } from 'react'
import styled from 'styled-components'
import { media, rm } from '@/styles'
import { fontGeist } from '@/styles/fonts'

interface FormErrors {
    name?: string
    phone?: string
    email?: string
    circulation?: string
    cardboardType?: string
    consent?: string
}

export const KashpoOrderForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        circulation: '',
        cardboardType: '',
        message: '',
        consent: false,
    })
    const [errors, setErrors] = useState<FormErrors>({})
    const [isLoading, setIsLoading] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)

    const validate = () => {
        const next: FormErrors = {}
        if (!formData.name.trim()) next.name = 'Введите имя'
        if (!formData.phone.trim()) next.phone = 'Введите телефон'
        if (!formData.email.trim()) next.email = 'Введите email'
        if (!formData.circulation) next.circulation = 'Выберите тираж'
        if (!formData.cardboardType) next.cardboardType = 'Выберите тип картона'
        if (!formData.consent) next.consent = 'Нужно согласие на обработку данных'
        setErrors(next)
        return Object.keys(next).length === 0
    }

    const onChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target
        const checked = (e.target as HTMLInputElement).checked
        setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }))
        }
        if (submitMessage) setSubmitMessage('')
    }

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!validate()) return

        setIsLoading(true)
        try {
            const payload = {
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                company: 'Кашпо под заказ',
                message: [
                    `Тираж: ${formData.circulation}`,
                    `Тип картона: ${formData.cardboardType}`,
                    formData.message ? `Комментарий: ${formData.message}` : '',
                ]
                    .filter(Boolean)
                    .join('\n'),
            }

            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })
            const data = await res.json()
            if (!res.ok) throw new Error(data?.error || 'Ошибка отправки')

            setIsSuccess(true)
            setSubmitMessage('Заявка отправлена. Мы свяжемся с вами в ближайшее время.')
            setFormData({
                name: '',
                phone: '',
                email: '',
                circulation: '',
                cardboardType: '',
                message: '',
                consent: false,
            })
        } catch (err) {
            setIsSuccess(false)
            setSubmitMessage(err instanceof Error ? err.message : 'Ошибка отправки заявки')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Wrap>
            <Title>Мы делаем кашпо под заказ</Title>
            <Form onSubmit={onSubmit}>
                <Grid>
                    <Field>
                        <Label>Имя</Label>
                        <Input name="name" value={formData.name} onChange={onChange} />
                        {errors.name && <ErrorText>{errors.name}</ErrorText>}
                    </Field>
                    <Field>
                        <Label>Телефон</Label>
                        <Input name="phone" value={formData.phone} onChange={onChange} />
                        {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
                    </Field>
                    <Field>
                        <Label>Email</Label>
                        <Input type="email" name="email" value={formData.email} onChange={onChange} />
                        {errors.email && <ErrorText>{errors.email}</ErrorText>}
                    </Field>
                    <Field>
                        <Label>Тираж</Label>
                        <Select name="circulation" value={formData.circulation} onChange={onChange}>
                            <option value="">Выберите тираж</option>
                            <option value="до 100">до 100 шт.</option>
                            <option value="100-500">100-500 шт.</option>
                            <option value="500-1000">500-1000 шт.</option>
                            <option value="1000+">1000+ шт.</option>
                        </Select>
                        {errors.circulation && <ErrorText>{errors.circulation}</ErrorText>}
                    </Field>
                    <Field>
                        <Label>Тип картона</Label>
                        <Select name="cardboardType" value={formData.cardboardType} onChange={onChange}>
                            <option value="">Выберите тип картона</option>
                            <option value="мелованный">Мелованный</option>
                            <option value="дизайнерский">Дизайнерский</option>
                            <option value="крафт">Крафт</option>
                            <option value="микрогофрокартон">Микрогофрокартон</option>
                        </Select>
                        {errors.cardboardType && <ErrorText>{errors.cardboardType}</ErrorText>}
                    </Field>
                    <Field>
                        <Label>Комментарий (опционально)</Label>
                        <Input name="message" value={formData.message} onChange={onChange} />
                    </Field>
                </Grid>

                <ConsentRow>
                    <input
                        id="kashpo-consent"
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={onChange}
                    />
                    <label htmlFor="kashpo-consent">Я согласен на обработку персональных данных</label>
                </ConsentRow>
                {errors.consent && <ErrorText>{errors.consent}</ErrorText>}

                {submitMessage && <Status $success={isSuccess}>{submitMessage}</Status>}

                <Submit disabled={isLoading}>{isLoading ? 'Отправка...' : 'Отправить'}</Submit>
            </Form>
        </Wrap>
    )
}

const Wrap = styled.section`
    width: 100%;
    padding: ${rm(120)} ${rm(250)} ${rm(10)};
    ${media.lg`padding: ${rm(75)} ${rm(120)} ${rm(5)};`}
    ${media.md`padding: ${rm(70)} ${rm(60)} ${rm(0)};`}
    ${media.xsm`padding: ${rm(60)} ${rm(20)} ${rm(0)};`}
`

const Title = styled.h2`
    ${fontGeist(700)};
    font-size: ${rm(42)};
    color: #1c1c1c;
    margin: 0 0 ${rm(24)} 0;
    ${media.md`font-size: ${rm(34)};`}
    ${media.xsm`font-size: ${rm(26)};`}
`

const Form = styled.form`
    background: #fff;
    border-radius: ${rm(18)};
    border: 1px solid rgba(0, 0, 0, 0.06);
    padding: ${rm(24)};
    display: flex;
    flex-direction: column;
    gap: ${rm(16)};
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${rm(14)};
    ${media.xsm`grid-template-columns: 1fr;`}
`

const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(6)};
`

const Label = styled.label`
    ${fontGeist(500)};
    font-size: ${rm(13)};
    color: #444;
`

const Input = styled.input`
    height: ${rm(46)};
    border: 1px solid #dcdfe4;
    border-radius: ${rm(10)};
    padding: 0 ${rm(12)};
    ${fontGeist(400)};
    font-size: ${rm(15)};
`

const Select = styled.select`
    height: ${rm(46)};
    border: 1px solid #dcdfe4;
    border-radius: ${rm(10)};
    padding: 0 ${rm(12)};
    ${fontGeist(400)};
    font-size: ${rm(15)};
    background: #fff;
`

const ConsentRow = styled.div`
    display: flex;
    align-items: center;
    gap: ${rm(8)};
    label {
        ${fontGeist(400)};
        font-size: ${rm(13)};
        color: #444;
    }
`

const Submit = styled.button`
    align-self: flex-start;
    border: none;
    border-radius: ${rm(10)};
    background: #1c1c1c;
    color: #fff;
    ${fontGeist(600)};
    font-size: ${rm(15)};
    padding: ${rm(12)} ${rm(22)};
    cursor: pointer;
    &:disabled {
        opacity: 0.7;
        cursor: default;
    }
`

const ErrorText = styled.span`
    ${fontGeist(400)};
    font-size: ${rm(12)};
    color: #d92727;
`

const Status = styled.div<{ $success: boolean }>`
    ${fontGeist(400)};
    font-size: ${rm(13)};
    color: ${(p) => (p.$success ? '#0f7a3d' : '#d92727')};
`

