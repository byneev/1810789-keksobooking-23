const TypesDictionary = {
  PALACE: 'Дворец',
  FLAT: 'Квартира',
  HOUSE: 'Дом',
  BUNGALOW: 'Бунгало',
  HOTEL: 'Отель',
};
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const getWordEnding = (number) => {
  if (number >= 5 && number <= 20) {
    return '';
  } else if (String(number).endsWith('1') && number !== 11) {
    return 'а';
  } else {
    return 'ы';
  }
};

const generateCard = (cardData) => {
  const { author, offer } = cardData;
  const card = cardTemplate.cloneNode(true);
  const popupFeatures = card.querySelector('.popup__features');
  const popupFeaturesItems = popupFeatures.querySelectorAll('.popup__feature');
  if (offer.features === undefined) {
    popupFeatures.classList.add('hidden');
  } else {
    const offerFeatures = offer.features.map((item) => `popup__feature--${item}`);
    popupFeatures.innerHTML = '';
    [...popupFeaturesItems].filter((item) => offerFeatures.includes(item.classList[1])).forEach((item) => popupFeatures.appendChild(item));
  }
  const popupAvatar = card.querySelector('.popup__avatar');
  author.avatar === undefined ? popupAvatar.classList.add('hidden') : (popupAvatar.src = author.avatar);
  const popupTitle = card.querySelector('.popup__title');
  offer.title === undefined ? popupTitle.classList.add('hidden') : (popupTitle.textContent = offer.title);
  const popupAdress = card.querySelector('.popup__text--address');
  offer.address === undefined ? popupAdress.classList.add('hidden') : (popupAdress.textContent = offer.address);
  const popupPrice = card.querySelector('.popup__text--price');
  offer.price === undefined ? popupPrice.classList.add('hidden') : (popupPrice.innerHTML = `${offer.price} <span>₽/ночь</span>`);
  const popupType = card.querySelector('.popup__type');
  offer.type === undefined ? popupType.classList.add('hidden') : (popupType.textContent = TypesDictionary[offer.type.toUpperCase()]);
  const popupCapacity = card.querySelector('.popup__text--capacity');
  offer.rooms === undefined
    ? popupCapacity.classList.add('hidden')
    : (popupCapacity.textContent = `${offer.rooms} комнат${getWordEnding(offer.rooms)}
    для ${offer.guests} гост${offer.guests === 1 ? 'я' : 'ей'}`);
  const popupTime = card.querySelector('.popup__text--time');
  offer.checkin === undefined || offer.checkout === undefined
    ? popupTime.classList.add('hidden')
    : (popupTime.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`);
  const popupDescription = card.querySelector('.popup__description');
  offer.description === undefined ? popupDescription.classList.add('hidden') : (popupDescription.textContent = offer.description);
  const popupPhotoList = card.querySelector('.popup__photos');
  const popupPhoto = card.querySelector('.popup__photo');
  if (offer.photos === undefined) {
    popupPhotoList.classList.add('hidden');
  } else {
    popupPhotoList.innerHTML = '';
    offer.photos.forEach((item) => {
      const photoItem = popupPhoto.cloneNode(true);
      photoItem.src = item;
      popupPhotoList.appendChild(photoItem);
    });
  }

  return card;
};

export { generateCard };
