import React from "react";
import images from "../../pages/images";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Tools = [
  {
    id: 1,
    img: images.homeprod4,
    name: "Hand Tool",
    desc: "Hand tools have been used by humans since the Stone Age when stones were used for hammering an...",
  },

  {
    id: 2,
    img: images.toolsprod2,
    name: "Power Tool",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting i...",
  },
];

const ToolsProduct = () => {
  const { t } = useTranslation();
  return (
    <div className="conveyor-prod-main">
      <div className="conveyor-prod-con">
        <p className="ourproduct-main-head">Tools</p>
        <div className="heading-linebox">
          <div className="heading-line"></div>
          <img src={images.leaf_icon} alt="" className="leaf-icon" />
          <div className="heading-line"></div>
        </div>

        <div className="products-card-flex">
          {/* {Tools.map((item) => {
            return (
              <>
                <Link
                  to={
                    item.id == 1
                      ? "/handtool"
                      : item.id == 2
                      ? "/powertool"
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

          <Link to="/handtool">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img src={images.toolsprod2} alt="" className="prod-card-img" />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("Hand Tool")}
              </button>
              <p className="prod-card-desc">
                {t(
                  "Hand tools have been used by humans since the Stone Age when stones were used for hammering an"
                )}
              </p>
            </div>
          </Link>

          <Link to="/powertool">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img src={images.homeprod4} alt="" className="prod-card-img" />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("Power Tool")}
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

export default ToolsProduct;
