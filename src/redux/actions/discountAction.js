import actions from "./action-types";
export const activateDiscount = () => {
  return {
    type: actions.ACTIVATE_DISCOUNT,
  };
};
export const deactivateDiscount = () => {
  return {
    type: actions.DEACTIVATE_DISCOUNT,
  };
};
