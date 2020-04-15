import Vue from 'vue';

const success = (response, context) => {
  const { token } = response.data;
  localStorage.setItem('token', token);
  Vue.router.push('/user');
};

 export default (context, data) => {
   return Vue.$http.post('auth/sign-in', data).then((response) => {
     if (response && response.status === 200) {
       success(response, context);
     }
   }).catch((error) => {
   });
 }

