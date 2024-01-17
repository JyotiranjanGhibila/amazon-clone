import {
  GET_SINGLE_PROD_DATA_FAILURE,
  GET_SINGLE_PROD_DATA_REQ,
  GET_SINGLE_PROD_DATA_SUCCESS,
} from "./actionTypes";
const initState = {
  isError: false,
  isLoad: false,
  data: [],
};
export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_SINGLE_PROD_DATA_REQ:
      return { ...state, isLoad: true };
    case GET_SINGLE_PROD_DATA_SUCCESS:
      return { ...state, isLoad: false, data: payload };

    case GET_SINGLE_PROD_DATA_FAILURE:
      return { ...state, isLoad: false, isError: true };
    default:
      return state;
  }
};
