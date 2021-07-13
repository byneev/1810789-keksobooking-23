const IMG_TYPES = ['image/png', 'image/jpeg', 'image/gif'];
const formAvatarInput = document.querySelector('.ad-form-header__input');
const formAvatarPreview = document.querySelector('.ad-form-header__preview img');
const defaultAvatar = formAvatarPreview.src;
const formPhotoInput = document.querySelector('.ad-form__input');
const formPhotoPreview = document.querySelector('.ad-form__photo');
formPhotoPreview.innerHTML = '<img src="" class="ad-form__img" alt="photo preview"/>';
const formPhoto = document.querySelector('.ad-form__img');
formPhoto.style.display = 'none';
formPhoto.style.width = '100%';
formPhoto.style.height = '100%';

const onNoticePhotoLoad = (input, preview) => {
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

const resetPreview = () => {
  formAvatarPreview.src = defaultAvatar;
  formPhoto.style.display = 'none';
};

onNoticePhotoLoad(formAvatarInput, formAvatarPreview);
onNoticePhotoLoad(formPhotoInput, formPhoto);

export { resetPreview };
