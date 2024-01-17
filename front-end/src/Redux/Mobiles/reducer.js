import * as types from "./actionTypes";
const initialState = {
  mobileData: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_MOBILE_DATA_LOADING:
      return { ...state, isLoading: true };
    case types.GET_MOBILE_DATA_SUCCESS:
      return { ...state, isLoading: false, mobileData: payload };
    case types.GET_MOBILE_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
