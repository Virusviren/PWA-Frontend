import axios from "axios";
import { GET_USER_LOADING, GET_USER_SUCCESS, GET_USER_ERROR } from "../types";

// Add or get an existing user from database
export const getUser = (data) => {
  return async (dispatch) => {
    dispatch(getUserLoading());

    try {
      const response = await axios({
        method: "post",
        url: "https://wills-insurance-llc.herokuapp.com/api/user",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      });

      dispatch({ type: GET_USER_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_USER_ERROR, payload: error.response.data });
    }
  };
};

const getUserLoading = () => {
  return { type: GET_USER_LOADING };
};
