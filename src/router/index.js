import { createRouter, createWebHashHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import SearchView from '../views/SearchView.vue'
import IndexView from '../views/IndexView.vue'
import CharacterIdView from '../views/CharacterIdView.vue'

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
    component: CharacterIdView
  },
]

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // always scroll to the top of the page
    return { top: 0 }
  },
  history: createWebHashHistory(),
  routes
})

export default router
