import Vue from 'vue';
import Router from 'vue-router';
import login from '../src/components/login/index.vue';
import register from '../src/components/register/index.vue';
import user from '../src/components/user/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'register',
      path: '/register',
      component: register,
      meta: {
        auth: false
      },
    },
    {
      name: 'login',
      path: '/login',
      component: login,
      meta: {
        auth: false
      },
    },
    {
      name: 'login',
      path: '/',
      redirect: '/login'
    },
    {
      name: 'user',
      path: '/user',
      component: user,
      meta: {
        auth: true
      },
    }
  ],
});
