import React, { useState } from "react";
import { getMobData } from "../Redux/Mobiles/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "../Styles/Mobile.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const Mobile = () => {
  const dispatch = useDispatch();
  const mobData = useSelector((store) => store.mobileR);
  const { isLoading, isError, mobileData } = mobData;
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getMobData(page));
  }, [page]);

  const handlePage = (val) => {
    setPage(page + val);
  };
  return (
    <div className="prod__container">
      <div className="mobile__section">
        <h2>
          Today's Deals <span className="deal_of_the_day">See all deals</span>
        </h2>
        <div className="products__boxmobile">
          {mobileData.map((el, i) => {
            return (
              <div className="mob__box" key={i}>
                <div className="mob__card">
                  <LazyLoadImage
                    effect="blur"
                    src={el.img}
                    alt={i}
                    style={{ margin: "10px" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="pagination">
          <button
            disabled={page === 1}
            onClick={() => handlePage(-1)}
            className="page__btn"
          >
            <ArrowBackIosIcon />
          </button>
          <button
            disabled={page === 9}
            onClick={() => handlePage(1)}
            className="page__btn"
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
