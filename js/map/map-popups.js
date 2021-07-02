const errorPopupTemplate = document.querySelector('#server-error').content.querySelector('.server-message');
const errorPopup = errorPopupTemplate.cloneNode(true);
errorPopup.classList.add('hidden');
document.body.appendChild(errorPopup);
const errorPopupClose = errorPopup.querySelector('.server-message__btn--close');

const showLoadAdsError = () => {
  errorPopup.classList.remove('hidden');
  errorPopupClose.addEventListener('click', () => {
    errorPopup.classList.add('hidden');
  });
};

const hideLoadAdsError = () => {
  errorPopup.classList.add('hidden');
};

export { showLoadAdsError, hideLoadAdsError };
