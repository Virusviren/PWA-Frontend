import axios from "axios";
import {
  GET_INSURANCES_LOADING,
  GET_INSURANCES_SUCCESS,
  GET_INSURANCES_ERROR,
} from "../types";

// Get all insurances in the system
export const getInsurances = () => {
  return async (dispatch) => {
    dispatch(getInsurancesLoading());

    try {
      const response = await axios({
        method: "get",
        url: "https://wills-insurance-llc.herokuapp.com/api/guest",
        headers: {
          "Content-Type": "application/json",
        },
      });

      dispatch({ type: GET_INSURANCES_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: GET_INSURANCES_ERROR,
        payload: error.response.data,
      });
    }
  };
};

const getInsurancesLoading = () => {
  return { type: GET_INSURANCES_LOADING };
};
