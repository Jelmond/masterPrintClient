import { colors, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"

interface ContactDropdownProps {
    isOpen: boolean
    onClose: () => void
}

const contactOptions = [
    {
        type: 'phone',
        label: 'Телефон',
        value: '+375 (44) 584-29-11',
        href: 'tel:+375445842911',
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9843 21.5573 21.2126 21.3528 21.3979C21.1482 21.5832 20.9074 21.7212 20.6446 21.8025C20.3818 21.8838 20.1028 21.9065 19.8288 21.8688C16.7432 21.3861 13.787 20.2103 11.19 18.41C8.77382 16.7368 6.72533 14.5907 5.19 12.11C3.38667 9.506 2.21667 6.546 1.75 3.46C1.71229 3.18697 1.73504 2.90885 1.81641 2.64665C1.89779 2.38445 2.03568 2.14419 2.22079 1.93996C2.4059 1.73574 2.63395 1.57212 2.88912 1.46026C3.14429 1.34839 3.42038 1.29099 3.7 1.292H6.7C7.23652 1.29481 7.73714 1.54578 8.06 1.97L10.22 4.97C10.4506 5.29599 10.5654 5.68607 10.545 6.082C10.5246 6.47793 10.37 6.85412 10.11 7.15L8.41 8.85C10.0743 11.5827 12.4173 13.9257 15.15 15.59L16.85 13.89C17.1459 13.63 17.5221 13.4754 17.918 13.455C18.3139 13.4346 18.704 13.5494 19.03 13.78L22.03 15.94C22.4542 16.2629 22.7052 16.7635 22.708 17.3L22.708 17.31Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    },
    {
        type: 'email',
        label: 'Email',
        value: 'shop@mpp.by',
        href: 'mailto:shop@mpp.by',
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="L22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    },
    {
        type: 'telegram',
        label: 'Telegram',
        value: '@mppshopsupport',
        href: 'https://t.me/mppshopsupport',
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    },
    {
        type: 'instagram',
        label: 'Instagram',
        value: '@mppshopgrodno',
        href: 'https://www.instagram.com/mppshopgrodno?igsh=MXZ5eWxoYXczOGE1dQ%3D%3D&utm_source=qr',
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 22h20L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    }
]

export const ContactDropdown = ({ isOpen, onClose }: ContactDropdownProps) => {
    if (!isOpen) return null

    return (
        <StyledDropdown>
            {contactOptions.map((option, index) => (
                <StyledContactOption key={index} href={option.href} target={(option.type === 'telegram' || option.type === 'instagram') ? '_blank' : undefined} onClick={onClose}>
                    <StyledIconWrapper>
                        {option.icon}
                    </StyledIconWrapper>
                    <StyledContent>
                        <StyledLabel>{option.label}</StyledLabel>
                        <StyledValue>{option.value}</StyledValue>
                    </StyledContent>
                </StyledContactOption>
            ))}
        </StyledDropdown>
    )
}

const StyledDropdown = styled.div`
    position: absolute;
    top: calc(100% + ${rm(16)});
    right: 0;
    background: ${colors.white100};
    border-radius: ${rm(12)};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    min-width: ${rm(220)};
    padding: ${rm(8)} 0;
    z-index: 1002;
    border: 1px solid rgba(0, 0, 0, 0.08);
    overflow: hidden;
`

const StyledContactOption = styled.a`
    display: flex;
    align-items: center;
    gap: ${rm(12)};
    padding: ${rm(12)} ${rm(16)};
    text-decoration: none;
    color: ${colors.black100};
    transition: background 0.2s ease;
    cursor: pointer;

    &:hover {
        background: #f8f9fa;
    }

    &:active {
        background: #f0f0f0;
    }
`

const StyledIconWrapper = styled.div`
    width: ${rm(32)};
    height: ${rm(32)};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${rm(6)};
    background: #f8f9fa;
    color: ${colors.black100};
    flex-shrink: 0;
`

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(2)};
    flex: 1;
`

const StyledLabel = styled.span`
    font-size: ${rm(12)};
    ${fontGeist(500)};
    color: #718096;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`

const StyledValue = styled.span`
    font-size: ${rm(14)};
    ${fontGeist(500)};
    color: ${colors.black100};
`

