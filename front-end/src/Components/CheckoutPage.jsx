import React from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import amazonLogo from '../Asset/amazon.svg'

const CheckoutPage = ({ name, amount }) => {
  const handleCheckout = async () => {
    try {
      const {
        data,
      } = await axios.post(`http://localhost:8080/payment/checkout`, {
        name,
        amount,
      });

      const options = {
        "key": "rzp_test_SClA6pBfJlOMjy", // Enter the Key ID generated from the Dashboard
        "amount": data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": data.currency,
        "name": "Amazon clone",
        "description": "Transaction",
        "image": amazonLogo,
        "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url": "http://localhost:8080/payment/payment-verification",
        "prefill": {
            "name": "Jyot Ranjan",
            "email": "jyoti.ranjan@example.com",
            "contact": "9000090000"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#042333"
        }
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open()
    } catch (err) {
      console.log("err in checkout: ", err);
    }
  };
  return (
    <Button colorScheme="yellow" mt={"10px"} onClick={handleCheckout}>
      Procedd to Buy
    </Button>
  );
};

export default CheckoutPage;
