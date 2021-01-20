import {
  GET_INSURANCES_LOADING,
  GET_INSURANCES_SUCCESS,
  GET_INSURANCES_ERROR,
  CLEAR_ACTION_RESULT,
} from "../types";

const initialState = {
  insurances: null,
  getInsurancesLoading: false,
  getInsurancesError: null,
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_ACTION_RESULT: {
      return {
        ...state,
        getInsurancesError: null,
        addInsuranceSuccess: null,
        addInsuranceError: null,
      };
    }
    case GET_INSURANCES_LOADING: {
      return {
        ...state,
        getInsurancesLoading: true,
        insurances: null,
        getInsurancesError: null,
      };
    }
    case GET_INSURANCES_SUCCESS: {
      return {
        ...state,
        insurances: action.payload,
        getInsurancesLoading: false,
        getInsurancesError: null,
      };
    }
    case GET_INSURANCES_ERROR: {
      return {
        ...state,
        insurances: null,
        getInsurancesLoading: false,
        getInsurancesError: action.payload,
      };
    }
    default:
      return state;
  }
};
