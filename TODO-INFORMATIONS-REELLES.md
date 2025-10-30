# TODO - Informations Réelles à Compléter

**Date de création**: 30 Octobre 2025
**Sprint**: 2
**Priorité**: HAUTE - Ces informations doivent être complétées pour la mise en production

---

## 🚨 URGENT - Informations Légales et Contact

### 1. Coordonnées de l'Entreprise

**Fichiers concernés**:
- `src/pages/mentions-legales/index.astro` (lignes 12-20)
- `src/pages/contact/index.astro` (lignes 7-23)
- `src/pages/index.astro` (lignes 99-107)
- `src/layouts/Layout.astro` (lignes TODO)

**À remplacer**:
```typescript
// PLACEHOLDERS ACTUELS - À REMPLACER
{
  raison_sociale: "CentrifugeLab [SARL/SAS]", // TODO
  siret: "[SIRET à compléter]", // TODO: 14 chiffres
  numero_tva: "FR[XX XXXXXXXXX]", // TODO
  capital_social: "[MONTANT]€", // TODO

  adresse: {
    rue: "[Adresse à compléter]", // TODO
    code_postal: "75XXX", // TODO
    ville: "Paris", // TODO (ou autre ville)
    pays: "France"
  },

  contact: {
    telephone: "+33 1 XX XX XX XX", // TODO
    email: "contact@centrifugelab.fr", // TODO: vérifier
    horaires: {
      lundi_vendredi: "9h00 - 18h00", // TODO: vérifier
      samedi: "Sur rendez-vous", // TODO: vérifier
      dimanche: "Fermé"
    }
  },

  legal: {
    directeur_publication: "[Nom Prénom]", // TODO
    hebergeur: {
      nom: "[Hébergeur]", // TODO (ex: OVH, AWS, etc.)
      adresse: "[Adresse hébergeur]" // TODO
    }
  }
}
```

**Actions à faire**:
- [ ] Obtenir le SIRET auprès de l'INSEE
- [ ] Calculer le numéro TVA intracommunautaire
- [ ] Confirmer l'adresse postale exacte
- [ ] Vérifier le numéro de téléphone principal
- [ ] Confirmer l'email de contact
- [ ] Définir les horaires d'ouverture réels
- [ ] Nommer le directeur de publication
- [ ] Obtenir les infos de l'hébergeur

---

## 📍 Coordonnées Géographiques

**Fichiers concernés**:
- `src/pages/contact/index.astro` (lignes 24-27)
- `src/pages/index.astro` (lignes 108-112)
- `src/layouts/Layout.astro` (meta GEO tags)

**Placeholders actuels**:
```typescript
coordinates: {
  lat: 48.856614,  // TODO: Coordonnées Paris par défaut
  lng: 2.352222    // TODO: À remplacer par vraies coordonnées
}
```

**Actions à faire**:
- [ ] Obtenir les coordonnées GPS exactes via Google Maps
- [ ] Créer une clé API Google Maps pour l'iframe contact
- [ ] Mettre à jour tous les fichiers avec les vraies coordonnées
- [ ] Tester l'affichage de la carte sur la page contact

**Comment obtenir les coordonnées**:
1. Aller sur https://www.google.fr/maps
2. Cliquer droit sur votre adresse
3. Sélectionner les coordonnées GPS affichées
4. Format: `48.856614, 2.352222`

---

## 🔑 Clé API Google Maps

**Fichier**: `src/pages/contact/index.astro` (ligne 222)

**Placeholder actuel**:
```html
<iframe
  src="https://www.google.com/maps/embed/v1/place?key=VOTRE_API_KEY_GOOGLE_MAPS&q=..."
>
```

**Actions à faire**:
- [ ] Créer un compte Google Cloud Platform
- [ ] Activer l'API Google Maps JavaScript
- [ ] Créer une clé API avec restrictions de domaine
- [ ] Remplacer `VOTRE_API_KEY_GOOGLE_MAPS` par la vraie clé
- [ ] Configurer la facturation GCP (gratuit jusqu'à $200/mois)

**Documentation**: https://developers.google.com/maps/documentation/javascript/get-api-key

---

## 🖼️ Images Produits (CRITIQUE)

**Fichiers concernés**:
- `src/config/images.ts` (lignes 31-186)
- `public/images/README.md` (guide complet)

**Images manquantes** (15 minimum):

### Centrifugeuses de Paillasse (4 images)
- [ ] `public/images/products/paillasse/bp-5000-front.webp`
- [ ] `public/images/products/paillasse/bp-5000-open.webp`
- [ ] `public/images/products/paillasse/bp-4500-front.webp`
- [ ] `public/images/products/paillasse/rotors-paillasse.webp`

### Microcentrifugeuses (3 images)
- [ ] `public/images/products/micro/mc-2100-front.webp`
- [ ] `public/images/products/micro/mc-2100-open.webp`
- [ ] `public/images/products/micro/mc-1800-desktop.webp`

### Ultracentrifugeuses (4 images)
- [ ] `public/images/products/ultra/uc-150k-front.webp`
- [ ] `public/images/products/ultra/uc-100k-interface.webp`
- [ ] `public/images/products/ultra/rotors-ultra.webp`
- [ ] `public/images/products/ultra/uc-150k-lab.webp`

### Centrifugeuses Réfrigérées (3 images)
- [ ] `public/images/products/refrigerees/cr-6000-front.webp`
- [ ] `public/images/products/refrigerees/cr-4000-display.webp`
- [ ] `public/images/products/refrigerees/cr-6000-open.webp`

**Spécifications**:
- Format: WebP + JPG fallback
- Résolutions: 400x300, 800x600, 1600x1200
- Taille max: 200 KB
- Fond: blanc ou neutre
- Alt text: descriptif SEO-optimisé

**Voir**: `public/images/README.md` pour le guide complet de photographie produits

---

## 💬 Témoignages Clients

**Fichier**: `src/components/Testimonials.astro` (lignes 31-84)

**Témoignages fictifs actuels** (6 placeholders):

Tous les témoignages sont des exemples à remplacer par de vrais avis clients.

**Actions à faire**:
- [ ] Collecter 5-10 vrais témoignages clients
- [ ] Obtenir les autorisations RGPD écrites
- [ ] Récupérer: nom, poste, entreprise, date, note, texte
- [ ] Demander des photos professionnelles (optionnel)
- [ ] Spécifier les produits évalués
- [ ] Remplacer les données dans `Testimonials.astro`

**Modèle d'email de demande**:
```
Objet: Témoignage client CentrifugeLab - Avec votre autorisation

Bonjour [Nom],

Nous aimerions mettre en avant votre expérience avec nos produits
sur notre site web. Pourriez-vous nous partager:

- Votre satisfaction (note /5)
- Un court témoignage (2-3 phrases)
- Votre nom complet, poste, entreprise
- Autorisation RGPD d'affichage

Merci pour votre confiance!
L'équipe CentrifugeLab
```

**Format requis**:
```typescript
{
  id: "unique-id",
  author: "Dr. Jean Dupont", // Nom réel
  position: "Responsable Laboratoire", // Poste réel
  company: "CHU de Lille", // Entreprise réelle
  rating: 5, // 1-5 étoiles
  date: "2025-10-15", // Date réelle ISO
  text: "Témoignage authentique...", // Texte réel
  avatar: "/images/clients/jean-dupont.jpg", // Photo optionnelle
  productReviewed: "Centrifugeuse BP-5000" // Produit spécifique
}
```

---

## 📊 Métriques et Statistiques

**Fichiers concernés**:
- `src/pages/index.astro` (lignes 25-30)

**Placeholders actuels**:
```typescript
const trustSignals = [
  { label: 'Laboratoires Équipés', value: '2000+' }, // TODO: Chiffre réel
  { label: 'Années d\'Expertise', value: '25+' }, // TODO: Année de création
  { label: 'Marques Certifiées', value: '15+' }, // TODO: Nombre réel
  { label: 'Support Expert 24/7', value: '✓' } // TODO: Vérifier disponibilité
];
```

**Actions à faire**:
- [ ] Compter le nombre réel de clients/laboratoires
- [ ] Calculer les années d'expertise (année création → 2025)
- [ ] Lister les marques partenaires certifiées
- [ ] Confirmer la disponibilité du support 24/7
- [ ] Récupérer d'autres métriques pertinentes:
  - Nombre d'installations
  - Taux de satisfaction
  - Nombre de pays couverts
  - Certifications ISO

---

## 🏆 Certifications et Normes

**Fichiers concernés**:
- `src/pages/mentions-legales/index.astro`
- `src/pages/securite/normes-centrifugeuse-laboratoire/index.astro`

**À vérifier et documenter**:
- [ ] Certification ISO 9001 (si applicable)
- [ ] Conformité CE / Marquage CE
- [ ] Normes IEC 61010-2-020 (centrifugeuses)
- [ ] Accréditations professionnelles
- [ ] Numéros de certificats
- [ ] Dates de validité
- [ ] Organismes certificateurs

**Format à documenter**:
```typescript
{
  certifications: [
    {
      nom: "ISO 9001:2015",
      numero: "FR-XXX-XXXX", // TODO
      organisme: "Bureau Veritas", // TODO
      date_obtention: "2023-XX-XX", // TODO
      date_validite: "2026-XX-XX" // TODO
    }
  ]
}
```

---

## 💰 Tarifs et Devis

**Fichiers concernés**:
- `src/pages/maintenance/entretien-centrifugeuse-laboratoire/index.astro` (lignes 70-82)

**Placeholders tarifs**:
```typescript
maintenanceServices = [
  {
    title: 'Contrat Préventif',
    price: 'À partir de 89€/mois' // TODO: Vérifier tarif réel
  },
  {
    title: 'Maintenance Curative',
    price: 'Sur devis' // OK
  }
]
```

**Actions à faire**:
- [ ] Confirmer les tarifs de maintenance
- [ ] Définir les gammes de prix par produit
- [ ] Créer une grille tarifaire interne
- [ ] Valider les mentions légales sur les prix

---

## 🌐 Réseaux Sociaux et Liens Externes

**Fichiers concernés**:
- `src/components/Footer.astro` (si existe)
- Navbar (liens sociaux)

**À créer/configurer**:
- [ ] LinkedIn entreprise
- [ ] Twitter/X professionnel
- [ ] Page Facebook (optionnel)
- [ ] Chaîne YouTube (si vidéos produits)
- [ ] Google My Business (CRITIQUE pour SEO local)

**Google My Business** (Priorité HAUTE):
1. Créer le profil: https://business.google.com
2. Vérifier l'adresse (courrier postal)
3. Ajouter photos, horaires, catégories
4. Activer les avis clients
5. Impact SEO: +60% de visibilité locale

---

## 📧 Configuration Email

**Emails à configurer**:
```
contact@centrifugelab.fr    // Contact général
devis@centrifugelab.fr      // Demandes de devis
support@centrifugelab.fr    // Support technique
sav@centrifugelab.fr        // Service après-vente
info@centrifugelab.fr       // Informations
commercial@centrifugelab.fr // Équipe commerciale
```

**Actions à faire**:
- [ ] Acheter/configurer le domaine centrifugelab.fr
- [ ] Créer les adresses email professionnelles
- [ ] Configurer les redirections
- [ ] Mettre en place les répondeurs automatiques
- [ ] Configurer SPF/DKIM/DMARC pour délivrabilité
- [ ] Tester l'envoi/réception des formulaires

---

## 🔒 Conformité RGPD

**Fichiers concernés**:
- `src/pages/politique-confidentialite/index.astro`

**Actions à faire**:
- [ ] Nommer un DPO (Délégué à la Protection des Données)
- [ ] Déclarer le traitement auprès de la CNIL (si nécessaire)
- [ ] Mettre en place le registre des traitements
- [ ] Configurer le bandeau cookies (Tarteaucitron, etc.)
- [ ] Créer les procédures de droit d'accès/suppression
- [ ] Former l'équipe à la protection des données

**Email DPO à ajouter**:
```
dpo@centrifugelab.fr  // TODO: Créer et mentionner dans politique
```

---

## 📱 Analytics et Tracking

**À configurer**:

### Google Analytics 4
- [ ] Créer une propriété GA4
- [ ] Installer le tag gtag.js dans Layout.astro
- [ ] Configurer les événements de conversion
- [ ] Lier à Google Search Console

### Google Search Console
- [ ] Vérifier la propriété du site
- [ ] Soumettre le sitemap.xml
- [ ] Configurer les alertes d'indexation
- [ ] Suivre les performances de recherche

### Autres outils (optionnels)
- [ ] Hotjar / Microsoft Clarity (heatmaps)
- [ ] Matomo (alternative RGPD-friendly)
- [ ] Tag Manager pour gérer les tags

**Code GA4 à ajouter dans Layout.astro**:
```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX'); // TODO: Remplacer par votre ID
</script>
```

---

## 🎨 Assets Manquants

### Logos et Branding
- [ ] Logo principal (SVG + PNG)
- [ ] Logo inversé (fond sombre)
- [ ] Favicon complet (16x16, 32x32, 180x180, 192x192, 512x512)
- [ ] Open Graph image (1200x630)
- [ ] Twitter Card image (1200x600)

**Fichiers à créer**:
```
public/
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png (180x180)
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── og-image.png (1200x630)
└── twitter-card.png (1200x600)
```

### Images institutionnelles
- [ ] Photo équipe / À propos
- [ ] Photo locaux / showroom
- [ ] Logos clients (5-10 avec autorisations)
- [ ] Logos partenaires
- [ ] Photos installations réelles

---

## 📄 Contenus à Rédiger

### Pages manquantes
- [ ] Page "À Propos" / Notre Histoire
- [ ] Page "Équipe"
- [ ] Page "Actualités" / Blog
- [ ] Page "FAQ" détaillée
- [ ] Page "Cas Clients" / Études de cas

### Contenus Blog (recommandé pour SEO)
- [ ] 10 articles techniques minimum:
  - Guide d'entretien centrifugeuses
  - Calcul de la force G expliqué
  - Choix du rotor adapté
  - Protocoles de centrifugation
  - Normes de sécurité
  - Maintenance préventive
  - Troubleshooting pannes courantes
  - Comparatif modèles
  - Innovations technologiques
  - Témoignages clients détaillés

---

## 🔗 Redirections et URLs

**À configurer dans `astro.config.mjs` ou sur le serveur**:

### Redirections anciennes URLs (si refonte)
```javascript
// TODO: Si ancien site existait, mapper les redirections
'/old-page' → '/new-page' (301)
```

### Canonical URLs
- [ ] Vérifier toutes les pages ont une URL canonique
- [ ] Éviter le contenu dupliqué
- [ ] Configurer le domaine principal (www ou sans www)

### URL propres
- [ ] Vérifier que toutes les URLs sont en minuscules
- [ ] Pas de caractères spéciaux
- [ ] Tirets pour séparer les mots
- [ ] Pas de trailing slashes incohérents

---

## 🚀 Performance et Optimisation

**À faire avant mise en production**:

### Images
- [ ] Compresser toutes les images (TinyPNG, Squoosh)
- [ ] Convertir en WebP + fallback
- [ ] Générer les versions responsive
- [ ] Tester le lazy loading

### Code
- [ ] Minifier CSS/JS
- [ ] Configurer le cache navigateur
- [ ] Activer la compression GZIP/Brotli
- [ ] CDN pour assets statiques (optionnel)

### Tests
- [ ] PageSpeed Insights (score > 90)
- [ ] Lighthouse audit complet
- [ ] Test mobile (Google Mobile-Friendly)
- [ ] Test multi-navigateurs
- [ ] Validation W3C HTML/CSS

---

## 📋 Checklist Mise en Production

### Avant le déploiement
- [ ] Toutes les infos légales complétées
- [ ] Coordonnées réelles vérifiées
- [ ] 15+ images produits ajoutées
- [ ] 5+ témoignages clients réels
- [ ] Analytics configuré
- [ ] Search Console vérifié
- [ ] Sitemap soumis
- [ ] Robots.txt validé
- [ ] SSL/HTTPS activé
- [ ] Formulaires testés
- [ ] Emails configurés
- [ ] Bandeau cookies opérationnel

### Après le déploiement
- [ ] Vérifier toutes les pages en production
- [ ] Tester tous les formulaires
- [ ] Vérifier les emails arrivent
- [ ] Contrôler les analytics
- [ ] Surveiller les erreurs 404
- [ ] Indexation Google (1-2 semaines)
- [ ] Créer Google My Business
- [ ] Lancer campagne initiale

---

## 📞 Contacts Utiles

### Services à configurer
- Hébergeur: [NOM] - [CONTACT]
- Registrar domaine: [NOM] - [CONTACT]
- Email provider: [NOM] - [CONTACT]
- Support technique: [CONTACT]

### Équipe projet
- Chef de projet: [NOM] - [EMAIL]
- Responsable marketing: [NOM] - [EMAIL]
- Responsable technique: [NOM] - [EMAIL]
- Webmaster: [NOM] - [EMAIL]

---

## 📅 Planning Recommandé

### Semaine 1 (URGENT)
- Compléter infos légales et contact
- Créer Google My Business
- Configurer Analytics + Search Console

### Semaine 2-3 (HAUTE)
- Photographie produits (15+ images)
- Collecter témoignages clients (5+)
- Créer contenus manquants

### Semaine 4 (MOYENNE)
- Optimisation performance
- Tests multi-navigateurs
- Formation équipe

### Semaine 5+
- Monitoring et ajustements
- Création contenu blog
- Campagnes marketing

---

**Document créé le**: 30 Octobre 2025
**Dernière mise à jour**: 30 Octobre 2025
**Statut**: 🔴 En attente de complétion
**Priorité**: HAUTE - Bloquant pour production

---

## 🔍 Comment Trouver les TODO dans le Code

Rechercher les patterns suivants dans le code:

```bash
# Rechercher tous les TODO
grep -r "TODO" src/

# Rechercher les placeholders
grep -r "\[.*à compléter\]" src/
grep -r "\[XX" src/
grep -r "placeholder" src/

# Vérifier les emails
grep -r "@centrifugelab.fr" src/

# Vérifier les coordonnées
grep -r "48.856614" src/
```

Les principaux fichiers contenant des TODO:
- `src/pages/mentions-legales/index.astro`
- `src/pages/politique-confidentialite/index.astro`
- `src/pages/contact/index.astro`
- `src/pages/index.astro`
- `src/config/images.ts`
- `src/components/Testimonials.astro`

---

**Note**: Ce document doit être coché au fur et à mesure de l'avancement.
Une fois tous les items complétés, le site sera prêt pour la production!
