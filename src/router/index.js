import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Albums from '@/components/Albums'
import DetailsAlbum from '@/components/DetailsAlbum'
import Mypictures from'@/components/Mypictures'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/albums',
      name: 'albums',
      component: Albums
    },
    {path: '/detailsAlbum/:id', component: DetailsAlbum},
    {path: '/mypictures', component: Mypictures}
  ]
})

