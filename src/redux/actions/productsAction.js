import actions from "./action-types";
export const setProductFromApi = (products) => {
  return {
    type: actions.SET_PRODUCTS_FROM_API,
    payload: { products },
  };
};

export const updateProducts = (product) => {
  return {
    type: actions.UPDATE_PRODUCTS_FROM_API,
    payload: product,
  };
};
export const resetIsInShoppingCartProdutsProperty = () => {
  return {
    type: actions.RESET_ISINSHOPPINGCART_PRODUCTS_PROPERTY,
  };
};
