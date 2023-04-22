import { createStore } from "vuex";

const store = createStore({
  state () {
    return {
      emails: null,
      total: 0,
    }
  },
  mutations: {
    setEmails (state, emails) {
      state.emails = emails;
    },
    setTotal (state, total) {
      state.total = total;
    }
  },
  actions: {},
  getters: {
    allEmails: state => state.emails,
    totalEmails: state => state.total,
  }
});

export default store;