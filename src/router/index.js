import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    },
   {
      path: '/register',
      name: 'Register',
      component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
    },
    {
      path: '/collect',
      name: 'Collect',
    //使用meta 传参 携带需要登录的标志 auth
      meta:{
            auth:true
        },
      component: () => import(/* webpackChunkName: "collect" */ '../views/Collect.vue')
    },
  {
    path: '/text',
    name: 'Text',
    component: () => import(/* webpackChunkName: "text" */ '../views/Text.vue')
  },
  {
    path: '/center',
    name: 'Center',
    children:[
        {
          path: 'sethead',
          name: 'Sethead',
          component: () => import('../views/Sethead.vue')
        },
        {
          path: 'setpassword',
          name: 'Setpassword',
          component: () => import('../views/Setpassword.vue')
        },
     ],
    meta:{
          auth:true
      },
    component: () => import(/* webpackChunkName: "center" */ '../views/Center.vue')
  },
  {
    path: '/element',
    name: 'Element',
    component: () => import(/* webpackChunkName: "element" */ '../views/Element.vue')
  },
  {
    path: '/book/:pk',
    name: 'Book',
    component: () => import(/* webpackChunkName: "book" */ '../views/Book.vue')
  },
  {
    path: '/article/:pk',
    name: 'Article',
    component: () => import(/* webpackChunkName: "article" */ '../views/Article.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})




import Cookies from 'js-cookie'


// 给router添加全局路由守卫 t 去哪里 f 从哪儿来  n下一步干什么
router.beforeEach(function(t,f,n){
    // 先判断是否需要授权
    if(t.meta.auth){
        // 如果需要授权 在判断有没有登录
        let user = Cookies.get('user')
        if(user){
            n()
        }
        else{
            n({name:"Login",query:{next:t.path}})  //  /login?next=/collect
         }
    }
    else{
         n();
    }

})
export default router
