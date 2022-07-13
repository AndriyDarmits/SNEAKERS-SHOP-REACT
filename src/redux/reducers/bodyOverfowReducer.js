import actionTypes from "../actions/action-types";
export const BodyOverflowReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.SET_RESET_BODY_OVERFLOW:
      return !state;
    default:
      return state;
  }
};
