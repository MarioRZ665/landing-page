/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://rapidosdelacuenca.com.mx',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://rapidosdelacuenca.com.mx/sitemap.xml',
    ],
  },
};
