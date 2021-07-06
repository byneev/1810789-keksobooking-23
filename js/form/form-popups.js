const successSubmitTemplate = document.querySelector('#success').content.querySelector('.success');
const errorSubmitTemplate = document.querySelector('#error').content.querySelector('.error');
const successSubmit = successSubmitTemplate.cloneNode(true);
const errorSubmit = errorSubmitTemplate.cloneNode(true);
successSubmit.classList.add('hidden');
errorSubmit.classList.add('hidden');
document.body.appendChild(successSubmit);
document.body.appendChild(errorSubmit);

const closeByEsc = (evt) => {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    successSubmit.classList.add('hidden');
    errorSubmit.classList.add('hidden');
    document.body.removeEventListener('keydown', closeByEsc);
  }
};

const closeSuccessByClick = () => {
  successSubmit.classList.add('hidden');
  successSubmit.removeEventListener('click', closeSuccessByClick);
  document.body.removeEventListener('keydown', closeByEsc);
};

const showSuccessSubmit = () => {
  successSubmit.classList.remove('hidden');
  successSubmit.addEventListener('click', closeSuccessByClick);
  document.body.addEventListener('keydown', closeByEsc);
};

const closeErrorByClick = () => {
  errorSubmit.classList.add('hidden');
  errorSubmit.removeEventListener('click', closeErrorByClick);
  document.body.removeEventListener('keydown', closeByEsc);
};

const showErrorSubmit = () => {
  errorSubmit.classList.remove('hidden');
  errorSubmit.addEventListener('click', closeErrorByClick);
  document.body.addEventListener('keydown', closeByEsc);
};

export { showSuccessSubmit, showErrorSubmit };
