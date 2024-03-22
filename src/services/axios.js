import axios from "axios";

const instance = axios.create({
  baseURL: "https://65fde68cb2a18489b38593f7.mockapi.io/api/v1",
});

export default instance;
