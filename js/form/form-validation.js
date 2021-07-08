const Types = {
  BUNGALOW: 0,
  FLAT: 1000,
  HOTEL: 3000,
  HOUSE: 5000,
  PALACE: 10000,
};
const noticeTitle = document.querySelector('#title');
const noticeType = document.querySelector('#type');
const noticePrice = document.querySelector('#price');
const noticeRoom = document.querySelector('#room_number');
const noticeCapacity = document.querySelector('#capacity');
const noticeTimeIn = document.querySelector('#timein');
const noticeTimeOut = document.querySelector('#timeout');

const changeNoticePrice = (value) => {
  noticePrice.setAttribute('min', value);
  noticePrice.setAttribute('placeholder', value);
};

const disableAllOptions = (select) => {
  [...select.options].forEach((element) => {
    element.disabled = true;
  });
};

const enableOptions = (select, start, end) => {
  for (let index = start; index < end; index++) {
    select.options[index].disabled = false;
  }
};

const syncPriceByType = () => {
  changeNoticePrice(1000);
  noticeType.addEventListener('change', () => {
    const currentType = noticeType.options[noticeType.selectedIndex].text;
    switch (currentType) {
      case 'Бунгало':
        changeNoticePrice(Types.BUNGALOW);
        break;
      case 'Квартира':
        changeNoticePrice(Types.FLAT);
        break;
      case 'Отель':
        changeNoticePrice(Types.HOTEL);
        break;
      case 'Дом':
        changeNoticePrice(Types.HOUSE);
        break;
      case 'Дворец':
        changeNoticePrice(Types.PALACE);
        break;
    }
  });

  noticeRoom.addEventListener('change', () => {
    const roomsAmount = noticeRoom.options[noticeRoom.selectedIndex].text;
    disableAllOptions(noticeCapacity);
    const noticeCapacityList = noticeCapacity.options;
    switch (roomsAmount) {
      case '1 комната':
        noticeCapacityList[2].selected = true;
        enableOptions(noticeCapacity, 2, 3);
        break;
      case '2 комнаты':
        noticeCapacityList[1].selected = true;
        enableOptions(noticeCapacity, 1, 3);
        break;
      case '3 комнаты':
        noticeCapacityList[0].selected = true;
        enableOptions(noticeCapacity, 0, 3);
        break;
      case '100 комнат':
        noticeCapacityList[3].selected = true;
        enableOptions(noticeCapacity, 3, 4);
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
};

export { syncPriceByType, changeNoticePrice };
