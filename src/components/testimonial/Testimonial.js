import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import images from "../../pages/images";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import data from "../../constants/data";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { useTranslation } from "react-i18next";

const Testimonial = () => {
  const { t } = useTranslation();

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="testi-main">
        <div className="testi-head-con">
          <p className="ourproduct-main-head">
            {t("Our")}
            <span style={{ color: "#75be42", fontWeight: 600 }}>
              {t("Testimonial")}
            </span>
          </p>
          <div className="heading-linebox">
            <div className="heading-line"></div>
            <img src={images.leaf_icon} alt="" className="leaf-icon" />
            <div className="heading-line"></div>
          </div>
          <p className="heading-txt-line">{t("testi_txt")}</p>
        </div>
        <div className="testi-mainn">
          <Slider {...settings}>
            {/* <div className="testi-slider-flex">
              <div className="testi-slider-imgbox">
                <img src={images.testimg1} alt="" className="personn-img" />
              </div>
              <div className="testi-slider-content">
                <p className="title">{title}</p>
                <p className="textt">
                  <span>
                    <FaQuoteLeft className="quote-icon" />
                  </span>
                  Thank you, Jalaram Group of Companies, on behalf of the
                  entire... team, for all you did for us in 2020. We are looking
                  forward to a good and prosperous 2021.
                  <span>
                    <FaQuoteRight className="quote-icon2" />
                  </span>
                </p>

                <h5>Tirth Agro (Shaktiman)</h5>
              </div>
            </div> */}

            <div className="testi-slider-flex">
              <div className="testi-slider-imgbox">
                <img src={images.testimg1} alt="" className="personn-img" />
              </div>
              <div className="testi-slider-content">
                {/* <p className="title">{title}</p> */}
                <p className="textt">
                  <span>
                    <FaQuoteLeft className="quote-icon" />
                  </span>
                  {t(
                    "Thank you, Jalaram Group of Companies, on behalf of the entire team, for all you did for us in 2020 We are looking forward to a good and prosperous 2021"
                  )}
                  <span>
                    <FaQuoteRight className="quote-icon2" />
                  </span>
                </p>

                <h5>{t("Tirth Agro (Shaktiman)")}</h5>
              </div>
            </div>

            <div className="testi-slider-flex">
              <div className="testi-slider-imgbox">
                <img src={images.testimg2} alt="" className="personn-img" />
              </div>
              <div className="testi-slider-content">
                {/* <p className="title">{title}</p> */}
                <p className="textt">
                  <span>
                    <FaQuoteLeft className="quote-icon" />
                  </span>
                  {t(
                    "They have consistently delivered a high-quality product on time They treat current and future business with professionalism"
                  )}
                  <span>
                    <FaQuoteRight className="quote-icon2" />
                  </span>
                </p>

                <h5>{t("Mac Power")}</h5>
              </div>
            </div>

            <div className="testi-slider-flex">
              <div className="testi-slider-imgbox">
                <img src={images.testimg3} alt="" className="personn-img" />
              </div>
              <div className="testi-slider-content">
                {/* <p className="title">{title}</p> */}
                <p className="textt">
                  <span>
                    <FaQuoteLeft className="quote-icon" />
                  </span>
                  {t(
                    "Jalaram Group of companies is a fantastic organization that works hard to uphold high quality, consistency, product awareness, and communication standards"
                  )}
                  <span>
                    <FaQuoteRight className="quote-icon2" />
                  </span>
                </p>

                <h5>{t("Adani Spices")}</h5>
              </div>
            </div>

            <div className="testi-slider-flex">
              <div className="testi-slider-imgbox">
                <img src={images.testimg5} alt="" className="personn-img" />
              </div>
              <div className="testi-slider-content">
                {/* <p className="title">{title}</p> */}
                <p className="textt">
                  <span>
                    <FaQuoteLeft className="quote-icon" />
                  </span>
                  {t(
                    "Jalaram has been a fantastic supplier to work with, and we value the high quality of their goods We will work to further improve our relationship in the future"
                  )}
                  <span>
                    <FaQuoteRight className="quote-icon2" />
                  </span>
                </p>

                <h5>{t("Essar Oil")}</h5>
              </div>
            </div>

            <div className="testi-slider-flex">
              <div className="testi-slider-imgbox">
                <img src={images.testimg6} alt="" className="personn-img" />
              </div>
              <div className="testi-slider-content">
                {/* <p className="title">{title}</p> */}
                <p className="textt">
                  <span>
                    <FaQuoteLeft className="quote-icon" />
                  </span>
                  {t(
                    "Jalaram Marketing is a business that prioritizes efficiency We are lucky to have them as a supplier Everyone on the team is dedicated to excellence"
                  )}
                  <span>
                    <FaQuoteRight className="quote-icon2" />
                  </span>
                </p>

                <h5>{t("Hi-Bond Cement")}</h5>
              </div>
            </div>

            <div className="testi-slider-flex">
              <div className="testi-slider-imgbox">
                <img src={images.testimg7} alt="" className="personn-img" />
              </div>
              <div className="testi-slider-content">
                {/* <p className="title">{title}</p> */}
                <p className="textt">
                  <span>
                    <FaQuoteLeft className="quote-icon" />
                  </span>
                  {t(
                    "Jalaram Group of Companies has a really inspiring culture Everyone is putting in a lot of effort to help the business prosper and is still thinking about the next step I didn't expect to feel so respected and supported, but the team was always willing to answer my questions and eager to see how my work progressed"
                  )}
                  <span>
                    <FaQuoteRight className="quote-icon2" />
                  </span>
                </p>

                <h5>{t("Maahi")}</h5>
              </div>
            </div>

            <div className="testi-slider-flex">
              <div className="testi-slider-imgbox">
                <img src={images.testimg8} alt="" className="personn-img" />
              </div>
              <div className="testi-slider-content">
                {/* <p className="title">{title}</p> */}
                <p className="textt">
                  <span>
                    <FaQuoteLeft className="quote-icon" />
                  </span>
                  {t(
                    "Jalaram Group of companies is a fantastic provider for us Their turnaround time is excellent, and they rush our work when we request it Their production is outstanding"
                  )}
                  <span>
                    <FaQuoteRight className="quote-icon2" />
                  </span>
                </p>

                <h5>{t("Varmora")}</h5>
              </div>
            </div>

            <div className="testi-slider-flex">
              <div className="testi-slider-imgbox">
                <img src={images.testimg6} alt="" className="personn-img" />
              </div>
              <div className="testi-slider-content">
                {/* <p className="title">{title}</p> */}
                <p className="textt">
                  <span>
                    <FaQuoteLeft className="quote-icon" />
                  </span>
                  {t(
                    "They have consistently produced high-quality results We'd like to express our gratitude for assisting other small businesses in realising their full potential by ensuring that there is no distinction between small and large businesses Job and service are always of equal quality, and you always come through in a pinch"
                  )}
                  <span>
                    <FaQuoteRight className="quote-icon2" />
                  </span>
                </p>

                <h5>{t("Ultratech Cement")}</h5>
              </div>
            </div>

            <div className="testi-slider-flex">
              <div className="testi-slider-imgbox">
                <img src={images.testimg9} alt="" className="personn-img" />
              </div>
              <div className="testi-slider-content">
                {/* <p className="title">{title}</p> */}
                <p className="textt">
                  <span>
                    <FaQuoteLeft className="quote-icon" />
                  </span>
                  {t(
                    "So far, I've been really pleased with you people, and I'd like to start sending you more work I'm certain that as we become more used to working together, it will become much easier"
                  )}
                  <span>
                    <FaQuoteRight className="quote-icon2" />
                  </span>
                </p>

                <h5>{t("TATA Chemicals Limited")}</h5>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
