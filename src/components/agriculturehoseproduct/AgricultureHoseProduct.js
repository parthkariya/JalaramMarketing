import React from "react";
import images from "../../pages/images";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AgricultureHose = [
  {
    id: 1,
    img: images.homeprod8,
    name: "PVC Left Flat Hose / Kisan Pipe",
    desc: "PVC Layflat hose is a tough water discharge hoses made with a PVC cover and/or reinforced poly...",
  },

  {
    id: 2,
    img: images.agriprod2,
    name: "PVC suction hose",
    desc: "Medium-duty, lightweight construction; retains flexibility in cold weather. Smooth-bore tube m...",
  },

  {
    id: 3,
    img: images.agriprod3,
    name: "PVC Garden Hose",
    desc: "Garden hoses are typically made of synthetic rubber or soft plastic, reinforced with an intern...",
  },
];

const AgricultureHoseProduct = () => {
  const { t } = useTranslation();

  return (
    <div className="conveyor-prod-main">
      <div className="conveyor-prod-con">
        <p className="ourproduct-main-head">{t("Agriculture Hose")}</p>
        <div className="heading-linebox">
          <div className="heading-line"></div>
          <img src={images.leaf_icon} alt="" className="leaf-icon" />
          <div className="heading-line"></div>
        </div>

        <div className="products-card-flex">
          {/* {AgricultureHose.map((item) => {
            return (
              <>
                <Link
                  to={
                    item.id == 1
                      ? "/pvcleftflathose"
                      : item.id == 2
                      ? "/pvcsolutionhose"
                      : item.id == 3
                      ? "/pvcgardenhose"
                      : "/"
                  }
                >
                  <div className="prod-card-main mr-right">
                    <div className="prod-card-imgbox">
                      <img
                        src={images.homeprod8}
                        alt=""
                        className="prod-card-img"
                      />
                      <div class="product1-img-hover"></div>
                    </div>
                    <button className="prod-card-btn txt-big">
                      PVC Left Flat Hose / Kisan Pipe
                    </button>
                    <p className="prod-card-desc">
                      PVC Layflat hose is a tough water discharge hoses made
                      with a PVC cover and/or reinforced poly...
                    </p>
                  </div>
                </Link>
              </>
            );
          })} */}

          <Link to="/pvcleftflathose">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img src={images.homeprod8} alt="" className="prod-card-img" />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("PVC Left Flat Hose / Kisan Pipe")}
              </button>
              <p className="prod-card-desc">
                {t(
                  "PVC Layflat hose is a tough water discharge hoses made with a PVC cover and/or reinforced poly"
                )}
              </p>
            </div>
          </Link>

          <Link to="/pvcsolutionhose">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img src={images.agriprod2} alt="" className="prod-card-img" />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("PVC suction hose")}
              </button>
              <p className="prod-card-desc">
                {t(
                  "Medium-duty, lightweight construction; retains flexibility in cold weather Smooth-bore tube m"
                )}
              </p>
            </div>
          </Link>

          <Link to="/pvcgardenhose">
            <div className="prod-card-main mr-right">
              <div className="prod-card-imgbox">
                <img src={images.agriprod3} alt="" className="prod-card-img" />
                <div class="product1-img-hover"></div>
              </div>
              <button className="prod-card-btn txt-big">
                {t("PVC Garden Hose")}
              </button>
              <p className="prod-card-desc">
                {t(
                  "Garden hoses are typically made of synthetic rubber or soft plastic, reinforced with an intern"
                )}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AgricultureHoseProduct;
