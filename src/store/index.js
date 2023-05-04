import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      number: 0,
      noticeId: '',
    }
  },
  mutations: {
    // ContactList.vue 
    ContactRead(state, payload) {
      state.noticeId = payload
    },
  },
  actions: {
  },
})
