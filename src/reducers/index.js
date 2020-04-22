import { combineReducers } from "redux";
import carReducer from "./carReducer";
import additionalFeaturesReducer from "./additionalFeaturesReducer";
import additionalPriceReducer from "./additionalPriceReducer";

const rootReducer = combineReducers({
  additionalPrice: additionalPriceReducer,
  car: carReducer,
  additionalFeatures: additionalFeaturesReducer
});

export default rootReducer;
