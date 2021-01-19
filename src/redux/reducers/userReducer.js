import { GET_USER_ERROR, GET_USER_LOADING, GET_USER_SUCCESS } from "../types";

const initialState = {
  user: null,
  getUserLoading: false,
  getUserError: null,
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LOADING: {
      return {
        ...state,
        getUserLoading: true,
        user: null,
        getUserError: null,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        getUserLoading: false,
        getUserError: null,
      };
    }
    case GET_USER_ERROR: {
      return {
        ...state,
        user: null,
        getUserLoading: false,
        getUserError: action.payload,
      };
    }
    default:
      return state;
  }
};
