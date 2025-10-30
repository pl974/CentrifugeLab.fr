import { getCollection } from 'astro:content';

export async function GET() {
  const allPosts = await getCollection('blog');

  // Génère les URLs pour les pages du blog (exclure les brouillons)
  const publishedPosts = allPosts.filter(post => post.data.draft !== true);
  const blogPages = publishedPosts.map(post => `/blog/${post.slug}/`);

  // Concatène toutes les pages statiques et dynamiques
  const pages = [
    // Page d'accueil
    '/',

    // Catégories principales
    '/centrifugeuses/',
    '/centrifugeuses/paillasse/',
    '/centrifugeuses/micro/',
    '/centrifugeuses/ultra/',
    '/centrifugeuses/refrigerees/',

    // Guides
    '/guide-achat-centrifugeuse-laboratoire/',
    '/comparaison-centrifugeuses/',
    '/guide/choisir-rotor-centrifugeuse/',
    '/guide/calcul-force-centrifuge/',
    '/guide/protocoles-centrifugation/',

    // Applications
    '/applications/',
    '/applications/centrifugeuse-biologie-medicale/',
    '/applications/centrifugeuse-recherche-scientifique/',
    '/applications/centrifugeuse-industrie-pharmaceutique/',
    '/applications/centrifugeuse-chimie-analytique/',
    '/applications/centrifugeuse-environnement/',

    // Services
    '/services/',
    '/maintenance/entretien-centrifugeuse-laboratoire/',
    '/formation-utilisation-centrifugeuse/',
    '/formation-utilisation-centrifugeuse/demande/',
    '/location-centrifugeuse-laboratoire/',
    '/location-centrifugeuse-laboratoire/demande/',
    '/devis-centrifugeuse/',

    // Solutions par persona
    '/solutions/lab-manager/',
    '/solutions/scientist/',
    '/solutions/buyer/',

    // Sécurité et normes
    '/securite/normes-centrifugeuse-laboratoire/',

    // Pages légales (Sprint 1)
    '/mentions-legales/',
    '/politique-confidentialite/',
    '/cgv/',

    // Contact
    '/contact/',

    // Blog
    '/blog/',
    ...blogPages
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map(page => `
        <url>
          <loc>https://centrifugelab.fr/${page}</loc>
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
