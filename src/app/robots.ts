import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mppshop.by';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/actual',
          '/products/null',
          '*?ybaip=*',
          '*?gad_source=*',
          '*?gad_campaignid=*',
          '*?gbraid=*',
          '*?etext=*',
          '*?brid=*',
          '*?_ym_debug=*',
          '*?from=*',
          '*?materials=*',
          '*?search=*',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/actual',
          '/products/null',
          '*?ybaip=*',
          '*?gad_source=*',
          '*?gad_campaignid=*',
          '*?gbraid=*',
          '*?etext=*',
          '*?brid=*',
          '*?_ym_debug=*',
          '*?from=*',
          '*?materials=*',
          '*?search=*',
        ],
      },
      {
        userAgent: 'Yandex',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/actual',
          '/products/null',
          '*?ybaip=*',
          '*?gad_source=*',
          '*?gad_campaignid=*',
          '*?gbraid=*',
          '*?etext=*',
          '*?brid=*',
          '*?_ym_debug=*',
          '*?from=*',
          '*?materials=*',
          '*?search=*',
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
