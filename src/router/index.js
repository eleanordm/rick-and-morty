import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SearchView from '../views/SearchView.vue'
import IndexView from '../views/IndexView.vue'
import CharacterIdView from '../views/CharacterIdView.vue'

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      title: 'About'
    }
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView,
    meta: {
      title: 'Search'
    }
  },
  {
    path: '/index',
    name: 'index',
    component: IndexView,
    meta: {
      title: 'Index'
    }
  },
  {
    path: '/character',
    name: 'character',
    component: CharacterIdView,
    meta: {
      title: 'Character'
    }
  },
]

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // When a character card is clicked, the ID card page will load and automatically scroll to the top of the page
    return { top: 0 }
  },
  history: createWebHistory(),
  routes
})

// Changes the title of a page, or sets a default title if unknown
router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? 'Rick and Morty'
})

export default router
