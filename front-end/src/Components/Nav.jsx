import React, { useContext } from "react";
import "../Styles/Nav.css";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Text,
  Flex,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {authState,logoutUser} = useContext(AuthContext)
  const userName=localStorage.getItem("name")
  const btnRef = React.useRef();

  return (
    <div className="navbar">
      <span ref={btnRef} onClick={onOpen}>
        <MenuIcon />
      </span>
      <span className="download">Amazon mini TV</span>
      <span>Sell</span>
      <span className="download">Best Sellers</span>
      <span>Mobiles</span>
      <span className="download">Today's Deals</span>
      <span className="download">Customer Service</span>
      <span>Electronics</span>
      <span>Prime</span>
      <span>New Releases</span>
      <span className="download">Home & Kitchen</span>
      <span>Amazon Pay</span>
      <span>Fashion</span>
      <p className="download">Shopping made easy | Download the app</p>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={"whitesmoke"} />
          <DrawerHeader bgColor={"#232F3E"} color={"white"}>
            <Flex>
              <AccountCircleIcon style={{ fontSize: "36px" }} />{" "}
              {
                authState.isAuth?<Text ml={"22"} fontWeight={"55%"}>
                Hello {userName}
              </Text>:<Text ml={"22"} fontWeight={"55%"}>
                Hello signin
              </Text>
              }
            </Flex>{" "}
          </DrawerHeader>
          <div className="draw">
            <p>Trending</p>
            <span>Best Sellers</span>
            <span>New Releases</span>
            <span>Movers & Shakers</span>
            {/* <span>TV, Appliances, Electronics</span> */}
          </div>
          <div className="draw">
            <p>Digital Content And Devices</p>
            <span>Echo & Alexa</span>
            <span>Fire TV</span>
            <span>Audible Audiobooks</span>
            <span>Amazon Prime Video</span>
            {/* <span>Kindle E-Readers & eBooks</span> */}
          </div>
          <div className="draw">
            <p>Program & Features</p>
            <span>Gift Card & Mobile Recharges</span>
            <span>Flight Tickets</span>
            <span>Clearance store</span>
          </div>
          <div className="draw">
            <p>Help & Setting</p>
            <span>Your Account</span>
            <span>Custormer Service</span>
            <span>
              {
                authState.isAuth? <span onClick={logoutUser}>Logout</span>:<NavLink to="/user/signin">Sign in</NavLink>
              }
              
            </span>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Nav;
