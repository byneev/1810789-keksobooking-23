const typeFilterState = document.querySelector('#housing-type');
const priceFilterState = document.querySelector('#housing-price');
const roomsFilterState = document.querySelector('#housing-rooms');
const guestsFilterState = document.querySelector('#housing-guests');
const DefaultStates = {
  TYPE: 'any',
  PRICE: 'any',
  ROOMS: 'any',
  GUESTS: 'any',
};

console.log(typeof typeFilterState.value);
console.log(priceFilterState.value);
console.log(roomsFilterState.value);
console.log(guestsFilterState.value);

const dataFilter = (data) => {
  const dataHandled = data
    .filter((item) => item.offer.type === typeFilterState.value)
    .filter((item) => item.offer.price === priceFilterState.value)
    .filter((item) => item.offer.rooms === roomsFilterState.value)
    .filter((item) => item.offer.guests === guestsFilterState.value);
  console.log(dataHandled);
  return dataHandled;
};

export { dataFilter };
