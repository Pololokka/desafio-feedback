import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translations from './Locales';

const i18nConfig = {
  resources: translations,
  fallbackLng: 'pt-BR',
  defaultNS: 'translations',
};

i18n.use(LanguageDetector).use(initReactI18next).init(i18nConfig);

export const translationPaths = {
  nav: {
    title: 'nav.title',
    langF: 'nav.langF',
    langS: 'nav.langS',
    langT: 'nav.langT',
  },
  main: {
    title: 'main.title',
    text: 'main.text',
  },
  btnMain: {
    value: 'btnMain.value',
  },
  modal: {
    title: 'modal.title',
    statusTitle: 'modal.statusTitle',
    statusOpt1: 'modal.statusOpt1',
    statusOpt2: 'modal.statusOpt2',
    comment: 'modal.comment',
    btnModal: 'modal.btnModal',
  },
  errors: {
    status: 'errors.status',
    tagMin: 'errors.tagMin',
    tagReq: 'errors.tagReq',
    comment: 'errors.comment',
  },
};

export default i18n;
