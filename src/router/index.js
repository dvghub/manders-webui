import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import contact from '../views/contact.vue'
import information from '../views/information.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'
import notfound from '../views/notfound.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/informatie',
    name: 'information',
    component: information
  },
  {
    path: '/informatie/:page',
    name: 'information subs',
    component: information
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '*',
    name: 'notfound',
    component: notfound
  }
];

const router = new VueRouter({
  routes
});

export default router
