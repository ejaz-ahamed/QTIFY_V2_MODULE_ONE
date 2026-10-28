import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend.labs.crio.do";

export const fetchTopAlbums = async () => {
  const res = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
  return res.data;
};

export const fetchNewAlbums = async () => {
  const res = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
  return res.data;
};

export const fetchSongs = async () => {
  const res = await axios.get(`${BACKEND_ENDPOINT}/songs`);
  return res.data;
};

export const fetchGenres = async () => {
  const res = await axios.get(`${BACKEND_ENDPOINT}/genres`);
  return res.data.data;
};
