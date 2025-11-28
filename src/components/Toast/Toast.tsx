'use client'

import { useToastStore } from "@/store/toastStore"
import { rm, media } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled, { keyframes } from "styled-components"

const slideInRight = keyframes`
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`

const slideOutRight = keyframes`
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(100%);
        opacity: 0;
    }
`

export const Toast = () => {
    const { toasts, removeToast } = useToastStore()

    if (toasts.length === 0) return null

    return (
        <StyledToastContainer>
            {toasts.map((toast) => (
                <StyledToast
                    key={toast.id}
                    $type={toast.type || 'success'}
                    onClick={() => removeToast(toast.id)}
                >
                    <StyledIcon $type={toast.type || 'success'}>
                        {toast.type === 'success' ? (
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        ) : toast.type === 'error' ? (
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 6.66667V10M10 13.3333H10.0083M18.3333 10C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39763 18.3333 1.66667 14.6024 1.66667 10C1.66667 5.39763 5.39763 1.66667 10 1.66667C14.6024 1.66667 18.3333 5.39763 18.3333 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        )}
                    </StyledIcon>
                    <StyledMessage>{toast.message}</StyledMessage>
                    <StyledCloseButton>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </StyledCloseButton>
                </StyledToast>
            ))}
        </StyledToastContainer>
    )
}

const StyledToastContainer = styled.div`
    position: fixed;
    top: ${rm(20)};
    right: ${rm(20)};
    z-index: 10000;
    display: flex;
    flex-direction: column;
    gap: ${rm(12)};
    pointer-events: none;

    ${media.xsm`
        top: ${rm(16)};
        right: ${rm(16)};
        left: ${rm(16)};
        gap: ${rm(10)};
    `}
`

const StyledToast = styled.div<{ $type: 'success' | 'error' | 'info' }>`
    display: flex;
    align-items: center;
    gap: ${rm(12)};
    padding: ${rm(16)} ${rm(20)};
    background: ${props => {
        if (props.$type === 'success') return 'linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)';
        if (props.$type === 'error') return 'linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%)';
        return 'linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)';
    }};
    color: ${props => {
        if (props.$type === 'success') return '#065F46';
        if (props.$type === 'error') return '#991B1B';
        return '#1E40AF';
    }};
    border-radius: ${rm(12)};
    box-shadow: 
        0 10px 25px rgba(0, 0, 0, 0.1),
        0 4px 12px rgba(0, 0, 0, 0.08);
    border: 1px solid ${props => {
        if (props.$type === 'success') return '#A7F3D0';
        if (props.$type === 'error') return '#FECACA';
        return '#BFDBFE';
    }};
    pointer-events: auto;
    cursor: pointer;
    animation: ${slideInRight} 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transition: all 0.3s ease;
    min-width: ${rm(300)};
    max-width: ${rm(400)};

    ${media.xsm`
        padding: ${rm(14)} ${rm(16)};
        gap: ${rm(10)};
        min-width: auto;
        max-width: 100%;
        border-radius: ${rm(10)};
    `}

    &:hover {
        transform: translateY(-2px);
        box-shadow: 
            0 12px 30px rgba(0, 0, 0, 0.12),
            0 6px 16px rgba(0, 0, 0, 0.1);
    }
`

const StyledIcon = styled.div<{ $type: 'success' | 'error' | 'info' }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${rm(32)};
    height: ${rm(32)};
    flex-shrink: 0;
    background: ${props => {
        if (props.$type === 'success') return '#10B981';
        if (props.$type === 'error') return '#EF4444';
        return '#3B82F6';
    }};
    border-radius: 50%;
    color: white;

    ${media.xsm`
        width: ${rm(28)};
        height: ${rm(28)};
    `}

    svg {
        width: ${rm(16)};
        height: ${rm(16)};
    }
`

const StyledMessage = styled.span`
    ${fontGeist(500)};
    font-size: ${rm(14)};
    line-height: 1.5;
    flex: 1;

    ${media.xsm`
        font-size: ${rm(13)};
    `}
`

const StyledCloseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${rm(24)};
    height: ${rm(24)};
    flex-shrink: 0;
    background: transparent;
    border: none;
    cursor: pointer;
    color: inherit;
    opacity: 0.6;
    transition: opacity 0.2s ease;
    padding: 0;

    ${media.xsm`
        width: ${rm(20)};
        height: ${rm(20)};
    `}

    &:hover {
        opacity: 1;
    }

    svg {
        width: ${rm(14)};
        height: ${rm(14)};
    }
`

