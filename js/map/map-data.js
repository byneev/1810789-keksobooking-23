import { debounce } from '../utils/debounce.js';
import { dataFilter } from './map-filter.js';
import { showLoadAdsError, hideLoadAdsError } from './map-popups.js';
import { fillAdsLayer, refreshAds } from './map.js';

const mapFilter = document.querySelector('.map__filters');

const getData = (callOnSuccess, callOnError) => () =>
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .then((data) => dataFilter(data))
    .then((data) => data.slice(0, 10))
    .then((data) => {
      callOnSuccess(data);
    })
    .then(hideLoadAdsError)
    .catch(callOnError);

const renderAds = getData(fillAdsLayer, showLoadAdsError);
const addDebounceRender = debounce(refreshAds, 500);
const addFilterRender = () => {
  mapFilter.addEventListener('change', () => {
    addDebounceRender();
  });
};

export { renderAds, mapFilter, addFilterRender };
