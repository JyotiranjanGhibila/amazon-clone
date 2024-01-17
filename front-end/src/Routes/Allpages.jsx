import React from "react";
import { Route, Routes } from "react-router-dom";
import Womencloth from "../Pages/Womencloth";
import Home from "../Components/Home";
import { memo } from "react";
import Singlewomenprod from "../Pages/Singlewomenprod";
import CreateAcc from "../Pages/CreateAcc";
import Singin from "../Pages/Singin";
import PrivateRoute from "../Context/PrivateRoute";
import Cart from "../Pages/Cart";

const Allpages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/womencloth" element={<Womencloth />} />
      <Route path="/singleprod/:id" element={<Singlewomenprod/>}/>
      <Route path="/user/signin" element={<Singin/>}/>
      <Route path="/user/register" element={<CreateAcc/>}/>
      <Route path="/user/cart" element={
        <PrivateRoute>
          <Cart/>
        </PrivateRoute>
      }/>
    </Routes>
  );
};

export default memo(Allpages);
