import {
  GET_WOMEN_CLOTH_FAILURE,
  GET_WOMEN_CLOTH_REQ,
  GET_WOMEN_CLOTH_SUCCESS,
} from "./actionTypes";
import axios from "axios";
const getwomenclothreq = () => {
  return { type: GET_WOMEN_CLOTH_REQ };
};

const getwomenclothsuccess = (payload) => {
  return { type: GET_WOMEN_CLOTH_SUCCESS, payload };
};

const getwomenclothfail = () => {
  return { type: GET_WOMEN_CLOTH_FAILURE };
};

export const getwomencloth =
  (param = {}) =>
  (dispatch) => {
    dispatch(getwomenclothreq());
    
    axios
      .get(`https://amazon-clone-eight-jade.vercel.app/fashion/cloth`, param)
      .then((res) => {
        dispatch(getwomenclothsuccess(res.data));
      })
      .catch((err) => {
        dispatch(getwomenclothfail());
      });
  };
