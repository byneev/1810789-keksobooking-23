import './form/form-reset.js';
import './map/map-card-generation.js';
import './form/form-submit-handler.js';
import { addValidateNoticeForm } from './form/form-validation.js';
import { filterRenderAds, renderAds } from './map/map-filter-handler.js';
import { initMap } from './map/map-handler.js';

initMap();
addValidateNoticeForm();
renderAds();
filterRenderAds();
