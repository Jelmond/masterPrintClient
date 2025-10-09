export const fontOnest = (weight: number) => `
    \nfont-family: var(--font-onest);
    font-optical-sizing: auto;
    font-weight: ${weight};
    font-style: normal;\n
`

export const fontGeist = (weight: number) => `
    \nfont-family: var(--font-geist-sans);
    font-optical-sizing: auto;
    font-weight: ${weight};
    font-style: normal;\n
`

export const fontPoppins = (weight: number) => `
    \nfont-family: var(--font-poppins);
    font-optical-sizing: auto;
    font-weight: ${weight};
    font-style: normal;\n
`

export const fonts = {
    fontOnest,
    fontGeist,
    fontPoppins
}