const TypesDictionary = {
  PALACE: 'Дворец',
  FLAT: 'Квартира',
  HOUSE: 'Дом',
  BUNGALOW: 'Бунгало',
  HOTEL: 'Отель',
};
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const getWordEnding = (number) => {
  let ending = '';
  if (number < 5 || number > 20) {
    ending = String(number).endsWith('1') && number !== 11 ? 'a' : 'ы';
  }
  return ending;
};

const generateCard = (cardData) => {
  const { author, offer } = cardData;
  const card = cardTemplate.cloneNode(true);
  //
  if (offer.features !== undefined) {
    const popupFeatures = card.querySelector('.popup__features');
    const popupFeaturesItems = popupFeatures.querySelectorAll('.popup__feature');
    const featuresFragment = document.createDocumentFragment();
    const offerFeatures = offer.features.map((item) => `popup__feature--${item}`);
    popupFeatures.innerHTML = '';
    [...popupFeaturesItems].filter((item) => offerFeatures.includes(item.classList[1])).forEach((item) => featuresFragment.appendChild(item));
    popupFeatures.appendChild(featuresFragment);
  }

  const popupAvatar = card.querySelector('.popup__avatar');
  if (author.avatar !== undefined) {
    popupAvatar.src = author.avatar;
  }
  const popupTitle = card.querySelector('.popup__title');
  popupTitle.textContent = offer.title;
  const popupAdress = card.querySelector('.popup__text--address');
  popupAdress.textContent = offer.address;
  const popupPrice = card.querySelector('.popup__text--price');
  popupPrice.innerHTML = `${offer.price} <span>₽/ночь</span>`;
  const popupType = card.querySelector('.popup__type');
  popupType.textContent = TypesDictionary[offer.type.toUpperCase()];
  const popupCapacity = card.querySelector('.popup__text--capacity');
  popupCapacity.textContent = `${offer.rooms} комнат${getWordEnding(offer.rooms)}
                                для ${offer.guests} гост${offer.guests === 1 ? 'я' : 'ей'}`;
  const popupTime = card.querySelector('.popup__text--time');
  popupTime.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  if (offer.description !== undefined) {
    const popupDescription = card.querySelector('.popup__description');
    popupDescription.textContent = offer.description;
  }
  const popupPhotoList = card.querySelector('.popup__photos');
  if (offer.photos !== undefined) {
    const popupPhoto = card.querySelector('.popup__photo');
    const photosFragment = document.createDocumentFragment();
    popupPhotoList.innerHTML = '';
    offer.photos.forEach((item) => {
      const photoItem = popupPhoto.cloneNode(true);
      photoItem.src = item;
      photosFragment.appendChild(photoItem);
    });
    popupPhotoList.appendChild(photosFragment);
  } else {
    popupPhotoList.classList.add('hidden');
  }

  return card;
};

export { generateCard };
