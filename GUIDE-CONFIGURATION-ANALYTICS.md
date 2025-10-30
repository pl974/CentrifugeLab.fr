# Guide de Configuration Google Analytics 4

## 📋 Vue d'Ensemble

Ce guide explique comment **configurer Google Analytics 4 (GA4)** pour le site CentrifugeLab.fr.

**Important** : L'infrastructure est déjà en place. Il ne vous reste qu'à :
1. Créer un compte GA4
2. Obtenir votre Measurement ID
3. Le configurer dans le site

**Temps estimé** : 15-20 minutes

---

## 🎯 Pourquoi Google Analytics ?

Google Analytics vous permet de :
- ✅ **Suivre le trafic** de votre site (visiteurs, pages vues, durée)
- ✅ **Analyser les sources** (Google, réseaux sociaux, direct)
- ✅ **Mesurer les conversions** (formulaires, devis, téléchargements)
- ✅ **Comprendre le comportement** utilisateurs (parcours, rebond)
- ✅ **Optimiser le SEO** (pages performantes, mots-clés)

**ROI attendu** : Amélioration de 15-25% du taux de conversion grâce aux insights.

---

## 📝 Étape 1 : Créer un Compte Google Analytics 4

### 1.1. Accéder à Google Analytics

👉 **URL** : https://analytics.google.com/

- Connectez-vous avec votre compte Google professionnel
- Si vous n'avez pas de compte Analytics, cliquez sur **"Démarrer gratuitement"**

### 1.2. Créer un Compte

1. Cliquez sur **"Admin"** (icône engrenage en bas à gauche)
2. Dans la colonne **"Compte"**, cliquez sur **"Créer un compte"**
3. Remplissez les informations :
   - **Nom du compte** : CentrifugeLab
   - **Paramètres de partage de données** : Cochez selon vos préférences (recommandé : toutes)
4. Cliquez sur **"Suivant"**

### 1.3. Créer une Propriété

1. Remplissez les informations :
   - **Nom de la propriété** : CentrifugeLab.fr Production
   - **Fuseau horaire** : (GMT+01:00) Paris
   - **Devise** : Euro (EUR €)
2. Cliquez sur **"Suivant"**

### 1.4. Détails de l'Entreprise

1. Sélectionnez :
   - **Secteur** : Science et technologie
   - **Taille de l'entreprise** : Petite (1-10 employés) *(ajuster selon réalité)*
2. **Objectifs** : Cochez :
   - ✅ Générer des prospects
   - ✅ Examiner le comportement des utilisateurs
   - ✅ Mesurer les conversions
3. Cliquez sur **"Créer"**

### 1.5. Accepter les Conditions

- Lisez et acceptez les **Conditions d'utilisation de Google Analytics**
- Acceptez l'**Avenant relatif au traitement des données** (RGPD)

---

## 🌐 Étape 2 : Créer un Flux de Données Web

### 2.1. Configurer le Flux

Après avoir créé la propriété, vous êtes redirigé vers la configuration du flux :

1. Sélectionnez **"Web"** (icône ordinateur)
2. Remplissez :
   - **URL du site Web** : `https://centrifugelab.fr`
   - **Nom du flux** : Site Web Principal
3. *Optionnel* : Activer la **"Mesure améliorée"** (recommandé)
   - ✅ Pages vues
   - ✅ Défilements
   - ✅ Clics sortants
   - ✅ Recherche sur le site
   - ✅ Engagement vidéo
   - ✅ Téléchargements de fichiers
4. Cliquez sur **"Créer un flux"**

### 2.2. Récupérer le Measurement ID

**IMPORTANT** : C'est la seule information dont vous avez besoin !

1. Une fois le flux créé, vous voyez les **"Détails du flux"**
2. En haut à droite, notez le **"ID de mesure"** :
   ```
   Format : G-XXXXXXXXXX
   Exemple : G-1A2B3C4D5E
   ```
3. **Copiez ce Measurement ID** (vous en aurez besoin pour l'étape 3)

---

## ⚙️ Étape 3 : Configurer le Site CentrifugeLab.fr

### 3.1. Éditer le Fichier de Configuration

1. Ouvrez le fichier : `src/config/analytics.ts`
2. Trouvez la ligne :
   ```typescript
   ga4MeasurementId: 'G-XXXXXXXXXX', // TODO: À REMPLACER
   ```
3. Remplacez `'G-XXXXXXXXXX'` par votre **vrai Measurement ID** :
   ```typescript
   ga4MeasurementId: 'G-1A2B3C4D5E', // Exemple
   ```
4. **Sauvegardez** le fichier

### 3.2. Vérifier la Configuration

**En développement (local)** :
```bash
npm run dev
```

- Ouvrez http://localhost:4321
- Ouvrez les **Outils de développement** (F12)
- Dans la **Console**, vous devriez voir :
  ```
  Google Analytics désactivé (mode développement ou ID non configuré)
  ```
  *(C'est normal en dev, GA est désactivé pour ne pas fausser les stats)*

**En production** :

Après déploiement, vérifiez que GA se charge :

1. Ouvrez votre site en production : https://centrifugelab.fr
2. Ouvrez les **Outils de développement** (F12)
3. Allez dans l'onglet **"Network"** (Réseau)
4. Filtrez par **"analytics"** ou **"gtag"**
5. Vous devriez voir des requêtes vers :
   - `https://www.googletagmanager.com/gtag/js?id=G-...`
   - `https://www.google-analytics.com/g/collect?...`

### 3.3. Test en Temps Réel

**Méthode recommandée** : Utiliser le rapport "Temps réel" de GA4

1. Dans Google Analytics, allez dans **"Rapports" > "Temps réel"**
2. Ouvrez votre site en production dans un nouvel onglet
3. Naviguez sur 2-3 pages
4. Retournez sur GA4 → Vous devriez voir **1 utilisateur actif** (vous !)
5. Les pages visitées apparaissent dans le rapport

✅ **Si vous voyez votre visite** : GA4 est correctement configuré !
❌ **Si rien n'apparaît** : Vérifiez les étapes précédentes

---

## 🍪 Étape 4 : Comprendre le Consentement Cookies (RGPD)

### 4.1. Comment ça Fonctionne

Le site CentrifugeLab.fr est **conforme au RGPD** :

1. **Par défaut** : Google Analytics est **désactivé** (mode `denied`)
2. **Bandeau cookies** : Un bandeau apparaît au premier chargement
3. **Choix utilisateur** :
   - ✅ **Accepter** → GA4 s'active
   - ❌ **Refuser** → GA4 reste désactivé
   - ⚙️ **Personnaliser** → L'utilisateur choisit

4. **Stockage du choix** : Le consentement est sauvegardé dans `localStorage`
5. **Visites suivantes** : Le bandeau ne réapparaît pas

### 4.2. Impact sur les Stats

**Important** : Environ **30-50%** des visiteurs refusent les cookies.

Cela signifie que vos stats GA4 représentent **50-70%** du trafic réel.

**Solutions** :
- ✅ Utiliser aussi **Google Search Console** (pas de cookies nécessaires)
- ✅ Consulter les **logs serveur** (trafic exact)
- ✅ Croiser avec d'autres outils (Matomo auto-hébergé, Plausible)

### 4.3. Tester le Consentement

**Test 1 : Accepter les cookies**
1. Ouvrez le site en navigation privée
2. Cliquez sur **"Accepter"** dans le bandeau
3. Vérifiez dans la Console (F12) :
   ```javascript
   localStorage.getItem('cookieConsent') // "accepted"
   ```
4. Vérifiez que GA4 envoie des données (Network tab)

**Test 2 : Refuser les cookies**
1. Ouvrez le site en navigation privée
2. Cliquez sur **"Refuser"**
3. Vérifiez dans la Console :
   ```javascript
   localStorage.getItem('cookieConsent') // "denied"
   ```
4. Vérifiez qu'aucune requête GA4 n'est envoyée

**Test 3 : Réinitialiser le consentement**

Pour tester à nouveau le bandeau :
```javascript
// Dans la Console (F12)
localStorage.removeItem('cookieConsent');
localStorage.removeItem('cookieAnalytics');
location.reload();
```

---

## 📊 Étape 5 : Configurer les Événements Personnalisés

### 5.1. Événements Disponibles

Le site track automatiquement plusieurs événements :

| Événement | Description | Quand il se déclenche |
|-----------|-------------|----------------------|
| `submit_contact_form` | Formulaire de contact envoyé | Page /contact/ |
| `submit_quote_form` | Demande de devis envoyée | Page /devis-centrifugeuse/ |
| `submit_training_form` | Réservation formation | Page /formation-utilisation-centrifugeuse/demande/ |
| `submit_rental_form` | Demande de location | Page /location-centrifugeuse-laboratoire/demande/ |
| `view_product` | Vue d'un produit | Pages centrifugeuses |
| `view_comparison` | Vue page comparaison | /comparaison-centrifugeuses/ |
| `download_guide` | Téléchargement d'un guide | Liens PDF |
| `click_phone` | Clic sur n° téléphone | Tous liens tel: |
| `click_email` | Clic sur email | Tous liens mailto: |

### 5.2. Créer des Conversions dans GA4

Pour suivre les objectifs business (leads, devis), créez des conversions :

1. Dans GA4, allez dans **"Admin" > "Événements"**
2. Cliquez sur **"Créer un événement"**
3. Ou mieux : allez dans **"Conversions"**
4. Cliquez sur **"Nouvel événement de conversion"**
5. Entrez le nom : `submit_quote_form`
6. Cliquez sur **"Enregistrer"**

**Conversions recommandées** :
- ✅ `submit_contact_form` (Contact)
- ✅ `submit_quote_form` (Devis - **Principal**)
- ✅ `submit_training_form` (Formation)
- ✅ `submit_rental_form` (Location)

### 5.3. Attribuer une Valeur aux Conversions

Pour calculer le ROI, attribuez une valeur monétaire :

1. Dans **"Événements"**, cliquez sur l'événement
2. Activez **"Marquer comme conversion"**
3. Dans la configuration, ajoutez une **valeur** :
   - Contact : 50 €
   - Devis : 200 €
   - Formation : 500 €

*Ces valeurs sont déjà pré-configurées dans `src/config/analytics.ts`*

---

## 🎯 Étape 6 : Créer des Rapports Utiles

### 6.1. Rapport "Acquisition"

**Objectif** : Savoir d'où viennent vos visiteurs

1. Allez dans **"Rapports" > "Acquisition" > "Acquisition de trafic"**
2. Vous verrez :
   - **Organic Search** (Google, Bing)
   - **Direct** (URL tapée directement)
   - **Referral** (autres sites)
   - **Social** (LinkedIn, Facebook)

**Analyse** :
- Si **Organic Search < 30%** → Améliorer le SEO
- Si **Direct > 50%** → Bonne notoriété de marque

### 6.2. Rapport "Engagement"

**Objectif** : Quelles pages attirent le plus de visiteurs

1. Allez dans **"Rapports" > "Engagement" > "Pages et écrans"**
2. Triez par **"Vues"**

**Pages attendues en top 5** :
1. Page d'accueil (/)
2. Centrifugeuses de Paillasse (/centrifugeuses/paillasse/)
3. Guide d'achat (/guide-achat-centrifugeuse-laboratoire/)
4. Contact (/contact/)
5. Blog (/blog/)

**Si un article de blog est en top 5** → Excellent signal SEO !

### 6.3. Rapport "Conversions"

**Objectif** : Mesurer les leads générés

1. Allez dans **"Rapports" > "Engagement" > "Conversions"**
2. Vous verrez le nombre de :
   - Formulaires de contact envoyés
   - Devis demandés
   - Formations réservées

**Objectifs mensuels** :
- **Contacts** : 10-20
- **Devis** : 5-10
- **Formations** : 2-5

### 6.4. Rapport "Données Démographiques"

**Objectif** : Profil de vos visiteurs

1. Allez dans **"Rapports" > "Utilisateur" > "Données démographiques"**
2. Analysez :
   - **Âge** (attendu : 25-54 ans)
   - **Sexe** (mixte)
   - **Centres d'intérêt** (science, technologie, santé)

*Note : Ces données sont basées sur les comptes Google des visiteurs (approximatif)*

### 6.5. Rapport "Technologie"

**Objectif** : Appareils utilisés

1. Allez dans **"Rapports" > "Technologie" > "Détails techniques"**
2. Vérifiez :
   - **Desktop vs Mobile** (attendu : 60/40)
   - **Navigateurs** (Chrome > 60%)
   - **Systèmes d'exploitation**

**Action** : Si Mobile > 40% → Prioriser l'optimisation mobile

---

## 🔗 Étape 7 : Intégrer Google Search Console

### 7.1. Créer un Compte Search Console

1. Allez sur https://search.google.com/search-console/
2. Cliquez sur **"Ajouter une propriété"**
3. Choisissez **"Préfixe d'URL"** : `https://centrifugelab.fr`
4. **Méthode de validation** : Sélectionnez **"Balise HTML"**
5. Copiez la balise `<meta name="google-site-verification" content="...">`

### 7.2. Ajouter la Balise au Site

1. Ouvrez `src/layouts/Layout.astro`
2. Dans la section `<head>`, ajoutez :
   ```html
   <meta name="google-site-verification" content="VOTRE_CODE_ICI" />
   ```
3. Sauvegardez et déployez
4. Retournez sur Search Console et cliquez sur **"Valider"**

### 7.3. Lier GA4 et Search Console

**Avantage** : Voir les mots-clés Google directement dans GA4

1. Dans **GA4**, allez dans **"Admin" > "Liens vers Search Console"**
2. Cliquez sur **"Lier"**
3. Sélectionnez votre propriété Search Console
4. Cliquez sur **"Envoyer"**

✅ Maintenant, les données Search Console apparaissent dans GA4 !

---

## 📈 Étape 8 : Suivre les Performances (Checklist Mensuelle)

### KPIs à Surveiller

| Métrique | Objectif Mois 1 | Objectif Mois 6 | Objectif Mois 12 |
|----------|----------------|----------------|-----------------|
| **Utilisateurs** | 500-800 | 2 000-3 000 | 5 000-8 000 |
| **Pages vues** | 1 500-2 000 | 6 000-9 000 | 15 000-25 000 |
| **Durée moyenne session** | 1:30 min | 2:00 min | 2:30 min |
| **Taux de rebond** | < 70% | < 60% | < 50% |
| **Conversions (devis)** | 3-5 | 10-15 | 30-50 |

### Actions Recommandées

**Chaque semaine** (5 min) :
- ✅ Vérifier le **rapport Temps Réel** (tout fonctionne ?)
- ✅ Consulter les **Conversions** (nouveaux leads ?)

**Chaque mois** (30 min) :
- ✅ Analyser l'**Acquisition** (quelles sources performent ?)
- ✅ Identifier les **pages les plus vues** (créer du contenu similaire)
- ✅ Vérifier le **taux de rebond** (pages à optimiser ?)
- ✅ Exporter les données dans un tableur (suivi tendances)

**Chaque trimestre** (2h) :
- ✅ Audit complet des performances
- ✅ Ajuster la stratégie de contenu
- ✅ Optimiser les pages à fort trafic / faible conversion
- ✅ Mettre à jour les objectifs

---

## 🛠️ Dépannage

### Problème 1 : GA4 ne Track Pas

**Symptômes** : Aucune donnée dans le rapport Temps Réel

**Solutions** :
1. ✅ Vérifier que le Measurement ID est correct dans `src/config/analytics.ts`
2. ✅ Vérifier que vous avez accepté les cookies (bandeau)
3. ✅ Vérifier dans la Console (F12) qu'il n'y a pas d'erreurs
4. ✅ Désactiver les bloqueurs de pub (AdBlock, uBlock Origin)
5. ✅ Essayer en navigation privée

**Commande de debug** :
```javascript
// Dans la Console (F12)
console.log(window.gtag); // Doit afficher: function gtag(){...}
console.log(window.dataLayer); // Doit afficher: Array [...]
```

### Problème 2 : Le Bandeau Cookies ne S'affiche Pas

**Solutions** :
1. ✅ Vérifier que vous n'avez pas déjà donné votre consentement
2. ✅ Réinitialiser : `localStorage.clear()` puis recharger
3. ✅ Vérifier la Console pour des erreurs JavaScript

### Problème 3 : Les Conversions ne Sont Pas Comptées

**Solutions** :
1. ✅ Vérifier que l'événement est bien envoyé (Network tab, filtrer "collect")
2. ✅ Attendre 24-48h (délai de traitement GA4)
3. ✅ Vérifier que l'événement est marqué comme **conversion** dans GA4

### Problème 4 : Trop de Spam / Bot Traffic

**Symptômes** : Trafic anormal (pics, durée 0s, rebond 100%)

**Solutions** :
1. Dans GA4, créer un **filtre d'exclusion** :
   - Admin > Flux de données > Paramètres de balisage avancés
   - Ajouter : `ignore_referrer = spam.com`
2. Activer le **filtrage de bots** dans GA4 (activé par défaut)

---

## 📚 Ressources Utiles

### Documentation Officielle
- **Google Analytics 4** : https://support.google.com/analytics/
- **Guide de démarrage GA4** : https://support.google.com/analytics/answer/9304153
- **RGPD et Google Analytics** : https://support.google.com/analytics/answer/9019185

### Formations Gratuites
- **Google Analytics Academy** : https://analytics.google.com/analytics/academy/
- **Skillshop GA4** : https://skillshop.withgoogle.com/

### Outils Complémentaires
- **Google Search Console** : https://search.google.com/search-console/
- **Google Tag Manager** (pour les sites complexes)
- **Looker Studio** (anciennement Data Studio) : Tableaux de bord personnalisés

### Alternatives Respectueuses de la Vie Privée
Si vous souhaitez éviter Google Analytics :
- **Matomo** (open-source, auto-hébergé) : https://matomo.org/
- **Plausible** (simple, conforme RGPD) : https://plausible.io/
- **Fathom** (payant, privacy-first) : https://usefathom.com/

---

## ✅ Checklist Finale

Avant de considérer GA4 comme opérationnel :

- [ ] Compte Google Analytics 4 créé
- [ ] Flux de données Web configuré
- [ ] Measurement ID copié
- [ ] Fichier `src/config/analytics.ts` mis à jour avec le vrai ID
- [ ] Site déployé en production
- [ ] Test en Temps Réel réussi (vous voyez votre visite)
- [ ] Bandeau cookies fonctionne (test Accepter/Refuser)
- [ ] Événements personnalisés configurés
- [ ] Conversions créées dans GA4 (contact, devis, formation)
- [ ] Google Search Console lié (optionnel mais recommandé)
- [ ] Rapport mensuel programmé (calendrier)

---

## 📞 Support

**Questions techniques GA4** :
- Forum Google Analytics : https://support.google.com/analytics/community
- Support Google Analytics : https://support.google.com/analytics/#topic=9143232

**Questions sur l'implémentation du site** :
- Email : TODO@centrifugelab.fr
- Responsable technique : TODO

---

**Dernière mise à jour** : 30 Octobre 2025
**Version** : 1.0
**Auteur** : CentrifugeLab - Équipe Technique
