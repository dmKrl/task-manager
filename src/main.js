import { createApp } from 'vue';
import App from './App.vue';
import components from '@/components/UI';
import router from './router/router';
import { createPinia } from 'pinia';

const app = createApp(App);

console.log(components);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(router).use(createPinia()).mount('#app');
