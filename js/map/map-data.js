import { debounce } from '../utils/debounce.js';
import { filterOutData } from './map-filter.js';
import { showLoadAdsError, hideLoadAdsError } from './map-popups.js';
import { fillAdsLayer, refreshAds } from './map.js';

const mapFilter = document.querySelector('.map__filters');

const getData = (onSuccess, onError) => () =>
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .then((data) => filterOutData(data))
    .then((data) => data.slice(0, 10))
    .then((data) => onSuccess(data))
    .then(hideLoadAdsError)
    .catch(onError);

const renderAds = getData(fillAdsLayer, showLoadAdsError);
const addDebounceRender = debounce(refreshAds, 500);
const adsFilterHandler = () => {
  mapFilter.addEventListener('change', () => {
    addDebounceRender();
  });
};

export { renderAds, mapFilter, adsFilterHandler };
