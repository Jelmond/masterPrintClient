import { useCartStore } from "@/store/cartStore";
import { colors, media, rm } from "@/styles";
import { fontGeist } from "@/styles/fonts";
import Link from "next/link";
import styled from "styled-components";

interface ProductCardProps {
    product: any;
}

export const ProductCard = ({ product }: ProductCardProps) => {

    const addToCart = useCartStore(state => state.addToCart);

    const handleAddToCart = (product: any) => {
        addToCart({
            productId: product.id,
            title: product.title,
            price: product.price,
            image: product.images[0]?.url
        });
    };
    

    return (
        <StyledProductCard>
            <img src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${product.images[0].url}`} alt={product.title} />
            <StyledHiddenLink href={`/products/${product?.id}`} target="_blank"/>
            <div className="content">
                <div className="title">{product.title}</div>
                <div className="priceContainer">
                    <div className="price">{product.price} руб.</div>
                    <div className="button" onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(product);}}
                    >
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="19.1667" y1="6" x2="19.1667" y2="32.3077" stroke="black"/>
                        <line x1="32.3077" y1="19.166" x2="6" y2="19.166" stroke="black"/>
                        </svg>
                    </div>
                </div>
            </div>
        </StyledProductCard>
    )
};

const StyledProductCard = styled.div`
    display: flex;
    flex-direction: column;
    width: ${rm(315)};
    overflow: hidden;
    position: relative;

    ${media.lg`
        width: ${rm(280)};
    `}

    ${media.md`
        width: ${rm(250)};
    `}

    ${media.xsm`
        width: 100%;
        max-width: ${rm(280)};
    `}

    img{
        border-radius: ${rm(5)};
        width: 100%;
        height: ${rm(470)};
        object-fit: cover;

        ${media.lg`
            height: ${rm(400)};
        `}

        ${media.md`
            height: ${rm(350)};
        `}

        ${media.xsm`
            height: ${rm(300)};
        `}
    }

    .content{
        display: flex;
        flex-direction: column;
        margin-top: ${rm(10)};
        z-index: 2;

        .title{
            font-size: ${rm(18)};
            ${fontGeist(400)};
            color: ${colors.black100};
            height: ${rm(50)};
            text-overflow: ellipsis;
            overflow: hidden;

            ${media.md`
                font-size: ${rm(16)};
                height: ${rm(45)};
            `}

            ${media.xsm`
                font-size: ${rm(14)};
                height: ${rm(40)};
            `}
        }

        .priceContainer{
            display: flex;
            align-items: center;
            width: 100%;
            justify-content: space-between;
            margin-top: ${rm(10)};

            .price{
                font-size: ${rm(24)};
                ${fontGeist(400)};
                color: ${colors.black100};

                ${media.md`
                    font-size: ${rm(20)};
                `}

                ${media.xsm`
                    font-size: ${rm(18)};
                `}
            }

            .button{
                width: ${rm(38)};
                height: ${rm(38)};
                cursor: pointer;
                
                transition: opacity .3s ease-in-out;

                ${media.xsm`
                    width: ${rm(32)};
                    height: ${rm(32)};
                `}

                &:hover{
                    opacity: .7;
                }
            }
        }
    }
`;


const StyledHiddenLink = styled.a`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
`