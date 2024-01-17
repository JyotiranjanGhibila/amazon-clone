import React, { memo, useContext } from "react";
import "../Styles/Header.css";

import amazonLogo from "../Asset/amazon.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Header = () => {
  const { authState } = useContext(AuthContext);
  const userName=localStorage.getItem("name")
  return (
    <div className="header">
      <Link to="/">
        <img src={amazonLogo} alt="amazon" className="header__logo" />
      </Link>

      <div className="header__nav1">
        <div className="header__option">
          <span className="header__One">Hello</span>
          <span className="header__Two">Select your address</span>
        </div>
      </div>
      <div className="header__search">
        <input
          type="text"
          placeholder="Search Amazon.in"
          className="header__searchInput"
        />
        <SearchIcon
          className="header__searchIcon"
          style={{ fontSize: "35px" }}
        />
      </div>

      <div className="header__nav">
        <div className="header__option en">
          <span className="header__One" style={{ marginTop: "9px" }}>
            EN
          </span>
          <span className="header__Two">Language</span>
        </div>

        <div className="header__option">
          <span className="header__One" style={{ marginTop: "9px" }}>
            {
              authState.isAuth? `Hello ${userName}`:<Link to="/user/signin">Hello, Sign In</Link>
            }
            
          </span>
          <span className="header__Two">Account & Lists</span>
        </div>

        <div className="header__option">
          <span className="header__One" style={{ marginTop: "9px" }}>
            Return
          </span>
          <span className="header__Two">& Orders</span>
        </div>

        <div className="header__cart">
          <span className="header__One header__count">0</span>
          <ShoppingCartOutlinedIcon
            className="header__cartlogo"
            style={{ fontSize: "33px" }}
          />
        </div>
        <Text
          color={"white"}
          mt={{ sm: "4", md: "4", lg: "5" }}
          ml={"2"}
          mr={"4"}
          className="initcart"
        >
          <Link to="/user/cart"> Cart</Link>
         
        </Text>
      </div>
    </div>
  );
};

export default memo(Header);
