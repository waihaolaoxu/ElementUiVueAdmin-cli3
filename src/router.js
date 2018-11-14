import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      meta:{
        title:'列表'
      },
      component: () => import('./views/List.vue')
    },
    {
      path: '/form',
      name: 'form',
      meta:{
        title:'编辑'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "form" */ './views/Form.vue')
    }
  ]
})
