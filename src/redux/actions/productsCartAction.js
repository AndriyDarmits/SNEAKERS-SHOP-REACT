import actions from "./action-types";
export const addProductToCart = (product) => {
  return {
    type: actions.ADD_PRODUCTS_TO_CART,
    payload: product,
  };
};
export const updateProductsCart = (product) => {
  return {
    type: actions.UPDATE_PRODUCTS_CART,
    payload: product,
  };
};
export const deleteProductsFromCart = (product) => {
  return {
    type: actions.DELETE_PRODUCTS_FROM_CART,
    payload: product,
  };
};
