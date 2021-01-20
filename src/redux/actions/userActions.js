import axios from "axios";
import {
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  BUY_INSURANCE_LOADING,
  BUY_INSURANCE_SUCCESS,
  BUY_INSURANCE_ERROR,
  GET_PREVIOUS_PURCHASES_LOADING,
  GET_PREVIOUS_PURCHASES_ERROR,
  GET_PREVIOUS_PURCHASES_SUCCESS,
  CLEAR_ACTION_RESULT,
} from "../types";
import { getAllInsurancesList } from "./adminActions";
import admins from "../../utilities/admins";

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

      if (admins.includes(data.email)) {
        dispatch(getAllInsurancesList(data.email));
      }
    } catch (error) {
      dispatch({ type: GET_USER_ERROR, payload: error.response.data });
    }
  };
};

// Confirm and pay
export const buyInsurance = (data, clearCart) => {
  return async (dispatch) => {
    dispatch(buyInsuranceLoading());

    try {
      const response = await axios({
        method: "post",
        url: "https://wills-insurance-llc.herokuapp.com/api/user/buy",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      });

      dispatch({ type: BUY_INSURANCE_SUCCESS, payload: response.data });

      clearCart();

      setTimeout(() => {
        dispatch({ type: CLEAR_ACTION_RESULT });
      }, 5000);
    } catch (error) {
      dispatch({ type: BUY_INSURANCE_ERROR, payload: error.response.data });

      setTimeout(() => {
        dispatch({ type: CLEAR_ACTION_RESULT });
      }, 5000);
    }
  };
};

// Get a list of all insurances in the system
export const getPreviousPurchases = (email) => {
  return async (dispatch) => {
    dispatch(getPreviousPurchasesLoading());

    try {
      const response = await axios({
        method: "post",
        url: "https://wills-insurance-llc.herokuapp.com/api/user/purchases",
        headers: {
          "Content-Type": "application/json",
        },
        data: { email: email },
      });

      dispatch({
        type: GET_PREVIOUS_PURCHASES_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: GET_PREVIOUS_PURCHASES_ERROR,
        payload: error.response.data,
      });
    }
  };
};

const getUserLoading = () => {
  return { type: GET_USER_LOADING };
};

const buyInsuranceLoading = () => {
  return { type: BUY_INSURANCE_LOADING };
};

const getPreviousPurchasesLoading = () => {
  return { type: GET_PREVIOUS_PURCHASES_LOADING };
};
