import { mapFilter } from '../map/map-filter-handler.js';
import { repaintMap, setAdressValue } from '../map/map-handler.js';

const noticeForm = document.querySelector('.ad-form');
const btnReset = noticeForm.querySelector('.ad-form__reset');

const noticeFormReset = () => {
  noticeForm.reset();
  mapFilter.reset();
  repaintMap();
};

btnReset.addEventListener('click', noticeFormReset);

export { noticeFormReset, noticeForm };
