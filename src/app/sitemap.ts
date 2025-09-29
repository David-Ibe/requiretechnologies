import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://requiretechnologies.com'
  const routes = [
    '',
    '/about',
    '/services',
    '/blog',
    '/blog/ai-solutions-banking-sector',
    '/blog/cybersecurity-nigerian-enterprises',
    '/blog/digital-transformation-west-africa',
    '/contact',
    '/portfolio',
    '/author/chimaobi-david-ibe',
  ]
  const now = new Date()

  return routes.map((route) => ({
    url: `${siteUrl}${route || '/'}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}


