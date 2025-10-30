const fs = require('fs');
const path = require('path');

// Liste de toutes les pages qui existent réellement
const existingPages = new Set([
  '/',
  '/centrifugeuses/',
  '/centrifugeuses/paillasse/',
  '/centrifugeuses/micro/',
  '/centrifugeuses/ultra/',
  '/centrifugeuses/refrigerees/',
  '/guide-achat-centrifugeuse-laboratoire/',
  '/guide/choisir-rotor-centrifugeuse/',
  '/guide/calcul-force-centrifuge/',
  '/guide/protocoles-centrifugation/',
  '/applications/',
  '/applications/centrifugeuse-biologie-medicale/',
  '/applications/centrifugeuse-recherche-scientifique/',
  '/applications/centrifugeuse-industrie-pharmaceutique/',
  '/applications/centrifugeuse-chimie-analytique/',
  '/applications/centrifugeuse-environnement/',
  '/services/',
  '/maintenance/entretien-centrifugeuse-laboratoire/',
  '/formation-utilisation-centrifugeuse/',
  '/formation-utilisation-centrifugeuse/demande/',
  '/location-centrifugeuse-laboratoire/',
  '/location-centrifugeuse-laboratoire/demande/',
  '/devis-centrifugeuse/',
  '/securite/normes-centrifugeuse-laboratoire/',
  '/solutions/lab-manager/',
  '/solutions/scientist/',
  '/solutions/buyer/'
]);

// Fichiers publics existants
const publicFiles = new Set([
  '/favicon.svg',
  '/calculator.js'
]);

// Fonction pour extraire les liens d'un fichier
function extractLinks(content) {
  const hrefRegex = /href=["']([^"']+)["']/g;
  const links = [];
  let match;
  while ((match = hrefRegex.exec(content)) !== null) {
    links.push(match[1]);
  }
  return links;
}

// Fonction pour extraire les images
function extractImages(content) {
  const srcRegex = /<img[^>]+src=["']([^"']+)["']/g;
  const images = [];
  let match;
  while ((match = srcRegex.exec(content)) !== null) {
    images.push(match[1]);
  }
  return images;
}

// Fonction pour parcourir tous les fichiers .astro
function scanFiles(dir, results = []) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      scanFiles(filePath, results);
    } else if (file.endsWith('.astro')) {
      const content = fs.readFileSync(filePath, 'utf-8');
      results.push({
        file: filePath,
        links: extractLinks(content),
        images: extractImages(content)
      });
    }
  }

  return results;
}

// Analyse principale
const srcDir = path.join(__dirname, 'src');
const scanResults = scanFiles(srcDir);

// Collecte de tous les liens uniques
const allLinks = new Set();
const allImages = new Set();

scanResults.forEach(result => {
  result.links.forEach(link => allLinks.add(link));
  result.images.forEach(image => allImages.add(image));
});

// Identification des liens morts
const brokenLinks = [];
const externalLinks = [];

allLinks.forEach(link => {
  // Ignorer les liens externes (http/https)
  if (link.startsWith('http://') || link.startsWith('https://')) {
    externalLinks.push(link);
    return;
  }

  // Ignorer les fragments et paramètres pour la vérification
  const cleanLink = link.split('?')[0].split('#')[0];

  // Vérifier si c'est un fichier public
  if (publicFiles.has(cleanLink)) {
    return;
  }

  // Vérifier si la page existe
  if (!existingPages.has(cleanLink) && !existingPages.has(cleanLink + '/')) {
    brokenLinks.push(link);
  }
});

// Identification des images mortes
const brokenImages = [];
allImages.forEach(image => {
  if (!image.startsWith('http://') && !image.startsWith('https://')) {
    const imagePath = path.join(__dirname, 'public', image.replace(/^\//, ''));
    if (!fs.existsSync(imagePath) && !publicFiles.has(image)) {
      brokenImages.push(image);
    }
  }
});

// Génération du rapport
console.log('=== AUDIT DES LIENS ET IMAGES ===\n');
console.log(`Total de liens trouvés: ${allLinks.size}`);
console.log(`Total d'images trouvées: ${allImages.size}`);
console.log(`Liens externes: ${externalLinks.length}`);
console.log(`Liens internes morts: ${brokenLinks.length}`);
console.log(`Images mortes: ${brokenImages.length}\n`);

if (brokenLinks.length > 0) {
  console.log('LIENS MORTS:');
  brokenLinks.forEach(link => console.log(`  - ${link}`));
  console.log('');
}

if (brokenImages.length > 0) {
  console.log('IMAGES MORTES:');
  brokenImages.forEach(image => console.log(`  - ${image}`));
  console.log('');
}

if (externalLinks.length > 0) {
  console.log('LIENS EXTERNES À VÉRIFIER:');
  externalLinks.forEach(link => console.log(`  - ${link}`));
}
