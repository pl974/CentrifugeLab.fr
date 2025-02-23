import { getCollection } from 'astro:content';

export async function GET() {
  const allPosts = await getCollection('blog');

  // Génère les URLs pour les pages du blog
  const blogPages = allPosts.map(post => `/blog/${post.slug}`);


 
  // Concatène toutes les pages statiques et dynamiques
  const pages = [
    '/',
    '/blog',
    '/contact',
    '/centrifugeuses',
    '/centrifugeuses/paillasse',
    '/centrifugeuses/micro',
    '/centrifugeuses/ultra',
    '/centrifugeuses/refrigerees',
    '/guide-achat-centrifugeuse-laboratoire',
    '/guide',
    '/guide/choisir-rotor-centrifugeuse',
    '/guide/calcul-force-centrifuge',
    '/guide/protocoles-centrifugation',
    '/applications/centrifugeuse-biologie-medicale',
    '/applications/centrifugeuse-recherche-scientifique',
    '/applications/centrifugeuse-industrie-pharmaceutique',
    '/applications/centrifugeuse-chimie-analytique',
    '/applications/centrifugeuse-environnement',
    '/services',
    '/maintenance/entretien-centrifugeuse-laboratoire',
    '/formation-utilisation-centrifugeuse/',
    '/location-centrifugeuse-laboratoire/'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map(page => `
        <url>
          <loc>https://monmagnetiseurparis.fr${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>
      `).join('')}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
