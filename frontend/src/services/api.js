import axios from "axios";

const API = axios.create({
  baseURL: "https://employee-backend-squo.onrender.com/api",
});

export default API;