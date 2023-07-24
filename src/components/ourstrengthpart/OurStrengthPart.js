import React from "react";
import "./OurStrengthPart.css";
import images from "../../pages/images";
import Slider from "react-slick";
import { BsTruck, BsFuelPump, BsBuildings } from "react-icons/bs";
import { GiCargoCrane } from "react-icons/gi";
import { useTranslation } from "react-i18next";

const OurStrengthPart = () => {
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
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="ourstrength-main">
      <div className="ourstrength-con">
        <h3 className="ourstrength-head">
          <span className="ourstrength-clr-chng">{t("ourstrength-Our")} </span>
          {t("ourstrength-Strength")}
        </h3>

        <div className="heading-linebox jus-start">
          <div className="heading-line"></div>
          <img src={images.leaf_icon} alt="" className="leaf-icon" />
          <div className="heading-line"></div>
        </div>
        <p className="ourstrength-txt">{t("ourstrengthpage-txt")}</p>
        <div>
          <Slider {...settings}>
            {/* {brandimage.map((item) => {
              return (
                <div className="brandimg-main">
                  <div className="brandimgbox">
                    <img src={item.imageUrl} className="brandimg" />
                  </div>
                </div>
              );
            })} */}
            <div className="ourstrength-imgbox-main">
              <div className="ourstrength-imgbox">
                <img
                  src={images.ourstrengthsliderimg1}
                  className="ourstrength-img"
                />
                <div className="ourstrength-img-iconbox">
                  <BsBuildings className="ourstrength-img-icon" />
                </div>
              </div>
              <p className="ourstrength-slider-head">{t("Tarpaulins")}</p>
              <p className="ourstrength-slider-txt">
                {t(
                  "Wide range of heavy-duty Tarpaulins for Various Applications"
                )}
              </p>
            </div>

            <div className="ourstrength-imgbox-main">
              <div className="ourstrength-imgbox">
                <img
                  src={images.ourstrengthsliderimg2}
                  className="ourstrength-img"
                />
                <div className="ourstrength-img-iconbox">
                  <BsFuelPump className="ourstrength-img-icon" />
                </div>
              </div>
              <p className="ourstrength-slider-head">{t("1000")}</p>
              <p className="ourstrength-slider-txt">
                {" "}
                {t("Thousand pieces of V-belt in varied section & sizes")}
              </p>
            </div>

            <div className="ourstrength-imgbox-main">
              <div className="ourstrength-imgbox">
                <img
                  src={images.ourstrengthsliderimg3}
                  className="ourstrength-img"
                />
                <div className="ourstrength-img-iconbox">
                  <BsTruck className="ourstrength-img-icon" />
                </div>
              </div>
              <p className="ourstrength-slider-head">{t("Clients")}</p>
              <p className="ourstrength-slider-txt">
                {t("Serving 1500+ clients across the Globe")}
              </p>
            </div>

            <div className="ourstrength-imgbox-main">
              <div className="ourstrength-imgbox">
                <img
                  src={images.ourstrengthsliderimg4}
                  className="ourstrength-img"
                />
                <div className="ourstrength-img-iconbox">
                  <GiCargoCrane className="ourstrength-img-icon" />
                </div>
              </div>
              <p className="ourstrength-slider-head">{t("Authorised")}</p>
              <p className="ourstrength-slider-txt">
                {t("Distributor of World Renowned Brands")}
              </p>
            </div>

            <div className="ourstrength-imgbox-main">
              <div className="ourstrength-imgbox">
                <img
                  src={images.ourstrengthsliderimg1}
                  className="ourstrength-img"
                />
                <div className="ourstrength-img-iconbox">
                  <BsBuildings className="ourstrength-img-icon" />
                </div>
              </div>
              <p className="ourstrength-slider-head">{t("Network")}</p>
              <p className="ourstrength-slider-txt">
                {t(
                  "of 4500 dealers accross Gujarat and 250 dealers outsode Gujarat"
                )}
              </p>
            </div>

            <div className="ourstrength-imgbox-main">
              <div className="ourstrength-imgbox">
                <img
                  src={images.ourstrengthsliderimg2}
                  className="ourstrength-img"
                />
                <div className="ourstrength-img-iconbox">
                  <BsFuelPump className="ourstrength-img-icon" />
                </div>
              </div>
              <p className="ourstrength-slider-head">{t("Leader")}</p>
              <p className="ourstrength-slider-txt">
                {t("in selling Lay Flat Hose Pipe PVC Kishan Pipe")}
              </p>
            </div>

            <div className="ourstrength-imgbox-main">
              <div className="ourstrength-imgbox">
                <img
                  src={images.ourstrengthsliderimg3}
                  className="ourstrength-img"
                />
                <div className="ourstrength-img-iconbox">
                  <BsTruck className="ourstrength-img-icon" />
                </div>
              </div>
              <p className="ourstrength-slider-head">{t("1000")}</p>
              <p className="ourstrength-slider-txt">
                {t("meters of conveyor belt in our warehouse as stock")}
              </p>
            </div>

            <div className="ourstrength-imgbox-main">
              <div className="ourstrength-imgbox">
                <img
                  src={images.ourstrengthsliderimg4}
                  className="ourstrength-img"
                />
                <div className="ourstrength-img-iconbox">
                  <GiCargoCrane className="ourstrength-img-icon" />
                </div>
              </div>
              <p className="ourstrength-slider-head">{t("20")}</p>
              <p className="ourstrength-slider-txt">
                {t("different types of canvas & nylon flat conveyor belts")}
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurStrengthPart;
