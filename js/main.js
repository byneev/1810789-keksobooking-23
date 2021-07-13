import './form/form-reset.js';
import './form/form-submit.js';
import './map/map-card-generation.js';
import './form/form-validation.js';
import './form/form-preview.js';
import './map/map-data.js';
import { drawMap } from './map/map.js';
import { activatePage, deactivatePage } from './map/map-condition.js';
import { onChangeTypeInput } from './form/form-validation.js';
import { onChangeFilters } from './map/map-data.js';

deactivatePage();
drawMap();
activatePage();
onChangeFilters();
onChangeTypeInput();
