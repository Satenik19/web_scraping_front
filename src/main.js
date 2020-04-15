import Vue from 'vue';
import Axios from 'axios';
import { ValidationObserver } from 'vee-validate';
import App from './App.vue';
import '../src/assets/css/style.css';
import toastr from "toastr";
import router from '../router';

Vue.config.productionTip = false;
Vue.router = router;
Vue.component('ValidationObserver', ValidationObserver);

Axios.defaults.baseURL = 'http://music.loc/api/';
const token = localStorage.getItem('token');
if (token) {
  // Axios.defaults.headers.common.Accept = 'application/json';
  Axios.defaults.headers.Authorization = `bearer ${token}`;
}
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.auth) && !localStorage.getItem('token')) {
    next({
      path: '/login',
    });
  } else if (!to.matched.some((record) => record.meta.auth) && localStorage.getItem('token')) {
    next({
      path: '/user',
    });
  }  else {
    next();
  }
});
Vue.$http = Axios;

Vue.$http.interceptors.request.use((response) => {
  if (localStorage.getItem('token') && !response.headers.Authorization) {
    response.headers.common.Authorization = `bearer ${localStorage.getItem('token')}`;
  }
  return response;
}, (error) => Promise.reject(error.response));


Vue.$http.interceptors.response.use((a) => a, (error) => {
  if (error.response && error.response.status === 401) {
    localStorage.removeItem('token');
    Vue.router.push('/login');
  }
  return Promise.reject(error);
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
