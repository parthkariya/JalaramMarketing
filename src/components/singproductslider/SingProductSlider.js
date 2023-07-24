import React from "react";
import "./SingProductSlider.css";
import images from "../../pages/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SingProductSlider = () => {
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
              <img src={images.conveprod2} alt="" className="induapp-img" />
              <div className="sing-prod-slider-bgclr">
                <div className="sing-prod-slider-txtbox ">
                  <Link to="/plasticmodule" className="induapp-txt">
                    {t("Plastic Modular")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="induapp-card-main sing-prod-slider-card">
              <img src={images.conveprod3} alt="" className="induapp-img" />
              <div className="sing-prod-slider-bgclr">
                <div className="sing-prod-slider-txtbox ">
                  <Link to="/cottonbelt" className="induapp-txt">
                    {t("Cotton Belt / Canvas Belt")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="induapp-card-main sing-prod-slider-card">
              <img src={images.conveprod4} alt="" className="induapp-img" />
              <div className="sing-prod-slider-bgclr">
                <div className="sing-prod-slider-txtbox ">
                  <Link to="/puconveyorbelt" className="induapp-txt">
                    {t("Pvc / PU Conveyor Belt")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="induapp-card-main sing-prod-slider-card">
              <img src={images.conveprod5} alt="" className="induapp-img" />
              <div className="sing-prod-slider-bgclr">
                <div className="sing-prod-slider-txtbox ">
                  <Link to="/printingblanket" className="induapp-txt">
                    {t("Printing Blanket")}
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

export default SingProductSlider;
