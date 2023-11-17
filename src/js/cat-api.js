import axios from 'axios';
const API_KEY =
  'live_deerNM7noPj6zACx3z0EyUGms7Rh6oLkSQ5wOhx28BBMDzVVjndjf2BPmEagjo08';
axios.defaults.headers.common['x-api-key'] = API_KEY;

export function fetchBreeds() {
  return axios('https://api.thecatapi.com/v1/breeds');
}

export function fetchCatByBreed(breedId) {
  return axios(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
  );
}
