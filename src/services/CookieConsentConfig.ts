import type { CookieConsentConfig } from 'vanilla-cookieconsent';

declare global {
    interface Window {
      dataLayer: Record<string, any>[];
      gtag: (...args: any[]) => void;
    }
  }

export const config: CookieConsentConfig = {
    //disablePageInteraction: true,
  guiOptions: {
    consentModal: {
      layout: 'cloud inline',
      position: 'bottom center',
      flipButtons: false,
      equalWeightButtons: true,
    },
    preferencesModal: {
      layout: 'box',
      position: 'left',
      flipButtons: false,
      equalWeightButtons: true,
    },
    
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    analytics: {
    autoClear: {
        cookies: [
            {
                name: /^_ga/,   // regex: match all cookies starting with '_ga'
            },
            {
                name: '_ga_PS464M3XKC',   // string: exact cookie name
            }
        ]
    },
      services: {
        ga4: {
          label:
            '<a href="https://marketingplatform.google.com/about/analytics/terms/us/" target="_blank">Google Analytics</a>',
          onAccept: () => {
            //console.log('ga4 accepted');
            window.gtag("consent", "update", {
                ad_storage: "granted",
                ad_user_data: "granted",
                ad_personalization: "granted",
                analytics_storage: "granted",
            });
          },
          onReject: () => {
            //console.log('ga4 rejected');
            window.gtag("consent", "update", {
                ad_storage: "denied",
                ad_user_data: "denied",
                ad_personalization: "denied",
                analytics_storage: "denied",
            });
          },
          cookies: [
            {
              name: /^(_ga|_ga_[0-9]+)/
            },
          ],
        },
      },
    },
  },
  language: {
    default: 'es',
    autoDetect: 'browser',
    translations: {
      en: '../translations/en.json',
      es: '../translations/es.json',
    },
  },
};
