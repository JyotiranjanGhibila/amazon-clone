import React from "react";
import "../Styles/Footer.css";
import amazonLogo from "../Asset/amazon.png";
import { memo } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__contacts">
        <div className="with__us">
          <p>Get to Know Us</p>
          <span>About Us</span>
          <span>Careers</span>
          <span>Press Releases</span>
          <span>Amazon Science</span>
        </div>
        <div className="with__us">
          <p>Connect with Us</p>
          <span>Facebook</span>
          <span>Twitter</span>
          <span>Instagram</span>
        </div>
        <div className="with__us">
          <p>Make Money with Us</p>
          <span>Sell on Amazon</span>
          <span>Sell under Amazon Accelerator</span>
          <span>Protect and Build Your Brand</span>
          <span>Amazon Global Selling</span>
          <span>Become an Affiliate</span>
          <span>Fulfilment by Amazon</span>
          <span>Advertise Your Products</span>
          <span>Amazon Pay on Merchants</span>
        </div>
        <div className="with__us">
          <p>Let Us Help You</p>
          <span>COVID-19 and Amazon</span>
          <span>Your Account</span>
          <span>Returns Center</span>
          <span>100% Purchase Protection</span>
          <span>Become an Affiliate</span>
          <span>Amazon App Downlaod</span>
          <span>Advertise Your Products</span>
          <span>Help</span>
        </div>
      </div>
      <div className="city__lang">
        <div>
          <Link to="/">
            <img src={amazonLogo} alt="amazon" className="header__logo" />
          </Link>
        </div>

        <div className="city">
          <span>Australia</span>
          <span>Brazil</span>
          <span>Canada</span>
          <span>China</span>
          <span>France</span>
          <span>Germany</span>
          <span>Etaly</span>
          <span>Japan</span>
          <span>Mexico</span>
          <span>United Kingdom</span>
          <span>Spain</span>
          <span>Singapore</span>
        </div>
      </div>
      <div className="privacy">
        <div className="add">
          <div>
            <p>AbeBooks</p>
            <span>Books, art</span>
            <span>& collection</span>
          </div>
          <div>
            <p>Amazon Web Services</p>
            <span>Scalable Coud</span>
            <span>Coumputing Services</span>
          </div>
          <div>
            <p>Audible</p>
            <span>Downlaod</span>
            <span>Audio Books</span>
          </div>
          <div>
            <p>DPReviw</p>
            <span>Digital</span>
            <span>Photography</span>
          </div>
          <div>
            <p>IMDb</p>
            <span>Movies, TV</span>
            <span>& Celebrities</span>
          </div>
          <div>
            <p>Amazon Business</p>
            <span>Everything For</span>
            <span>Your business</span>
          </div>
          <div>
            <p>Prime Now</p>
            <span>2-Hour Delivery</span>
            <span>on Everyday Items</span>
          </div>
          <div>
            <p>Amazon Prime Music</p>
            <span>100 million songs, ad-free</span>
            <span>Over 15 million podcast episodes</span>
          </div>
          <div>
            <p>Shopbop</p>
            <span>Designer</span>
            <span>Fashion Brand</span>
          </div>
        </div>
        <div className="reserved">
          <p>Conditions of Use & Sale Privacy Notice Interest-Based Ads</p>
          <p>© 1996-2023, Amazon.com, Inc. or its affiliates </p>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
