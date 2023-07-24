import React from "react";
import images from "../../pages/images";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Pulley = [
  {
    id: 1,
    img: images.homeprod3,
    name: "Taper bush v Belt Pulley",
    desc: "Poly-V is a multi rib belt drive whose special construction allows it to be used with very ...",
  },

  {
    id: 2,
    img: images.pulleyprod2,
    name: "Timing / Pulley v Belt Pulley",
    desc: "Positive grip of belt teeth with pulley tooth eliminate slippage and speed variation Drive ...",
  },
];

const PulleyProduct = () => {
  const { t } = useTranslation();

  return (
    <div className="conveyor-prod-main">
      <div className="conveyor-prod-con">
        <p className="ourproduct-main-head">{t("Pulley")}</p>
        <div className="heading-linebox">
          <div className="heading-line"></div>
          <img src={images.leaf_icon} alt="" className="leaf-icon" />
          <div className="heading-line"></div>
        </div>

        <div className="products-card-flex">
          {/* {Pulley.map((item) => {
            return (
              <>
                <Link
                  to={
                    item.id == 1
                      ? "/taperbushvbelt"
                      : item.id == 2
                      ? "/timmingpulleyvbeltpulley"
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

          <Link to="/taperbushvbelt">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img src={images.homeprod3} alt="" className="prod-card-img" />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("Taper bush v Belt Pulley")}
              </button>
              <p className="prod-card-desc">
                {t(
                  "Poly-V is a multi rib belt drive whose special construction allows it to be used with very"
                )}{" "}
                ...
              </p>
            </div>
          </Link>

          <Link to="/timmingpulleyvbeltpulley">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img
                  src={images.pulleyprod2}
                  alt=""
                  className="prod-card-img"
                />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("Timing / Pulley v Belt Pulley")}
              </button>
              <p className="prod-card-desc">
                {t(
                  "Positive grip of belt teeth with pulley tooth eliminate slippage and speed variation Drive"
                )}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PulleyProduct;
