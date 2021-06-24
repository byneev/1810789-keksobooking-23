const formFilter = document.querySelector('.map__filters');
const adForm = document.querySelector('.ad-form');
const formFilterItems = formFilter.children;
const adFormItems = adForm.children;

const blockForm = () => [...formFilterItems, ...adFormItems].forEach((element) => (element.disabled = true));
const activateForm = () => [...formFilterItems, ...adFormItems].forEach((element) => (element.disabled = false));

export { blockForm, activateForm };
