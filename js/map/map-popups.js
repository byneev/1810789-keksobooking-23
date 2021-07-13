const errorPopupTemplate = document.querySelector('#server-error').content.querySelector('.server-message');
const errorPopup = errorPopupTemplate.cloneNode(true);
errorPopup.classList.add('hidden');
document.body.appendChild(errorPopup);
const errorPopupClose = errorPopup.querySelector('.server-message__btn--close');

const hideLoadAdsError = () => {
  errorPopup.classList.add('hidden');
};

const onPopupCloseBtn = () => {
  errorPopup.classList.remove('hidden');
  errorPopupClose.addEventListener('click', hideLoadAdsError);
};

export { onPopupCloseBtn, hideLoadAdsError };
