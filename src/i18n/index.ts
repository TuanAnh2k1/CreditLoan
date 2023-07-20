import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {RootState} from '../store';
import en from './locates/en';
import vn from './locates/vn';

const i18n = i18next.createInstance();

i18n.use(initReactI18next).init({
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: 'v3',
  lng: 'vn', // Change default language here
  debug: true,
  fallbackLng: 'vn', // Change default language here
  resources: {
    en: {
      translation: en,
    },
    vn: {
      translation: vn,
    },
  },
});

export const setI18nLanguage = (state: RootState) => {
  const language = state.auth.language;
  i18n.changeLanguage(language || 'vn');
};

export default i18n;
