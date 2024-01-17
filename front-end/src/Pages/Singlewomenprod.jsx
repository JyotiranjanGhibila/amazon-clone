import React, { useContext, useEffect } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import LockIcon from "@mui/icons-material/Lock";
import "react-loading-skeleton/dist/skeleton.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../Styles/Womencloth.css";
import "../Styles/Singleprod.css";
import { useDispatch, useSelector } from "react-redux";

import ReactStars from "react-stars";
import { get_single_data } from "../Redux/Singleproduct/action";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
const Singlewomenprod = () => {
  const { authState } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useDispatch();
  const singprod = useSelector((store) => store.singleprod);
  const { data } = singprod;
  useEffect(() => {
    dispatch(get_single_data(id));
  }, []);

  const handleAdd = async (img, title, desc, price) => {
    axios
      .post(
        `http://localhost:8080/cart/add`,
        {
          img: img,
          title: title,
          desc: desc,
          price: price,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log("Added to the cart");
        navigate("/user/cart");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="fashion">
        <span>Amazon Fashion</span>
        <span className="fashion__cate">Women</span>
        <span className="fashion__cate">Men</span>
        <span className="fashion__cate">Kids</span>
        <span className="fashion__cate">Bags & Luggage</span>
        <span className="fashion__cate">Sportwear</span>
        <span className="fashion__cate">Sales & Deals</span>
        <span>30 DAY RETURNS</span>
      </div>
      {data.length > 0 &&
        data?.map((el, i) => {
          return (
            <div className="singleprod__section" key={i}>
              <div className="prod__img">
                <img src={el.img} alt="pic" />
              </div>
              <div className="prod__details">
                <div className="prod__store">
                  <h4>Visit the {el.title} Store</h4>
                  <h2>{el.desc}</h2>
                  <ReactStars size={26} />
                </div>
                <div className="prod__price">
                  <h2>
                    - {el.off} <span>₹ {el.price}</span>
                  </h2>
                  <span>
                    M.R.P: <span> ₹ {el.mrp}</span>
                  </span>
                  <h3>Summer Sale Deal</h3>
                  <span>Coupon:</span>
                  <span>Apply 1% coupon</span>
                  <span>Terms</span>
                </div>
                <div className="prod__offers">
                  <div className="off">
                    <div>
                      <h2>Partner Offers</h2>
                      <h3>
                        Buy 3 or more and get 5% off on Qualifying items offered
                        by Sidhidata Textile View productsBuy 3 or
                      </h3>
                      <span>2 offers</span>
                    </div>
                    <div>
                      <h2>Partner Offers</h2>
                      <h3>
                        Buy 3 or more and get 5% off on Qualifying items offered
                        by Sidhidata Textile View productsBuy 3 or
                      </h3>
                      <span>2 offers</span>
                    </div>
                    <div>
                      <h2>Partner Offers</h2>
                      <h3>
                        Buy 3 or more and get 5% off on Qualifying items offered
                        by Sidhidata Textile View productsBuy 3 or
                      </h3>
                      <span>2 offers</span>
                    </div>
                  </div>
                </div>
                <div className="prod__deliver">
                  <div>
                    <img
                      src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png"
                      alt="png"
                    />
                    <span>Free Delivery</span>
                  </div>
                  <div>
                    <img
                      src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png"
                      alt="png"
                    />
                    <span>Pay on Delivery</span>
                  </div>
                  <div>
                    <img
                      src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"
                      alt="png"
                    />
                    <span>10 days Return</span>
                  </div>
                  <div>
                    <img
                      src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB617044271_.png"
                      alt="png"
                    />
                    <span>Top Brand</span>
                  </div>
                  <div>
                    <img
                      src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png"
                      alt="png"
                    />
                    <span>Amazon Delivered</span>
                  </div>
                </div>
              </div>
              <div className="buy">
                <span>₹ {el.price}</span>
                <span>
                  FREE delivery <span>Tuesday, 16 May.</span>
                </span>
                <span>
                  {" "}
                  <PlaceIcon /> Select delivery location
                </span>
                <span>In Stock</span>
                <span>
                  Sold by <span>{el.title} </span>and{" "}
                  <span> Fulfiled by Amazon</span>.
                </span>

                {authState.isAuth ? (
                  <button
                    className="add_to_cart"
                    onClick={() =>
                      handleAdd(el.img, el.title, el.desc, el.price)
                    }
                  >
                    Add To Cart
                  </button>
                ) : (
                  <button className="add_to_cart">
                    {" "}
                    <Link to="/user/signin">Add To Cart </Link>
                  </button>
                )}

                <button>Buy Now</button>
                <span>
                  <LockIcon fontSize="10" /> Secure transaction
                </span>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Singlewomenprod;
