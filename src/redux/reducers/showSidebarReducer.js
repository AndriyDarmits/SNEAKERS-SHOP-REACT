import actionTypes from "../actions/action-types";

export const ShowSidebarReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.SHOW_SIDEBAR_MENU:
      return !state;

    default:
      return state;
  }
};
