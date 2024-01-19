import React from "react";
import paymentFailed from "../Asset/paymentFailed.png";
import { Button, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PaymentFail = () => {
  return (
    <Flex alignItems={"center"} flexDirection={"column"}>
      <Image src={paymentFailed} alt="failed" />
      <Link to="/womencloth">
        <Button>Continue Shoping</Button>
      </Link>
    </Flex>
  );
};

export default PaymentFail;
