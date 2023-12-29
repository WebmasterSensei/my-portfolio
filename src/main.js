// main.js

import { createApp } from 'vue';
import App from './App.vue';
import VueScrollTo from 'vue-scrollto';
import store from './store';

const app = createApp(App);

// Use the vue-scrollto plugin
app.use(VueScrollTo);

// Use the Vuex store
app.use(store);

app.mount('#app');

