import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mppshop.by';
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || '';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${siteUrl}/catalog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/bestsellers`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/actual`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/contacts`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/delivery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/payment`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/order-instructions`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/requests`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${siteUrl}/user-agreement`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ];

  try {
    // Fetch products
    const productsRes = await fetch(`${strapiUrl}/api/products?populate=*&pagination[limit]=1000`, {
      cache: 'no-store',
    });
    
    let productPages: MetadataRoute.Sitemap = [];
    if (productsRes.ok) {
      const productsData = await productsRes.json();
      const products = productsData?.data || [];
      
      productPages = products.map((product: any) => ({
        url: `${siteUrl}/products/${product.slug || product.id}`,
        lastModified: new Date(product.updatedAt || product.createdAt),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }));
    }

    // Fetch categories
    const categoriesRes = await fetch(`${strapiUrl}/api/categories?populate=*`, {
      cache: 'no-store',
    });
    
    let categoryPages: MetadataRoute.Sitemap = [];
    if (categoriesRes.ok) {
      const categoriesData = await categoriesRes.json();
      const categories = categoriesData?.data || [];
      
      categoryPages = categories.map((category: any) => ({
        url: `${siteUrl}/catalog/${category.id}`,
        lastModified: new Date(category.updatedAt || category.createdAt),
        changeFrequency: 'daily' as const,
        priority: 0.8,
      }));
    }

    return [...staticPages, ...categoryPages, ...productPages];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return static pages if dynamic fetch fails
    return staticPages;
  }
}
