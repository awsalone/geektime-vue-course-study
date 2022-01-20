import { inject, computed, reactive } from 'vue'
const STORE_KEY = '__store__'
// const STORE_KEY = new Symbol()

const useStore = function (){
  return inject(STORE_KEY)
}

const createStore = (options) => {
  return new Store(options)
}

class Store {
  constructor(options){
    this.$options = options
    this._state = reactive({
      data:options.state()
    })
    this._mutations = options.mutations
    this._actions = options.actions
    this.getters = {}
    Object.keys(options.getters).forEach(name => {
      let fn = options.getters[name]
      this.getters[name] = computed(()=>{
        fn(this.state)
      })
    })
  }

  get state(){
    return this._state.data
  }

  commit(type,payload){
    let entry = this._mutations[type]
    entry&&entry(this.state,payload)
  }

  dispatch(type, payload) {
    const entry = this._actions[type]
    return entry && entry(this, payload)
  }

  install(app){
    app.provide(STORE_KEY,this)
  }
}

export {
  useStore,
  createStore
}