import { fillAdsLayer } from "./map/map-handler.js";
import "./form/form-reset.js";
import "./map/map-card-generation.js";
import "./form/form-validation.js";
import { getData, sendData } from "./map/map-filter-handler.js";
import { showLoadAdsError } from "./map/map-popups.js";
// import some methods

const filterHandler = getData(fillAdsLayer, showLoadAdsError);
