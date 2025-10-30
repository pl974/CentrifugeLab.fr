# Guide des Images - CentrifugeLab.fr

## 📁 Structure des Répertoires

```
public/images/
├── products/              # Images des centrifugeuses
│   ├── paillasse/        # Centrifugeuses de paillasse
│   ├── micro/            # Microcentrifugeuses
│   ├── ultra/            # Ultracentrifugeuses
│   └── refrigerees/      # Centrifugeuses réfrigérées
├── applications/          # Photos d'applications en contexte
├── clients/              # Logos clients et partenaires
├── team/                 # Photos de l'équipe
└── placeholders/         # SVG temporaires
```

## 🎯 Priorités Immédiates

### Sprint 2 (Critique) - 15+ Images Produits
- [ ] 4 photos Centrifugeuses de Paillasse (BP-5000, BP-4500 + rotors)
- [ ] 3 photos Microcentrifugeuses (MC-2100, MC-1800)
- [ ] 4 photos Ultracentrifugeuses (UC-150K, UC-100K + rotors)
- [ ] 3 photos Centrifugeuses Réfrigérées (CR-6000, CR-4000)
- [ ] 1 photo collection de rotors

**Total: 15 images produits minimum**

### Sprint 3 (Haute) - Images d'Applications
- [ ] 5 photos d'applications en contexte réel
- [ ] 5-10 logos clients (avec autorisations RGPD)
- [ ] 3-5 photos équipe pour crédibilité

## 📸 Spécifications Techniques

### Formats Requis

#### Photos Produits
- **Format principal**: WebP (meilleure compression)
- **Fallback**: JPG (compatibilité anciens navigateurs)
- **Résolutions multiples**:
  - Thumbnail: 400x300 (max 50 KB)
  - Medium: 800x600 (max 150 KB)
  - Full: 1600x1200 (max 300 KB)
  - Original: Min 2400px pour impression

#### Convention de Nommage
```
{category}-{model}-{view}-{size}.{ext}

Exemples:
paillasse-bp5000-front-800.webp
paillasse-bp5000-front-800.jpg
micro-mc2100-open-1600.webp
ultra-uc150k-interface-800.webp
```

### Optimisation Images

#### Outils Recommandés
1. **Squoosh** (https://squoosh.app/) - Gratuit, interface web
2. **ImageOptim** (Mac) - Gratuit, compression sans perte
3. **TinyPNG** (https://tinypng.com/) - Gratuit, 500 images/mois
4. **Sharp** (Node.js) - Automatisation batch

#### Commandes d'Optimisation

```bash
# Conversion WebP avec Sharp
npm install sharp-cli -g
sharp -i source.jpg -o output.webp -f webp -q 85

# Batch conversion
for file in *.jpg; do
  sharp -i "$file" -o "${file%.jpg}.webp" -f webp -q 85
done

# Redimensionnement
sharp -i original.jpg -o thumb.jpg --resize 400 300

# Multiple résolutions
sharp -i source.jpg -o small.jpg --resize 400 300
sharp -i source.jpg -o medium.jpg --resize 800 600
sharp -i source.jpg -o large.jpg --resize 1600 1200
```

## ✍️ Textes Alternatifs (Alt Text)

### Formule Optimale SEO

```
[Type Produit] + [Modèle] + [Caractéristique Principale] + [Contexte Usage]
```

### Exemples par Catégorie

#### Centrifugeuses de Paillasse
```html
✅ BON:
<img
  src="paillasse-bp5000-front.webp"
  alt="Centrifugeuse de paillasse BP-5000 15000 RPM pour laboratoire médical"
  title="Centrifugeuse de Paillasse BP-5000"
/>

❌ MAUVAIS:
<img src="img1.jpg" alt="Centrifugeuse" />
```

#### Microcentrifugeuses
```html
✅ BON:
<img
  src="micro-mc2100-open.webp"
  alt="Microcentrifugeuse MC-2100 avec rotor 12 positions pour tubes PCR 0.2-2.0mL"
  title="MC-2100 - Vue intérieure avec rotor"
/>
```

#### Ultracentrifugeuses
```html
✅ BON:
<img
  src="ultra-uc150k-lab.webp"
  alt="Ultracentrifugeuse UC-150K 150000 RPM installée en laboratoire de recherche"
  title="UC-150K - Installation laboratoire"
/>
```

#### Applications en Contexte
```html
✅ BON:
<img
  src="app-biologie-medicale.webp"
  alt="Technicienne utilisant centrifugeuse pour analyses sanguines en laboratoire de biologie médicale"
  title="Application - Biologie Médicale"
/>
```

### Règles Alt Text

1. **Longueur**: 80-125 caractères (optimal pour SEO)
2. **Mots-clés**: Inclure "centrifugeuse", "laboratoire", type, modèle
3. **Contexte**: Décrire l'usage, pas seulement l'objet
4. **Natural**: Écrire pour humains d'abord, moteurs de recherche ensuite
5. **Unique**: Chaque image doit avoir un alt unique

## 📐 Directives Photo Produits

### Équipement Nécessaire
- Appareil photo ≥ 16 MP ou smartphone récent
- Trépied pour stabilité
- Éclairage softbox ou lumière naturelle
- Fond blanc ou gris neutre (backdrop)

### Angles de Prise de Vue

Pour chaque produit, capturer:

1. **Vue Frontale** (obligatoire)
   - Face à l'utilisateur
   - Panneau de contrôle visible
   - Bien centré, niveau

2. **Vue Ouverte** (obligatoire)
   - Couvercle ouvert
   - Rotor visible
   - Chambre de centrifugation

3. **Détail Interface** (optionnel)
   - Zoom sur écran/boutons
   - Montrer les fonctionnalités
   - Lisibilité texte

4. **Contexte Laboratoire** (recommandé)
   - Installé sur paillasse
   - Avec technicien si possible
   - Environnement réel

5. **Détails Techniques** (optionnel)
   - Ports/connexions
   - Accessoires (rotors)
   - Plaque signalétique

### Checklist Pré-Shoot

- [ ] Nettoyer l'équipement (traces, poussière)
- [ ] Retirer stickers/étiquettes temporaires
- [ ] Vérifier éclairage (pas de reflets)
- [ ] Stabiliser appareil (trépied)
- [ ] Plusieurs prises par angle
- [ ] Bracketing exposition (±1 EV)

## 🎨 Cohérence Visuelle

### Palette de Couleurs
- Fond: Blanc pur (#FFFFFF) ou gris clair (#F5F5F5)
- Accent: Bleu CentrifugeLab (#2563EB)
- Pas de filtres Instagram
- Balance des blancs correcte

### Style Photographique
- Lumineux et professionnel
- Pas de vignettage artificiel
- Netteté maximale
- Contraste modéré
- Saturation naturelle

## 🚀 Implémentation Web

### Image Component Astro

```astro
---
import { getProductImage } from '../config/images';

interface Props {
  category: string;
  index?: number;
  loading?: 'lazy' | 'eager';
}

const { category, index = 0, loading = 'lazy' } = Astro.props;
const image = getProductImage(category, index);
---

<picture>
  <source
    srcset={image.src.replace('.jpg', '.webp')}
    type="image/webp"
  />
  <img
    src={image.src}
    alt={image.alt}
    title={image.title}
    width={image.width}
    height={image.height}
    loading={loading}
    decoding="async"
  />
</picture>
```

### Lazy Loading

```html
<!-- Lazy load par défaut (hors viewport) -->
<img src="..." alt="..." loading="lazy" />

<!-- Eager load (above the fold) -->
<img src="..." alt="..." loading="eager" />
```

### Responsive Images

```html
<img
  src="product-800.webp"
  srcset="
    product-400.webp 400w,
    product-800.webp 800w,
    product-1600.webp 1600w
  "
  sizes="(max-width: 640px) 400px,
         (max-width: 1024px) 800px,
         1600px"
  alt="..."
/>
```

## 📋 Checklist de Validation

Avant de publier une image, vérifier:

- [ ] Image optimisée < 200 KB
- [ ] Format WebP + JPG fallback
- [ ] Alt text unique et descriptif (80-125 car)
- [ ] Title attribut présent
- [ ] Dimensions width/height spécifiées
- [ ] Lazy loading activé (sauf hero)
- [ ] Nom de fichier descriptif
- [ ] Résolution adaptée à l'usage
- [ ] Pas de métadonnées EXIF sensibles
- [ ] Testé sur mobile et desktop

## 🔗 Ressources Utiles

### Outils d'Optimisation
- Squoosh: https://squoosh.app/
- TinyPNG: https://tinypng.com/
- ImageOptim: https://imageoptim.com/
- Cloudinary: https://cloudinary.com/

### Documentation
- WebP: https://developers.google.com/speed/webp
- Lazy Loading: https://web.dev/lazy-loading-images/
- Alt Text: https://moz.com/learn/seo/alt-text
- Image SEO: https://developers.google.com/search/docs/appearance/google-images

### Banques d'Images (temporaires)
- Unsplash: https://unsplash.com/ (si besoin placeholders)
- Pexels: https://www.pexels.com/

## 📞 Contact

Pour questions images ou shooting produits:
- Email: TODO@centrifugelab.fr
- Responsable: TODO

---

**Dernière mise à jour**: 30 Octobre 2025
**Version**: 1.0
**Audit Sprint**: 2
