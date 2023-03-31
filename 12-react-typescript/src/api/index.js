import axios from "axios";
const API = axios.create({
  baseURL: "https://react-test-d49b3-default-rtdb.firebaseio.com",
});

export { API };
