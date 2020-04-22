import { carsAction } from "../actions";

const { ADD_CAR_FEATURE, REMOVE_CAR_FEATURE } = carsAction;

function carReducer(car = {}, action) {
  switch (action.type) {
    case ADD_CAR_FEATURE:
      return {
        ...car,
        features: [...car.features, action.payload]
      };
    case REMOVE_CAR_FEATURE:
      // eslint-disable-next-line
      let removedFeatures = car.features.filter(carItem => {
        if (carItem.id !== action.payload.id) {
          return carItem;
        }
      });
      return {
        ...car,
        features: removedFeatures
      };
    default:
      return car;
  }
}

export default carReducer;
