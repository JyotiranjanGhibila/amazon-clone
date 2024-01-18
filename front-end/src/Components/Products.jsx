import React from "react";
import "../Styles/Products.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

const menprods = [
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg",
    tittle: "Clothing",
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg",
    tittle: "Footwear",
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg",
    tittle: "Watches",
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg",
    tittle: "Bags & luggage",
  },
];

const womenprods = [
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg",
    tittle: "Women's clothing",
    link: "/womencloth",
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg",
    tittle: "Footware+Handbags",
    link: "/womencloth",
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpg",
    tittle: "Watches",
    link: "/womencloth",
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg",
    tittle: "Fashion Jewellery",
    link: "/womencloth",
  },
];
const homeapp = [
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
    tittle: "Air cnditioners",
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
    tittle: "Refrigerarors",
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg",
    tittle: "Microwaves",
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg",
    tittle: "Washing machines",
  },
];
const Products = () => {
  return (
    <>
      <div className="products">
        <h2>Up to 60% off | Styles for women</h2>
        <div className="products__box">
          {womenprods.map((el, i) => {
            return (
              <div className="products__img" key={i}>
                
                  <img src={el.img} alt="img" />
                  <Link to={el.link}>
                  <span className="products__title">{el.tittle}</span>
                </Link>
              </div>
            );
          })}
        </div>
        <span className="seeall">See more</span>
      </div>
      <div className="products">
        <h2>Up to 60% off | Styles for men</h2>
        <div className="products__box">
          {menprods.map((el, i) => {
            return (
              <div className="products__img" key={i}>
                <img src={el.img} alt="img" />
                <span className="products__title">{el.tittle}</span>
              </div>
            );
          })}
        </div>
        <span className="seeall">See more</span>
      </div>
      <div className="products">
        <h2>Home appliances | Up to 55% off</h2>
        <div className="products__box">
          {homeapp.map((el, i) => {
            return (
              <div className="products__img" key={i}>
                <img src={el.img} alt="img" />
                <span className="products__title">{el.tittle}</span>
              </div>
            );
          })}
        </div>
        <span className="seeall">See more</span>
      </div>
      <div className="product">
        <h2>Up to 50% off | International brands</h2>
        <img
          className="singleprod"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/OOC/Gateway/feb10/XCM_Manual_1530580_2847589_5290763_379x304_en_IN._SY304_CB613701925_.jpg"
          alt="img"
        />
        <span className="seeall">See more</span>
      </div>
    </>
  );
};

export default Products;
