import actions from "./action-types";
export const addProductToWishlist = (product) => {
  return {
    type: actions.ADD_PRODUCTS_TO_WISHLIST,
    payload: product,
  };
};
