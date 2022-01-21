import { createStore } from './gvuex'

const store = createStore({
  state(){
    return {
      test:111
    }
  },

  mutations:{
    testCommit(state){
      console.log(state)
      state.test = 222
      console.log(state)
    }
  },

  getters:{
    
  }
})

export default store