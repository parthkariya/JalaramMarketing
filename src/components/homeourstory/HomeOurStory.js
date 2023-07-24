import React from "react";
import "./HomeOurStory.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";

const HomeOurStory = () => {
  const { t } = useTranslation();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="ourstory-main">
        <div className="ourstory-flex">
          <AnimationOnScroll
            animateIn="fadeInLeft"
            animateOut="animate__bounceOutRight"
          >
            <div className="ourstory-flex-part1">
              <div className="ourstory-slider-main">
                <Slider {...settings}>
                  <div className="ourstory-imgbox">
                    <img
                      src={images.ourstorysliderimg1}
                      alt=""
                      className="ourstory-img"
                    />
                  </div>
                  <div className="ourstory-imgbox">
                    <img
                      src={images.ourstorysliderimg2}
                      alt=""
                      className="ourstory-img"
                    />
                  </div>
                  <div className="ourstory-imgbox">
                    <img
                      src={images.ourstorysliderimg3}
                      alt=""
                      className="ourstory-img"
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </AnimationOnScroll>

          <AnimationOnScroll
            animateIn="fadeInRight"
            animateOut="animate__bounceOutRight"
          >
            <div className="ourstory-flex-part">
              <p className="ourstory-head">{t("Our Story")}</p>
              <h2 className="ourstory-sub-head">
                {t("Commited to High")} <br /> {t("Quality")}{" "}
                <span style={{ color: "#75be42" }}>{t("Service")}</span>
              </h2>
              <p className="ourstory-sub-txt">
                {t(
                  "Amazing things happen to your business when we connect those dots of utility and value"
                )}
              </p>
              <p className="ourstory-txt">{t("our_story_home_txt")}</p>
              <Link to="/aboutus" className="primary-btn">
                {t("About Us")}
              </Link>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </>
  );
};

export default HomeOurStory;
