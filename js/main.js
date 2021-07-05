import './form/form-reset.js';
import './map/map-card-generation.js';
import './form/form-submit.js';
import { addValidateNoticeForm } from './form/form-validation.js';
import { renderAds } from './map/map-data.js';
import { initMap } from './map/map.js';
import { activateForm } from './map/map-condition.js';

initMap();
activateForm();
addValidateNoticeForm();
// renderAds();
