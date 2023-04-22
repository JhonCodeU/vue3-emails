import axios from "../config/axios";

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
        "max_results": 1000
      }

      const { data } = await axios.post("/emails/search_all", query);
      const { hits, total } = data;
      return hits;
    } catch (error) {
      console.log(error);
    }
  }
}

export default EmailController;