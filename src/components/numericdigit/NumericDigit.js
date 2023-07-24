import React from "react";
import "./NumericDigit.css";
import images from "../../pages/images";
import CountUp from "react-countup";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "react-i18next";

const NumericDigit = () => {
  const { t } = useTranslation();

  return (
    <div className="numeric-main">
      {/* <img src={images.hero_slider3} alt="" className="numeric-bgimg" /> */}
      <div className="numeric-inner">
        <div className="numeric-inner-flex">
          <AnimationOnScroll
            animateIn="fadeInRight"
            animateOut="animate__bounceOutRight"
          >
            <div className="numeric-card">
              <img
                src={images.numericcardicon1}
                alt=""
                className="numeric-card-icon"
              />
              <div className="numeric-card-line"></div>
              {/* <p className="numeric-card-count">1226</p> */}
              <CountUp
                className="numeric-card-count"
                start={0}
                end={1226}
                duration={2.75}
              />
              <p className="numeric-card-txt">{t("Happy Client")}</p>
            </div>
          </AnimationOnScroll>

          <AnimationOnScroll
            animateIn="fadeInRight"
            animateOut="animate__bounceOutRight"
          >
            <div className="numeric-card">
              <img
                src={images.numericcardicon2}
                alt=""
                className="numeric-card-icon"
              />
              <div className="numeric-card-line"></div>
              {/* <p className="numeric-card-count">1552</p> */}
              <CountUp
                className="numeric-card-count"
                start={0}
                end={1552}
                duration={2.75}
              />
              <p className="numeric-card-txt"> {t("WORKERS HAND")}</p>
            </div>
          </AnimationOnScroll>

          <AnimationOnScroll
            animateIn="fadeInLeft"
            animateOut="animate__bounceOutRight"
          >
            <div className="numeric-card">
              <img
                src={images.numericcardicon3}
                alt=""
                className="numeric-card-icon"
              />
              <div className="numeric-card-line"></div>
              {/* <p className="numeric-card-count">1156</p> */}
              <CountUp
                className="numeric-card-count"
                start={0}
                end={1156}
                duration={2.75}
              />
              <p className="numeric-card-txt"> {t("ACTIVE EXPERT")}</p>
            </div>
          </AnimationOnScroll>

          <AnimationOnScroll
            animateIn="fadeInLeft"
            animateOut="animate__bounceOutRight"
          >
            <div className="numeric-card">
              <img
                src={images.numericcardicon4}
                alt=""
                className="numeric-card-icon"
              />
              <div className="numeric-card-line"></div>
              {/* <p className="numeric-card-count">60</p> */}
              <CountUp
                className="numeric-card-count"
                start={0}
                end={60}
                duration={2.75}
              />
              <p className="numeric-card-txt"> {t("TOTAL AWARDS")}</p>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default NumericDigit;
