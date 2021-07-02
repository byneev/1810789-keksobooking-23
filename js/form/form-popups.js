const successSubmitTemplate = document.querySelector('#success').content.querySelector('.success');
const errorSubmitTemplate = document.querySelector('#error').content.querySelector('.error');
const successSubmit = successSubmitTemplate.cloneNode(true);
const errorSubmit = errorSubmitTemplate.cloneNode(true);
successSubmit.classList.add('hidden');
errorSubmit.classList.add('hidden');
document.body.appendChild(successSubmit);
document.body.appendChild(errorSubmit);

const closeEsc = (evt) => {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    successSubmit.classList.add('hidden');
    errorSubmit.classList.add('hidden');
    document.body.removeEventListener('keydown', closeEsc);
  }
};

const closeSuccessClick = () => {
  successSubmit.classList.add('hidden');
  successSubmit.removeEventListener('click', closeSuccessClick);
  document.body.removeEventListener('keydown', closeEsc);
};

const showNoticeSuccess = () => {
  successSubmit.classList.remove('hidden');
  successSubmit.addEventListener('click', closeSuccessClick);
  document.body.addEventListener('keydown', closeEsc);
};

const closeErrorClick = () => {
  errorSubmit.classList.add('hidden');
  errorSubmit.removeEventListener('click', closeErrorClick);
  document.body.removeEventListener('keydown', closeEsc);
};

const showNoticeError = () => {
  errorSubmit.classList.remove('hidden');
  errorSubmit.addEventListener('click', closeErrorClick);
  document.body.addEventListener('keydown', closeEsc);
};

export { showNoticeSuccess, showNoticeError };
