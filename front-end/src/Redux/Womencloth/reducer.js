import {
  GET_WOMEN_CLOTH_FAILURE,
  GET_WOMEN_CLOTH_REQ,
  GET_WOMEN_CLOTH_SUCCESS,
} from "./actionTypes";

const initialState = {
  womencloth: [],
  isLoading: false,
  isErr: false,
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_WOMEN_CLOTH_REQ:
      return { ...state, isLoading: true };
    case GET_WOMEN_CLOTH_SUCCESS:
      return { ...state, isLoading: false, womencloth: payload };
    case GET_WOMEN_CLOTH_FAILURE:
      return { ...state, isLoading: false, isErr: true };
    default:
      return state;
  }
};
