// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://rapidosdelacuenca.com.mx', // ⚠️ Cambia esto a tu dominio real
  generateRobotsTxt: true, // Genera automáticamente el archivo robots.txt
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
};
