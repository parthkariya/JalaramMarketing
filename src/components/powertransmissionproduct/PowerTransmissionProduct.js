import React from "react";
import "./PowerTransmissionProduct.css";
import images from "../../pages/images";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const conveyorbelt = [
  {
    id: 1,
    img: images.homeprod6,
    name: "V. Belt",
    desc: "The v-belts are made of rubber with fabric cords to transmit power and its covered with a prot...",
  },

  {
    id: 2,
    img: images.powerprod2,
    name: "Timing belt",
    desc: "With rich industry experience and knowledge, we are known as the leading firm actively engaged...",
  },

  {
    id: 3,
    img: images.powerprod3,
    name: "Poly V. Belt",
    desc: "Our organization is renowned in offering Poly V Belt to our clients. Some of notable attribute...",
  },

  {
    id: 4,
    img: images.powerprod4,
    name: "Specialized belt",
    desc: "The rough top conveyor belts are ideally designed for distribution of light weight goods, frag...",
  },
];
const PowerTransmissionProduct = () => {
  const { t } = useTranslation();
  return (
    <div className="conveyor-prod-main">
      <div className="conveyor-prod-con">
        <p className="ourproduct-main-head">{t("Power Transmission")}</p>
        <div className="heading-linebox">
          <div className="heading-line"></div>
          <img src={images.leaf_icon} alt="" className="leaf-icon" />
          <div className="heading-line"></div>
        </div>

        <div className="products-card-flex">
          {/* {conveyorbelt.map((item) => {
            return (
              <>
                <Link
                  to={
                    item.id == 1
                      ? "/vbelt"
                      : item.id == 2
                      ? "/timmingbelt"
                      : item.id == 3
                      ? "/polyvbelt"
                      : item.id == 4
                      ? "/specializedbelt"
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

          <Link to="/vbelt">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img src={images.homeprod6} alt="" className="prod-card-img" />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">{t("V Belt")}</button>
              <p className="prod-card-desc">
                {t(
                  "The v-belts are made of rubber with fabric cords to transmit power and its covered with a prot"
                )}
              </p>
            </div>
          </Link>

          <Link to="/timmingbelt">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img src={images.powerprod2} alt="" className="prod-card-img" />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("Timing belt")}
              </button>
              <p className="prod-card-desc">
                {t(
                  " With rich industry experience and knowledge, we are known as the leading firm actively engaged"
                )}
              </p>
            </div>
          </Link>

          <Link to="/polyvbelt">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img src={images.powerprod3} alt="" className="prod-card-img" />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("Poly V Belt")}
              </button>
              <p className="prod-card-desc">
                {t(
                  "Our organization is renowned in offering Poly V Belt to our clients Some of notable attribute"
                )}
              </p>
            </div>
          </Link>

          <Link to="/specializedbelt">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img src={images.powerprod4} alt="" className="prod-card-img" />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("Specialized belt")}
              </button>
              <p className="prod-card-desc">
                {t(
                  "The rough top conveyor belts are ideally designed for distribution of light weight goods frag"
                )}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PowerTransmissionProduct;
