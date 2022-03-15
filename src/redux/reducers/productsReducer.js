import actionTypes from "../actions/action-types";

export const ProductReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS_FROM_API:
      return [...action.payload.products];
    case actionTypes.UPDATE_PRODUCTS_FROM_API:
      const updatedPoducts = [...state].map((product) => {
        if (product.id === action.id) {
          return action;
        }
        return product;
      });
      return [...updatedPoducts];
    default:
      return state;
  }
};
