import React from "react";

import emptyCart from "../Asset/cart.jpg";

import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Empty = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-around"} flexDir={"column"}>
      <Image src={emptyCart} alt="empty" w={500}/>
      <Text textAlign={"center"} fontWeight={800} fontSize={{base:"13px",md:"18px",lg:"23px"}}>No item in cart</Text>
    </Flex>
  );
};

export default Empty;
