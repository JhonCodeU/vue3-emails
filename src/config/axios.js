import axios from "axios";
import config from "./config";

//set config default
const instace = axios.create(config);

export default instace;