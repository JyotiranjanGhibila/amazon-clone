import React ,{memo}from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const assential = [
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/QC1_PC_Tile_04_1x._SY116_CB616377481_.jpg",
    tittle: "Helth & household",
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/QC1_PC_Tile_01_1x._SY116_CB616377481_.jpg",
    tittle: "Grocery essential",
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/QC1_PC_Tile_03_1x._SY116_CB616377481_.jpg",
    tittle: "Baby products",
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/QC1_PC_Tile_02_1x._SY116_CB616377481_.jpg",
    tittle: "Pets supplies",
  },
];

const reward = [
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg",
    tittle: "Claim your scratch card",
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_CollectedOffers._SY116_CB627364845_.jpg",
    tittle: "Redeem reward",
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/APay/GWQC/PC_Pay__Win0.5x._SY116_CB616103432_.jpg",
    tittle: "Play & win",
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/APay/GWQC/PC_Shop__collect0.5x._SY116_CB616103432_.jpg",
    tittle: "Shop & collect reward",
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
const Product = () => {
  return (
    <div className="prod__container">
      <div className="product">
        <h2>Up to 70% off | Clearance store</h2>
        <LazyLoadImage 
        effect="blur"
          className="singleprod"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
          alt="img"
        />
        <span className="seeall">See more</span>
      </div>
      <div className="products">
        <h2>Shop & Pay | Earn rewards daily</h2>
        <div className="products__box">
          {reward.map((el, i) => {
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
        <h2>Up to 50% off | Monitor blood sugar at home</h2>
        <img
          className="singleprod"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Pharmacy/CC_low_3._SY304_CB592656736_.jpg"
          alt="img"
        />
        <span className="seeall">Visit the store</span>
      </div>
      <div className="products">
        <h2>Up to 40% off | Daily essentials</h2>
        <div className="products__box">
          {assential.map((el, i) => {
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
    </div>
  );
};

export default memo(Product);
