// import Vue from "vue/types/vue";
import Vue from 'vue';
export default (context) => Vue.$http.get('user').then((response) => {
  if (response && response.status === 200) {
    context.user = response.data.user;
  }
}).catch((error) => {
});
