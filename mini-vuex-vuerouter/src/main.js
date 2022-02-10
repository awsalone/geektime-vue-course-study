import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'

createApp(App)
  .use(store)
  .mount('#app')

  
window.onerror = function(e){
  console.log(['https://stackoverflow.com/search?q=[js]+'+e])
}

