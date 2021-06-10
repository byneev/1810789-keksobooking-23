import { getRandomPositiveInteger } from '../utils/get-random-positive-integer';
import { getRandomPositiveFloat } from '../utils/get-random-positive-float';

let imgAdressPostfix = 0;

const getRandomArrayItem = (array) =>
  array[getRandomPositiveInteger(0, array.length - 1)];
const getRandomArrayItems = (array) => {
  const result = [];
  for (
    let index = 1;
    index <= getRandomPositiveInteger(1, array.length);
    index++
  ) {
    const item = getRandomArrayItem(array);
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

const APPART_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const APPART_CHECK_TIMES = ['12:00', '13:00', '14:00'];
const APPART_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const APPART_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const createAuthor = () => {
  imgAdressPostfix++;
  const postfix =
    String(imgAdressPostfix).length === 1
      ? `0${imgAdressPostfix}`
      : imgAdressPostfix;
  return {
    avatar: `img/avatars/user${postfix}.png`,
  };
};

const createOffer = () => ({
  title: 'Шикарная кровать в шестиместной комнате',
  address: 'location.x, location.y',
  price: getRandomPositiveInteger(1500, 15000),
  type: getRandomArrayItem(APPART_TYPES),
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

const generateCard = () => ({
  location: createLocation(),
  author: createAuthor(),
  offer: createOffer(),
});

const resultArray = new Array(10).fill(null).map(() => generateCard());
console.log(resultArray);
