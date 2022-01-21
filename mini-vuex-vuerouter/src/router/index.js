import { createRouter, createWebHashHistory } from './grouter'

const routes = [
  {
     path: '', component: null 
  }
]

const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export default router
