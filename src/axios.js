import axios from "axios";

export default URL = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
