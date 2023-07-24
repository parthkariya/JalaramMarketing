import React from "react";
import images from "../../pages/images";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Industrialoil = [
  {
    id: 1,
    img: images.homeprod5,
    name: "Cutting Oil",
    desc: "Cutting fluid is a type of coolant and lubricant designed specifically for metalworking ...",
  },

  {
    id: 2,
    img: images.induprod2,
    name: "Gear Oil",
    desc: "Gear oil is a lubricant made up of artificially made chemical compounds; these comp...",
  },

  {
    id: 3,
    img: images.induprod3,
    name: "Hydraulic Oil",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting i...",
  },

  {
    id: 4,
    img: images.induprod4,
    name: "Engine Oil",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting i...",
  },
  {
    id: 5,
    img: images.induprod5,
    name: "Speciality Oil",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting i...",
  },
  {
    id: 6,
    img: images.induprod6,
    name: "Food Grade Oil",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting i...",
  },
];

const IndustrialOilProduct = () => {
  const { t } = useTranslation();
  return (
    <div className="conveyor-prod-main">
      <div className="conveyor-prod-con">
        <p className="ourproduct-main-head">{t("Industrial Oil")}</p>
        <div className="heading-linebox">
          <div className="heading-line"></div>
          <img src={images.leaf_icon} alt="" className="leaf-icon" />
          <div className="heading-line"></div>
        </div>

        <div className="products-card-flex">
          {/* {Industrialoil.map((item) => {
            return (
              <>
                <Link
                  to={
                    item.id == 1
                      ? "/cuttingoil"
                      : item.id == 2
                      ? "/gearoil"
                      : item.id == 3
                      ? "/hydraulicoil"
                      : item.id == 4
                      ? "/engineoil"
                      : item.id == 5
                      ? "/specialityoil"
                      : item.id == 6
                      ? "/foodgradeoil"
                      : "/"
                  }
                >
                  <div className="prod-card-main mr-right">
                    <div className="prod-card-imgbox">
                      <img src={item.img} alt="" className="prod-card-img" />
                      <div class="product1-img-hover"></div>
                    </div>
                    <button className="prod-card-btn txt-big">
                      {item.name}
                    </button>
                    <p className="prod-card-desc">{item.desc}</p>
                  </div>
                </Link>
              </>
            );
          })} */}

          <Link to="/cuttingoil">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img src={images.homeprod5} alt="" className="prod-card-img" />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("Cutting Oil")}
              </button>
              <p className="prod-card-desc">
                {t(
                  "Cutting fluid is a type of coolant and lubricant designed specifically for metalworking"
                )}
              </p>
            </div>
          </Link>

          <Link to="/gearoil">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img src={images.induprod2} alt="" className="prod-card-img" />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">{t("Gear Oil")}</button>
              <p className="prod-card-desc">
                {t(
                  "Gear oil is a lubricant made up of artificially made chemical compounds; these comp"
                )}
              </p>
            </div>
          </Link>

          <Link to="/hydraulicoil">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img src={images.induprod3} alt="" className="prod-card-img" />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("Hydraulic Oil")}
              </button>
              <p className="prod-card-desc">
                {t(
                  "Lorem Ipsum is simply dummy text of the printing and typesetting i"
                )}
              </p>
            </div>
          </Link>

          <Link to="/engineoil">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img src={images.induprod4} alt="" className="prod-card-img" />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("Engine Oil")}
              </button>
              <p className="prod-card-desc">
                {t(
                  "Lorem Ipsum is simply dummy text of the printing and typesetting i"
                )}
              </p>
            </div>
          </Link>

          <Link to="/specialityoil">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img src={images.induprod5} alt="" className="prod-card-img" />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("Speciality Oil")}
              </button>
              <p className="prod-card-desc">{t("Speciality Oil")}</p>
            </div>
          </Link>

          <Link to="/foodgradeoil">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img src={images.induprod6} alt="" className="prod-card-img" />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("Food Grade Oil")}
              </button>
              <p className="prod-card-desc">
                {t(
                  "Lorem Ipsum is simply dummy text of the printing and typesetting i"
                )}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndustrialOilProduct;
