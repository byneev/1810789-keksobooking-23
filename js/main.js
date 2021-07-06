import './form/form-reset.js';
import './form/form-submit.js';
import './map/map-card-generation.js';
import './form/form-validation.js';
import './form/form-preview.js';
import { addFilterRender } from './map/map-data.js';
import { initMap } from './map/map.js';
import { activateForm } from './map/map-condition.js';
import { addValidateNoticeForm } from './form/form-validation.js';
// import some methods

initMap();
activateForm();
addFilterRender();
addValidateNoticeForm();
