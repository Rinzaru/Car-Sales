import React from "react";
import { useDispatch } from "react-redux";
import { removeFeatureAction } from "../actions/actions";

const AddedFeature = (props) => {
  const removeFeature = () => {
    dispatch(removeFeatureAction(props.feature));
  };

  const dispatch = useDispatch();
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={removeFeature}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
