import axios from "axios";
import {
  GET_ELEC_DATA_FAIL,
  GET_ELEC_DATA_REQ,
  GET_ELEC_DATA_SUCCESS,
} from "./actionTypes";

const getreq = () => {
  return { type: GET_ELEC_DATA_REQ };
};

const getsucc = (payload) => {
  return { type: GET_ELEC_DATA_SUCCESS, payload };
};

const getfail = () => {
  return { type: GET_ELEC_DATA_FAIL };
};

export const getelecdata=(page)=>(dispatch)=>{
    dispatch(getreq())
    axios.get(`http://localhost:8080/product?category=elec&limit=4&page=${page}`)
    .then((res)=>{
        dispatch(getsucc(res.data))
    })
    .catch((err)=>{
        dispatch(getfail())
    })
}