const REMOVE_FEATURE = "REMOVE_FEATURE";
const ADD_FEATURE = "ADD_FEATURE";

function removeFeatures(item) {
  return {
    type: REMOVE_FEATURE,
    payload: item
  };
}

function addFeatures(item) {
  return {
    type: ADD_FEATURE,
    payload: item
  };
}

export { REMOVE_FEATURE, removeFeatures, ADD_FEATURE, addFeatures };
