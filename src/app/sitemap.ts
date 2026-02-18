import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://felicity-solar.netlify.app';

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/solutions/balcony-ess`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/solutions/residential-ess`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/solutions/commercial`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/solutions/commercial-industrial-ess`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/technical-support`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about/history`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/about/certifications`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/about/project-cases`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ];

  // Product pages - dynamically generated based on product slugs
  const productSlugs = [
    'sccm8048-p', 'sccm8048-ii', 'sccm6048-ii', 'sccm4548-ii', 'sccm4524-ii',
    'sccm3024-ii', 'sccm2024-ii', 'sccm12048-ii', 'sccm10048-ii',
    'ivps7548', 'ivps10048', 'ivps5048', 'ivps3524', 'ivps2524', 'ivps2512', 'ivpm7548',
    'ivem3-5kw-lv', 'ivcm1012-lv', 'ivgm50khp3g2', 'ivgm8klp2g1', 'ivgm5klp1g1', 'ivgm50khp3g1',
    'flh-e60', 'flh48100ug2', 'flh48100ug1', 'fl96050sg1', 'lpbf48350', 'lpbf48300-ii',
    'lpbf48300', 'lpbf48250', 'lpbf48200-h', 'lpbf48150-p',
    'ai-100-8048', 'ai100-5048',
    'fl-opzv-2500ah-2v', 'fl-opzv-1000ah-2v', 'fl-opzv-500ah-2v', 'fl-opzv-200ah-2v',
    'g12v200ah', 'g12v150ah', 'g12v100ah',
    'fls-mes215af-s', 'fls-es232lc-s',
    'x-ray-bdm2250w', 'a3-100w-s', 'a3-60w-p', 'btcb0303-200',
  ];

  const productPages = productSlugs.map((slug) => ({
    url: `${baseUrl}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...productPages];
}
