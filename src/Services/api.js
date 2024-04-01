import axios from "axios";

// Base da URL
//https://api.themoviedb.org/3/movie/now_playing?api_key=237a26eae9e443ba3328fd21c09db2f8&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
