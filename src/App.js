import React from "react";
import Header from "./components/Header";
import { useSelector, useDispatch } from "react-redux";
import { addFeatureAction, removeFeatureAction } from "./actions/actions";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { initialState } from "./reducer/reducer";
const App = () => {
  const car = useSelector((state) => state.car);
  const additionalFeatures = useSelector((state) => state.additionalFeatures);
  const additionalprice = useSelector((state) => state.additionalPrice);

  const dispatch = useDispatch();

  const addFeature = (add) => {
    dispatch(addFeatureAction(add));
  };

  const removeFeature = (remove) => {
    dispatch(removeFeatureAction(remove));
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={additionalFeatures}
          addFeature={addFeature}
        />
        <Total car={car} additionalPrice={additionalprice} />
      </div>
    </div>
  );
};

export default App;
