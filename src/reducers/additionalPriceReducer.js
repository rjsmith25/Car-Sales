import { additionalPriceAction } from "../actions";

const {
  INCREASE_ADDITIONAL_PRICE,
  DECREASE_ADDITIONAL_PRICE
} = additionalPriceAction;

function additionalPriceReducer(additionalPrice = 0, action) {
  switch (action.type) {
    case INCREASE_ADDITIONAL_PRICE:
      return additionalPrice + action.payload.price;
    case DECREASE_ADDITIONAL_PRICE:
      return additionalPrice - action.payload.price;
    default:
      return additionalPrice;
  }
}

export default additionalPriceReducer;
