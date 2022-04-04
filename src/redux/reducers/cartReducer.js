import actionTypes from "../actions/action-types";

export const CartReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCTS_TO_CART:
      return [...state, action.payload];
    case actionTypes.UPDATE_PRODUCTS_CART:
      const updatedCartPoducts = [...state].map((product) => {
        if (product.id === action.payload.id) {
          return action.payload;
        }
        return product;
      });
      return [...updatedCartPoducts];
    case actionTypes.DELETE_PRODUCTS_FROM_CART:
      const filteredCartPoducts = [...state].filter((product) => {
        return action.payload.id !== product.id;
      });
      return [...filteredCartPoducts];
    case actionTypes.CLEAR_ALL_PRODUCTS_FROM_CART:
      return [];
    default:
      return state;
  }
};
