import { combineReducers } from "redux";
import { ProductReducer } from "./productsReducer";

export const reducer = combineReducers({
  products: ProductReducer,
});
