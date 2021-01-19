import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../types";

const initialState = {
  items: [],
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      if (state.items.includes(action.payload)) {
        return state;
      } else {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        items: state.items.filter((item) => item !== action.payload),
      };
    }
    case CLEAR_CART: {
      return {
        ...state,
        items: [],
      };
    }
    default:
      return state;
  }
};
