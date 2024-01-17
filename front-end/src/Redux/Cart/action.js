import axios from "axios";
import {
  GET_CART_DATA_REQ,
  GET_CART_DATA_SUCCESS,
  GET_CART_DATA_FAILURE,
} from "./actionTypes";

const get_cart_req=()=>{
    return {type: GET_CART_DATA_REQ}
}
const get_cart_success=(payload)=>{
    return {type: GET_CART_DATA_SUCCESS,payload}
}
const get_cart_fail=()=>{
    return {type: GET_CART_DATA_FAILURE}
}

export const get_cart_datas=()=>(dispacth)=>{
    dispacth(get_cart_req())
    axios.get(`http://localhost:8080/cart`,{
        headers:{
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res)=>{
        dispacth(get_cart_success(res.data))
    })
    .catch((err)=>{
        dispacth(get_cart_fail())
    })
}
