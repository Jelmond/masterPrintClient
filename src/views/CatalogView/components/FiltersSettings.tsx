import { colors, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"

interface FiltersSettingsProps {
    onClick: () => void
}

const StyledFiltersSettings = styled.div`
    margin-bottom: ${rm(30)};
    
    .visibleContent {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: ${rm(12)};
        cursor: pointer;
        padding: ${rm(12)} ${rm(16)};
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: ${rm(12)};
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
        position: relative;
        overflow: hidden;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
        }

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
            
            &::before {
                left: 100%;
            }
        }

        &:active {
            transform: translateY(0);
        }

        p{
            font-size: ${rm(18)};
            ${fontGeist(600)};
            color: white;
            margin: 0;
            position: relative;
            z-index: 1;
        }

        svg{
            width: ${rm(14)};
            height: ${rm(14)};
            fill: white;
            transition: transform 0.2s ease;
            position: relative;
            z-index: 1;
        }

        &:hover svg {
            transform: translateX(${rm(4)});
        }
    }
`

export const FiltersSettings = ({ onClick }: FiltersSettingsProps) => {
    return (
        <StyledFiltersSettings>
            <div className="visibleContent" onClick={onClick}>
                <p>Настроить фильтры</p>
                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 18.03L1.77 19.8L11.67 9.9L1.77 0L0 1.77L8.13 9.9L0 18.03Z" fill="#323232"/>
                </svg>
            </div>
        </StyledFiltersSettings>
    )
}