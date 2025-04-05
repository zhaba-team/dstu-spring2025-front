import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import {definePreset} from '@primevue/themes';
import router from './router.js';
import {createPinia} from "pinia";
import ToastService from 'primevue/toastservice';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(ToastService);

const myPreset = definePreset(Aura, {
    conmponents: {

    },
    semantic: {
        primary: {
            50: '{indigo.50}',
            100: '{indigo.100}',
            200: '{indigo.200}',
            300: '{indigo.300}',
            400: '{indigo.400}',
            500: '{indigo.500}',
            600: '{indigo.600}',
            700: '{indigo.700}',
            800: '{indigo.800}',
            900: '{indigo.900}',
            950: '{indigo.950}'
        }
    }
});

app.use(router).use(PrimeVue, {
    theme: {
        preset: myPreset,
        options: {
            options: {
                darkModeSelector: true,
            }
        }
    }
}).mount('#app')
