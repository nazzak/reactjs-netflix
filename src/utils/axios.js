import axios from "axios";

// pass a base url
const instance = axios.create({
  baseUrl: "https://api.themoviedb.org/3",
});

export default instance;
