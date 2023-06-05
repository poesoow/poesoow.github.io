import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      number: 0,
      noticeId: '',
      loginChk: false,
      isDark: false,
    }
  },
  mutations: {
    // ContactList.vue
    ContactRead(state, payload) {
      state.noticeId = payload
    },
    loginToken(state) {
      state.loginChk = true
    }
  },
  actions: {
  },
})
