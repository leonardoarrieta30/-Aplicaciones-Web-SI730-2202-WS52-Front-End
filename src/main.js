import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import './assets/main.css'
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import InputMask from 'primevue/inputmask';
import Dropdown from 'primevue/dropdown';

import i18n from './locales/i18n'
import { createI18n } from 'vue-i18n';//importar





import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import '/node_modules/primeflex/primeflex.css'












const app = createApp(App);

//lo inyectamos
app.use(PrimeVue);
app.use(i18n);//inyectar

app.component('Button', Button);
app.component('InputText', InputText);//Lo inyectamo a la aplicacion como conponente
app.component('InputNumber', InputNumber);
app.component('InputMask', InputMask);
app.component('pv-Dropdown', Dropdown);








app.mount('#app')
