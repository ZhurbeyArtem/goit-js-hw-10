import axios from 'axios';

require('dotenv').config();

axios.defaults.headers.common['x-api-key'] = String(process.env.API_KEY);

export function fetchBreeds() {
 return axios('https://api.thecatapi.com/v1/breeds')
}

export function fetchCatByBreed(breedId) {
     return axios(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
}