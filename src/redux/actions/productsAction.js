import actions from "./action-types";
export const setProductFromApi = (products) => {
  return {
    type: actions.SET_PRODUCTS_FROM_API,
    payload: { products },
  };
};
