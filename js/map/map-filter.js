const filterType = document.querySelector('#housing-type');
const filterPrice = document.querySelector('#housing-price');
const filterRooms = document.querySelector('#housing-rooms');
const filterGuests = document.querySelector('#housing-guests');
const filterFeatures = document.querySelector('#housing-features');

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
  const filterFeaturesItems = filterFeatures.querySelectorAll('[name="features"');
  filterFeaturesItems.forEach((item) => {
    if (features !== undefined) {
      if (item.checked && features.includes(item.value)) {
        rank++;
      }
    }
  });

  return rank;
};

const sortByRank = (itemA, itemB) => getItemRank(itemB) - getItemRank(itemA);

const sortData = (data) => {
  data.sort(sortByRank);
  return data;
};

const filterOutData = (data) => {
  const dataHandled = data
    .filter((dataItem) => filterType.value === dataItem.offer.type || filterType.value === 'any')
    .filter((dataItem) => filterRooms.value === String(dataItem.offer.rooms) || filterRooms.value === 'any')
    .filter((dataItem) => filterGuests.value === String(dataItem.offer.guests) || filterGuests.value === 'any')
    .filter((dataItem) => filterPrice.value === getPriceString(dataItem) || filterPrice.value === 'any');

  sortData(dataHandled);

  return dataHandled;
};

export { filterOutData };
