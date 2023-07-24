import React from "react";
import AboutHero from "../abouthero/AboutHero";
import images from "../../pages/images";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const IndustrialGrease = [
  {
    id: 1,
    img: images.indugreaseprod1,
    name: "Synthetic Grease",
    desc: "Synthetic Grease",
  },

  {
    id: 2,
    img: images.indugreaseprod2,
    name: "General Purpose Grease",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting i...",
  },

  {
    id: 3,
    img: images.indugreaseprod3,
    name: "Food Grade Grease",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting i...",
  },

  {
    id: 4,
    img: images.indugreaseprod4,
    name: "High Temperature Grease",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting i...",
  },
];

const IndustrialGreaseProduct = () => {
  const { t } = useTranslation();

  return (
    <div className="conveyor-prod-main">
      <div className="conveyor-prod-con">
        <p className="ourproduct-main-head">{t("Industrial Grease")}</p>
        <div className="heading-linebox">
          <div className="heading-line"></div>
          <img src={images.leaf_icon} alt="" className="leaf-icon" />
          <div className="heading-line"></div>
        </div>

        <div className="products-card-flex">
          {/* {IndustrialGrease.map((item) => {
            return (
              <>
                <Link
                  to={
                    item.id == 1
                      ? "/syntheticgrease"
                      : item.id == 2
                      ? "/genralpurposegrease"
                      : item.id == 3
                      ? "/foodgradegreaseinfosing"
                      : item.id == 4
                      ? "/hightemperaturegreasesing"
                      : "/"
                  }
                >
                  <div className="prod-card-main mr-right">
                    <div className="prod-card-imgbox">
                      <img
                        src={images.indugreaseprod1}
                        alt=""
                        className="prod-card-img"
                      />
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

          <Link to="/syntheticgrease">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img
                  src={images.indugreaseprod1}
                  alt=""
                  className="prod-card-img"
                />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("Synthetic Grease")}
              </button>
              <p className="prod-card-desc">{t("Synthetic Grease")}</p>
            </div>
          </Link>

          <Link to="/genralpurposegrease">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img
                  src={images.indugreaseprod2}
                  alt=""
                  className="prod-card-img"
                />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("General Purpose Grease")}
              </button>
              <p className="prod-card-desc">
                {t(
                  "Lorem Ipsum is simply dummy text of the printing and typesetting i"
                )}
              </p>
            </div>
          </Link>

          <Link to="/foodgradegreaseinfosing">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img
                  src={images.indugreaseprod3}
                  alt=""
                  className="prod-card-img"
                />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("Food Grade Grease")}
              </button>
              <p className="prod-card-desc">
                {t(
                  "Lorem Ipsum is simply dummy text of the printing and typesetting i"
                )}
              </p>
            </div>
          </Link>

          <Link to="/hightemperaturegreasesing">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img
                  src={images.indugreaseprod4}
                  alt=""
                  className="prod-card-img"
                />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("High Temperature Grease")}
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

export default IndustrialGreaseProduct;
