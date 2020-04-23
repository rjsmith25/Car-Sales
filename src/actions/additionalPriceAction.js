const INCREASE_ADDITIONAL_PRICE = "INCREASE_ADDITIONAL_PRICE";
const DECREASE_ADDITIONAL_PRICE = "DECREASE_ADDITIONAL_PRICE";

function increaseAdditionalPrice(item) {
  return {
    type: INCREASE_ADDITIONAL_PRICE,
    payload: item
  };
}

function decreaseAdditionalPrice(item) {
  return {
    type: DECREASE_ADDITIONAL_PRICE,
    payload: item
  };
}

export {
  increaseAdditionalPrice,
  INCREASE_ADDITIONAL_PRICE,
  decreaseAdditionalPrice,
  DECREASE_ADDITIONAL_PRICE
};
