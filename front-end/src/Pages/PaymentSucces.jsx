import React from 'react'
import { useLocation, useSearchParams, } from 'react-router-dom'

const PaymentSucces = () => {
    // const location = useLocation();
    // const searchParams = new URLSearchParams(location.search);
    // const payment_id = searchParams.get("payment_id");
    const [query] = useSearchParams()
    console.log("ap",query.get("payment_id"))
  return (
    <div>PaymentSucces id :  </div>
  )
}

export default PaymentSucces