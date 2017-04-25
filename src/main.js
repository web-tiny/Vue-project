import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import routes from './router.config';
const router = new VueRouter(routes);

new Vue({
	el: '#app',
	render: h => h(App),
	router
});