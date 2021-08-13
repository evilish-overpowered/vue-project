import { createApp } from 'vue';
import App from './App.vue';
import Button from './components/button.vue';

createApp(App).mount('#app');
App.component = {
    Button: Button,
}

//App.component('Button', Button);
//const app = Vue.createApp({});
//App.config.isCustomElement = (tag) => tag === 'Button';
// createApp(Button).mount('#app');
// Vue.component('Button', Button);