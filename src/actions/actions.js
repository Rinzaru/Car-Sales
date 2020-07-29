export const addFeatureAction = (add) => {
  return { type: "ADD_FEATURE", payload: add };
};

export const removeFeatureAction = (remove) => {
  return { type: "REMOVE_FEATURE", payload: remove };
};
