import home from './components/home.vue';
import user from './components/user.vue';
import news from './components/news.vue';
import login from './components/login.vue';
import reg from './components/reg.vue';
import detail from './components/detail.vue';

const routes = [{
	path: '/home',
	component: home
}, {
	path: '/user',
	component: user,
	children: [{
		path: 'login',
		component: login
	}, {
		path: 'reg',
		component: reg
	}]
}, {
	path: '/news',
	component: news,
	children: [{
		path: 'detail/:aid',
		component: detail
	}]
}, {
	path: '/',
	redirect: '/home'
}];

export default {
	routes
}