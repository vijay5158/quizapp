import axios from "axios";

const localURL = "http://127.0.0.1:8000/api/";


const AxiosInstance = axios.create({
  baseURL:localURL
})

export default AxiosInstance;