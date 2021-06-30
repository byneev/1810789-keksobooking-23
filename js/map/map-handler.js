import { generateData } from "./map-data-generation.js";
import { blockForm, activateForm } from "./map-filter-condition.js";
import { generateCard } from "./map-card-generation.js";

blockForm();

const mapContainer = document.querySelector("#map-canvas");
const map = L.map(mapContainer).on("load", activateForm).setView([35.6894, 139.692], 13);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const mainMarkerIcon = L.icon({
  iconUrl: "/img/main-pin.svg",
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker([35.6894, 139.692], {
  draggable: true,
  icon: mainMarkerIcon,
}).addTo(map);

// Ad adress filler
const noticeAdress = document.querySelector("#address");
mainMarker.on("moveend", () => {
  const { lat, lng } = mainMarker.getLatLng();
  noticeAdress.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
});

// Cards on map

const adsIcon = L.icon({
  iconUrl: "/img/pin.svg",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const adsLayer = L.layerGroup().addTo(map);
const adsDataArray = new Array(9).fill(null).map(() => generateData());

const addMarker = (data) => {
  const { location } = data;
  const cardPopup = generateCard(data);
  L.marker([location.lat, location.lng], {
    icon: adsIcon,
  })
    .addTo(adsLayer)
    .bindPopup(cardPopup, {
      keepToView: true,
    });
};

const fillAdsLayer = (adsData) => {
  adsData.forEach((data) => addMarker(data));
};

fillAdsLayer(adsDataArray);

export { fillAdsLayer };
