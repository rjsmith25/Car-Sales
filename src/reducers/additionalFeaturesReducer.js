import { additionalFeaturesAction } from "../actions";

const { ADD_FEATURE, REMOVE_FEATURE } = additionalFeaturesAction;

function additionalFeaturesReducer(additionalFeatures = [], action) {
  switch (action.type) {
    case REMOVE_FEATURE:
      // eslint-disable-next-line
      return additionalFeatures.filter(feature => {
        if (feature.id !== action.payload.id) {
          return feature;
        }
      });
    case ADD_FEATURE:
      return [...additionalFeatures, action.payload];
    default:
      return additionalFeatures;
  }
}

export default additionalFeaturesReducer;
