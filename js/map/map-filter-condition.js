const formFilter = document.querySelector('.map__filters');
const adForm = document.querySelector('.ad-form');
const formFilterItems = formFilter.children;
const adFormItems = adForm.children;

const blockForm = () => {
  [...formFilterItems, ...adFormItems].forEach((element) => (element.disabled = true));
  formFilter.classList.add('map__filters--disabled');
  adForm.classList.add('ad-form--disabled');
};

const activateForm = () => {
  [...formFilterItems, ...adFormItems].forEach((element) => (element.disabled = false));
  formFilter.classList.remove('map__filters--disabled');
  adForm.classList.remove('ad-form--disabled');
};

export { blockForm, activateForm };
