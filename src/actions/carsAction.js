const ADD_CAR_FEATURE = "ADD_CAR_FEATURE";
const REMOVE_CAR_FEATURE = "REMOVE_CAR_FEATURE";

function addCarFeature(item) {
  return {
    type: ADD_CAR_FEATURE,
    payload: item
  };
}

function removeCarFeature(item) {
  return {
    type: REMOVE_CAR_FEATURE,
    payload: item
  };
}

export { ADD_CAR_FEATURE, REMOVE_CAR_FEATURE, addCarFeature, removeCarFeature };
