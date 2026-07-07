import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-Image',
        disallow: '/',
      },
    ],
    sitemap: 'https://asraufmustamin.vercel.app/sitemap.xml',
  }
}
