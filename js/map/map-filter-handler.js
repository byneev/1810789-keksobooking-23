import { showLoadAdsError, hideLoadAdsError } from './map-popups.js';
import { fillAdsLayer } from './map-handler.js';

const mapFilter = document.querySelector('.map__filters');

const getData = (callOnSuccess, callOnError) => () =>
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .then((data) => {
      hideLoadAdsError();
      return data.slice(0, 10);
    })
    .then((data) => {
      callOnSuccess(data);
    })
    .catch(callOnError);

const renderAds = getData(fillAdsLayer, showLoadAdsError);

const filterRenderAds = () => {
  mapFilter.addEventListener('change', renderAds);
};

export { renderAds, filterRenderAds, mapFilter };
