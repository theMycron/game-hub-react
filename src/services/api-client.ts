import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  withCredentials: false,
  headers: {
    post: {
      "Access-Control-Allow-Origin": true,
    },
  },
  params: {
    key: "placeholder",
  },
});
