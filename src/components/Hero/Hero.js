import React, { useState, useEffect } from "react";
import "./Hero.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "../../constants/data";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// import { Hero } from "..";
function Hero() {
  // const { places_list, is_place_home, getPlace } = useLocationContext();
  const { t } = useTranslation();

  useEffect(() => {
    // getPlace();
    // console.log("places_list -->", places_list);
  }, []);

  const [images, setImages] = useState(data.imageHero);
  // const [value, onChange] = useState(new Date());
  // const [value2, onChange2] = useState(new Date());
  // const [get_place, setPlace] = useState(1);

  // console.log("data is", data.imageHero);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, images]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div>
      {/* <div className="title">
        <h2>
          <span>/</span>review
        </h2>
      </div> */}
      <div className="section-center">
        {images.map((image, personIndex) => {
          const { id, imageUrl } = image;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === images.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={imageUrl} alt="hotel images" className="person-img" />
            </article>
          );
        })}

        {/* Availability */}
        <div className="gift-main-container">
          <div className="gift-container">
            <div className="hero-slider-con-flex">
              <h1 className="hero-slider-big-txt">
                {t("A_Symbol_of_Quality_Oriented_People")}
              </h1>
              <p className="hero-slider-small-txt">
                {t(
                  "Quality for us is a habbit, which meets your expectations everytime"
                )}
              </p>
              <button className="primary-btn mt">{t("know more")}</button>
            </div>
          </div>
          <button
            className="prev"
            onClick={() => {
              setIndex(index - 1);
            }}
          >
            <FiChevronLeft className="hero-slider-icon"></FiChevronLeft>
          </button>
          <button
            className="next"
            onClick={() => {
              setIndex(index + 1);
              console.log("next", index);
            }}
          >
            <FiChevronRight className="hero-slider-icon"></FiChevronRight>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
