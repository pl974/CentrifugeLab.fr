/**
 * Configuration Google Analytics 4
 *
 * IMPORTANT: Ce fichier contient des placeholders.
 * Remplacer 'G-XXXXXXXXXX' par votre vrai Measurement ID.
 *
 * Comment obtenir votre Measurement ID:
 * 1. Créer un compte Google Analytics 4: https://analytics.google.com/
 * 2. Ajouter une propriété GA4
 * 3. Créer un flux de données Web
 * 4. Copier le Measurement ID (format: G-XXXXXXXXXX)
 * 5. Remplacer la valeur ci-dessous
 */

export const analytics = {
  /**
   * Google Analytics 4 Measurement ID
   * Format: G-XXXXXXXXXX
   *
   * TODO: Remplacer par votre vrai ID
   */
  ga4MeasurementId: 'G-XXXXXXXXXX', // TODO: À REMPLACER

  /**
   * Activer/désactiver Analytics
   * Utile pour dev/staging (false) vs production (true)
   */
  enabled: import.meta.env.PROD, // true en production, false en dev

  /**
   * Configuration avancée
   */
  config: {
    // Anonymiser les IPs (RGPD)
    anonymize_ip: true,

    // Cookie consent (attendrele consentement avant tracking)
    // Options: 'granted' (actif par défaut) | 'denied' (attendre consentement)
    cookie_flags: 'SameSite=None;Secure',

    // Durée de vie des cookies (en secondes)
    // 90 jours = 7776000 secondes
    cookie_expires: 7776000,

    // Domaine du cookie
    cookie_domain: 'centrifugelab.fr',
  },

  /**
   * Events personnalisés à tracker
   */
  customEvents: {
    // Téléchargements
    downloadGuide: 'download_guide',
    downloadCatalog: 'download_catalog',

    // Formulaires
    submitContact: 'submit_contact_form',
    submitQuote: 'submit_quote_form',
    submitTraining: 'submit_training_form',
    submitRental: 'submit_rental_form',

    // Engagement
    viewProduct: 'view_product',
    viewComparison: 'view_comparison',
    viewBlogPost: 'view_blog_post',

    // Conversions
    requestDemo: 'request_demo',
    requestQuote: 'request_quote',
    bookTraining: 'book_training',

    // Interactions
    clickPhone: 'click_phone',
    clickEmail: 'click_email',
    playVideo: 'play_video',
  },

  /**
   * Goals / Objectifs de conversion
   */
  goals: {
    // Contact
    contactFormSubmit: {
      event: 'submit_contact_form',
      value: 50, // Valeur estimée en €
    },

    // Devis
    quoteRequest: {
      event: 'submit_quote_form',
      value: 200, // Valeur estimée d'une demande de devis
    },

    // Formation
    trainingBooking: {
      event: 'book_training',
      value: 500, // Valeur estimée d'une réservation
    },
  },
};

/**
 * Helper function pour tracker un événement personnalisé
 *
 * Usage:
 * import { trackEvent } from '@/config/analytics';
 * trackEvent('download_guide', { guide_name: 'Guide Achat' });
 */
export function trackEvent(eventName: string, eventParams?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag && analytics.enabled) {
    window.gtag('event', eventName, eventParams);
  }
}

/**
 * Helper function pour tracker une page vue
 * (normalement géré automatiquement par GA4)
 */
export function trackPageView(url: string) {
  if (typeof window !== 'undefined' && window.gtag && analytics.enabled) {
    window.gtag('config', analytics.ga4MeasurementId, {
      page_path: url,
    });
  }
}

/**
 * Helper function pour définir les propriétés utilisateur
 */
export function setUserProperties(properties: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag && analytics.enabled) {
    window.gtag('set', 'user_properties', properties);
  }
}

/**
 * Type definitions pour window.gtag
 */
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
