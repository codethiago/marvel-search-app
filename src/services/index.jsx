import axios from "axios";

export const API = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
});
