const noticeTitle = document.querySelector('#title');
const noticeType = document.querySelector('#type');
const noticePrice = document.querySelector('#price');
const noticeRoom = document.querySelector('#room_number');
const noticeCapacity = document.querySelector('#capacity');
const noticeTimeIn = document.querySelector('#timein');
const noticeTimeOut = document.querySelector('#timeout');

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

noticeTimeIn.addEventListener('change', () => {
  noticeTimeOut.options[noticeTimeIn.selectedIndex].selected = true;
});

noticeTimeOut.addEventListener('change', () => {
  noticeTimeIn.options[noticeTimeOut.selectedIndex].selected = true;
});

noticeTitle.addEventListener('input', () => {
  if (!noticeTitle.checkValidity()) {
    if (noticeTitle.validity.tooShort) {
      noticeTitle.setCustomValidity('Это обязательное поле. Длина от 30 до 100 символов.');
    } else {
      noticeTitle.setCustomValidity('');
    }
  }
  noticeTitle.reportValidity();
});

noticePrice.addEventListener('input', () => {
  if (!noticePrice.checkValidity()) {
    if (noticePrice.validity.rangeUnderflow) {
      noticePrice.setCustomValidity('Минимальная цена зависит от типа жилья.');
    } else {
      noticePrice.setCustomValidity('');
    }
  }
  noticePrice.reportValidity();
});
