import { createRouter, createWebHashHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import SearchView from '../views/SearchView.vue'
import IndexView from '../views/IndexView.vue'
import CharacterView from '../views/CharacterView.vue'

const routes = [
  {
    path: '/',
    name: 'about',
    component: AboutView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  {
    path: '/index',
    name: 'index',
    component: IndexView
  },
  {
    path: '/character',
    name: 'character',
    component: CharacterView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
  
})

export default router
