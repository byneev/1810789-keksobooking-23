import { getRandomPositiveInteger } from '../utils/get-random-positive-integer.js';
import { getRandomPositiveFloat } from '../utils/get-random-positive-float.js';

let imgAdressPostfix = 0;

const getRandomArrayItem = (array) => array[getRandomPositiveInteger(0, array.length - 1)];
const getRandomArrayItems = (array) => {
  const result = [];
  for (let index = 1; index <= getRandomPositiveInteger(1, array.length); index++) {
    const item = getRandomArrayItem(array);
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
};
const getWordEnding = (number) => {
  if (number >= 5 && number <= 20) {
    return '';
  } else if (String(number).endsWith('1') && number !== 11) {
    return 'а';
  } else {
    return 'ы';
  }
};
const APPART_TYPES_DICT = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bumgalow: 'Бунгало',
  hotel: 'Отель',
};
const APPART_CHECK_TIMES = ['12:00', '13:00', '14:00'];
const APPART_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const APPART_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const createAuthor = () => {
  imgAdressPostfix++;
  const postfix = String(imgAdressPostfix).length === 1 ? `0${imgAdressPostfix}` : imgAdressPostfix;
  return {
    avatar: `img/avatars/user${postfix}.png`,
  };
};

const createOffer = (locX, locY) => ({
  title: 'Шикарная кровать в шестиместной комнате',
  address: `${locX}, ${locY}`,
  price: getRandomPositiveInteger(1500, 15000),
  type: getRandomArrayItem(Object.keys(APPART_TYPES_DICT)),
  rooms: getRandomPositiveInteger(1, 5),
  guests: getRandomPositiveInteger(1, 6),
  checkin: getRandomArrayItem(APPART_CHECK_TIMES),
  checkout: getRandomArrayItem(APPART_CHECK_TIMES),
  features: getRandomArrayItems(APPART_FEATURES),
  description: 'Отличное помещение. И конкурсы отличные',
  photos: getRandomArrayItems(APPART_PHOTOS),
});

const createLocation = () => ({
  lat: getRandomPositiveFloat(35.65, 35.7, 5),
  lng: getRandomPositiveFloat(139.7, 139.8, 5),
});

const generateData = () => {
  const loc = createLocation();
  return {
    location: loc,
    author: createAuthor(),
    offer: createOffer(loc.lat, loc.lng),
  };
};

export { generateData };
export { APPART_TYPES_DICT };
export { getWordEnding };
