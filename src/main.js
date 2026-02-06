import { createApp } from 'vue'; // 158.7k (gzipped: 58.3k)
import App from './App.vue';
import Counter from './components/Counter.vue';
import TemplateSyntax from './components/TemplateSyntax.vue';
import ComputedComponent from './components/ComputedComponent.vue';
import ClassComponent from './components/ClassComponent.vue';
import StyleComponent from './components/StyleComponent.vue';
import ConditionalComponent from './components/ConditionalComponent.vue';
import ListRendering from './components/ListRendering.vue';
import EventHandling from './components/EventHandling.vue';

const app = createApp(App);

app.component('Counter', Counter);
app.component('TemplateSyntax', TemplateSyntax);
app.component('ComputedComponent', ComputedComponent);
app.component('ClassComponent', ClassComponent);
app.component('StyleComponent', StyleComponent);
app.component('ConditionalComponent', ConditionalComponent);
app.component('ListRendering', ListRendering);
app.component('EventHandling', EventHandling);

app.mount('#app');