const sitemap = require('sitemap');
const fs = require('fs');
const hostname = 'https://www.garudayaan.com';

// const urls = [
//   { url: '/', changefreq: 'daily', priority: 1 },
//   { url: '/about-us', changefreq: 'daily', priority: 0.8 },
//   { url: '/contact', changefreq: 'daily', priority: 0.8 },
//   { url: '/our-service', changefreq: 'daily', priority: 0.8 },
//   { url: '/our-service/parcel-delivery', changefreq: 'daily', priority: 0.8 },
//   { url: '/our-service/container-load-service', changefreq: 'daily', priority: 0.8 },
//   { url: '/our-service/road-freight-delivery', changefreq: 'daily', priority: 0.8 },
//   { url: '/privacy-policy', changefreq: 'daily', priority: 0.8 },
//   { url: '/terms-conditions', changefreq: 'daily', priority: 0.8 },
//   { url: '/driver-terms-condition', changefreq: 'daily', priority: 0.8 },
//   // Add additional pages here
// ];

const sitemapInstance = sitemap.createSitemap({
  hostname,
//   urls,
});



// Write sitemap to public directory
fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString());

