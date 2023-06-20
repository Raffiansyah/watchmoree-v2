import axios from 'axios';

const api = (() => {
  const BASE_URL = 'https://api.themoviedb.org/3';
  const TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
  const ORIGINAL_IMG = 'https://image.tmdb.org/t/p/original';
  const W500_IMG = 'https://image.tmdb.org/t/p/w500';

  const headers = {
    Authorization: `bearer ${TOKEN}`,
  };

  const fetchWithAuth = async (url, params) => {
    try {
      const { data } = await axios.get(BASE_URL + url, {
        headers,
        params,
      });
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  async function getGenresMedia(mediaType) {
    const request = await fetchWithAuth(`/genre/${mediaType}/list`);
    return request;
  }

  async function getTrendingMovie(time) {
    const request = await fetchWithAuth(`/trending/movie/${time}`);
    return request;
  }

  async function getTopRatedMedia(mediaType) {
    const request = await fetchWithAuth(`/${mediaType}/top_rated`);
    return request;
  }

  async function getPopularMedia(mediaType) {
    const request = await fetchWithAuth(`/${mediaType}/popular`);
    return request;
  }

  async function getDiscoverMedia(mediaType, pageNum) {
    const request = await fetchWithAuth(
      `/discover/${mediaType}?page=${pageNum}`
    );
    return request;
  }

  async function getDetailMedia(mediaType, id) {
    const request = await fetchWithAuth(`/${mediaType}/${id}`);
    return request;
  }

  async function getSearchMedia(query, pageNum) {
    const request = await fetchWithAuth(
      `/search/multi?query=${query}&page=${pageNum}`
    );
    return request;
  }

  async function getCreditsMedia(mediaType, id) {
    const request = await fetchWithAuth(`/${mediaType}/${id}/credits`);
    return request;
  }

  async function getRekomenMedia(mediaType, id) {
    const request = await fetchWithAuth(`/${mediaType}/${id}/recommendations`);
    return request;
  }

  async function getSimilarMedia(mediaType, id) {
    const request = await fetchWithAuth(`/${mediaType}/${id}/similar`);
    return request;
  }

  return {
    getGenresMedia,
    getDiscoverMedia,
    getTopRatedMedia,
    getPopularMedia,
    getTrendingMovie,
    getDetailMedia,
    getSearchMedia,
    getCreditsMedia,
    getRekomenMedia,
    getSimilarMedia,
    ORIGINAL_IMG,
    W500_IMG,
  };
})();

export default api;
