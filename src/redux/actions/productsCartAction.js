import actions from "./action-types";
export const addProductToCart = (product) => {
  return {
    type: actions.ADD_PRODUCTS_TO_CART,
    payload: { product },
  };
};
