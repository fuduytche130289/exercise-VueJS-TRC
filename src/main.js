// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
Vue.filter('toUpperCase',(value)=>{
  return value.toUpperCase();
})
Vue.filter('formatQuantity',(value)=>{
  return value + " cái";
})
Vue.filter('formatMoney',(value)=>{
  return "$" + value;
})
Vue.filter('formatDiscount',(value)=>{
  return value + "%";
})

