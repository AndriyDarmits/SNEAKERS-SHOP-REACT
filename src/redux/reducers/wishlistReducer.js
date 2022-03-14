import actionTypes from "../actions/action-types";

export const WishlistReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCTS_TO_WISHLIST:
      return [state, ...action.payload.product];
    default:
      return state;
  }
};
