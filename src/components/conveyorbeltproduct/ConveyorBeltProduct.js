import React, { useEffect, useState } from "react";
import "./ConveyorBeltProduct.css";
import images from "../../pages/images";
import { Link, useLocation } from "react-router-dom";
import Data from "../Data.json";
import imm from "../../Assest/abouthero.jpg";
import { ConvoData } from "../../constants/ConveyorData";
import { useTranslation } from "react-i18next";

const conveyorbelt = [
  {
    id: 1,
    img: images.homeprod1,
    name: "Rubber Conveyor Belt",
    desc: "he range of conveyor belts is generally installed in the conveyor system to transport differen...",
  },

  {
    id: 2,
    img: images.conveprod2,
    name: "Plastic Modular",
    desc: "The modular belt conveyor is the straight version of this conveyor type. In combination with c...",
  },

  {
    id: 3,
    img: images.conveprod3,
    name: "Cotton Belt / Canvas Belt",
    desc: "We are bracketed with the top most Open Roll Type Cotton Conveyor Belt Manufacturers, Exporter...",
  },

  {
    id: 4,
    img: images.conveprod4,
    name: "Pvc / P.U Conveyor Belt",
    desc: "We are offering a wide array of pu conveyor belt. We offer these belts in wide-range of sizes ...",
  },

  {
    id: 5,
    img: images.conveprod5,
    name: "Printing Blanket",
    desc: "Our product range comprises Conveyor and Process Belt, Industrial Power Transmission Belts, Mo...",
  },
];
const ConveyorBeltProduct = () => {
  const [data, setdata] = useState(ConvoData);

  useEffect(() => {
    console.log("data", data);
  });

  const { t } = useTranslation();

  return (
    <div className="conveyor-prod-main">
      <div className="conveyor-prod-con">
        <p className="ourproduct-main-head">{t("Conveyor Belts")}</p>
        <div className="heading-linebox">
          <div className="heading-line"></div>
          <img src={images.leaf_icon} alt="" className="leaf-icon" />
          <div className="heading-line"></div>
        </div>

        <div className="products-card-flex">
          <>
            {/* <Link
                  key={index}
                  to={`/products/${item.slug}`}
                  state={{
                    item: item,
                    id: item.id,
                  }}
                >
                  <div className="prod-card-main mr-right">
                    <div className="prod-card-imgbox">
                      <img
                        src={item.img && item.img}
                        alt=""
                        className="prod-card-img"
                      />
                      <div class="product1-img-hover"></div>
                    </div>
                    <button className="prod-card-btn txt-big">
                      {t(item.name)}
                    </button>
                    <p className="prod-card-desc">{item.sort_des}</p>
                  </div>
                </Link> */}
            <Link to="/ruberconveyorbelt">
              <div className="prod-card-main mr-right">
                <div className="prod-card-imgbox">
                  <img
                    src={images.homeprod1}
                    alt=""
                    className="prod-card-img"
                  />
                  <div class="product1-img-hover"></div>
                </div>
                <button className="prod-card-btn txt-big">
                  {t("Rubber Conveyor Belt")}
                </button>
                <p className="prod-card-desc">
                  {t(
                    "he range of conveyor belts is generally installed in the conveyor system to transport differen"
                  )}
                </p>
              </div>
            </Link>

            <Link to="/plasticmodule">
              <div className="prod-card-main mr-right">
                <div className="prod-card-imgbox">
                  <img
                    src={images.conveprod2}
                    alt=""
                    className="prod-card-img"
                  />
                  <div class="product1-img-hover"></div>
                </div>
                <button className="prod-card-btn txt-big">
                  {t("Plastic Modular")}
                </button>
                <p className="prod-card-desc">
                  {t(
                    "The modular belt conveyor is the straight version of this onveyor type In combination with c"
                  )}
                </p>
              </div>
            </Link>

            <Link to="/cottonbelt">
              <div className="prod-card-main mr-right">
                <div className="prod-card-imgbox">
                  <img
                    src={images.conveprod3}
                    alt=""
                    className="prod-card-img"
                  />
                  <div class="product1-img-hover"></div>
                </div>
                <button className="prod-card-btn txt-big">
                  {t("Cotton Belt / Canvas Belt")}
                </button>
                <p className="prod-card-desc">
                  {t(
                    "We are bracketed with the top most Open Roll Type Cotton Conveyor Belt Manufacturers, Exporter"
                  )}
                </p>
              </div>
            </Link>

            <Link to="/puconveyorbelt">
              <div className="prod-card-main mr-right">
                <div className="prod-card-imgbox">
                  <img
                    src={images.conveprod4}
                    alt=""
                    className="prod-card-img"
                  />
                  <div class="product1-img-hover"></div>
                </div>
                <button className="prod-card-btn txt-big">
                  {t("Pvc / PU Conveyor Belt")}
                </button>
                <p className="prod-card-desc">
                  {t(
                    "We are offering a wide array of pu conveyor belt We offer these belts in wide-range of sizes"
                  )}
                </p>
              </div>
            </Link>

            <Link to="/printingblanket">
              <div className="prod-card-main mr-right">
                <div className="prod-card-imgbox">
                  <img
                    src={images.conveprod5}
                    alt=""
                    className="prod-card-img"
                  />
                  <div class="product1-img-hover"></div>
                </div>
                <button className="prod-card-btn txt-big">
                  {t("Printing Blanket")}
                </button>
                <p className="prod-card-desc">
                  {t(
                    "Our product range comprises Conveyor and Process Belt, Industrial Power Transmission Belts, Mo"
                  )}
                </p>
              </div>
            </Link>
          </>
        </div>
      </div>
    </div>
  );
};

export default ConveyorBeltProduct;
