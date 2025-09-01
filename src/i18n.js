// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa els teus fitxers de traducció
import translationCA from './locales/ca/translation.json';
import translationES from './locales/es/translation.json';

const resources = {
  ca: {
    translation: translationCA,
  },
  es: {
    translation: translationES,
  },
};

i18n
  .use(initReactI18next) // Passa la instància d'i18n a react-i18next.
  .init({
    resources,
    lng: 'ca', // Idioma per defecte
    fallbackLng: 'ca', // Idioma de reserva si una traducció falla

    interpolation: {
      escapeValue: false, // React ja s'encarrega d'evitar atacs XSS
    },
  });

export default i18n;