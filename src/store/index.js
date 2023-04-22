import { createStore } from "vuex";
import axios from "../config/axios";

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
  actions: {
    async searchEmails ({ commit }, seach) {
      try {

        let alldocuments, field, term;
        if (seach === "") {
          alldocuments = "alldocuments";
          field = "_all";
          term = "shell window";
        } else {
          alldocuments = "match";
          field = "Subject";
          term = seach;
        }

        const query = {
          "search_type": alldocuments,
          "query": {
            "term": term,
            "field": field
          },
          "from": 5,
          "max_results": 100
        }

        const { data } = await axios.post("/emails/search", query);
        const { hits } = data;
        const { hits: emails, total } = hits;
        commit("setTotal", total.value);
        commit("setEmails", emails);
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    allEmails: state => state.emails,
    totalEmails: state => state.total,
  }
});

export default store;