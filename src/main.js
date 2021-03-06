// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'amfe-flexible/index.js'
import './assets/styles/reset.css'
import store  from './store'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import '../static/mock/mockServer.js'
Vue.use(Mint);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
