// import { ValidationProvider } from 'vee-validate';
import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
// import { ValidationObserver } from 'vee-validate';
import authService from '../../services/auth';
extend('email', email);
// Override the default message.
extend('required', {
  ...required,
  message: 'This field is required',
});
export default {
  name: 'registration',
  // component: ValidationObserver,
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  components: {
    ValidationProvider,
  },
  mounted() {
    const vm = this;
    // this.userInfo();
  },
  methods: {
    userInfo() {
      authService.login(this, this.user);
    },
  },

};
