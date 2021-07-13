import { debounce } from '../utils/debounce.js';
import { onPopupCloseBtn } from './map-popups.js';
import { fillAdsLayer } from './map.js';

const mapFilter = document.querySelector('.map__filters');

const getData = () =>
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .catch(onPopupCloseBtn);
const dataFromServer = getData();

const refreshAds = () => {
  dataFromServer.then((data) => fillAdsLayer(data));
};
const addDebounceRender = debounce(refreshAds, 500);
const onChangeFilters = () => {};
mapFilter.addEventListener('change', addDebounceRender);

export { dataFromServer, mapFilter, onChangeFilters };
