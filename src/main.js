import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import './assets/main.css'
import Button from 'primevue/button';
//importamos los estilos
import 'primevue/resources/themes/saga-blue/theme.css'     //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                          //icons
import AutoComplete from 'primevue/autocomplete';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import '/node_modules/primeflex/primeflex.css';
import Dropdown from 'primevue/dropdown';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import router from "./router";



//importanto biblioteca
const app = createApp(App);
app.use(PrimeVue);
app.use(router);

//agregamos componente boton
app.component('Button',Button);
app.component('AutoComplete',AutoComplete);
app.component('InputText',InputText);
app.component('Password',Password);
app.component('pv-dropdown',Dropdown);
app.component('pv-dataTable',DataTable);
app.component('pv-column',Column);


//esto usarlo para todas las paginas
app.mount('#app')
