import React from 'react'
import { Link, useLocation, useSearchParams, } from 'react-router-dom'
import {Box, Button, Flex, Image} from '@chakra-ui/react'
import PaymentDone from '../Asset/paymentDone.png'
const PaymentSucces = () => {
    const [query] = useSearchParams()
    console.log("ap",query.get("payment_id"))
  return (
    <Flex alignItems={"center"} flexDirection={"column"}>
    <Image src={PaymentDone} alt="failed" />
    <Link to="/">
    <Button>Continue Shoping</Button>
    </Link>
  </Flex>
  )
}

export default PaymentSucces