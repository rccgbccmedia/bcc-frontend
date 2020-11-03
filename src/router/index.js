import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Gallery from '@/components/gallery'
import Events from '@/components/events'
import About from '@/components/about'
import Live from '@/components/live'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/media',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/passwordReset',
      name: 'Password-Reset',
      component: () => import(/* webpackChunkName: "Password-Reset" */ '@/components/forgotPassword.vue')
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/live',
      name: 'Live',
      component: Live
    }
  ]
})
