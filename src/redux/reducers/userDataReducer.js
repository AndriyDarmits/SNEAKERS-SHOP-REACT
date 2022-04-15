import actionTypes from "../actions/action-types";

export const UserDataReducer = (
  state = localStorage.getItem("loginData")
    ? JSON.parse(localStorage.getItem("loginData"))
    : null,
  action
) => {
  switch (action.type) {
    case actionTypes.SET_USER_DATA:
      return { ...action.payload };
    case actionTypes.CLEAR_USER_DATA:
      return null;
    default:
      return state;
  }
};
