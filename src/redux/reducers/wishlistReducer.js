import actionTypes from "../actions/action-types";

export const WishlistReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCTS_TO_WISHLIST:
      return [...state, action.payload];
    case actionTypes.DELETE_PRODUCTS_FROM_WISHLIST:
      const filteredWishlistPoducts = [...state].filter((product) => {
        return action.payload.id !== product.id;
      });
      return [...filteredWishlistPoducts];
    default:
      return state;
  }
};
