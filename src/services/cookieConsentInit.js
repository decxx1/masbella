/*
 * cookieConsentInit.js
 *
 * Config and tools for CookieConsent v3, a lightweight, GDPR and CCPA compliant
 * Consent Management Tool written in vanilla JS.
 * @see https://cookieconsent.orestbida.com/
 */

import * as CookieConsent from "vanilla-cookieconsent";

class CookieConsentInit {

    constructor() {
        CookieConsent.run({
            autoclear_cookies: true,
            onChange: (cookie) => {
                console.log('Borrar las cookies de Google Analytics');
                if (!cookie.categories.includes('analytics')) {
                    // Borra las cookies de Google Analytics
                    
                    deleteGoogleAnalyticsCookies();
                }
            },

            categories: {
                necessary: {
                    enabled: true,
                    readOnly: true,
                },
                analytics: {
                    autoClear: {
                      cookies: [
                        {
                          name: /^_ga/,   // regex: match all cookies starting with '_ga'
                        },
                        {
                          name: '_ga_[0-9]+',   // string: exact cookie name
                        }
                      ]
                    },
            
                    services: {
                      ga: {
                        label: 'Google Analytics',
                        cookies: [
                          {
                            name: /^(_ga|_ga_[0-9]+)/
                          }
                        ]
                      }
                    }
                },
                targeting: {}
            },
            

            language: {
                default: 'es',
                autoDetect: 'browser',
                translations: {
                  en: '../translations/en.json',
                  es: '../translations/es.json',
                },
            },
        });
      
    }
}

function deleteGoogleAnalyticsCookies() {
    const cookiesToDelete = ['_ga', '_gid', '_gat']; // Cookies comunes de GA
    cookiesToDelete.forEach((cookie) => {
        document.cookie = `${cookie}=; Max-Age=-99999999; path=/; domain=${location.hostname}`;
    });
}

export default CookieConsentInit;