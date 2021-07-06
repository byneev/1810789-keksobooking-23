import { generateCard } from './map-card-generation.js';
import { renderAds } from './map-data.js';

const mapContainer = document.querySelector('#map-canvas');
const map = L.map(mapContainer);
const mainMarkerIcon = L.icon({
  iconUrl: '/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const mainMarker = L.marker([35.6894, 139.692], {
  draggable: true,
  icon: mainMarkerIcon,
});

const drawMap = () => {
  map
    .on('load', () => {
      renderAds();
    })
    .setView([35.6894, 139.692], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  mainMarker.addTo(map);
};

const noticeAdress = document.querySelector('#address');

const setDefaultLocation = () => {
  const { lat, lng } = mainMarker.getLatLng();
  noticeAdress.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
};
setDefaultLocation();
mainMarker.on('moveend', setDefaultLocation);
const adsIcon = L.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const adsLayer = L.layerGroup().addTo(map);

const refreshMap = () => {
  map.setView([35.6894, 139.692], 13);
  mainMarker.setLatLng([35.6894, 139.692]);
  adsLayer.clearLayers();
  renderAds();
  setDefaultLocation();
};

const refreshAds = () => {
  adsLayer.clearLayers();
  renderAds();
};

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

export { fillAdsLayer, refreshMap, drawMap, refreshAds };
