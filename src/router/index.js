import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Gallery from '@/components/gallery'
import Events from '@/components/events'

Vue.use(Router)

export default new Router({
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
      path: '/events',
      name: 'Events',
      component: Events
    }
  ]
})
