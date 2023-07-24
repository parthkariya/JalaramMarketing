import React from "react";
import images from "../../pages/images";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Air = [
  {
    id: 1,
    img: images.homeprod2,
    name: "Steam Hose",
    desc: "hoses made from the highest quality materials can stand up to the high temperatures and hig...",
  },

  {
    id: 2,
    img: images.airprod2,
    name: "Sandblast Hose",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting i...",
  },

  {
    id: 3,
    img: images.airprod3,
    name: "Rock Drill Hose",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting i...",
  },

  {
    id: 4,
    img: images.airprod4,
    name: "Air / Water hose",
    desc: "",
  },

  {
    id: 5,
    img: images.airprod5,
    name: "Pneumatic Tool Hose",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting i...",
  },
  {
    id: 6,
    img: images.airprod6,
    name: "Air Water hose",
    desc: "air and multipurpose hoses are engineered to meet the specific requirements and industry speci...",
  },
  {
    id: 7,
    img: images.airprod7,
    name: "Carbon Free Hose",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting i...",
  },
];

const AirMultipurposeHoseProduct = () => {
  const { t } = useTranslation();
  return (
    <div className="conveyor-prod-main">
      <div className="conveyor-prod-con">
        <p className="ourproduct-main-head">{t("Air")}</p>
        <div className="heading-linebox">
          <div className="heading-line"></div>
          <img src={images.leaf_icon} alt="" className="leaf-icon" />
          <div className="heading-line"></div>
        </div>

        <div className="products-card-flex">
          {/* {Air.map((item) => {
            return (
              <>
                <Link
                  to={
                    item.id == 1
                      ? "/steamhose"
                      : item.id == 2
                      ? "/sandblast"
                      : item.id == 3
                      ? "/rockdrillhose"
                      : item.id == 4
                      ? "/airwaterhose"
                      : item.id == 5
                      ? "/pneumatictoolhose"
                      : item.id == 6
                      ? "/airwaterhosesec"
                      : item.id == 7
                      ? "/carbonfreehose"
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

          <Link to="/steamhose">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img src={images.homeprod2} alt="" className="prod-card-img" />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("Steam Hose")}
              </button>
              <p className="prod-card-desc">
                {t(
                  "hoses made from the highest quality materials can stand up to the high temperatures and hig"
                )}
              </p>
            </div>
          </Link>

          <Link to="/sandblast">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img src={images.airprod2} alt="" className="prod-card-img" />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("Sandblast Hose")}
              </button>
              <p className="prod-card-desc">
                {t(
                  "Lorem Ipsum is simply dummy text of the printing and typesetting i"
                )}
              </p>
            </div>
          </Link>

          <Link to="/rockdrillhose">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img src={images.airprod3} alt="" className="prod-card-img" />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("Rock Drill Hose")}
              </button>
              <p className="prod-card-desc">
                {t(
                  "Lorem Ipsum is simply dummy text of the printing and typesetting i"
                )}
              </p>
            </div>
          </Link>

          <Link to="/airwaterhose">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img src={images.airprod4} alt="" className="prod-card-img" />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("Air / Water hose")}
              </button>
              <p className="prod-card-desc"></p>
            </div>
          </Link>

          <Link to="/pneumatictoolhose">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img src={images.airprod5} alt="" className="prod-card-img" />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("Pneumatic Tool Hose")}
              </button>
              <p className="prod-card-desc">
                {t(
                  "Lorem Ipsum is simply dummy text of the printing and typesetting i"
                )}
              </p>
            </div>
          </Link>

          <Link to="/airwaterhosesec">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img src={images.airprod6} alt="" className="prod-card-img" />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("Air Water hose")}
              </button>
              <p className="prod-card-desc">
                {t(
                  "air and multipurpose hoses are engineered to meet the specific requirements and industry speci"
                )}
              </p>
            </div>
          </Link>

          <Link to="/carbonfreehose">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img src={images.airprod7} alt="" className="prod-card-img" />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("Carbon Free Hose")}
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

export default AirMultipurposeHoseProduct;
