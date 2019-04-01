import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Login from '@/components/login/login'

Vue.use(Router)
 
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Login
    },
	{
      path: '/home',
      name: 'home',
      component: HelloWorld,
	  children: [
      {
        path: '/',
        name: 'login',
        component: Login
      }
	  ]
    }
  ]
})
