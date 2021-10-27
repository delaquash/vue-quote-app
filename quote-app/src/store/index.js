import { createStore } from 'vuex'

export default createStore({
  state: {
    quote:{
      
    },
    quotes:[],
  },
  mutations: {
    GetRandomQoute(state) {
      fetch('http://localhost:5000/quotes/random')
          .then(res => res.json())
          .then( data => {
            if(state.quote._id != data._id){
                state.quote = data;
            } else {
              this.commit("GetRandowmquote")
            }
          })
    },
    GetAllQuote(state) {
      fetch("http://localhost:5000/quotes")
          .then(res => res.json())
          .then(data => {
            state.quotes = data
          })
    }
  },
  actions: {
  },
  modules: {
  }
})
