import {
  GET_CART_DATA_FAILURE,
  GET_CART_DATA_REQ,
  GET_CART_DATA_SUCCESS,
} from "./actionTypes";

const initState = {
  isLoad: false,
  isErr: false,
  cart: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_CART_DATA_REQ:
      return { ...state, isLoad: true };
    case GET_CART_DATA_SUCCESS:
      return { ...state, isLoad: false, cart: payload };
    case GET_CART_DATA_FAILURE:
      return { ...state, isLoad: false, isErr: true };
    default:
      return state;
  }
};
