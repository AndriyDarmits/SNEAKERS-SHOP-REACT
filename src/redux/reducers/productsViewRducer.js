import actionTypes from "../actions/action-types";

export const ProductViewReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LAYOUT:
      return !state;

    default:
      return state;
  }
};
