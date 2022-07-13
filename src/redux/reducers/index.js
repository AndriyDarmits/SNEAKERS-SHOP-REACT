import { combineReducers } from "redux";
import { CartReducer } from "./cartReducer";
import { ProductReducer } from "./productsReducer";
import { WishlistReducer } from "./wishlistReducer";
import { ProductViewReducer } from "./productsViewRducer";
import { UserDataReducer } from "./userDataReducer";
import { ShowSidebarReducer } from "./showSidebarReducer";
import { DiscountReducer } from "./discountReducer";
import { BodyOverflowReducer } from "./bodyOverfowReducer";

export const reducer = combineReducers({
  products: ProductReducer,
  productsCart: CartReducer,
  wishlist: WishlistReducer,
  productsView: ProductViewReducer,
  userData: UserDataReducer,
  showSidebar: ShowSidebarReducer,
  discount: DiscountReducer,
  bodyOverfow: BodyOverflowReducer,
});
