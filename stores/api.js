import axios from "axios";

// export const baseURL = "http://192.168.8.100:8000"; #workplace
export const baseURL = "http://192.168.8.180:8000"; //#home
const api = axios.create({
  baseURL: `${baseURL}/api`,
});
export default api;
