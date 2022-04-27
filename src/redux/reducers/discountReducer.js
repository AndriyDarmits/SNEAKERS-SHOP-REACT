import actionTypes from "../actions/action-types";

export const DiscountReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.ACTIVATE_DISCOUNT:
      return true;
    case actionTypes.DEACTIVATE_DISCOUNT:
      return false;
    default:
      return state;
  }
};
