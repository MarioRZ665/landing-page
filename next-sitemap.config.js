/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://rapidosdelacuenca.com.mx',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/api' },
      { userAgent: '*', disallow: '/admin' },
      { userAgent: '*', disallow: '/login' },
      { userAgent: '*', disallow: '/register' },
      { userAgent: '*', disallow: '/_next' },
      { userAgent: '*', disallow: '/404' },
      { userAgent: '*', disallow: '/500' },
    ],
    additionalSitemaps: [
      'https://rapidosdelacuenca.com.mx/sitemap.xml',
    ],
  },
};
