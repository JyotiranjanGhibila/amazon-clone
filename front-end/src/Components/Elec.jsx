import React, { useState } from "react";
import { memo } from "react";
import { getelecdata } from "../Redux/Electronics/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "../Styles/Mobile.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const Elec = () => {
  const dispatch = useDispatch();
  const mobData = useSelector((store) => store.elecR);
  const { isLoad, isErr, elecData } = mobData;
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getelecdata(page));
  }, [page]);

  const handlePage = (val) => {
    setPage(page + val);
  };
  return (
    <div className="prod__container">
      <div className="mobile__section">
        <h2>
          Related to items you've viewed{" "}
          <span className="deal_of_the_day">See all deals</span>
        </h2>
        <div className="products__boxmobile">
          {elecData.map((el, i) => {
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
            disabled={page === 4}
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

export default memo(Elec);
