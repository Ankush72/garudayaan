const sitemap = require('sitemap');
const fs = require('fs');
const hostname = 'https://www.garudayaan.com';

const urls = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/about-us', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/our-service', changefreq: 'monthly', priority: 0.8 },
  { url: '/our-service/parcel-delivery', changefreq: 'monthly', priority: 0.8 },
  { url: '/our-service/container-load-service', changefreq: 'monthly', priority: 0.8 },
  { url: '/our-service/road-freight-delivery', changefreq: 'monthly', priority: 0.8 },
  { url: '/privacy-policy', changefreq: 'monthly', priority: 0.8 },
  { url: '/terms-conditions', changefreq: 'monthly', priority: 0.8 },
  { url: '/driver-terms-condition', changefreq: 'monthly', priority: 0.8 },

  // Add additional pages here
];

const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});



// Write sitemap to public directory
fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString());

