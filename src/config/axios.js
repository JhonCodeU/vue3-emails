import axios from "axios";

const baseURLDev = "http://localhost:8080";

axios.defaults.baseURL = baseURLDev;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//set config default
const instace = axios.create({
  baseURL: baseURLDev,
});

export default instace;