import axios from "../config/axios";
import store from "../store";

const EmailController = {
  getAllEmails: async () => {
    try {

      const query = {
        "search_type": "alldocuments",
        "query": {
          "term": "shell window",
          "field": "_all"
        },
        "from": 0,
        "max_results": 100
      }

      const { data } = await axios.post("/emails/search_all", query);
      const { hits } = data;
      const { hits: emails, total } = hits;

      store.commit("setTotal", total.value);
      store.commit("setEmails", emails);
    } catch (error) {
      console.log(error);
    }
  }
}

export default EmailController;