import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import {  Button, Flex, Image } from "@chakra-ui/react";
import PaymentDone from "../Asset/paymentDone.png";
const PaymentSucces = () => {

  return (
    <Flex alignItems={"center"} flexDirection={"column"}>
      <Image src={PaymentDone} alt="failed" />
      <Link to="/">
        <Button>Continue Shoping</Button>
      </Link>
    </Flex>
  );
};

export default PaymentSucces;
