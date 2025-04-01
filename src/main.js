import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import de from './locales/de.json'
import en from './locales/en.json'
import es from './locales/es.json'
import fr from './locales/fr.json'
import ja from './locales/ja.json'
import pt from './locales/pt.json'

console.log(en['Terms of Use'])

const systemLanguage = navigator.language || navigator.userLanguage;
const locale = systemLanguage.split('-')[0];

const i18n = createI18n({
    locale: locale || 'en',
    fallbackLocale: 'en',
    messages: {
        de: de,
        en: en,
        es: es,
        fr: fr,
        ja: ja,
        pt: pt
    }
})

createApp(App).use(i18n).mount('#app')
