import axios from "axios";
import {
  GET_INSURANCES_LIST_LOADING,
  GET_INSURANCES_LIST_SUCCESS,
  GET_INSURANCES_LIST_ERROR,
} from "../types";

// Get a list of all insurances in the system
export const getAllInsurancesList = (email) => {
  return async (dispatch) => {
    dispatch(getAllInsurancesListLoading());

    try {
      const response = await axios({
        method: "post",
        url: "https://wills-insurance-llc.herokuapp.com/api/admin/list",
        headers: {
          "Content-Type": "application/json",
        },
        data: { email: email },
      });

      dispatch({ type: GET_INSURANCES_LIST_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: GET_INSURANCES_LIST_ERROR,
        payload: error.response.data,
      });
    }
  };
};

const getAllInsurancesListLoading = () => {
  return { type: GET_INSURANCES_LIST_LOADING };
};
