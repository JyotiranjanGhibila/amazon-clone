import axios from "axios";
import {
  GET_MOBILE_DATA_FAILURE,
  GET_MOBILE_DATA_LOADING,
  GET_MOBILE_DATA_SUCCESS,
} from "./actionTypes";

const getMobileRequest = () => {
  return { type: GET_MOBILE_DATA_LOADING };
};

const getMobileSuccess = (payload) => {
  return { type: GET_MOBILE_DATA_SUCCESS, payload };
};

const getMobileFailure = () => {
  return { type: GET_MOBILE_DATA_FAILURE };
};

export const getMobData = (page) => (dispatch) => {
  dispatch(getMobileRequest());

  axios
    .get(`http://localhost:8080/product?category=mob&limit=4&page=${page}`)
    .then((res) => {
      dispatch(getMobileSuccess(res.data));
    })
    .catch((er) => {
      dispatch(getMobileFailure());
    });
};
