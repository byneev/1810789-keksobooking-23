const filterForm = document.querySelector('.map__filters');
const noticeForm = document.querySelector('.ad-form');
const filterFormItems = filterForm.children;
const noticeFormItems = noticeForm.children;

const blockForm = () => {
  [...filterFormItems, ...noticeFormItems].forEach((element) => (element.disabled = true));
  filterForm.classList.add('map__filters--disabled');
  noticeForm.classList.add('ad-form--disabled');
};

const activateForm = () => {
  [...filterFormItems, ...noticeFormItems].forEach((element) => (element.disabled = false));
  filterForm.classList.remove('map__filters--disabled');
  noticeForm.classList.remove('ad-form--disabled');
};

export { blockForm, activateForm };
