import { mapFilter } from '../map/map-data.js';
import { repaintMap } from '../map/map.js';
import { noticePriceChanger } from './form-validation.js';

const noticeForm = document.querySelector('.ad-form');
const btnReset = noticeForm.querySelector('.ad-form__reset');

const formReset = () => {
  noticeForm.reset();
  mapFilter.reset();
  repaintMap();
  noticePriceChanger(1000);
};

btnReset.addEventListener('click', (evt) => {
  evt.preventDefault();
  formReset();
});

export { formReset, noticeForm };
