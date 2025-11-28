'use client'

import dynamic from "next/dynamic"
import { useAssetsLoader } from "@/layouts/AssetsLoaderLayout/AssetsLoaderLayout"

const CookieConsent = dynamic(() => import("react-cookie-consent"), { ssr: false })

export const Cookie = () => {
    const { fullyLoaded } = useAssetsLoader()
    return (
        <CookieConsent
            buttonText="Закрыть"
            cookieName="newProjectCookie"
            disableStyles={true}
            buttonClasses={'cookieButton'}
            containerClasses={'cookieContainer' + (fullyLoaded ? ' visible' : '')}
            contentClasses={'cookieContent'}
            expires={180}
        >
            <h5>Файлы cookie!</h5>
            <p>Привет, продолжая использовать этот сайт, вы соглашаетесь на использование файлов cookie. Для получения дополнительной информации обратитесь к нашей  
                <a href='#' aria-label='Перейти к Политике конфиденциальности' rel='noreferrer' target='_blank'>
                    Политике конфиденциальности
                </a>
            </p>
        </CookieConsent>
    )
}