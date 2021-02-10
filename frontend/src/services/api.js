import axios from "axios";

const api = axios.create({
  baseURL: "https://api-be-the-hero.herokuapp.com",
});

export default api;
