import { useStrapi } from "@/hooks/useStrapi"
import { colors, media, rm } from "@/styles"
import { fontGeist, fontPoppins } from "@/styles/fonts"
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"
import { SwiperSlide } from "swiper/react"
import { Swiper } from "swiper/react"
import { useCartStore } from "@/store/cartStore"
import { useWindowWidth } from "@react-hook/window-size"

export const Bestsellers = () => {

    const width = useWindowWidth()

    const { data, error, loading } = useStrapi<{ data: any[] }>({
        path: '/api/products',
    });
    const addToCart = useCartStore(state => state.addToCart);
    const items = useCartStore(state => state.items);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data?.data) return null;

    const trippledData = [...data?.data, ...data?.data, ...data?.data];
    
    const handleAddToCart = (product: any) => {
        addToCart({
            productId: product.id,
            title: product.title,
            price: product.price,
            image: product.images[0]?.url
        });
        console.log('Current cart items:', items);
        console.log('LocalStorage cart data:', localStorage.getItem('cart-storage'));
    };
    
    return (
        <StyledBestsellers>
            <StyledTitle>Бестселлеры</StyledTitle>
            <StyledProductsSwiper>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={width > 1440 ? 5 : width > 1024 ? 3 : 1.5}
                    className="products-swiper"
                >
                    {trippledData.map((product, index) => (
                        <SwiperSlide key={index}>
                            <StyledSlide href={`/products/${product?.id}`} isUp={index % 2 === 1}>
                                <StyledSlideImage>
                                    <Image 
                                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${product?.images[0]?.url}`}
                                        alt={product?.title}
                                        fill 
                                        style={{ objectFit: 'cover' }} 
                                    />
                                </StyledSlideImage>
                                <StyledSlideContent>
                                    <div className="text">
                                        <p className="description">{product?.title}</p>
                                        <p className="price">{product?.price} руб.</p>
                                    </div>
                                    <StyledAddButton onClick={(e) => {
                                        e.preventDefault();
                                        handleAddToCart(product);
                                    }}>
                                        <svg width="47" height="48" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_856_89)">
                                            <path d="M35.6607 26.5214H24.0498V38.2745H20.1795V26.5214H8.56866V22.6037H20.1795V10.8506H24.0498V22.6037H35.6607V26.5214Z" fill="#323232"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_856_89">
                                            <rect width="46.4434" height="47.0124" fill="white" transform="translate(0.491547 0.630859)"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                    </StyledAddButton>
                                </StyledSlideContent>
                            </StyledSlide>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </StyledProductsSwiper>
        </StyledBestsellers>
    )
}

const StyledBestsellers = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const StyledTitle = styled.p`
    font-size: ${rm(80)};
    color: ${colors.black100};
    ${fontGeist(600)};
    margin-bottom: ${rm(25)};
    margin-left: ${rm(125)};

    ${media.xsm`
        font-size: ${rm(40)};
        margin-left: ${rm(10)};
    `}
`
const StyledProductsSwiper = styled.div`
    width: 100%;
    padding: ${rm(40)} 0;
    margin-bottom: ${rm(140)};

    ${media.xsm`
        padding: ${rm(25)} 0;
        margin-bottom: ${rm(50)};
    `}
    
    .swiper-button-next,
    .swiper-button-prev {
        color: ${colors.black100};
    }
    
    .swiper-pagination-bullet-active {
        background: ${colors.black100};
    }

    .products-swiper{
        padding: 0 ${rm(50)};
        width: 100%;

        ${media.xsm`
            padding: 0 ${rm(25)};
        `}
    }
`

const StyledSlide = styled(Link)<{ isUp: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: transform 0.3s ease;
    height: ${rm(580)};
    width: ${rm(340)};
    gap: ${rm(20)};
    background: ${colors.bgMain};
    border-radius: ${rm(20)};
    overflow: hidden;

    ${media.md`
        height: ${rm(480)};
    `}

    ${media.xsm`
        height: ${rm(350)} !important;
        width: 100%;
    `}
    
    &:hover {
        img{
            transform: scale(1.05);
        }
    }
`

const StyledSlideImage = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: ${rm(10)};
    overflow: hidden;

    img{
        transition: transform 0.3s ease;
    }
`

const StyledSlideContent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    padding: ${rm(20)};

    ${media.xsm`
        padding: ${rm(10)};
    `}

    .text{
        display: flex;
        flex-direction: column;
        gap: ${rm(6)};
        width: 80%;

        .description{
            ${fontGeist(400)};
            font-size: ${rm(20)};
            color: ${colors.black100};
        }

        .price{
            ${fontPoppins(600)};
            font-size: ${rm(24)};
            color: ${colors.black100};
        }
    }
`

const StyledAddButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${rm(3)};
    width: ${rm(60)};
    height: ${rm(60)};
    border-radius: ${rm(15)};
    border: 1px solid #C4C4C4;
    padding-right: 0;

    transition: opacity 0.3s ease;

    ${media.xsm`
        width: ${rm(40)};
        height: ${rm(40)};
    `}

    &:hover{
        svg{
            transform: scale(1.1);
        }
    }

    svg{
        width: 100%;
        height: 100%;

        transition: transform 0.3s ease;
    }
`