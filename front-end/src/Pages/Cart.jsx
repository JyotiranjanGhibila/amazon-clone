import React, { memo, useEffect } from "react";
import Styles from "../Styles/Cart.module.css";

import { get_cart_datas } from "../Redux/Cart/action";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
  const dispatch = useDispatch();
  const cartDatas = useSelector((store) => store.cartdata);
  const { cart } = cartDatas;

  useEffect(() => {
    dispatch(get_cart_datas());
  }, []);

  return (
    <div className={Styles.parent__container}>
      <div>
        <div className={Styles.price__section}>
          <span>Shoping Cart</span>
          <span>Price</span>
        </div>
        {cart.length > 0 &&
          cart?.map((el, i) => {
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
                        <button className={Styles.qty}>-</button>
                        {el.qty}
                        <button className={Styles.qty}>+</button>
                      </span>
                      <span>Delete</span>
                    </div>
                    <div className={Styles.prdo__price}>
                      <span>₹ {el.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        <div className={Styles.Subtotal}>
          <span>Subtotal( {cart.length} item):</span>
        </div>
      </div>
      <div className={Styles.checkout}>
        <span>Your order is eligible for Free Delivery.</span>
        <span>Select this option at checkout. </span>
        <span>
          Subtotal(1 item): ₹ <span>pric</span>
        </span>
        <button>Procedd to Buy</button>
      </div>
    </div>
  );
};

export default memo(Cart);
