'use client'

import { useStrapi } from "@/hooks/useStrapi"
import { colors, media, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"
import { AnimLink } from "@/layouts/AnimatedRouterLayout/AnimatedRouterLayout"

// ─── Types ────────────────────────────────────────────────────────────────────

interface StrapiTextNode {
    type: 'text'
    text: string
    bold?: boolean
    italic?: boolean
    underline?: boolean
    strikethrough?: boolean
    code?: boolean
}

interface StrapiLinkNode {
    type: 'link'
    url: string
    children: StrapiTextNode[]
}

type StrapiInlineNode = StrapiTextNode | StrapiLinkNode

interface StrapiParagraphBlock {
    type: 'paragraph'
    children: StrapiInlineNode[]
}

interface StrapiHeadingBlock {
    type: 'heading'
    level: 1 | 2 | 3 | 4 | 5 | 6
    children: StrapiInlineNode[]
}

interface StrapiListItemBlock {
    type: 'list-item'
    children: StrapiInlineNode[]
}

interface StrapiListBlock {
    type: 'list'
    format: 'ordered' | 'unordered'
    children: StrapiListItemBlock[]
}

type StrapiBlock =
    | StrapiParagraphBlock
    | StrapiHeadingBlock
    | StrapiListBlock

interface SaleItem {
    name?: string
    description?: StrapiBlock[] | string | null
    sale?: { name?: string; priority?: number } | null
}

interface SalesPageData {
    data: {
        sale?: SaleItem[]
    }
}

// ─── Richtext renderer ────────────────────────────────────────────────────────

function renderInline(nodes: StrapiInlineNode[]): React.ReactNode {
    return nodes.map((node, i) => {
        if (node.type === 'link') {
            return (
                <a key={i} href={node.url} target="_blank" rel="noopener noreferrer">
                    {renderInline(node.children)}
                </a>
            )
        }
        let content: React.ReactNode = node.text
        if (node.bold) content = <strong key={i}>{content}</strong>
        if (node.italic) content = <em key={i}>{content}</em>
        if (node.underline) content = <u key={i}>{content}</u>
        if (node.code) content = <code key={i}>{content}</code>
        return <span key={i}>{content}</span>
    })
}

function RichText({ value }: { value: StrapiBlock[] | string | null | undefined }) {
    if (!value) return null

    if (typeof value === 'string') {
        return <StyledRichText dangerouslySetInnerHTML={{ __html: value }} />
    }

    return (
        <StyledRichText>
            {value.map((block, i) => {
                if (block.type === 'paragraph') {
                    return <p key={i}>{renderInline(block.children)}</p>
                }
                if (block.type === 'heading') {
                    const Tag = `h${block.level}` as keyof JSX.IntrinsicElements
                    //@ts-expect-error
                    return <Tag key={i}>{renderInline(block.children)}</Tag>
                }
                if (block.type === 'list') {
                    const List = block.format === 'ordered' ? 'ol' : 'ul'
                    return (
                        <List key={i}>
                            {block.children.map((item, j) => (
                                <li key={j}>{renderInline(item.children)}</li>
                            ))}
                        </List>
                    )
                }
                return null
            })}
        </StyledRichText>
    )
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function toAnchorId(name: string): string {
    return name
        .toLowerCase()
        .replace(/[«»""'']/g, '')
        .replace(/\s+/g, '-')
        .replace(/[^a-zа-яёa-z0-9\-]/gi, '')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SalesPage() {
    const { data, loading, error } = useStrapi<SalesPageData>({
        path: '/api/sales-page/full',
    })

    const sales = data?.data?.sale ?? []

    return (
        <StyledPage>
            <StyledContainer>
                <StyledTitle>Акции</StyledTitle>

                {loading && (
                    <StyledLoading>
                        <StyledSpinner />
                    </StyledLoading>
                )}

                {error && (
                    <StyledErrorMsg>Не удалось загрузить акции. Попробуйте позже.</StyledErrorMsg>
                )}

                {!loading && !error && sales.length === 0 && (
                    <StyledEmpty>Актуальных акций нет. Загляните позже!</StyledEmpty>
                )}

                {!loading && !error && sales.length > 0 && (
                    <>
                        <StyledQuickNav>
                            {sales.map((item, i) => {
                                const title = item.name ?? `Акция ${i + 1}`
                                return (
                                    <StyledQuickLink key={i} href={`#${toAnchorId(title)}`}>
                                        {title}
                                    </StyledQuickLink>
                                )
                            })}
                        </StyledQuickNav>

                        <StyledContent>
                            {sales.map((item, i) => {
                                const title = item.name ?? `Акция ${i + 1}`
                                return (
                                    <StyledPromoBlock key={i} id={toAnchorId(title)}>
                                        <StyledPromoTitle>{title}</StyledPromoTitle>
                                        <StyledSection>
                                            <RichText value={item.description} />
                                        </StyledSection>
                                    </StyledPromoBlock>
                                )
                            })}

                            <StyledCta>
                                <AnimLink href="/catalog">Перейти в каталог</AnimLink>
                            </StyledCta>
                        </StyledContent>
                    </>
                )}
            </StyledContainer>
        </StyledPage>
    )
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const StyledPage = styled.div`
    min-height: 100vh;
    padding-top: ${rm(80)};
    background-color: #e6e8e6;
    padding-bottom: ${rm(80)};

    ${media.xsm`
        padding-top: ${rm(60)};
        padding-bottom: ${rm(60)};
    `}
`

const StyledContainer = styled.div`
    max-width: ${rm(900)};
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
    margin: 0 0 ${rm(32)} 0;
    text-align: center;

    ${media.md`
        font-size: ${rm(36)};
    `}

    ${media.xsm`
        font-size: ${rm(28)};
        margin-bottom: ${rm(24)};
    `}
`

const StyledLoading = styled.div`
    display: flex;
    justify-content: center;
    padding: ${rm(60)} 0;
`

const StyledSpinner = styled.div`
    width: ${rm(40)};
    height: ${rm(40)};
    border: 3px solid rgba(0, 0, 0, 0.1);
    border-top-color: #1c1c1c;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;

    @keyframes spin {
        to { transform: rotate(360deg); }
    }
`

const StyledErrorMsg = styled.p`
    text-align: center;
    ${fontGeist(400)};
    font-size: ${rm(17)};
    color: #EF4444;
    padding: ${rm(40)} 0;
`

const StyledEmpty = styled.p`
    text-align: center;
    ${fontGeist(400)};
    font-size: ${rm(17)};
    color: #555;
    padding: ${rm(40)} 0;
`

const StyledQuickNav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: ${rm(10)};
    background: ${colors.white100};
    border-radius: ${rm(12)};
    padding: ${rm(24)} ${rm(28)};
    margin-bottom: ${rm(40)};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    ${media.xsm`
        padding: ${rm(18)} ${rm(16)};
        margin-bottom: ${rm(28)};
    `}
`

const StyledQuickLink = styled.a`
    ${fontGeist(600)};
    font-size: ${rm(16)};
    color: #1c1c1c;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: ${rm(8)};
    transition: opacity 0.2s ease;

    &::before {
        content: '→';
        font-size: ${rm(14)};
    }

    &:hover {
        opacity: 0.65;
    }

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(40)};
`

const StyledPromoBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(12)};
    scroll-margin-top: ${rm(100)};
`

const StyledPromoTitle = styled.h2`
    ${fontGeist(700)};
    font-size: ${rm(24)};
    color: #111111;
    margin: 0;
    padding-bottom: ${rm(10)};
    border-bottom: 2px solid rgba(0, 0, 0, 0.08);

    ${media.xsm`
        font-size: ${rm(20)};
    `}
`

const StyledSection = styled.div`
    background: ${colors.white100};
    border-radius: ${rm(12)};
    padding: ${rm(32)};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    ${media.xsm`
        padding: ${rm(22)} ${rm(18)};
    `}
`

const StyledRichText = styled.div`
    ${fontGeist(400)};
    font-size: ${rm(17)};
    color: #1c1c1c;
    line-height: 1.65;

    ${media.md`
        font-size: ${rm(16)};
    `}

    ${media.xsm`
        font-size: ${rm(14)};
    `}

    p {
        margin: 0 0 ${rm(12)} 0;
        &:last-child { margin-bottom: 0; }
    }

    ul, ol {
        margin: 0 0 ${rm(12)} 0;
        padding-left: ${rm(22)};

        ${media.xsm`
            padding-left: ${rm(18)};
        `}

        li {
            margin-bottom: ${rm(8)};
        }
    }

    strong {
        ${fontGeist(600)};
    }

    em {
        font-style: italic;
    }

    h2 {
        ${fontGeist(700)};
        font-size: ${rm(20)};
        margin: ${rm(20)} 0 ${rm(10)} 0;
    }

    h3 {
        ${fontGeist(600)};
        font-size: ${rm(18)};
        margin: ${rm(16)} 0 ${rm(8)} 0;
    }

    a {
        color: #1c1c1c;
        text-decoration: underline;
        &:hover { opacity: 0.7; }
    }

    code {
        font-family: monospace;
        background: rgba(0,0,0,0.05);
        padding: ${rm(2)} ${rm(6)};
        border-radius: ${rm(4)};
        font-size: 0.9em;
    }
`

const StyledCta = styled.div`
    margin-top: ${rm(8)};

    a {
        display: inline-block;
        ${fontGeist(600)};
        font-size: ${rm(16)};
        color: ${colors.white100};
        background: #1c1c1c;
        padding: ${rm(12)} ${rm(24)};
        border-radius: ${rm(8)};
        text-decoration: none;
        transition: opacity 0.2s;

        &:hover {
            opacity: 0.88;
        }
    }
`
