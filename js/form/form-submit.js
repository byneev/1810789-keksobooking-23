import { resetPageData, noticeForm } from './form-reset.js';
import { showSuccessSubmit, showErrorSubmit } from './form-popups.js';

const sendData = (onSuccess, onError) => () =>
  fetch('https://23.javascript.pages.academy/keksobooking', {
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
    .then(resetPageData)
    .catch(onError);

const sendFormData = sendData(showSuccessSubmit, showErrorSubmit);

noticeForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendFormData();
});
