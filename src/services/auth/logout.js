import Vue from 'vue';

const success = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('storedData');
  Vue.router.push('/login');
};

export default () => {
  return Vue.$http.get('logout').then((response) => {
    if (response && response.status === 200) {
      success();
    }
  }).catch((error) => {
  });
}