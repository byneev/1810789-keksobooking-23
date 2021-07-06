import './form/form-reset.js';
import './form/form-submit.js';
import './map/map-card-generation.js';
import './form/form-validation.js';
import './form/form-preview.js';
import { adsFilterHandler } from './map/map-data.js';
import { drawMap } from './map/map.js';
import { activateForm, blockForm } from './map/map-condition.js';
import { syncPriceByType } from './form/form-validation.js';

blockForm();
drawMap();
activateForm();
adsFilterHandler();
syncPriceByType();
