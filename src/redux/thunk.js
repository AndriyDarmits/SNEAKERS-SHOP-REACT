import actions from "./actions";
import { fetchData } from "../helper";
import { useNavigate } from "react-router-dom";
//thunk function
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

export const logInWithGoogle = (googleData, navigate, to) => {
  return (dispatch) => {
    console.log("1");
    const request = fetch("api/google-login", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log("2");
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
