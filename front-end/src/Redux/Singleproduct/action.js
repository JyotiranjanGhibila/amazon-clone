import axios from "axios";
import {
  GET_SINGLE_PROD_DATA_REQ,
  GET_SINGLE_PROD_DATA_SUCCESS,
  GET_SINGLE_PROD_DATA_FAILURE,
} from "./actionTypes";

export const get_single_data_req=()=>{
    return {type: GET_SINGLE_PROD_DATA_REQ}
}

export const get_single_data_success=(payload)=>{
    return {type: GET_SINGLE_PROD_DATA_SUCCESS, payload}
}

export const get_single_data_fail=()=>{
    return {type: GET_SINGLE_PROD_DATA_FAILURE}
}


export const get_single_data=(id)=>(dispatch)=>{
    dispatch(get_single_data_req())
    axios.get(`http://localhost:8080/fashion/cloth/${id}`)
    .then((res)=>{
        dispatch(get_single_data_success(res.data))
    })
    .catch((err)=>{
        dispatch(get_single_data_fail(err))
    })
}