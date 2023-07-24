import React, { useState } from "react";
import "./OurProduct.css";
import images from "../../pages/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data from "../../constants/data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const OurProducts = () => {
  const [prodImage, setProdImage] = useState(data.HomeImageProduct);
  const { t } = useTranslation();

  var settings = {
    //    dots: true,
    infinite: true,
    speed: 3500,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 1512,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },

      {
        breakpoint: 1075,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="ourproduct-main">
        <div className="ourproduct-con">
          <p className="ourproduct-main-head">
            {t("Our")}{" "}
            <span style={{ color: "#75be42", fontWeight: 600 }}>
              {t("Products")}
            </span>
          </p>
          <div className="heading-linebox">
            <div className="heading-line"></div>
            <img src={images.leaf_icon} alt="" className="leaf-icon" />
            <div className="heading-line"></div>
          </div>
          <p className="heading-txt-line">{t("ourproduct_txt")}</p>
        </div>

        <Slider {...settings}>
          {/* <div className="home-prod-card-main">
                  <div className="home-prod-imgbox">
                    <img src={item.imageUrl} alt="" className="home-prod-img" />
                    <div class="product1-img-hover"></div>
                  </div>
                  <Link
                    to={
                      item.id == 1
                        ? "/ruberconveyor"
                        : item.id == 2
                        ? "/steamhose"
                        : item.id == 3
                        ? "/taperbushvbelt"
                        : item.id == 4
                        ? "/handtool"
                        : item.id == 5
                        ? "/cuttingoil"
                        : item.id == 6
                        ? "/vbelt"
                        : item.id == 7
                        ? "/hdpetarpaulin"
                        : item.id == 8
                        ? "/pvcleftflathose"
                        : item.id == 9
                        ? "/elevatorbelt"
                        : "/"
                    }
                    className="home-prod-btn"
                  >
                    {item.name}
                  </Link>
                  <p className="prod-desc">{item.desc}</p>
                </div> */}
          <div className="home-prod-card-main">
            <div className="home-prod-imgbox">
              <img src={images.homeprod1} alt="" className="home-prod-img" />
              <div class="product1-img-hover"></div>
            </div>
            <Link to="/ruberconveyorbelt">
              <button className="home-prod-btn">
                {t("Rubber Conveyer Belt")}
              </button>
            </Link>
            <p className="prod-desc">
              {t(
                "he range of conveyor belts is generally installed in the conveyor system to transport differen"
              )}
            </p>
          </div>

          {/* <div className="home-prod-card-main">
            <div className="home-prod-imgbox">
              <img src={images.homeprod1} alt="" className="home-prod-img" />
              <div class="product1-img-hover"></div>
            </div>
            <button className="home-prod-btn">Rubber Conveyer Belt</button>
            <p className="prod-desc">
              he range of conveyor belts is generally installed in the conveyor
              system to transport differen...
            </p>
          </div> */}

          <div className="home-prod-card-main">
            <div className="home-prod-imgbox">
              <img src={images.homeprod2} alt="" className="home-prod-img" />
              <div class="product1-img-hover"></div>
            </div>
            <Link to="/steamhose">
              <button className="home-prod-btn">{t("Steam Hose")}</button>
            </Link>
            <p className="prod-desc">
              {t(
                "hoses made from the highest quality materials can stand up to the high temperatures and hig"
              )}
            </p>
          </div>

          <div className="home-prod-card-main">
            <div className="home-prod-imgbox">
              <img src={images.homeprod3} alt="" className="home-prod-img" />
              <div class="product1-img-hover"></div>
            </div>
            <Link to="/taperbushvbelt">
              <button className="home-prod-btn">
                {t("Taper bush v Belt Pulley")}
              </button>
            </Link>
            <p className="prod-desc">
              {t(
                "Poly-V is a multi rib belt drive whose special construction allows it to be used with very"
              )}
            </p>
          </div>

          <div className="home-prod-card-main">
            <div className="home-prod-imgbox">
              <img src={images.homeprod4} alt="" className="home-prod-img" />
              <div class="product1-img-hover"></div>
            </div>
            <Link to="/handtool">
              <button className="home-prod-btn">{t("Hand Tool")}</button>
            </Link>
            <p className="prod-desc">
              {t(
                "Hand tools have been used by humans since the Stone Age when stones were used for hammering an"
              )}
            </p>
          </div>

          <div className="home-prod-card-main">
            <div className="home-prod-imgbox">
              <img src={images.homeprod5} alt="" className="home-prod-img" />
              <div class="product1-img-hover"></div>
            </div>
            <Link to="/cuttingoil">
              <button className="home-prod-btn">{t("Cutting Oil")}</button>
            </Link>
            <p className="prod-desc">
              {t(
                "Cutting fluid is a type of coolant and lubricant designed specifically for metalworking"
              )}
            </p>
          </div>

          <div className="home-prod-card-main">
            <div className="home-prod-imgbox">
              <img src={images.homeprod6} alt="" className="home-prod-img" />
              <div class="product1-img-hover"></div>
            </div>
            <Link to="/vbelt">
              <button className="home-prod-btn">{t("VBelt")}</button>
            </Link>
            <p className="prod-desc">
              {t(
                "The v-belts are made of rubber with fabric cords to transmit power and its covered with a prot"
              )}
            </p>
          </div>

          <div className="home-prod-card-main">
            <div className="home-prod-imgbox">
              <img src={images.homeprod7} alt="" className="home-prod-img" />
              <div class="product1-img-hover"></div>
            </div>
            <Link to="/hdpetarpaulin">
              <button className="home-prod-btn">{t("HDPE Tarpaulin")}</button>
            </Link>
            <p className="prod-desc">
              {t(
                "Tarpaulins are made from HDPE woven fabrics laminated on both sides with LLDPE an"
              )}
            </p>
          </div>

          <div className="home-prod-card-main">
            <div className="home-prod-imgbox">
              <img src={images.homeprod8} alt="" className="home-prod-img" />
              <div class="product1-img-hover"></div>
            </div>
            <Link to="/pvcleftflathose">
              <button className="home-prod-btn">
                {t("PVC Left Flat Hose / Kisan Pipe")}
              </button>
            </Link>
            <p className="prod-desc">
              {t(
                "hPVC Layflat hose is a tough water discharge hoses made with a PVC cover and/or reinforced poly"
              )}
            </p>
          </div>
          <div className="home-prod-card-main">
            <div className="home-prod-imgbox">
              <img src={images.homeprod9} alt="" className="home-prod-img" />
              <div class="product1-img-hover"></div>
            </div>
            <Link to="/elevatorbelt">
              <button className="home-prod-btn">{t("Elevator belt")}</button>
            </Link>
            <p className="prod-desc">
              {t(
                "Flat belts are used in line shafting to transmit power in factories The flat belt is a simple"
              )}
            </p>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default OurProducts;
