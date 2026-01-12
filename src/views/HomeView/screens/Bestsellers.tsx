import { colors, media, rm } from "@/styles"
import { fontGeist, fontPoppins } from "@/styles/fonts"
import Image from "next/image"
import styled from "styled-components"
import { SwiperSlide } from "swiper/react"
import { Swiper } from "swiper/react"
import { Autoplay } from "swiper/modules"
import { useCartStore } from "@/store/cartStore"
import { useWindowWidth } from "@react-hook/window-size"
import { AnimLink } from "@/layouts/AnimatedRouterLayout/AnimatedRouterLayout"
import { useEffect, useState, useRef } from "react"
import 'swiper/css'
import type { Swiper as SwiperType } from 'swiper'

export const Bestsellers = () => {

    const width = useWindowWidth()
    const [bestsellers, setBestsellers] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)
    const swiperRef = useRef<SwiperType | null>(null)

    const addToCart = useCartStore(state => state.addToCart);
    const items = useCartStore(state => state.items);

    useEffect(() => {
        const fetchBestsellers = async () => {
            try {
                setLoading(true)
                const productsUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?filters[isBestseller][$eq]=true&populate=*`;
                
                const productsRes = await fetch(productsUrl, { 
                    cache: 'no-store',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!productsRes.ok) {
                    throw new Error(`Failed to fetch products: ${productsRes.statusText}`);
                }

                const productsData = await productsRes.json();
                const allProducts = productsData?.data || [];
                setBestsellers(allProducts);
            } catch (err) {
                setError(err instanceof Error ? err : new Error('An error occurred'));
            } finally {
                setLoading(false);
            }
        };

        fetchBestsellers();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (bestsellers.length === 0) return null;
    
    const handleAddToCart = (product: any) => {
        if (!product.slug) {
            console.error('Product missing slug:', product);
            return;
        }
        
        addToCart({
            productSlug: product.slug,
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
            <StyledProductsSwiper
                onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
                onMouseLeave={() => swiperRef.current?.autoplay?.start()}
            >
                <Swiper
                    spaceBetween={30}
                    slidesPerView={width > 1440 ? 5 : width > 1024 ? 3 : 1.5}
                    className="products-swiper"
                    loop={true}
                    speed={2000}
                    autoplay={{
                        delay: 500,
                        disableOnInteraction: false,
                    }}
                    allowTouchMove={false}
                    modules={[Autoplay]}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper
                    }}
                >
                    {bestsellers.map((product, index) => (
                        <SwiperSlide key={index}>
                            <StyledSlide href={`/products/${product?.slug || product?.id}`} isUp={index % 2 === 1}>
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
    font-size: ${rm(40)};
    color: ${colors.black100};
    ${fontGeist(600)};
    margin-bottom: ${rm(25)};
    width: 100%;
    text-align: center;
    padding: 0 ${rm(50)};

    ${media.lg`
        font-size: ${rm(36)};
        padding: 0 ${rm(40)};
        margin-bottom: ${rm(20)};
    `}

    ${media.md`
        font-size: ${rm(32)};
        padding: 0 ${rm(30)};
        margin-bottom: ${rm(20)};
    `}

    ${media.xsm`
        font-size: ${rm(24)};
        padding: 0 ${rm(20)};
        margin-bottom: ${rm(15)};
    `}
`
const StyledProductsSwiper = styled.div`
    width: 100%;
    padding: ${rm(40)} 0;
    margin-bottom: ${rm(140)};

    ${media.lg`
        padding: ${rm(35)} 0;
        margin-bottom: ${rm(100)};
    `}

    ${media.md`
        padding: ${rm(30)} 0;
        margin-bottom: ${rm(80)};
    `}

    ${media.xsm`
        padding: ${rm(20)} 0;
        margin-bottom: ${rm(50)};
    `}
    
    .swiper-button-next,
    .swiper-button-prev {
        color: ${colors.black100};

        ${media.xsm`
            display: none;
        `}
    }
    
    .swiper-pagination-bullet-active {
        background: ${colors.black100};
    }

    .products-swiper{
        padding: 0 ${rm(50)};
        width: 100%;

        ${media.lg`
            padding: 0 ${rm(40)};
        `}

        ${media.md`
            padding: 0 ${rm(30)};
        `}

        ${media.xsm`
            padding: 0 ${rm(20)};
        `}
    }
`

const StyledSlide = styled(AnimLink)<{ isUp: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: transform 0.3s ease;
    height: ${rm(580)};
    width: ${rm(340)};
    gap: ${rm(20)};
    background:rgb(221, 235, 255);
    border-radius: ${rm(20)};
    overflow: hidden;
    // height: 100%;

    ${media.lg`
        height: ${rm(520)};
        width: ${rm(300)};
    `}

    ${media.md`
        height: ${rm(450)};
        width: ${rm(280)};
        gap: ${rm(15)};
    `}

    ${media.xsm`
        height: ${rm(350)} !important;
        width: 100%;
        max-width: ${rm(280)};
        gap: ${rm(12)};
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
    height: ${rm(430)};
    border-radius: ${rm(10)};
    overflow: hidden;
    
    ${media.lg`
        height: ${rm(320)};
    `}

    ${media.xsm`
        height: ${rm(220)};    
    `}

    img{
        transition: transform 0.3s ease;
    }
`

const StyledSlideContent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    flex: 2;

    padding: ${rm(20)};

    ${media.xsm`
        padding: ${rm(10)};
    `}

    .text{
        display: flex;
        flex-direction: column;
        gap: ${rm(6)};
        width: 80%;
        justify-content: space-between;
        height: 100%;

        .description{
            ${fontGeist(400)};
            font-size: ${rm(20)};
            color: ${colors.black100};

            ${media.md`
                font-size: ${rm(18)};
            `}

            ${media.xsm`
                font-size: ${rm(16)};
            `}
        }

        .price{
            ${fontPoppins(600)};
            font-size: ${rm(24)};
            color: ${colors.black100};

            ${media.md`
                font-size: ${rm(20)};
            `}

            ${media.xsm`
                font-size: ${rm(18)};
            `}
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