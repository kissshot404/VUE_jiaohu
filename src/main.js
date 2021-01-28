import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false

Vue.use(ElementUI);

// import obj123 from './dat'
// console.log('obj123',obj123)
// import {obj,obj1} from './dat'
// console.log('obj',obj,obj1)

// //这样导入css
// import './assets/css/index.css'




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
