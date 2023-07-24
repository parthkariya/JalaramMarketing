import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SteamHoseProductSliderSing = () => {
  const { t } = useTranslation();

  var settings = {
    infinite: true,
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
              <img src={images.airprod2} alt="" className="induapp-img" />
              <div className="sing-prod-slider-bgclr">
                <div className="sing-prod-slider-txtbox ">
                  <Link to="/sandblast" className="induapp-txt">
                    {t("Sandblast Hose")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="induapp-card-main sing-prod-slider-card">
              <img src={images.airprod3} alt="" className="induapp-img" />
              <div className="sing-prod-slider-bgclr">
                <div className="sing-prod-slider-txtbox ">
                  <Link to="/rockdrillhose" className="induapp-txt">
                    {t("Rock Drill Hose")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="induapp-card-main sing-prod-slider-card">
              <img src={images.airprod4} alt="" className="induapp-img" />
              <div className="sing-prod-slider-bgclr">
                <div className="sing-prod-slider-txtbox ">
                  <Link to="/airwaterhose" className="induapp-txt">
                    {t("Air / Water hose")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="induapp-card-main sing-prod-slider-card">
              <img src={images.airprod5} alt="" className="induapp-img" />
              <div className="sing-prod-slider-bgclr">
                <div className="sing-prod-slider-txtbox ">
                  <Link to="/pneumatictoolhose" className="induapp-txt">
                    {t("Pneumatic Tool Hose")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="induapp-card-main sing-prod-slider-card">
              <img src={images.airprod6} alt="" className="induapp-img" />
              <div className="sing-prod-slider-bgclr">
                <div className="sing-prod-slider-txtbox ">
                  <Link to="/airwaterhosesec" className="induapp-txt">
                    {t("Air Water hose")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="induapp-card-main sing-prod-slider-card">
              <img src={images.airprod5} alt="" className="induapp-img" />
              <div className="sing-prod-slider-bgclr">
                <div className="sing-prod-slider-txtbox ">
                  <Link to="/carbonfreehose" className="induapp-txt">
                    {t("Carbon Free Hose")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="induapp-card-main sing-prod-slider-card">
              <img src={images.airprod9} alt="" className="induapp-img" />
              <div className="sing-prod-slider-bgclr">
                <div className="sing-prod-slider-txtbox ">
                  <p className="induapp-txt">{t("Industrial Hose")}</p>
                </div>
              </div>
            </div>
            <div className="induapp-card-main sing-prod-slider-card">
              <img src={images.airprod10} alt="" className="induapp-img" />
              <div className="sing-prod-slider-bgclr">
                <div className="sing-prod-slider-txtbox ">
                  <p className="induapp-txt">{t("Hydraulic Hose")}</p>
                </div>
              </div>
            </div>
            <div className="induapp-card-main sing-prod-slider-card">
              <img src={images.airprod8} alt="" className="induapp-img" />
              <div className="sing-prod-slider-bgclr">
                <div className="sing-prod-slider-txtbox ">
                  <p className="induapp-txt">{t("Welding Hose")}</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SteamHoseProductSliderSing;
