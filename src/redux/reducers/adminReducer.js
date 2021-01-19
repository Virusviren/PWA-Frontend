import {
  GET_INSURANCES_LIST_LOADING,
  GET_INSURANCES_LIST_SUCCESS,
  GET_INSURANCES_LIST_ERROR,
} from "../types";

const initialState = {
  insurances: null,
  getAllInsurancesListLoading: false,
  getAllInsurancesListError: null,
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_INSURANCES_LIST_LOADING: {
      return {
        ...state,
        getAllInsurancesListLoading: true,
        insurances: null,
        getAllInsurancesListError: null,
      };
    }
    case GET_INSURANCES_LIST_SUCCESS: {
      return {
        ...state,
        insurances: action.payload,
        getAllInsurancesListLoading: false,
        getAllInsurancesListError: null,
      };
    }
    case GET_INSURANCES_LIST_ERROR: {
      return {
        ...state,
        insurances: null,
        getAllInsurancesListLoading: false,
        getAllInsurancesListError: action.payload,
      };
    }
    default:
      return state;
  }
};
