import {
  GET_INSURANCES_LIST_LOADING,
  GET_INSURANCES_LIST_SUCCESS,
  GET_INSURANCES_LIST_ERROR,
  ADD_INSURANCE_LOADING,
  ADD_INSURANCE_SUCCESS,
  ADD_INSURANCE_ERROR,
  CLEAR_ACTION_RESULT,
  UPDATE_INSURANCE_LOADING,
  UPDATE_INSURANCE_SUCCESS,
  UPDATE_INSURANCE_ERROR,
  DELETE_INSURANCE_LOADING,
  DELETE_INSURANCE_SUCCESS,
  DELETE_INSURANCE_ERROR,
} from "../types";

const initialState = {
  insurances: null,
  getAllInsurancesListLoading: false,
  getAllInsurancesListError: null,
  addInsuranceLoading: false,
  addInsuranceSuccess: null,
  addInsuranceError: null,
  updateInsuranceLoading: false,
  updateInsuranceSuccess: null,
  updateInsuranceError: null,
  deleteInsuranceLoading: false,
  deleteInsuranceSuccess: null,
  deleteInsuranceError: null,
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_ACTION_RESULT: {
      return {
        ...state,
        getAllInsurancesListError: null,
        addInsuranceSuccess: null,
        addInsuranceError: null,
        updateInsuranceSuccess: null,
        updateInsuranceError: null,
        deleteInsuranceSuccess: null,
        deleteInsuranceError: null,
      };
    }
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
    case ADD_INSURANCE_LOADING: {
      return {
        ...state,
        addInsuranceLoading: true,
        addInsuranceSuccess: null,
        addInsuranceError: null,
      };
    }
    case ADD_INSURANCE_SUCCESS: {
      return {
        ...state,
        addInsuranceSuccess: action.payload,
        addInsuranceLoading: false,
        addInsuranceError: null,
      };
    }
    case ADD_INSURANCE_ERROR: {
      return {
        ...state,
        addInsuranceSuccess: null,
        addInsuranceLoading: false,
        addInsuranceError: action.payload,
      };
    }
    case UPDATE_INSURANCE_LOADING: {
      return {
        ...state,
        updateInsuranceLoading: true,
        updateInsuranceSuccess: null,
        updateInsuranceError: null,
      };
    }
    case UPDATE_INSURANCE_SUCCESS: {
      return {
        ...state,
        updateInsuranceSuccess: action.payload,
        updateInsuranceLoading: false,
        updateInsuranceError: null,
      };
    }
    case UPDATE_INSURANCE_ERROR: {
      return {
        ...state,
        updateInsuranceSuccess: null,
        updateInsuranceLoading: false,
        updateInsuranceError: action.payload,
      };
    }
    case DELETE_INSURANCE_LOADING: {
      return {
        ...state,
        deleteInsuranceLoading: true,
        deleteInsuranceSuccess: null,
        deleteInsuranceError: null,
      };
    }
    case DELETE_INSURANCE_SUCCESS: {
      return {
        ...state,
        deleteInsuranceSuccess: action.payload,
        deleteInsuranceLoading: false,
        deleteInsuranceError: null,
      };
    }
    case DELETE_INSURANCE_ERROR: {
      return {
        ...state,
        deleteInsuranceSuccess: null,
        deleteInsuranceLoading: false,
        deleteInsuranceError: action.payload,
      };
    }
    default:
      return state;
  }
};
