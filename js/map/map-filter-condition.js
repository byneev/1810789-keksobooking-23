const formFilter = document.querySelector('.map__filters');
const selects = formFilter.children;

const blockForm = () => [...selects].forEach((element) => (element.disabled = true));
const activateForm = () => [...selects].forEach((element) => (element.disabled = false));

export { blockForm, activateForm };
