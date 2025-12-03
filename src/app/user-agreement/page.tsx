'use client'

import { colors, media, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"

export default function UserAgreementPage() {
    return (
        <StyledAgreementPage>
            <StyledContainer>
                <StyledTitle>Пользовательское соглашение</StyledTitle>
                
                <StyledIntroText>
                    Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует отношения между 
                    ООО «Мастерпринт-Пак» (далее — «Продавец», «Мы», «Нас») и пользователем интернет-магазина 
                    mppshop.by (далее — «Покупатель», «Вы», «Ваш») при использовании интернет-магазина и оформлении заказов.
                </StyledIntroText>

                <StyledLastUpdate>
                    <strong>Дата последнего обновления:</strong> 01 декабря 2025 г.
                </StyledLastUpdate>

                <StyledContent>
                    <StyledSection>
                        <StyledSectionTitle>1. Общие положения</StyledSectionTitle>
                        <StyledText>
                            1.1. Настоящее Соглашение является публичной офертой в соответствии со статьей 405 Гражданского кодекса Республики Беларусь.
                        </StyledText>
                        <StyledText>
                            1.2. Используя интернет-магазин mppshop.by, Вы автоматически соглашаетесь с условиями настоящего Соглашения и обязуетесь их соблюдать.
                        </StyledText>
                        <StyledText>
                            1.3. Если Вы не согласны с условиями настоящего Соглашения, Вы не имеете права использовать интернет-магазин и должны немедленно прекратить его использование.
                        </StyledText>
                        <StyledText>
                            1.4. Продавец оставляет за собой право в любое время изменять условия настоящего Соглашения без предварительного уведомления Покупателя. 
                            Новая редакция Соглашения вступает в силу с момента её размещения на сайте.
                        </StyledText>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>2. Термины и определения</StyledSectionTitle>
                        <StyledText>
                            2.1. <strong>Интернет-магазин</strong> — веб-сайт mppshop.by, принадлежащий ООО «Мастерпринт-Пак», 
                            на котором размещена информация о товарах и услугах, а также условия их приобретения.
                        </StyledText>
                        <StyledText>
                            2.2. <strong>Покупатель</strong> — физическое или юридическое лицо, использующее интернет-магазин 
                            для оформления заказа на приобретение товаров.
                        </StyledText>
                        <StyledText>
                            2.3. <strong>Товар</strong> — продукция, представленная в каталоге интернет-магазина, 
                            информация о которой размещена на сайте.
                        </StyledText>
                        <StyledText>
                            2.4. <strong>Заказ</strong> — оформленный Покупателем запрос на приобретение товаров, 
                            содержащий сведения о выбранных товарах, их количестве и условиях доставки.
                        </StyledText>
                        <StyledText>
                            2.5. <strong>Минимальная сумма заказа</strong> — 50,00 (пятьдесят) белорусских рублей.
                        </StyledText>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>3. Регистрация и персональные данные</StyledSectionTitle>
                        <StyledText>
                            3.1. При оформлении заказа Покупатель предоставляет следующие персональные данные: 
                            ФИО, контактный телефон, адрес электронной почты, адрес доставки.
                        </StyledText>
                        <StyledText>
                            3.2. Покупатель гарантирует, что предоставленные им персональные данные являются достоверными и полными.
                        </StyledText>
                        <StyledText>
                            3.3. Продавец обязуется обрабатывать персональные данные Покупателя в соответствии с требованиями 
                            Закона Республики Беларусь «О защите персональных данных» и использовать их исключительно для целей 
                            исполнения заказа и связи с Покупателем.
                        </StyledText>
                        <StyledText>
                            3.4. Продавец не передаёт персональные данные Покупателя третьим лицам, за исключением случаев, 
                            предусмотренных законодательством Республики Беларусь.
                        </StyledText>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>4. Оформление и подтверждение заказа</StyledSectionTitle>
                        <StyledText>
                            4.1. Покупатель самостоятельно выбирает товары в каталоге интернет-магазина и добавляет их в корзину.
                        </StyledText>
                        <StyledText>
                            4.2. Для оформления заказа Покупатель заполняет форму заказа, указывая необходимые данные для доставки и оплаты.
                        </StyledText>
                        <StyledText>
                            4.3. Заказ считается оформленным после нажатия кнопки «Перейти к оплате» и получения Покупателем 
                            подтверждения о принятии заказа к обработке.
                        </StyledText>
                        <StyledText>
                            4.4. Продавец оставляет за собой право отказать в принятии заказа без объяснения причин, 
                            в том числе в случае отсутствия товара на складе или подозрения в мошенничестве.
                        </StyledText>
                        <StyledText>
                            4.5. После оформления заказа Покупатель получает подтверждение на указанный адрес электронной почты 
                            с информацией о заказе и реквизитами для оплаты.
                        </StyledText>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>5. Цены и оплата</StyledSectionTitle>
                        <StyledText>
                            5.1. Все цены на товары указаны в белорусских рублях и включают налог на добавленную стоимость (НДС), 
                            если иное не указано отдельно.
                        </StyledText>
                        <StyledText>
                            5.2. Продавец оставляет за собой право изменять цены на товары в любое время без предварительного уведомления. 
                            Цена товара на момент оформления заказа фиксируется и не подлежит изменению.
                        </StyledText>
                        <StyledText>
                            5.3. При заказе на сумму от 700,00 (семьсот) белорусских рублей предоставляется скидка 5% на товары.
                        </StyledText>
                        <StyledText>
                            5.4. При заказе на сумму от 1500,00 (одна тысяча пятьсот) белорусских рублей предоставляется скидка 20% на товары.
                        </StyledText>
                        <StyledText>
                            5.5. При выборе самовывоза предоставляется дополнительная скидка 3% на товары.
                        </StyledText>
                        <StyledText>
                            5.6. Способы оплаты: наличными или банковской картой при самовывозе, через систему ЕРИП, 
                            банковской картой через Альфа-банк, расчётный счёт (для юридических лиц).
                        </StyledText>
                        <StyledText>
                            5.7. Оплата заказа должна быть произведена в течение 3 (трёх) рабочих дней с момента оформления заказа, 
                            если иное не согласовано с менеджером.
                        </StyledText>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>6. Доставка</StyledSectionTitle>
                        <StyledText>
                            6.1. Доставка заказов осуществляется следующими способами:
                        </StyledText>
                        <StyledList>
                            <li>Самовывоз из пункта выдачи по адресу: г. Гродно, ул. Титова, 24 (бесплатно, скидка 3%)</li>
                            <li>Курьерская доставка DPD по всей Республике Беларусь</li>
                        </StyledList>
                        <StyledText>
                            6.2. Стоимость доставки курьером DPD составляет 20,00 (двадцать) белорусских рублей. 
                            При заказе на сумму от 400,00 (четыреста) белорусских рублей доставка осуществляется бесплатно.
                        </StyledText>
                        <StyledText>
                            6.3. Срок доставки курьером DPD составляет 2–3 рабочих дня в зависимости от города получателя.
                        </StyledText>
                        <StyledText>
                            6.4. При самовывозе Покупатель может забрать заказ в пункте выдачи в рабочие дни 
                            (понедельник–пятница) с 09:00 до 17:00, без обеда.
                        </StyledText>
                        <StyledText>
                            6.5. Продавец не несёт ответственности за задержку доставки, вызванную действиями службы доставки 
                            или обстоятельствами непреодолимой силы.
                        </StyledText>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>7. Возврат и обмен товара</StyledSectionTitle>
                        <StyledText>
                            7.1. Покупатель вправе отказаться от товара надлежащего качества в течение 14 (четырнадцати) дней 
                            с момента получения товара, если товар не был в употреблении, сохранены его потребительские свойства 
                            и товарный вид.
                        </StyledText>
                        <StyledText>
                            7.2. Возврат товара надлежащего качества возможен при условии, что сохранены его товарный вид, 
                            потребительские свойства, пломбы, фабричные ярлыки, а также имеется документ, подтверждающий факт 
                            покупки товара.
                        </StyledText>
                        <StyledText>
                            7.3. При возврате товара надлежащего качества стоимость доставки не возвращается.
                        </StyledText>
                        <StyledText>
                            7.4. Возврат денежных средств осуществляется тем же способом, которым была произведена оплата, 
                            в течение 10 (десяти) рабочих дней с момента получения товара Продавцом.
                        </StyledText>
                        <StyledText>
                            7.5. Товар ненадлежащего качества подлежит возврату или обмену в соответствии с требованиями 
                            законодательства Республики Беларусь о защите прав потребителей.
                        </StyledText>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>8. Ответственность сторон</StyledSectionTitle>
                        <StyledText>
                            8.1. Продавец несёт ответственность за качество товаров в соответствии с законодательством 
                            Республики Беларусь.
                        </StyledText>
                        <StyledText>
                            8.2. Продавец не несёт ответственности за ущерб, причинённый Покупателю в результате неправильного 
                            использования товара или несоблюдения инструкций по эксплуатации.
                        </StyledText>
                        <StyledText>
                            8.3. Покупатель несёт ответственность за достоверность предоставленных при оформлении заказа данных.
                        </StyledText>
                        <StyledText>
                            8.4. В случае неоплаты заказа в установленный срок Продавец вправе аннулировать заказ без уведомления Покупателя.
                        </StyledText>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>9. Интеллектуальная собственность</StyledSectionTitle>
                        <StyledText>
                            9.1. Все материалы интернет-магазина (тексты, изображения, логотипы, дизайн) являются объектами 
                            интеллектуальной собственности ООО «Мастерпринт-Пак» и защищены законодательством Республики Беларусь.
                        </StyledText>
                        <StyledText>
                            9.2. Использование материалов интернет-магазина без письменного разрешения Продавца запрещено.
                        </StyledText>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>10. Заключительные положения</StyledSectionTitle>
                        <StyledText>
                            10.1. Все споры, возникающие из настоящего Соглашения или в связи с ним, подлежат разрешению 
                            путём переговоров, а при недостижении согласия — в порядке, установленном законодательством 
                            Республики Беларусь.
                        </StyledText>
                        <StyledText>
                            10.2. Настоящее Соглашение регулируется законодательством Республики Беларусь.
                        </StyledText>
                        <StyledText>
                            10.3. Если какое-либо положение настоящего Соглашения признано недействительным, 
                            это не влияет на действительность остальных положений.
                        </StyledText>
                        <StyledText>
                            10.4. По всем вопросам, связанным с работой интернет-магазина и оформлением заказов, 
                            Покупатель может обратиться к Продавцу по контактным данным, указанным на сайте.
                        </StyledText>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>11. Реквизиты Продавца</StyledSectionTitle>
                        <StyledInfoList>
                            <StyledInfoItem>
                                <StyledInfoLabel>Наименование:</StyledInfoLabel>
                                <StyledInfoValue>Общество с ограниченной ответственностью «Мастерпринт-Пак»</StyledInfoValue>
                            </StyledInfoItem>
                            <StyledInfoItem>
                                <StyledInfoLabel>УНП:</StyledInfoLabel>
                                <StyledInfoValue>591511468</StyledInfoValue>
                            </StyledInfoItem>
                            <StyledInfoItem>
                                <StyledInfoLabel>Юридический адрес:</StyledInfoLabel>
                                <StyledInfoValue>231761, г. Скидель, ул. Промышленная, 6Б</StyledInfoValue>
                            </StyledInfoItem>
                            <StyledInfoItem>
                                <StyledInfoLabel>Свидетельство о государственной регистрации:</StyledInfoLabel>
                                <StyledInfoValue>Регистрирующий орган: Гродненский райисполком, дата решения о государственной регистрации 18.02.2014</StyledInfoValue>
                            </StyledInfoItem>
                        </StyledInfoList>
                    </StyledSection>
                </StyledContent>

                <StyledAcceptance>
                    Используя интернет-магазин mppshop.by, Вы подтверждаете, что ознакомились с условиями настоящего 
                    Пользовательского соглашения и согласны с ними.
                </StyledAcceptance>
            </StyledContainer>
        </StyledAgreementPage>
    )
}

const StyledAgreementPage = styled.div`
    min-height: 100vh;
    padding-top: ${rm(80)};
    background-color: #E6E8E6;
    padding-bottom: ${rm(80)};

    ${media.xsm`
        padding-top: ${rm(60)};
        padding-bottom: ${rm(60)};
    `}
`

const StyledContainer = styled.div`
    max-width: ${rm(1000)};
    margin: 0 auto;
    padding: ${rm(80)} ${rm(125)};

    ${media.lg`
        padding: ${rm(60)} ${rm(80)};
    `}

    ${media.md`
        padding: ${rm(50)} ${rm(40)};
    `}

    ${media.xsm`
        padding: ${rm(40)} ${rm(20)};
    `}
`

const StyledTitle = styled.h1`
    ${fontGeist(700)};
    font-size: ${rm(48)};
    color: #111111;
    margin: 0 0 ${rm(40)} 0;
    text-align: center;

    ${media.lg`
        font-size: ${rm(40)};
        margin-bottom: ${rm(35)};
    `}

    ${media.md`
        font-size: ${rm(36)};
        margin-bottom: ${rm(30)};
    `}

    ${media.xsm`
        font-size: ${rm(28)};
        margin-bottom: ${rm(24)};
    `}
`

const StyledIntroText = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(18)};
    color: #1C1C1C;
    line-height: 1.7;
    margin: 0 0 ${rm(24)} 0;
    text-align: justify;

    ${media.md`
        font-size: ${rm(16)};
    `}

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledLastUpdate = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(14)};
    color: #666;
    margin: 0 0 ${rm(40)} 0;
    text-align: right;
    font-style: italic;

    ${media.xsm`
        font-size: ${rm(12)};
        margin-bottom: ${rm(30)};
        text-align: left;
    `}

    strong {
        ${fontGeist(600)};
    }
`

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(40)};

    ${media.md`
        gap: ${rm(35)};
    `}

    ${media.xsm`
        gap: ${rm(30)};
    `}
`

const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(16)};
    background-color: #FFFFFF;
    padding: ${rm(32)};
    border-radius: ${rm(12)};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    ${media.md`
        padding: ${rm(28)};
        gap: ${rm(14)};
    `}

    ${media.xsm`
        padding: ${rm(20)};
        gap: ${rm(12)};
    `}
`

const StyledSectionTitle = styled.h2`
    ${fontGeist(700)};
    font-size: ${rm(28)};
    color: #111111;
    margin: 0 0 ${rm(8)} 0;

    ${media.md`
        font-size: ${rm(24)};
    `}

    ${media.xsm`
        font-size: ${rm(20)};
    `}
`

const StyledText = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(16)};
    color: #1C1C1C;
    line-height: 1.7;
    margin: 0;
    text-align: justify;

    ${media.md`
        font-size: ${rm(15)};
    `}

    ${media.xsm`
        font-size: ${rm(14)};
    `}

    strong {
        ${fontGeist(600)};
    }
`

const StyledList = styled.ul`
    ${fontGeist(400)};
    font-size: ${rm(16)};
    color: #1C1C1C;
    line-height: 1.7;
    margin: ${rm(8)} 0;
    padding-left: ${rm(24)};

    ${media.xsm`
        font-size: ${rm(14)};
        padding-left: ${rm(20)};
    `}

    li {
        margin-bottom: ${rm(8)};
        
        &:last-child {
            margin-bottom: 0;
        }
    }
`

const StyledInfoList = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(16)};
    margin-top: ${rm(8)};
`

const StyledInfoItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(6)};

    ${media.md`
        flex-direction: column;
    `}
`

const StyledInfoLabel = styled.span`
    ${fontGeist(600)};
    font-size: ${rm(16)};
    color: #111111;

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledInfoValue = styled.span`
    ${fontGeist(400)};
    font-size: ${rm(16)};
    color: #1C1C1C;
    line-height: 1.6;

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledAcceptance = styled.div`
    ${fontGeist(500)};
    font-size: ${rm(18)};
    color: #111111;
    line-height: 1.7;
    margin-top: ${rm(50)};
    padding: ${rm(24)};
    background-color: #F8F9FA;
    border-left: 4px solid #111111;
    border-radius: ${rm(8)};
    text-align: center;

    ${media.md`
        font-size: ${rm(16)};
        padding: ${rm(20)};
    `}

    ${media.xsm`
        font-size: ${rm(14)};
        padding: ${rm(16)};
        margin-top: ${rm(40)};
    `}
`

