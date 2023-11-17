import { fetchBreeds, fetchCatByBreed } from './cat-api';
import { Notify } from 'notiflix';

const list = document.querySelector('.breed-select');
const catData = document.querySelector('.cat-info');
const loader = document.querySelector('.loader-text');

const toggleLoader = () => {
  loader.classList.toggle('hidden');
};

toggleLoader();

fetchBreeds()
  .then(res => {
    const arr = res.data.map(
      el =>
        `
          <option value="${el.id}"">
            ${el.name}
          </option>
        `
    );
    list.insertAdjacentHTML('beforeend', arr.join(''));
  })
  .catch(() => {
    Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
  })
  .finally(() => toggleLoader());

list.addEventListener('change', el => {
  toggleLoader();
  catData.innerHTML = '';
  fetchCatByBreed(el.target.value)
    .then(res => {
      const { alt_names, name, description, temperament } = res.data[0].breeds[0];
      const data = `
      <img src="${res.data[0].url}" alt="${alt_names}" width=500 height=500 />
      <div class="cat-content">
        <h1 class="cat-title">${name}</h1>
        <p class="cat-text">${description}</p>
        <p class="cat-temperaments"><b>Temperaments</b>: ${temperament}</p>
      </div>
      `;
      catData.insertAdjacentHTML('beforeend', data);
    })
    .catch(err =>
      Notify.failure(`Oops! Something went wrong! Try reloading the page!`)
    )
    .finally(() => toggleLoader());
});
