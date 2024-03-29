import axios from "axios";
import {
  GET_INSURANCES_LIST_LOADING,
  GET_INSURANCES_LIST_SUCCESS,
  GET_INSURANCES_LIST_ERROR,
  ADD_INSURANCE_LOADING,
  ADD_INSURANCE_SUCCESS,
  ADD_INSURANCE_ERROR,
  CLEAR_ACTION_RESULT,
  UPDATE_INSURANCE_SUCCESS,
  UPDATE_INSURANCE_ERROR,
  UPDATE_INSURANCE_LOADING,
  DELETE_INSURANCE_LOADING,
  DELETE_INSURANCE_SUCCESS,
  DELETE_INSURANCE_ERROR,
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

// Add a new insurance
export const addInsurance = (data) => {
  return async (dispatch) => {
    dispatch(addNewInsuranceLoading());

    try {
      const response = await axios({
        method: "post",
        url: "https://wills-insurance-llc.herokuapp.com/api/admin",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      });

      dispatch({ type: ADD_INSURANCE_SUCCESS, payload: response.data });

      dispatch(getAllInsurancesList(data.email));

      setTimeout(() => {
        dispatch({ type: CLEAR_ACTION_RESULT });
      }, 5000);
    } catch (error) {
      dispatch({ type: ADD_INSURANCE_ERROR, payload: error.response.data });

      setTimeout(() => {
        dispatch({ type: CLEAR_ACTION_RESULT });
      }, 5000);
    }
  };
};

// Update an insurance
export const updateInsurance = (data, insuranceId) => {
  return async (dispatch) => {
    dispatch(updateInsuranceLoading());

    try {
      const response = await axios({
        method: "patch",
        url: `https://wills-insurance-llc.herokuapp.com/api/admin/${insuranceId}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      });

      dispatch({ type: UPDATE_INSURANCE_SUCCESS, payload: response.data });

      dispatch(getAllInsurancesList(data.email));

      setTimeout(() => {
        dispatch({ type: CLEAR_ACTION_RESULT });
      }, 5000);
    } catch (error) {
      dispatch({ type: UPDATE_INSURANCE_ERROR, payload: error.response.data });

      setTimeout(() => {
        dispatch({ type: CLEAR_ACTION_RESULT });
      }, 5000);
    }
  };
};

// Delete an insurance
export const deleteInsurance = (email, insuranceId) => {
  return async (dispatch) => {
    dispatch(deleteInsuranceLoading());

    try {
      const response = await axios({
        method: "delete",
        url: `https://wills-insurance-llc.herokuapp.com/api/admin/${insuranceId}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: { email: email },
      });

      dispatch({ type: DELETE_INSURANCE_SUCCESS, payload: response.data });

      dispatch(getAllInsurancesList(email));

      setTimeout(() => {
        dispatch({ type: CLEAR_ACTION_RESULT });
      }, 5000);
    } catch (error) {
      dispatch({ type: DELETE_INSURANCE_ERROR, payload: error.response.data });

      setTimeout(() => {
        dispatch({ type: CLEAR_ACTION_RESULT });
      }, 5000);
    }
  };
};

const getAllInsurancesListLoading = () => {
  return { type: GET_INSURANCES_LIST_LOADING };
};

const addNewInsuranceLoading = () => {
  return { type: ADD_INSURANCE_LOADING };
};

const updateInsuranceLoading = () => {
  return { type: UPDATE_INSURANCE_LOADING };
};

const deleteInsuranceLoading = () => {
  return { type: DELETE_INSURANCE_LOADING };
};
