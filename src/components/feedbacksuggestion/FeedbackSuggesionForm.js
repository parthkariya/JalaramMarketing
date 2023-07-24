import React from "react";
import "./FeedbackSuggestionForm.css";
import images from "../../pages/images";
import { AiOutlineRight } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { CiMobile4 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdLocationCity } from "react-icons/md";
import { SiMicrosoftonenote } from "react-icons/si";
import { TfiLocationArrow } from "react-icons/tfi";
import { BsLightningCharge, BsCheck2Square, BsBarChart } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { AiOutlineCalendar } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const FeedbackSuggesionForm = () => {
  const { t } = useTranslation();
  return (
    <div className="busiinqform-main">
      <div className="busiinqform-con">
        <p className="busiinqform-head">{t("Feedback & Suggestion")}</p>

        <div className="heading-linebox jus-start">
          {/* <div className="heading-line"></div> */}
          <img src={images.leaf_icon} alt="" className="leaf-icon" />
          <div className="heading-line"></div>
        </div>
        <p className="form-head-txt">
          {t(
            "Your suggestions and feedback give us invaluable insights into keeping you happy. Have something to share? Do let us know!"
          )}
        </p>

        <div className="partner-form-flex">
          <div className="partner-form-inner-flex">
            <MdOutlinePersonOutline className="inqform-icon" />
            <input
              type="text"
              className="inqform-inp"
              placeholder={t("First Name")}
            />
          </div>

          <div className="partner-form-inner-flex">
            <MdOutlinePersonOutline className="inqform-icon" />
            <input
              type="text"
              className="inqform-inp"
              placeholder={t("Last Name")}
            />
          </div>

          <div className="partner-form-inner-flex">
            <TfiEmail className="inqform-icon" />
            <input
              type="text"
              className="inqform-inp"
              placeholder={t("Email")}
            />
          </div>

          <div className="partner-form-inner-flex">
            <CiMobile4 className="inqform-icon" />
            <input
              type="text"
              className="inqform-inp"
              placeholder={t("Mobile")}
            />
          </div>

          <div className="partner-form-inner-flex w-100 textarea-height">
            <SiMicrosoftonenote className="inqform-icon" />
            <textarea
              type="text"
              className="inqform-inp w-100"
              placeholder={t("Message")}
            />
          </div>
          <button className="primary-btn wi-inc">{t("Send Message")}</button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSuggesionForm;
