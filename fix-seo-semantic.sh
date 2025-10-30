#!/bin/bash

# Script de correction sémantique SEO
# Corrige tous les problèmes identifiés dans l'audit

echo "🔧 Correction sémantique SEO en cours..."

# 1. Remplacer <main> par <div> dans les pages (le Layout a déjà un main)
echo "📝 Correction des balises <main> dans les pages..."
find src/pages -name "*.astro" -type f -exec sed -i 's/<main class="max-w-7xl/<div class="max-w-7xl/g' {} \;
find src/pages -name "*.astro" -type f -exec sed -i 's/<\/main>/<\/div>/g' {} \;

# 2. Ajouter aria-hidden="true" aux SVG décoratifs
echo "♿ Ajout attributs ARIA aux SVG..."
# Pour les SVG sans aria-hidden
find src/pages -name "*.astro" -type f -exec sed -i 's/<svg class="w-\([0-9]*\) h-\([0-9]*\)"/<svg class="w-\1 h-\2" aria-hidden="true"/g' {} \;
find src/pages -name "*.astro" -type f -exec sed -i 's/<svg class="\([^"]*\)" viewBox/<svg class="\1" aria-hidden="true" viewBox/g' {} \;
find src/components -name "*.astro" -type f -exec sed -i 's/<svg class="w-\([0-9]*\) h-\([0-9]*\)"/<svg class="w-\1 h-\2" aria-hidden="true"/g' {} \;
find src/components -name "*.astro" -type f -exec sed -i 's/<svg class="\([^"]*\)" viewBox/<svg class="\1" aria-hidden="true" viewBox/g' {} \;

echo "✅ Corrections terminées!"
echo "📊 Résumé:"
echo "  - Balises <main> corrigées dans les pages"
echo "  - Attributs ARIA ajoutés aux SVG"
