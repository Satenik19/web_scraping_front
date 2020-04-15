import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver, ValidationProvider as ValidationProviderConfirm, extend } from 'vee-validate';
import Vue from 'vue';
import authService from '../../services/auth';

extend('confirmedBy', {
  params: ['target'],
  // Target here is the value of the target field
  validate(value, { target }) {
    return value === target;
  },
  // here it is its name, because we are generating a message
  message: 'The {_field_} does not match with {target}',
});

Vue.config.productionTip = false;

export default {
  name: 'registration',
  data() {
    return {
      user: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirmation: '',
      },
    };
  },
  components: {
    ValidationProvider,
    ValidationObserver,
    ValidationProviderConfirm,
  },
  methods: {
    userInfo() {
      authService.register(this, this.user);
      Vue.router.push('/login');
    },
  },
};
