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
          '*?ybaip=*',
          '*?gad_source=*',
          '*?gad_campaignid=*',
          '*?gbraid=*',
          '*?etext=*',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/actual',
          '*?ybaip=*',
          '*?gad_source=*',
          '*?gad_campaignid=*',
          '*?gbraid=*',
          '*?etext=*',
        ],
      },
      {
        userAgent: 'Yandex',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/actual',
          '*?ybaip=*',
          '*?gad_source=*',
          '*?gad_campaignid=*',
          '*?gbraid=*',
          '*?etext=*',
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
