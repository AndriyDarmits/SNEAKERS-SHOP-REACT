import actionTypes from "../actions/action-types";

export const ProductReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS_FROM_API:
      return [...action.payload.products];
    default:
      return state;
  }
};
