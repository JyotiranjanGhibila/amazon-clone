import React, { useEffect, useState } from "react";
import Styles from "../Styles/Cart.module.css";
import { get_cart_datas } from "../Redux/Cart/action";
import { useDispatch, useSelector } from "react-redux";
import { Flex, useToast } from "@chakra-ui/react";
import Empty from "./Empty";
import axios from "axios";
import CheckoutPage from "../Components/CheckoutPage";

const Cart = () => {
  const [deleteItemId, setDeleteItemId] = useState(null);
  const dispatch = useDispatch();
  const cartDatas = useSelector((store) => store.cartdata);
  const { cart } = cartDatas;
  const toast = useToast();
  let totalPrice = 0;
  const handleItemDelete = async (id) => {
    try {
      await axios.delete(
        `https://amazon-clone-eight-jade.vercel.app/cart/delete/${id}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      toast({
        title: "Product deleted.",
        description: "We've deleted your Item.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: "Please try again",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }

    setDeleteItemId(id);
  };
  const handleQuantity = async (id, quan, num) => {
    console.log("update id?", id);
    try {
      const response = await fetch(
        `https://amazon-clone-eight-jade.vercel.app/cart/update/${id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Referrer-Policy': 'no-referrer-when-downgrade',
            Authorization: localStorage.getItem('token') || '',
          },
          body: JSON.stringify({ qty: quan + num }),
        }
      );
  
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to update quantity: ${errorMessage}`);
      }
  
      toast({
        title: 'Quantity update',
        description: 'Item price will change according to the quantity',
        status: 'success',
        duration: 1000,
        isClosable: true,
      });
  
      dispatch(get_cart_datas());
    } catch (err) {
      console.error('Error updating quantity:', err);
  
      toast({
        title: 'Something went wrong',
        description: 'Please try again',
        status: 'error',
        duration: 1000,
        isClosable: true,
      });
    }
  };
  useEffect(() => {
    dispatch(get_cart_datas());
  }, [deleteItemId]);

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      mb={"52px"}
      className={Styles.parent__container}
    >
      {cart.length === 0 ? (
        <Empty />
      ) : (
        <Flex>
          <div>
            <div className={Styles.price__section}>
              <span>Shoping Cart</span>
              <span>Price</span>
            </div>
            {cart?.length > 0 &&
              cart?.map((el, i) => {
                totalPrice += el.price * el.qty;

                return (
                  <div className={Styles.Shopingcart__container} key={i}>
                    <div className={Styles.cart__box}>
                      <div className={Styles.cart__prod}>
                        <div className={Styles.prod__img}>
                          <img src={el.img} alt="img" />
                        </div>
                        <div className={Styles.prod__info}>
                          <span>{el.desc}</span>
                          <span>Only 3 left in stock.</span>
                          <span>Sold by {el.title}</span>
                          <span>Amazon Delivered</span>
                          <span>Gift options not available. </span>
                          <span>
                            <span>Qty: </span>
                            <button
                              disabled={el.qty === 1}
                              className={Styles.qty}
                              onClick={() => handleQuantity(el._id, el.qty, -1)}
                            >
                              -
                            </button>
                            {el.qty}
                            <button
                              disabled={el.qty === 10}
                              className={Styles.qty}
                              onClick={() => handleQuantity(el._id, el.qty, +1)}
                            >
                              +
                            </button>
                          </span>
                          <span onClick={() => handleItemDelete(el._id)}>
                            Delete
                          </span>
                        </div>
                        <div className={Styles.prdo__price}>
                          <span>₹ {el.price * el.qty}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            <div className={Styles.Subtotal}>
              <span>
                Subtotal( {cart.length} item): ₹ {totalPrice}
              </span>
            </div>
          </div>
          <div className={Styles.checkout}>
            <span>Your order is eligible for Free Delivery.</span>
            <span>Select this option at checkout. </span>
            <span>
              Subtotal(1 item): ₹ {totalPrice}
              <span>price</span>
            </span>
            <CheckoutPage name={"Saree"} amount={totalPrice} />
          </div>
        </Flex>
      )}
    </Flex>
  );
};

export default Cart;
