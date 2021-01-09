import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-f0c8c-default-rtdb.firebaseio.com/"
});

export default instance;
