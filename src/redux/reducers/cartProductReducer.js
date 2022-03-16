import actionTypes from "../actions/action-types";

export const CartReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCTS_TO_CART:
      return [...state, action.payload];
    default:
      return state;
  }
};
