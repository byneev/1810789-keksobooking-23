const noticeType = document.querySelector('#type');
const noticePrice = document.querySelector('#price');
const noticeRoom = document.querySelector('#room_number');
const noticeCapacity = document.querySelector('#capacity');

const noticePriceChanger = (value) => {
  noticePrice.setAttribute('min', value);
  noticePrice.setAttribute('placeholder', value);
};

const noticeDisableAll = (select) => {
  [...select.options].forEach((element) => {
    element.disabled = true;
  });
};

const noticeResetDisable = (select, start, end) => {
  for (let index = start; index < end; index++) {
    select.options[index].disabled = false;
  }
};
noticePriceChanger(1000);
noticeType.addEventListener('change', () => {
  const currentType = noticeType.options[noticeType.selectedIndex].text;
  switch (currentType) {
    case 'Бунгало':
      noticePriceChanger(0);
      break;
    case 'Квартира':
      noticePriceChanger(1000);
      break;
    case 'Отель':
      noticePriceChanger(3000);
      break;
    case 'Дом':
      noticePriceChanger(5000);
      break;
    case 'Дворец':
      noticePriceChanger(10000);
      break;
  }
});
noticeDisableAll(noticeCapacity);
noticeResetDisable(noticeCapacity, 0, 3);

noticeRoom.addEventListener('change', () => {
  const numberRooms = noticeRoom.options[noticeRoom.selectedIndex].text;
  noticeDisableAll(noticeCapacity);
  const noticeCapacityList = noticeCapacity.options;
  switch (numberRooms) {
    case '1 комната':
      noticeCapacityList[2].selected = true;
      noticeResetDisable(noticeCapacity, 2, 3);
      break;
    case '2 комнаты':
      noticeCapacityList[1].selected = true;
      noticeResetDisable(noticeCapacity, 1, 3);
      break;
    case '3 комнаты':
      noticeCapacityList[0].selected = true;
      noticeResetDisable(noticeCapacity, 0, 3);
      break;
    case '100 комнат':
      noticeCapacityList[3].selected = true;
      noticeResetDisable(noticeCapacity, 3, 4);
      break;
  }
});
