import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';

Vue.use(Vuex);

export default function createStore() {
  return new Vuex.Store({
    state: {
      list: {}
    },
    actions: {
      async GET_LIST({commit}) {
        const {data} = await axios.get('https://m.de.olacio.com/2018/api/sessions?tagId=0&pageNum=1&pageSize=10')
        // console.log('服务端打印',data)
        commit('SET_LIST', data)
      }
    },
    mutations: {
      SET_LIST(state, data) {
        state.list = data
        // console.log(state.list)
      }
    }
  })
}