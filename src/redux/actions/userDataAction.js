import actions from "./action-types";
export const setUser = (user) => {
  return {
    type: actions.SET_USER_DATA,
    payload: user,
  };
};
export const clearUser = () => {
  return {
    type: actions.CLEAR_USER_DATA,
  };
};
