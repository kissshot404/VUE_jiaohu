import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/fonts/iconfont.css'



import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Cookies from 'js-cookie'
Vue.prototype.$jsCookie = Cookies

let bus = new Vue()
Vue.prototype.$bus = bus

//注册全局过滤器(注册全局的组件时一次只能注册一个,不带s)
Vue.filter('world',function(value){
	return value+'aotu'
})

// 导入修改过的axios
import axios from './api/index.js'
Vue.prototype.$axios = axios
 
// 导入mock数据
import './mock/index.js'

//导入vant
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);


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
