import Vue from 'vue';

const success = (response, context) => {
};

export default (context, data) => {
  return Vue.$http.post('auth/sign-up', data).then((response) => {
    if (response && response.status === 200) {
      success(response, context);
    }
  }).catch((error) => {
  });

}