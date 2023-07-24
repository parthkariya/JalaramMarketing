import React, { useState } from "react";
import "./OurBusinessArena.css";
import images from "../../pages/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data from "../../constants/data";
import { TbBuildingFactory2 } from "react-icons/tb";
import { GrUserWorker, GrBarChart } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io";
import { FiBarChart2, FiSettings } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";
// import { GrBarChart } from "react-icons/";
import { useTranslation } from "react-i18next";

const OurBusinessArena = () => {
  const { t } = useTranslation();

  const [brandimage, setBrandImage] = useState(data.imageBrandLogo);

  var settings = {
    //    dots: true,
    infinite: true,
    speed: 3500,
    autoplay: true,
    arrows: false,

    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="ourbusiarena-main">
      <div className="ourbusiarena-con">
        <p className="ourproduct-main-head">
          {t("Our Business Arena")}
          {/* <span style={{ color: "#75be42", fontWeight: 600 }}></span> */}
        </p>
        <div className="heading-linebox">
          <div className="heading-line"></div>
          <img src={images.leaf_icon} alt="" className="leaf-icon" />
          <div className="heading-line"></div>
        </div>
        <p className="heading-txt-line">{t("our-business-arena-head-txt")}</p>

        <Slider {...settings}>
          <div className="ourbusarena-card">
            <div className="ourbusiarena-card-inner">
              <RxPerson className="ourbusiarena-card-icon" />
              {/* <img
                src={images.aboutuscardicon1}
                alt=""
                className="ourbusiarena-card-icon"
              /> */}
              <p className="ourbusiarena-card-txt">{t("Automobile")}</p>
              <div className="ourbusiarena-card-digitbox">
                <p className="ourbusiarena-card-digit">1</p>
              </div>
            </div>
          </div>

          <div className="ourbusarena-card">
            <div className="ourbusiarena-card-inner">
              <TbBuildingFactory2 className="ourbusiarena-card-icon" />
              <p className="ourbusiarena-card-txt">
                {t("Agriculture & Farming")}
              </p>
              <div className="ourbusiarena-card-digitbox">
                <p className="ourbusiarena-card-digit">2</p>
              </div>
            </div>
          </div>

          <div className="ourbusarena-card">
            <div className="ourbusiarena-card-inner">
              <FiSettings className="ourbusiarena-card-icon" />
              <p className="ourbusiarena-card-txt">
                {t("Industrial Production & Automation")}
              </p>
              <div className="ourbusiarena-card-digitbox">
                <p className="ourbusiarena-card-digit">3</p>
              </div>
            </div>
          </div>

          <div className="ourbusarena-card">
            <div className="ourbusiarena-card-inner">
              <FiBarChart2 className="ourbusiarena-card-icon" />
              <p className="ourbusiarena-card-txt">{t("Food & Processing")}</p>
              <div className="ourbusiarena-card-digitbox">
                <p className="ourbusiarena-card-digit">4</p>
              </div>
            </div>
          </div>

          <div className="ourbusarena-card">
            <div className="ourbusiarena-card-inner">
              <FiBarChart2 className="ourbusiarena-card-icon" />
              <p className="ourbusiarena-card-txt">
                {t("Chemical & Pharmaceuticals")}
              </p>
              <div className="ourbusiarena-card-digitbox">
                <p className="ourbusiarena-card-digit">5</p>
              </div>
            </div>
          </div>

          <div className="ourbusarena-card">
            <div className="ourbusiarena-card-inner">
              <FiBarChart2 className="ourbusiarena-card-icon" />
              <p className="ourbusiarena-card-txt">{t("Minning")}</p>
              <div className="ourbusiarena-card-digitbox">
                <p className="ourbusiarena-card-digit">6</p>
              </div>
            </div>
          </div>

          <div className="ourbusarena-card">
            <div className="ourbusiarena-card-inner">
              <FiBarChart2 className="ourbusiarena-card-icon" />
              <p className="ourbusiarena-card-txt">
                {t("Logistics & Packaging")}
              </p>
              <div className="ourbusiarena-card-digitbox">
                <p className="ourbusiarena-card-digit">7</p>
              </div>
            </div>
          </div>

          <div className="ourbusarena-card">
            <div className="ourbusiarena-card-inner">
              <FiBarChart2 className="ourbusiarena-card-icon" />
              <p className="ourbusiarena-card-txt">{t("Petroleum & Gas")}</p>
              <div className="ourbusiarena-card-digitbox">
                <p className="ourbusiarena-card-digit">8</p>
              </div>
            </div>
          </div>

          <div className="ourbusarena-card">
            <div className="ourbusiarena-card-inner">
              <FiBarChart2 className="ourbusiarena-card-icon" />
              <p className="ourbusiarena-card-txt">{t("Wind Energy")}</p>
              <div className="ourbusiarena-card-digitbox">
                <p className="ourbusiarena-card-digit">9</p>
              </div>
            </div>
          </div>

          <div className="ourbusarena-card">
            <div className="ourbusiarena-card-inner">
              <FiBarChart2 className="ourbusiarena-card-icon" />
              <p className="ourbusiarena-card-txt">{t("Textile")}</p>
              <div className="ourbusiarena-card-digitbox">
                <p className="ourbusiarena-card-digit">10</p>
              </div>
            </div>
          </div>

          <div className="ourbusarena-card">
            <div className="ourbusiarena-card-inner">
              <FiBarChart2 className="ourbusiarena-card-icon" />
              <p className="ourbusiarena-card-txt">{t("Ports")}</p>
              <div className="ourbusiarena-card-digitbox">
                <p className="ourbusiarena-card-digit">11</p>
              </div>
            </div>
          </div>

          {/* <div className="ourbusarena-card">
            <div className="ourbusiarena-card-inner">
              <VscServerProcess className="ourbusiarena-card-icon" />
              <p className="ourbusiarena-card-txt">Automobile</p>
              <div className="ourbusiarena-card-digitbox">
                <p className="ourbusiarena-card-digit">1</p>
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default OurBusinessArena;
