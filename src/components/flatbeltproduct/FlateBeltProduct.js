import React from "react";
import images from "../../pages/images";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Flatbelt = [
  {
    id: 1,
    img: images.homeprod9,
    name: "Elevator belt",
    desc: "Flat belts are used in line shafting to transmit power in factories. The flat belt is a simple...",
  },

  {
    id: 2,
    img: images.flatbeltprod2,
    name: "Nylon Flat Belt",
    desc: "Flat belts are used in line shafting to transmit power in factories. The flat belt is a simple...",
  },

  {
    id: 3,
    img: images.flatbeltprod3,
    name: "Canvas Flat belt",
    desc: "Flat belts are used in line shafting to transmit power in factories. The flat belt is a simple...",
  },
];

const FlateBeltProduct = () => {
  const { t } = useTranslation();

  return (
    <div className="conveyor-prod-main">
      <div className="conveyor-prod-con">
        <p className="ourproduct-main-head">{t("Flat belt")}</p>
        <div className="heading-linebox">
          <div className="heading-line"></div>
          <img src={images.leaf_icon} alt="" className="leaf-icon" />
          <div className="heading-line"></div>
        </div>

        <div className="products-card-flex">
          {/* {Flatbelt.map((item) => {
            return (
              <>
                <Link
                  to={
                    item.id == 1
                      ? "/elevatorbelt"
                      : item.id == 2
                      ? "/nylonbelt"
                      : item.id == 3
                      ? "/canvasbelt"
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

          <Link to="/elevatorbelt">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img src={images.homeprod9} alt="" className="prod-card-img" />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("Elevator belt")}
              </button>
              <p className="prod-card-desc">
                {t(
                  "Flat belts are used in line shafting to transmit power in factories The flat belt is a simple"
                )}
              </p>
            </div>
          </Link>

          <Link to="/nylonbelt">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img
                  src={images.flatbeltprod2}
                  alt=""
                  className="prod-card-img"
                />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("Nylon Flat Belt")}
              </button>
              <p className="prod-card-desc">
                {t(
                  "Flat belts are used in line shafting to transmit power in factories The flat belt is a simple"
                )}
              </p>
            </div>
          </Link>

          <Link to="/canvasbelt">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img
                  src={images.flatbeltprod3}
                  alt=""
                  className="prod-card-img"
                />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("Canvas Flat belt")}
              </button>
              <p className="prod-card-desc">
                {t(
                  "Flat belts are used in line shafting to transmit power in factories The flat belt is a simple"
                )}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FlateBeltProduct;
