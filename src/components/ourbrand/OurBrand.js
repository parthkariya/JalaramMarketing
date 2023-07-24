import React, { useState } from "react";
import "./OurBrand.css";
import images from "../../pages/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data from "../../constants/data";
import { useTranslation } from "react-i18next";

const OurBrand = () => {
  const [brandimage, setBrandImage] = useState(data.imageBrandLogo);
  const { t } = useTranslation();

  var settings = {
    //    dots: true,
    infinite: true,
    speed: 3500,
    autoplay: true,
    arrows: false,

    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      //  {
      //    breakpoint: 420,
      //    settings: {
      //      slidesToShow: 2,
      //      slidesToScroll: 1,
      //    },
      //  },
    ],
  };
  return (
    <div className="ourbrand-main">
      <img src={images.ourbrandbg} alt="" className="ourbrandbg" />
      <div className="ourbrand-main-inner">
        <div className="ourbrand-con">
          <div className="heading-sec-flex">
            <p className="ourbrand-main-head">
              {t("Our")}
              <span style={{ color: "#75be42", fontWeight: 600 }}>
                {t("Brands")}
              </span>
            </p>
            <div className="heading-linebox">
              <div className="heading-line"></div>
              <img src={images.leaf_icon} alt="" className="leaf-icon" />
              <div className="heading-line"></div>
            </div>
            <p className="ourbrand-txt">{t("ourbrand_txt")}</p>
          </div>
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
            <div className="brandimgbox">
              <img src={images.brandlogo1} className="brandimg" />
            </div>

            <div className="brandimgbox">
              <img src={images.brandlogo2} className="brandimg" />
            </div>

            <div className="brandimgbox">
              <img src={images.brandlogo3} className="brandimg" />
            </div>

            <div className="brandimgbox">
              <img src={images.brandlogo4} className="brandimg" />
            </div>
            <div className="brandimgbox">
              <img src={images.brandlogo5} className="brandimg" />
            </div>
            <div className="brandimgbox">
              <img src={images.brandlogo6} className="brandimg" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurBrand;
