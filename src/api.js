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
      const response = await HTTP.get("/artists/artworks");
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
  async getArtist(artistId) {
    try {
      const response = await HTTP.get(`/artists/${artistId}`, {
        headers: {
          Prefer: `code=200, example=Example ${artistId}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
  async getArtwork(artworkId) {
    try {
      const response = await HTTP.get(`/artists/artworks/${artworkId}`, {
        headers: {
          Prefer: `code=200, example=Example ${artworkId}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
};
