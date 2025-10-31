import { colors, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"

interface FiltersSettingsProps {
    onClick: () => void
}

const StyledFiltersSettings = styled.div`
    margin-bottom: ${rm(20)};
    width: 80%;
    
    .visibleContent {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        padding: ${rm(8)} ${rm(10)};
        background: ${colors.white100};
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: ${rm(6)};
        transition: all 0.2s ease;
        width: 100%;

        &:hover {
            border-color: rgba(0, 0, 0, 0.2);
            background: #f8f9fa;
        }

        &:active {
            background: #f0f0f0;
        }

        p{
            font-size: ${rm(14)};
            ${fontGeist(500)};
            color: ${colors.black100};
            margin: 0;
            white-space: nowrap;
        }
    }
`

export const FiltersSettings = ({ onClick }: FiltersSettingsProps) => {
    return (
        <StyledFiltersSettings>
            <div className="visibleContent" onClick={onClick}>
                <p>Фильтры</p>
            </div>
        </StyledFiltersSettings>
    )
}