import './form/form-reset.js';
import './map/map-card-generation.js';
import './form/form-validation.js';
// import './map/map-filter-handler.js';
import { filterRenderAds, renderAds } from './map/map-filter-handler.js';
import {initMap} from './map/map-handler.js';

// import some methods
// while (!isMapReady) {
// }
initMap();
// renderAds();
filterRenderAds();

