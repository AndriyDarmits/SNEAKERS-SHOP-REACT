import { combineReducers } from "redux";
import { CartReducer } from "./cartReducer";
import { ProductReducer } from "./productsReducer";

export const reducer = combineReducers({
  products: ProductReducer,
  productsCart: CartReducer,
});
