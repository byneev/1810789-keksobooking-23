import './form/form-reset.js';
import './map/map-card-generation.js';
import './form/form-submit.js';
import { addValidateNoticeForm } from './form/form-validation.js';
import { renderAds } from './map/map-data.js';
import { initMap } from './map/map.js';

initMap();
addValidateNoticeForm();
renderAds();
