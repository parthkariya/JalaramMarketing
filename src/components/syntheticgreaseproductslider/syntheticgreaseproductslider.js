import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SyntheticGreaseProductSlider = () => {
  const { t } = useTranslation();

  var settings = {
    infinite: true,
    speed: 3500,
    autoplay: true,
    arrows: false,

    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 778,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="sing-prod-slider-main">
      <img src={images.prodsingbrandbg} alt="" className="other-prod-bg" />
      <div className="sing-prod-slider-inner">
        <div className="sing-prod-slider-con">
          <div className="ruberconv-max-w-head-part">
            <p className="sing-prod-slider-head">{t("Other Products")}</p>
            <div className="heading-linebox">
              <div className="heading-line"></div>
              <img src={images.leaf_icon} alt="" className="leaf-icon" />
              <div className="heading-line"></div>
            </div>
          </div>

          <Slider {...settings}>
            <div className="induapp-card-main sing-prod-slider-card">
              <img src={images.induprod3} alt="" className="induapp-img" />
              <div className="sing-prod-slider-bgclr">
                <div className="sing-prod-slider-txtbox ">
                  <Link to="/hydraulicoil" className="induapp-txt">
                    {t("Hydraulic Oil")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="induapp-card-main sing-prod-slider-card">
              <img src={images.induprod4} alt="" className="induapp-img" />
              <div className="sing-prod-slider-bgclr">
                <div className="sing-prod-slider-txtbox ">
                  <Link to="/engineoil" className="induapp-txt">
                    {" "}
                    {t("Engine Oil")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="induapp-card-main sing-prod-slider-card">
              <img src={images.induprod5} alt="" className="induapp-img" />
              <div className="sing-prod-slider-bgclr">
                <div className="sing-prod-slider-txtbox ">
                  <Link to="/syntheticgrease" className="induapp-txt">
                    {t("Speciality Oil")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="induapp-card-main sing-prod-slider-card">
              <img src={images.induprod6} alt="" className="induapp-img" />
              <div className="sing-prod-slider-bgclr">
                <div className="sing-prod-slider-txtbox ">
                  <Link to="/foodgradeoil" className="induapp-txt">
                    {t("Food Grade Oil")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="induapp-card-main sing-prod-slider-card">
              <img
                src={images.indugreaseprod2}
                alt=""
                className="induapp-img"
              />
              <div className="sing-prod-slider-bgclr">
                <div className="sing-prod-slider-txtbox ">
                  <Link to="/genralpurposegrease" className="induapp-txt">
                    {t("Genral Purpose Grase")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="induapp-card-main sing-prod-slider-card">
              <img
                src={images.indugreaseprod3}
                alt=""
                className="induapp-img"
              />
              <div className="sing-prod-slider-bgclr">
                <div className="sing-prod-slider-txtbox ">
                  <Link to="/foodgradeoil" className="induapp-txt">
                    {t("Food Grade Oil")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="induapp-card-main sing-prod-slider-card">
              <img
                src={images.indugreaseprod4}
                alt=""
                className="induapp-img"
              />
              <div className="sing-prod-slider-bgclr">
                <div className="sing-prod-slider-txtbox ">
                  <Link to="/hightemperaturegreasesing" className="induapp-txt">
                    {t("High Temprature Grease")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="induapp-card-main sing-prod-slider-card">
              <img src={images.homeprod5} alt="" className="induapp-img" />
              <div className="sing-prod-slider-bgclr">
                <div className="sing-prod-slider-txtbox ">
                  <Link to="/cuttingoil" className="induapp-txt">
                    {t("Cutting Oil")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="induapp-card-main sing-prod-slider-card">
              <img src={images.induprod2} alt="" className="induapp-img" />
              <div className="sing-prod-slider-bgclr">
                <div className="sing-prod-slider-txtbox ">
                  <Link to="/gearoil" className="induapp-txt">
                    {t("Gear Oil")}
                  </Link>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SyntheticGreaseProductSlider;
