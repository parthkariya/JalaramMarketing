import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";

const ShadeNetBrandSing = () => {
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
    <div className="ruber-conv-brands-main">
      <div className="ruber-conv-brands-con">
        <div className="ruberconv-max-w-head-part">
          <p className="ruberconv-head">{t("Shade Net Brand")}</p>
          <div className="heading-linebox">
            <div className="heading-line"></div>
            <img src={images.leaf_icon} alt="" className="leaf-icon" />
            <div className="heading-line"></div>
          </div>
        </div>
        {/* <div className="ruber-conv-brands-flex"> */}
        <Slider {...settings}>
          <div
            className="tarpaulin-conv-brand-card "
            style={{ width: "92% !important" }}
          >
            <img
              style={{ padding: "25px" }}
              src={images.brandlogo12}
              alt=""
              className="ruber-conv-brand-img"
            />
          </div>

          <div
            className="tarpaulin-conv-brand-card"
            style={{ width: "92% !important" }}
          >
            <img
              style={{ padding: "25px" }}
              src={images.brandlogo9}
              alt=""
              className="ruber-conv-brand-img"
            />
          </div>
          <div
            className="tarpaulin-conv-brand-card"
            style={{ width: "92% !important" }}
          >
            <img
              style={{ padding: "25px" }}
              src={images.brandlogo8}
              alt=""
              className="ruber-conv-brand-img"
            />
          </div>
          <div
            className="ruber-conv-brand-card tarpaulin-conv-brand-card"
            style={{ width: "92% !important" }}
          >
            <img
              style={{ padding: "25px" }}
              src={images.brandlogo10}
              alt=""
              className="ruber-conv-brand-img"
            />
          </div>
          <div
            className="tarpaulin-conv-brand-card"
            s
            style={{ width: "92% !important" }}
          >
            <img
              style={{ padding: "25px" }}
              src={images.brandlogo11}
              alt=""
              className="ruber-conv-brand-img"
            />
          </div>
          <div
            className="tarpaulin-conv-brand-card"
            style={{ width: "92% !important" }}
          >
            <img
              style={{ padding: "25px" }}
              src={images.brandlogo9}
              alt=""
              className="ruber-conv-brand-img"
            />
          </div>
          <div
            className="tarpaulin-conv-brand-card"
            style={{ width: "92% !important" }}
          >
            <img
              style={{ padding: "25px" }}
              src={images.brandlogo8}
              alt=""
              className="ruber-conv-brand-img"
            />
          </div>
        </Slider>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ShadeNetBrandSing;
