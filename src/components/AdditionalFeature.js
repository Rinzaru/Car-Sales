import React from "react";
import { useDispatch } from "react-redux";
import { addFeatureAction } from "../actions/actions";
const AdditionalFeature = (props) => {
  console.log(props.addFeature, "prop");

  const addFeature = () => {
    dispatch(addFeatureAction(props.feature));
  };

  const dispatch = useDispatch();
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addFeature}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
