import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/toast',
    name: 'Toast',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Toast.vue')
  },
  {
    path: '/message',
    name: 'Message',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Message.vue')
  },
  {
    path: '/input',
    name: 'Input',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Input.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
