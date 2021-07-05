const typeFilterState = document.querySelector('#housing-type');
const priceFilterState = document.querySelector('#housing-price');
const roomsFilterState = document.querySelector('#housing-rooms');
const guestsFilterState = document.querySelector('#housing-guests');
const featuresFilterList = document.querySelector('#housing-features');

const getPriceString = (dataItem) => {
  const price = dataItem.offer.price;
  let priceString = 'middle';
  if (price < 10000) {
    priceString = 'low';
  } else if (price > 50000) {
    priceString = 'high';
  }
  return priceString;
};

const getItemRank = (dataItem) => {
  let rank = 0;
  const features = dataItem.offer.features;
  const featuresFilterItems = featuresFilterList.querySelectorAll('[name="features"');
  featuresFilterItems.forEach((item) => {
    if (features !== undefined) {
      if (item.checked && features.includes(item.value)) {
        rank++;
      }
    }
  });

  return rank;
};

const sortByRank = (itemA, itemB) => getItemRank(itemB) - getItemRank(itemA);

const dataSort = (data) => {
  data.sort(sortByRank);
  return data;
};

const dataFilter = (data) => {
  const dataHandled = data
    .filter((dataItem) => typeFilterState.value === dataItem.offer.type || typeFilterState.value === 'any')
    .filter((dataItem) => roomsFilterState.value === String(dataItem.offer.rooms) || roomsFilterState.value === 'any')
    .filter((dataItem) => guestsFilterState.value === String(dataItem.offer.guests) || guestsFilterState.value === 'any')
    .filter((dataItem) => priceFilterState.value === getPriceString(dataItem) || priceFilterState.value === 'any');

  dataSort(dataHandled);

  return dataHandled;
};

export { dataSort, dataFilter };
