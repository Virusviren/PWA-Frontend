import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

export const addToCart = (item) => {
  return { type: ADD_TO_CART, payload: item };
};

export const removeFromCart = (item) => {
  return { type: REMOVE_FROM_CART, payload: item };
};
