import {
  GET_ELEC_DATA_FAIL,
  GET_ELEC_DATA_REQ,
  GET_ELEC_DATA_SUCCESS,
} from "./actionTypes";

const initState = {
  isLoad: false,
  isErr: false,
  elecData: [],
};
export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_ELEC_DATA_REQ:
      return { ...state, isLoad: true };
    case GET_ELEC_DATA_SUCCESS:
      return { ...state, isLoad: false, elecData: payload };
    case GET_ELEC_DATA_FAIL:
      return { ...state, isLoad: false, isErr: true };
    default:
      return state;
  }
};
