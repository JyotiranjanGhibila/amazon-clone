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

const mother = [
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Pregnancy_Supplements._SY116_CB667651395_.jpg",
    tittle: "Pregnancy supplements",
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Maternity_Sleep__Loungewear._SY116_CB667651395_.jpg",
    tittle: "Matenity sleep",
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Maternity_pillows._SY116_CB667651395_.jpg",
    tittle: "Maternity pillows",
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Maternity_Skin_care._SY116_CB667651395_.jpg",
    tittle: "Maternity Skin care",
  },
];
const homeapp = [
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/gateway/books1-1x_1s._SY116_CB593287520_.jpg",
    tittle: "School textbooks & guides",
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/BB2023/books2-1xs._SY116_CB593287363_.jpg",
    tittle: "School book combo sets",
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/BB2023/books3-1x._SY116_CB593287363_.jpg",
    tittle: "Pens, pencils",
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/BB2023/Bag._SY116_CB591868349_.jpg",
    tittle: "Bag packs",
  },
];
const Product = () => {
  return (
    <div className="prod__container">
      <div className="product">
        <h2>Roomies Season 4 out now on miniTV</h2>
        <LazyLoadImage 
        effect="blur"
          className="singleprod"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Tanisha/DeskCC_379x304_Roomies._SY304_CB616069683_.jpg"
          alt="img"
        />
        <span className="seeall">Watch for free | mini TV</span>
      </div>
      <div className="products">
        <h2>Essentials for Expecting Mothers</h2>
        <div className="products__box">
          {mother.map((el, i) => {
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
        <h2>Sell on Amazon with 1-Click Launch Support</h2>
        <img
          className="singleprod"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/amazonservices/retail/BTF_Mar23_0.5x._SY304_CB594887554_.jpg"
          alt="img"
        />
        <span className="seeall">Register now</span>
      </div>
      <div className="products">
        <h2>Up to 40% off | School essentials at great prices</h2>
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
    </div>
  );
};

export default memo(Product);
