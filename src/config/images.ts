/**
 * Configuration centrale pour les images du site
 * TODO: Ajouter les vraies images produits dans public/images/
 *
 * Structure recommandée:
 * public/images/
 *   ├── products/          (Images des centrifugeuses)
 *   │   ├── paillasse/
 *   │   ├── micro/
 *   │   ├── ultra/
 *   │   └── refrigerees/
 *   ├── applications/      (Images d'applications)
 *   ├── clients/          (Logos clients)
 *   └── team/             (Photos équipe)
 *
 * Formats recommandés:
 * - WebP pour la performance (fallback JPG)
 * - Résolutions: 400x300 (thumbnail), 800x600 (medium), 1600x1200 (full)
 * - Optimisation: TinyPNG, ImageOptim, ou Squoosh
 * - Taille max: 200 KB par image
 */

export interface ProductImage {
  src: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
  category: 'paillasse' | 'micro' | 'ultra' | 'refrigeree';
}

export interface ApplicationImage {
  src: string;
  alt: string;
  title?: string;
  application: string;
}

/**
 * Images des centrifugeuses
 * TODO: Remplacer les chemins placeholder par de vraies photos produits
 *
 * Conseils pour les photos produits:
 * - Fond blanc ou neutre
 * - Éclairage professionnel
 * - Plusieurs angles (face, profil, 3/4, détails)
 * - Montrer les interfaces et écrans
 * - Inclure le rotor si visible
 * - Photos haute résolution (min 1600px)
 */
export const productImages: Record<string, ProductImage[]> = {
  paillasse: [
    {
      src: '/images/products/paillasse/bp-5000-front.webp', // TODO: Ajouter image
      alt: 'Centrifugeuse de paillasse BP-5000 - Vue de face avec panneau de contrôle digital',
      title: 'Centrifugeuse de Paillasse BP-5000',
      width: 800,
      height: 600,
      category: 'paillasse'
    },
    {
      src: '/images/products/paillasse/bp-5000-open.webp', // TODO: Ajouter image
      alt: 'Centrifugeuse BP-5000 ouverte montrant le rotor et la chambre de centrifugation',
      title: 'BP-5000 - Vue intérieure avec rotor',
      width: 800,
      height: 600,
      category: 'paillasse'
    },
    {
      src: '/images/products/paillasse/bp-4500-front.webp', // TODO: Ajouter image
      alt: 'Centrifugeuse de paillasse BP-4500 compacte pour laboratoire médical',
      title: 'Centrifugeuse de Paillasse BP-4500',
      width: 800,
      height: 600,
      category: 'paillasse'
    },
    {
      src: '/images/products/paillasse/rotors-paillasse.webp', // TODO: Ajouter image
      alt: 'Collection de rotors interchangeables pour centrifugeuses de paillasse - Capacités variables',
      title: 'Rotors Interchangeables',
      width: 800,
      height: 600,
      category: 'paillasse'
    }
  ],

  micro: [
    {
      src: '/images/products/micro/mc-2100-front.webp', // TODO: Ajouter image
      alt: 'Microcentrifugeuse MC-2100 compacte 21000 RPM pour tubes 0.2-2.0mL',
      title: 'Microcentrifugeuse MC-2100',
      width: 800,
      height: 600,
      category: 'micro'
    },
    {
      src: '/images/products/micro/mc-2100-open.webp', // TODO: Ajouter image
      alt: 'Microcentrifugeuse MC-2100 avec rotor à 12 positions pour microtubes',
      title: 'MC-2100 - Rotor 12 positions',
      width: 800,
      height: 600,
      category: 'micro'
    },
    {
      src: '/images/products/micro/mc-1800-desktop.webp', // TODO: Ajouter image
      alt: 'Microcentrifugeuse MC-1800 ultra-compacte posée sur paillasse de laboratoire',
      title: 'Microcentrifugeuse MC-1800',
      width: 800,
      height: 600,
      category: 'micro'
    }
  ],

  ultra: [
    {
      src: '/images/products/ultra/uc-150k-front.webp', // TODO: Ajouter image
      alt: 'Ultracentrifugeuse UC-150K 150000 RPM pour recherche avancée et biologie moléculaire',
      title: 'Ultracentrifugeuse UC-150K',
      width: 800,
      height: 600,
      category: 'ultra'
    },
    {
      src: '/images/products/ultra/uc-100k-interface.webp', // TODO: Ajouter image
      alt: 'Interface tactile avancée ultracentrifugeuse UC-100K avec programmes personnalisables',
      title: 'UC-100K - Interface de contrôle',
      width: 800,
      height: 600,
      category: 'ultra'
    },
    {
      src: '/images/products/ultra/rotors-ultra.webp', // TODO: Ajouter image
      alt: 'Rotors ultracentrifugation haute vitesse - Angle fixe et oscillant',
      title: 'Rotors Ultra Haute Vitesse',
      width: 800,
      height: 600,
      category: 'ultra'
    },
    {
      src: '/images/products/ultra/uc-150k-lab.webp', // TODO: Ajouter image
      alt: 'Ultracentrifugeuse UC-150K installée dans laboratoire de recherche',
      title: 'UC-150K - Installation laboratoire',
      width: 800,
      height: 600,
      category: 'ultra'
    }
  ],

  refrigeree: [
    {
      src: '/images/products/refrigerees/cr-6000-front.webp', // TODO: Ajouter image
      alt: 'Centrifugeuse réfrigérée CR-6000 avec contrôle température -20°C à +40°C',
      title: 'Centrifugeuse Réfrigérée CR-6000',
      width: 800,
      height: 600,
      category: 'refrigeree'
    },
    {
      src: '/images/products/refrigerees/cr-4000-display.webp', // TODO: Ajouter image
      alt: 'Écran digital centrifugeuse réfrigérée CR-4000 affichant température et vitesse',
      title: 'CR-4000 - Panneau de contrôle',
      width: 800,
      height: 600,
      category: 'refrigeree'
    },
    {
      src: '/images/products/refrigerees/cr-6000-open.webp', // TODO: Ajouter image
      alt: 'Chambre réfrigérée centrifugeuse CR-6000 avec système de refroidissement visible',
      title: 'CR-6000 - Système de refroidissement',
      width: 800,
      height: 600,
      category: 'refrigeree'
    }
  ]
};

/**
 * Images d'applications
 * TODO: Créer des photos réelles d'utilisation en laboratoire
 *
 * Recommandations:
 * - Photos authentiques de laboratoires clients (avec autorisation)
 * - Montrer les centrifugeuses en contexte d'utilisation
 * - Inclure des techniciens au travail (avec RGPD)
 * - Diversifier les secteurs (médical, recherche, pharma, etc.)
 */
export const applicationImages: ApplicationImage[] = [
  {
    src: '/images/applications/biologie-medicale.webp', // TODO: Ajouter image
    alt: 'Technicienne utilisant centrifugeuse pour analyses sanguines en laboratoire de biologie médicale',
    title: 'Biologie Médicale - Analyses Sanguines',
    application: 'biologie-medicale'
  },
  {
    src: '/images/applications/recherche-scientifique.webp', // TODO: Ajouter image
    alt: 'Chercheur préparant échantillons ADN avec ultracentrifugeuse en laboratoire de recherche',
    title: 'Recherche Scientifique - Biologie Moléculaire',
    application: 'recherche-scientifique'
  },
  {
    src: '/images/applications/industrie-pharmaceutique.webp', // TODO: Ajouter image
    alt: 'Contrôle qualité pharmaceutique avec centrifugeuse en salle blanche ISO',
    title: 'Industrie Pharmaceutique - Contrôle Qualité',
    application: 'industrie-pharmaceutique'
  },
  {
    src: '/images/applications/chimie-analytique.webp', // TODO: Ajouter image
    alt: 'Séparation échantillons chimiques par centrifugation en laboratoire analytique',
    title: 'Chimie Analytique - Séparation',
    application: 'chimie-analytique'
  },
  {
    src: '/images/applications/environnement.webp', // TODO: Ajouter image
    alt: 'Analyse échantillons environnementaux par centrifugation - Contrôle qualité eau',
    title: 'Environnement - Analyses',
    application: 'environnement'
  }
];

/**
 * Placeholders pour images manquantes
 * Utilisé en attendant les vraies photos produits
 */
export const imagePlaceholder = {
  product: '/images/placeholder-product.svg',
  application: '/images/placeholder-application.svg',
  hero: '/images/placeholder-hero.svg'
};

/**
 * Fonction helper pour obtenir une image produit avec fallback
 */
export function getProductImage(
  category: string,
  index: number = 0
): ProductImage {
  const images = productImages[category as keyof typeof productImages];

  if (!images || !images[index]) {
    return {
      src: imagePlaceholder.product,
      alt: `Centrifugeuse de laboratoire ${category}`,
      category: category as ProductImage['category']
    };
  }

  return images[index];
}

/**
 * Alt text patterns pour SEO
 * Formule optimale: [Type Produit] + [Modèle] + [Caractéristique Clé] + [Contexte d'usage]
 *
 * Exemples:
 * ✅ BON: "Centrifugeuse de paillasse BP-5000 15000 RPM pour laboratoire médical"
 * ❌ MAUVAIS: "Image1.jpg" ou "Centrifugeuse"
 *
 * Longueur optimale: 80-125 caractères
 * Inclure mots-clés: centrifugeuse, laboratoire, type, modèle
 */
export const altTextPatterns = {
  product: {
    template: '{type} {model} - {feature} pour {application}',
    examples: [
      'Centrifugeuse de paillasse BP-5000 15000 RPM pour laboratoire médical',
      'Microcentrifugeuse MC-2100 compacte pour tubes PCR',
      'Ultracentrifugeuse UC-150K 150000 RPM pour biologie moléculaire',
      'Centrifugeuse réfrigérée CR-6000 -20°C pour échantillons sensibles'
    ]
  },
  rotor: {
    template: 'Rotor {type} {capacity} pour centrifugeuse {category}',
    examples: [
      'Rotor angle fixe 24 tubes pour centrifugeuse de paillasse',
      'Rotor oscillant 4x100mL pour centrifugeuse réfrigérée',
      'Rotor ultracentrifugation 8x5mL pour recherche avancée'
    ]
  },
  application: {
    template: '{technicien} utilisant centrifugeuse pour {tâche} en laboratoire {secteur}',
    examples: [
      'Technicienne préparant analyses sanguines avec centrifugeuse en laboratoire médical',
      'Chercheur isolant ADN par ultracentrifugation en laboratoire de recherche',
      'Contrôle qualité pharmaceutique par centrifugation en salle blanche'
    ]
  }
};

/**
 * TODO Liste pour les images:
 *
 * PRIORITÉ CRITIQUE (Sprint 2):
 * □ Prendre photos professionnelles de 3-5 modèles phares
 * □ Optimiser les images (WebP + JPG fallback)
 * □ Créer placeholders SVG temporaires
 * □ Mettre en place lazy loading
 *
 * PRIORITÉ HAUTE (Sprint 3):
 * □ Photos de tous les produits catalogue (15+ images)
 * □ Photos d'applications en contexte (5-10 images)
 * □ Logos clients (avec autorisation)
 * □ Photos équipe pour page À Propos
 *
 * OPTIMISATIONS:
 * □ Générer responsive images (srcset)
 * □ Ajouter attribut loading="lazy"
 * □ Implémenter blur placeholder pendant chargement
 * □ Configurer CDN pour images (CloudFlare, Cloudinary)
 */
