const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
      url: 'https://www.vuemastery.com/',
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
  },
});
