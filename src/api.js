import axios from "axios";
import config from "@/config.js";

export const HTTP = axios.create({
  baseURL: config.MOCK,
});

export default {
  async getArtworks() {
    try {
      const response = await HTTP.get("/artworks");
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
  async getArtwork(id) {
    try {
      const response = await HTTP.get(`/artworks/${id}`, {
        headers: {
          Prefer: `code=200, example=Example ${id}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
};
