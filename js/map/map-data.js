import { dataFilter } from './map-filter.js';
import { showLoadAdsError, hideLoadAdsError } from './map-popups.js';
import { fillAdsLayer } from './map.js';

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
    .then((data) => {
      callOnSuccess(data);
    })
    .then(hideLoadAdsError)
    .catch(callOnError);

const renderAds = getData(fillAdsLayer, showLoadAdsError);
// const addFilterRender = () => {
mapFilter.addEventListener('change', renderAds);
// };

export { renderAds, mapFilter };
