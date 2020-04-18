import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.prototype.$http = axios.create({
    baseURL: 'http://localhost:3003/api'
})
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')