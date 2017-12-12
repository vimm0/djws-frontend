// vue
import Vue from 'vue';
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import {routes} from './router'

Vue.use(VueResource);
Vue.use(Vuetify);
Vue.use(VueRouter);

let router = new VueRouter({mode: 'history', routes: routes});

new Vue({
    el: '#djwebshiksha-root',
    router,
    components: {
        'app-home': App
    },
    render: h => h(App),
});