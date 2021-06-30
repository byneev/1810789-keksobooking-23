const mapFilter = document.querySelector(".map__filters");

const getData = (callOnSuccess, callOnError) => {
  mapFilter.addEventListener("change", (evt) =>
    fetch("https://23.javascript.pages.academy/keksobooking/data")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error();
      })
      .then((data) => data.forEach((item) => console.log(item)))
      .then((data) => {
        callOnSuccess(data);
      })
      .catch(callOnError())
  );
};

const sendData = () => {
  console.log("send data!");
};

export { getData, sendData };
