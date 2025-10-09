import { ProductCard } from "@/components/products/ProductCard";
import { colors, rm } from "@/styles";
import { fontGeist } from "@/styles/fonts";
import styled from "styled-components";

interface ProductsLayoutProps {
    title: string
    tagsProductsData: any
    hasActiveFilters?: boolean
}

const StyledProductsLayout = styled.div`
    width: 100%;
    height: 100%;
    padding: ${rm(80)} ${rm(216)};
`

const StyledTitle = styled.p`
    font-size: ${rm(60)};
    ${fontGeist(400)};
    margin-bottom: ${rm(60)};
    color: ${colors.black100};
    text-transform: capitalize;
    margin-left: ${rm(20)};
`

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(160)};

    .section {

        .subTitle {
            font-size: ${rm(46)};
            ${fontGeist(400)};
            color: ${colors.black100};
            margin-bottom: ${rm(10)};
            text-transform: capitalize;
        }

        .products {
            display: flex;
            flex-wrap: wrap;
            gap: ${rm(54)};
        }
    }

`

const StyledNoResults = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${rm(80)} ${rm(40)};
    text-align: center;

    p {
        font-size: ${rm(24)};
        ${fontGeist(400)};
        color: #666;
        margin: 0;
        
        &:first-child {
            font-size: ${rm(28)};
            color: ${colors.black100};
            margin-bottom: ${rm(16)};
        }
    }
`

export const ProductsLayout = ({ title, tagsProductsData, hasActiveFilters }: ProductsLayoutProps) => {   
    const hasProducts = tagsProductsData.length > 0 && tagsProductsData.some((item: any) => item.products.length > 0)
    
    return (
        <StyledProductsLayout>
            <StyledTitle>{title}</StyledTitle>
            <StyledContent>
                {!hasProducts && hasActiveFilters ? (
                    <StyledNoResults>
                        <p>По выбранным фильтрам товары не найдены</p>
                        <p>Попробуйте изменить параметры поиска</p>
                    </StyledNoResults>
                ) : (
                    tagsProductsData.map((item: any, index: number) => (
                        <div className="section" key={index}>
                            <p className="subTitle">{item.title}</p>
                            <div className="products">
                                {item.products.map((product: any) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </StyledContent>
        </StyledProductsLayout>
    )
}