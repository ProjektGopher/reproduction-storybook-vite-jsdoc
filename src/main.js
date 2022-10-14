import Vue from 'vue'
import './style.css'
import App from './App.vue'

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  render (h) {
    return h(App)
  }
})