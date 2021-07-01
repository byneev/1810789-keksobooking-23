import { noticeFormReset, noticeForm } from './form-reset.js';
import { showNoticeSuccess, showNoticeError } from './form-popups.js';

const btnSubmit = document.querySelector('.ad-form__submit');

const sendData = (onSuccess, onError) => () =>
  fetch('https://23.javascript.pages.academy/keksobookingg', {
    method: 'POST',
    credentials: 'same-origin',
    body: new FormData(noticeForm),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
    })
    .then(onSuccess)
    .then(noticeFormReset)
    .catch(onError);

const sendFormData = sendData(showNoticeSuccess, showNoticeError);

noticeForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendFormData();
});
