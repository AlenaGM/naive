import axios from "axios";
import config from "@/config.js";

export const HTTP = axios.create({
  baseURL: config.MOCK,
});

export default {
  async getAllArtists() {
    try {
      const response = await HTTP.get("/artists");
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
  async getAllArtworks() {
    try {
      const response = await HTTP.get("/artworks");
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
};
