import React, { useEffect, useState } from "react";
import "../Styles/Womencloth.css";
import ReactStars from "react-stars";
import { useDispatch, useSelector } from "react-redux";
import { getwomencloth } from "../Redux/Womencloth/action";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import Filterbar from "./Filterbar";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const Womencloth = () => {
  const [page,setPage]=useState(null)
  
  const dispatch = useDispatch();
  const data = useSelector((store) => store.womenclothReducer);
  const { isErr, isLoading, womencloth } = data;
  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    let paramObj = {
      params: {
        brand: searchParams.getAll("brand"),
        material: searchParams.getAll("material"),
      },
    };
    dispatch(getwomencloth(paramObj));
  }, [location.search]);
  const hanglepagi=(val)=>{
    setPage(page+val)
  }

  
  return (
    <div className="women__cloth">
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
      
      <div className="womencloth__container">
        <div className="womenfilter">
          <Filterbar />
        </div>
        <div className="clothbox">
          {womencloth.map((el, i) => {
            return (
              <div className="clothcard" key={i}>
                <NavLink to={`/singleProd/${el._id}`}>
                <img src={el.img} alt="img" className="model"/>
                </NavLink>
                <div className="clothdetails">
                  <span>{el.title}</span>
                  <span>{el.desc}</span>
                  <ReactStars size={28} />
                  <span className="cloth__price">
                    ₹{el.price}
                    <span>
                      {" "}
                      M.R.P: <span className="mrp">{el.mrp}</span>
                    </span>
                    <span> {el.off}</span>
                  </span>
                  <span>FREE Delivery by Amazon</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pagination__section">
        <span disabled={page===1} onClick={() => hanglepagi(-1)}> Previous</span>
        <span disabled={page===3} onClick={() => hanglepagi(1)}>Next</span>
      </div>
    </div>
  );
};

export default Womencloth;
