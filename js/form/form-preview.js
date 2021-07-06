const IMG_TYPES = ['image/png', 'image/jpeg', 'image/gif'];
const formAvatarInput = document.querySelector('.ad-form-header__input');
const formAvatarPreview = document.querySelector('.ad-form-header__preview img');
const formPhotoInput = document.querySelector('.ad-form__input');
const formPhotoPreview = document.querySelector('.ad-form__photo');
formPhotoPreview.innerHTML = '<img src="" class="ad-form__img" alt="photo preview"/>';
const formPhotoImg = document.querySelector('.ad-form__img');
formPhotoImg.style.display = 'none';
formPhotoImg.style.width = '100%';
formPhotoImg.style.height = '100%';

const addImgPreview = (input, preview) => {
  input.addEventListener('change', () => {
    const inputFile = input.files[0];
    if (IMG_TYPES.includes(inputFile.type)) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        preview.src = reader.result;
        preview.style.display = 'block';
      });
      reader.readAsDataURL(inputFile);
    }
  });
};

addImgPreview(formAvatarInput, formAvatarPreview);
addImgPreview(formPhotoInput, formPhotoImg);
