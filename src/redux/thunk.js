import actions from "./actions";
import { fetchData } from "../helper";

export const setDataFromApiThunk = () => {
  return (dispatch) => {
    fetchData("https://mocki.io/v1/c2978c01-7d3b-4fe2-a179-9ae07db63789").then(
      (data) => {
        const additionalPropertyAdded = data.map((el) => {
          //initial rate, avaliable in wishlist, product reviews
          el.rate = 0;
          el.isInWishList = false;
          el.isInShoppingCart = false;
          el.reviews = [];
          return el;
        });
        setTimeout(() => {
          dispatch(actions.setProductFromApi(additionalPropertyAdded));
        }, 1000);
      }
    );
  };
};
