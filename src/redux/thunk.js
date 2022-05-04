import actions from "./actions";
import { fetchData } from "../helper";
//thunk function to get data from api
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
        dispatch(actions.setProductFromApi(additionalPropertyAdded));
      }
    );
  };
};

//thunk function to do logging in (geting data about user from google login api)
export const logInWithGoogle = (googleData, navigate, to) => {
  return (dispatch) => {
    const request = fetch("api/google-login", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      return response.json();
    });
    request.then((data) => {
      dispatch(actions.setUser(data));
      console.log(data);
      localStorage.setItem("loginData", JSON.stringify(data));
      navigate(to);
    });
  };
};
