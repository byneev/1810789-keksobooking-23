const filterForm = document.querySelector('.map__filters');
const noticeForm = document.querySelector('.ad-form');
const filterFormItems = filterForm.children;
const noticeFormItems = noticeForm.children;

const deactivatePage = () => {
  for (const element of [...filterFormItems, ...noticeFormItems]) {
    element.disabled = true;
  }
  filterForm.classList.add('map__filters--disabled');
  noticeForm.classList.add('ad-form--disabled');
};

const activatePage = () => {
  for (const element of [...filterFormItems, ...noticeFormItems]) {
    element.disabled = false;
  }
  filterForm.classList.remove('map__filters--disabled');
  noticeForm.classList.remove('ad-form--disabled');
};

export { deactivatePage, activatePage };
