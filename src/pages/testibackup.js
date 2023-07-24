import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import images from "../../pages/images";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import data from "../../constants/data";
import { useTranslation } from "react-i18next";

const Testimonial = () => {
  const [people, setPeople] = useState(data.TestimonialData);
  const [index, setIndex] = React.useState(0);
  const { t } = useTranslation();

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > people.length - 1) {
        index = 0;
      }
      return index;
    });
  };
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = people.length - 1;
      }
      return index;
    });
  };

  // useEffect(() => {
  //   const lastIndex = people.length - 1
  //   if (index < 0) {
  //     setIndex(lastIndex)
  //   }
  //   if (index > lastIndex) {
  //     setIndex(0)
  //   }
  // }, [index, people])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > people.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
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
        <section className="section">
          <div className="section-center1">
            {people.map((person, personIndex) => {
              const { id, imageUrl, name, title, desc } = person;

              let position = "nextSlide";
              if (personIndex === index) {
                position = "activeSlide";
              }
              if (
                personIndex === index - 1 ||
                (index === 0 && personIndex === people.length - 1)
              ) {
                position = "lastSlide";
              }

              return (
                <aside className={position} key={id}>
                  <div className="testi-slider-flex">
                    <div className="testi-slider-imgbox">
                      <img src={imageUrl} alt={name} className="personn-img" />
                    </div>
                    <div className="testi-slider-content">
                      {/* <p className="title">{title}</p> */}
                      <p className="textt">
                        <span>
                          <FaQuoteLeft className="quote-icon" />
                        </span>
                        {desc}
                        <span>
                          <FaQuoteRight className="quote-icon2" />
                        </span>
                      </p>

                      <h5>{name}</h5>
                    </div>
                  </div>
                  {/* <FaQuoteRight className="icon" /> */}
                </aside>
              );
            })}
            <button className="prevv" onClick={prevSlide}>
              <FiChevronLeft />
            </button>
            <button className="nextt" onClick={nextSlide}>
              <FiChevronRight />
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonial;
