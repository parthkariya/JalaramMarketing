import React from "react";
import images from "../../pages/images";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Tarpaulin = [
  {
    id: 1,
    img: images.homeprod7,
    name: "HDPE Tarpaulin",
    desc: "Tarpaulins are made from H.D.P.E. woven fabrics laminated on both sides with LLDPE an...",
  },

  {
    id: 2,
    img: images.tarpaulinprod2,
    name: "Laminated Tarpaulin",
    desc: "CROSS LAMINATED TARPAULIN is an innovative complete protection, all weather cover made from mu...",
  },

  {
    id: 3,
    img: images.tarpaulinprod3,
    name: "Shade Net",
    desc: "Agro Shade Nets are used in agricultural areas for a variety of applications&nb...",
  },

  {
    id: 4,
    img: images.tarpaulinprod4,
    name: "Pond Liners",
    desc: "A pond liner is an impermeable geomembrane used for retention of liquids, including the lining...",
  },
  {
    id: 5,
    img: images.tarpaulinprod5,
    name: "Mulching Film",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting i...",
  },
  {
    id: 6,
    img: images.tarpaulinprod6,
    name: "PVC",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting i...",
  },
];

const TarpaulinProduct = () => {
  const { t } = useTranslation();

  return (
    <div className="conveyor-prod-main">
      <div className="conveyor-prod-con">
        <p className="ourproduct-main-head">{t("Tarpaulin")}</p>
        <div className="heading-linebox">
          <div className="heading-line"></div>
          <img src={images.leaf_icon} alt="" className="leaf-icon" />
          <div className="heading-line"></div>
        </div>

        <div className="products-card-flex">
          {/* {Tarpaulin.map((item) => {
            return (
              <>
                <Link
                  to={
                    item.id == 1
                      ? "/hdpetarpaulin"
                      : item.id == 2
                      ? "/laminatedtarpaulin"
                      : item.id == 3
                      ? "/shadenet"
                      : item.id == 4
                      ? "/pondliner"
                      : item.id == 5
                      ? "/mulchingfilm"
                      : item.id == 6
                      ? "/puconveyorbelt"
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

          <Link to="/hdpetarpaulin">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img src={images.homeprod7} alt="" className="prod-card-img" />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("HDPE Tarpaulin")}
              </button>
              <p className="prod-card-desc">
                {t(
                  "Tarpaulins are made from HDPE woven fabrics laminated on both sides with LLDPE an"
                )}
              </p>
            </div>
          </Link>

          <Link to="/laminatedtarpaulin">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img
                  src={images.tarpaulinprod2}
                  alt=""
                  className="prod-card-img"
                />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("Laminated Tarpaulin")}
              </button>
              <p className="prod-card-desc">
                {t(
                  "CROSS LAMINATED TARPAULIN is an innovative complete protection, all weather cover made from mu"
                )}
              </p>
            </div>
          </Link>

          <Link to="/shadenet">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img
                  src={images.tarpaulinprod3}
                  alt=""
                  className="prod-card-img"
                />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("Shade Net")}
              </button>
              <p className="prod-card-desc">
                {t(
                  "Agro Shade Nets are used in agricultural areas for a variety of applications & nb"
                )}
              </p>
            </div>
          </Link>

          <Link to="/pondliner">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img
                  src={images.tarpaulinprod4}
                  alt=""
                  className="prod-card-img"
                />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("Pond Liners")}
              </button>
              <p className="prod-card-desc">
                {t(
                  "A pond liner is an impermeable geomembrane used for retention of liquids, including the lining"
                )}
              </p>
            </div>
          </Link>

          <Link to="/mulchingfilm">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img
                  src={images.tarpaulinprod5}
                  alt=""
                  className="prod-card-img"
                />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("Mulching Film")}
              </button>
              <p className="prod-card-desc">
                {t(
                  "Lorem Ipsum is simply dummy text of the printing and typesetting i"
                )}
              </p>
            </div>
          </Link>

          <Link to="/puconveyorbelt">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img
                  src={images.tarpaulinprod6}
                  alt=""
                  className="prod-card-img"
                />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">{t("PVC")}</button>
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

export default TarpaulinProduct;
