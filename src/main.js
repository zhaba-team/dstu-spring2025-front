import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import {definePreset} from '@primevue/themes';
import router from './router.js';
import {createPinia} from "pinia";
import ToastService from 'primevue/toastservice';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(ToastService);

const MyPreset = definePreset(Aura, {
    semantic: {
        colorScheme: {
            light: {
                surface: {
                    0: '#ffffff',
                    50: '{zinc.50}',
                    100: '{zinc.100}',
                    200: '{zinc.200}',
                    300: '{zinc.300}',
                    400: '{zinc.400}',
                    500: '{zinc.500}',
                    600: '{zinc.600}',
                    700: '{zinc.700}',
                    800: '{zinc.800}',
                    900: '{zinc.900}',
                    950: '{zinc.950}'
                }
            },
            dark: {
                surface: {
                    0: '#ffffff',
                    50:  '{slate.50}',
                    100: '{slate.100}',
                    200: '{slate.200}',
                    300: '{slate.300}',
                    400: '{slate.400}',
                    500: '{slate.500}',
                    600: '{slate.600}',
                    700: '{slate.700}',
                    800: '#494949',
                    900: '#2e2e2e',
                    950: '{slate.950}'
                }
            }
        }
    }
});


app.use(router).use(PrimeVue, {
    theme: {
        preset: MyPreset,
        options: {
            options: {
                darkModeSelector: true,
            }
        }
    }
}).mount('#app')

window.Pusher = Pusher;

window.Echo = new Echo({

    broadcaster: 'reverb',

    key: import.meta.env.VITE_REVERB_APP_KEY,

    wsHost: import.meta.env.VITE_REVERB_HOST,

    wsPort: import.meta.env.VITE_REVERB_PORT,

    wssPort: import.meta.env.VITE_REVERB_PORT,

    forceTLS: 'http',

    enabledTransports: ['ws'],

});
