import {
  BUY_INSURANCE_ERROR,
  BUY_INSURANCE_LOADING,
  BUY_INSURANCE_SUCCESS,
  GET_USER_ERROR,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  CLEAR_ACTION_RESULT,
  GET_PREVIOUS_PURCHASES_LOADING,
  GET_PREVIOUS_PURCHASES_SUCCESS,
  GET_PREVIOUS_PURCHASES_ERROR,
} from "../types";

const initialState = {
  user: null,
  getUserLoading: false,
  getUserError: null,
  buyInsuranceLoading: false,
  buyInsuranceSuccess: null,
  buyInsuranceError: null,
  getPreviousPurchasesLoading: false,
  getPreviousPurchasesSuccess: null,
  getPreviousPurchasesError: null,
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
    case BUY_INSURANCE_LOADING: {
      return {
        ...state,
        buyInsuranceLoading: true,
        buyInsuranceSuccess: null,
        buyInsuranceError: null,
      };
    }
    case BUY_INSURANCE_SUCCESS: {
      return {
        ...state,
        buyInsuranceSuccess: action.payload,
        buyInsuranceLoading: false,
        buyInsuranceError: null,
      };
    }
    case BUY_INSURANCE_ERROR: {
      return {
        ...state,
        buyInsuranceSuccess: null,
        buyInsuranceLoading: false,
        buyInsuranceError: action.payload,
      };
    }
    case GET_PREVIOUS_PURCHASES_LOADING: {
      return {
        ...state,
        getPreviousPurchasesLoading: true,
        getPreviousPurchasesSuccess: null,
        getPreviousPurchasesError: null,
      };
    }
    case GET_PREVIOUS_PURCHASES_SUCCESS: {
      return {
        ...state,
        getPreviousPurchasesSuccess: action.payload,
        getPreviousPurchasesLoading: false,
        getPreviousPurchasesError: null,
      };
    }
    case GET_PREVIOUS_PURCHASES_ERROR: {
      return {
        ...state,
        getPreviousPurchasesSuccess: null,
        getPreviousPurchasesLoading: false,
        getPreviousPurchasesError: action.payload,
      };
    }
    case CLEAR_ACTION_RESULT: {
      return {
        ...state,
        buyInsuranceSuccess: null,
        buyInsuranceError: null,
      };
    }
    default:
      return state;
  }
};
