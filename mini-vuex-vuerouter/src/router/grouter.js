import { ref,inject } from 'vue'
import RouterLink from './RouterLink.vue'
import RouterView from './RouterView.vue'

const ROUTER_KEY = new Symbol()

const createWebHashHistory = () => {

  const bindEvent = (fn) => {
    window.addEventListener('hashchange',fn)
  }

  return {
    bindEvent,
    url:window.location.hash.slice(1)||'/'
  }
}

const useRouter = () => {
  return inject(ROUTER_KEY)
}

const createRouter = (options) => {
  return new Router(options)
}

class Router {
  constructor(options){
    this.routes = options.routes
    this.history = options.history
    this.current = ref(this.history.url)

    this.history.bindEvent(()=>{
      this.current.value = window.location.hash.slice(1)
    })
  }

  install(app){
    app.provide(ROUTER_KEY,this)
    app.component("router-link",RouterLink) 
    app.component("router-view",RouterView)
  }
}

export {
  useRouter,
  createWebHashHistory,
  createRouter
}