import { APPART_TYPES_DICT } from './map-data-generation.js';
import { getWordEnding } from './map-data-generation.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const generateCard = (cardData) => {
  const { author, offer } = cardData; //get data
  const card = cardTemplate.cloneNode(true); //get card template
  const featuresList = card.querySelector('.popup__features');
  const featuresItem = featuresList.querySelectorAll('.popup__feature');
  if (offer.features === undefined) {
    featuresList.classList.add('hidden');
  } else {
    const offerFeatures = offer.features.map((item) => `popup__feature--${item}`); //get array with fetures classes
    featuresList.innerHTML = '';
    [...featuresItem].filter((item) => offerFeatures.includes(item.classList[1])).forEach((item) => featuresList.appendChild(item));
  }
  const popupAvatar = card.querySelector('.popup__avatar');
  author.avatar === undefined ? popupAvatar.classList.add('hidden') : (popupAvatar.src = author.avatar);
  const popupTitle = card.querySelector('.popup__title');
  offer.title === undefined ? popupTitle.classList.add('hidden') : (popupTitle.textContent = offer.title);
  const popupAdress = card.querySelector('.popup__text--address');
  offer.address === undefined ? popupAdress.classList.add('hidden') : (popupAdress.textContent = offer.address);
  const popupTextPrice = card.querySelector('.popup__text--price');
  offer.price === undefined ? popupTextPrice.classList.add('hidden') : (popupTextPrice.innerHTML = `${offer.price} <span>₽/ночь</span>`);
  const popupType = card.querySelector('.popup__type');
  offer.type === undefined ? popupType.classList.add('hidden') : (popupType.textContent = APPART_TYPES_DICT[offer.type]);
  const popupTextCapacity = card.querySelector('.popup__text--capacity');
  offer.rooms === undefined
    ? popupTextCapacity.classList.add('hidden')
    : (popupTextCapacity.textContent = `${offer.rooms} комнат${getWordEnding(offer.rooms)}
    для ${offer.guests} гост${offer.guests === 1 ? 'я' : 'ей'}`);
  const popupTextTime = card.querySelector('.popup__text--time');

  offer.checkin === undefined || offer.checkout === undefined
    ? popupTextTime.classList.add('hidden')
    : (popupTextTime.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`);
  const popupDescription = card.querySelector('.popup__description');
  offer.description === undefined ? popupDescription.classList.add('hidden') : (popupDescription.textContent = offer.description);
  // generate popup__photos
  const photosList = card.querySelector('.popup__photos');
  const photo = card.querySelector('.popup__photo');
  if (offer.photos === undefined) {
    photosList.classList.add('hidden');
  } else {
    photosList.innerHTML = '';
    offer.photos.forEach((item) => {
      const photoItem = photo.cloneNode(true);
      photoItem.src = item;
      photosList.appendChild(photoItem);
    });
  }

  return card;
};

export { generateCard };
