import { mapFilter } from '../map/map-data.js';
import { refreshMap } from '../map/map.js';
import { changeNoticePrice } from './form-validation.js';

const DEFAULT_PRICE = 1000;
const noticeForm = document.querySelector('.ad-form');
const btnReset = noticeForm.querySelector('.ad-form__reset');

const resetPageData = () => {
  noticeForm.reset();
  mapFilter.reset();
  refreshMap();
  changeNoticePrice(DEFAULT_PRICE);
};

btnReset.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetPageData();
});

export { resetPageData, noticeForm };
