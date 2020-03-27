import Vue from '../index'
import App from './App.vue'


new Vue({
  el: '#app',
  mounted() {
    console.log(22334455)
  },
  render: function (h) {
    return h(App)
  }
  // render: function (h) {
  //   return h('div', 123)
  // }
})