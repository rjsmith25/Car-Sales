import React from "react";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { useSelector, useDispatch } from "react-redux";
import {
  carsAction,
  additionalPriceAction,
  additionalFeaturesAction
} from "./actions";
const { addCarFeature, removeCarFeature } = carsAction;
const {
  increaseAdditionalPrice,
  decreaseAdditionalPrice
} = additionalPriceAction;
const { addFeatures, removeFeatures } = additionalFeaturesAction;

const App = props => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const removeFeature = item => {
    dispatch(removeCarFeature(item));
    dispatch(decreaseAdditionalPrice(item));
    dispatch(addFeatures(item));
  };

  const buyItem = item => {
    dispatch(addCarFeature(item));
    dispatch(increaseAdditionalPrice(item));
    dispatch(removeFeatures(item));
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures removeFeature={removeFeature} car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures
          buyItem={buyItem}
          additionalFeatures={state.additionalFeatures}
        />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

export default App;
