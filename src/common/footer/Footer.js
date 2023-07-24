import React from "react";
import images from "../../pages/images";
import "./Footer.css";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { CiMobile4 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { useTranslation } from "react-i18next";

import {
  ImFacebook,
  ImPinterest,
  ImLinkedin2,
  ImTwitter,
} from "react-icons/im";
import { RiInstagramLine } from "react-icons/ri";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer-main">
      {/* <img src={images.footerbg} className="footerbg" /> */}

      <div className="footer-inner-clr">
        <div className="footer-social-icon-part-flex">
          <AnimationOnScroll
            animateIn="fadeInLeft"
            animateOut="animate__bounceOutRight"
          >
            <div class="sec-product-name-box">
              <p className="footer-social-icon-part-txt">{t("Follow Us")}</p>
              <div className="footer-social-iconbox">
                <a
                  href="https://www.facebook.com/jalaramgroupofcompanies"
                  target="_blank"
                >
                  <ImFacebook className="footer-social-icon" />
                </a>
              </div>

              <div className="footer-social-iconbox">
                <a href="https://twitter.com/Jalaram_Group" target="_blank">
                  <ImTwitter className="footer-social-icon" />
                </a>
              </div>

              <div className="footer-social-iconbox">
                <a
                  href="https://www.instagram.com/jalaramgrouprajkot/"
                  target="_blank"
                >
                  <RiInstagramLine className="footer-social-icon" />
                </a>
              </div>
              <div className="footer-social-iconbox">
                <a
                  href="https://www.linkedin.com/authwall?trk=qf&original_referer=https://jalarammarketing.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F31145072%2Fadmin%2F"
                  target="_blank"
                >
                  <ImLinkedin2 className="footer-social-icon" />
                </a>
              </div>
              <div className="footer-social-iconbox">
                <a
                  href="https://www.pinterest.ca/jalaramgroup/"
                  target="_blank"
                >
                  <ImPinterest className="footer-social-icon" />
                </a>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
        <div className="footer-con">
          <div className="footer-part-big">
            <h3 className="footer-part-heading">{t("JALARAM MARKETING")}</h3>
            <p className="footer-part-txt">{t("footer-forst-part-txt")}</p>
          </div>

          <div className="footer-part-small">
            <h3 className="footer-part-heading">{t("QUICK LINKS")}</h3>
            <ul className="footer-part-links-flex">
              <li className="footer-link-flex">
                <AiOutlineRight className="footer-icon" />
                <Link to="/aboutus" className="footer-part-txt">
                  {t("About Us")}
                </Link>
              </li>

              <li className="footer-link-flex">
                <AiOutlineRight className="footer-icon" />
                <Link to="/MissionVisssionValues" className="footer-part-txt">
                  {t("Mission, Vission & Values")}
                </Link>
              </li>

              <li className="footer-link-flex">
                <AiOutlineRight className="footer-icon" />
                <Link to="/OurStrength" className="footer-part-txt">
                  {t("Our Strength / Competencies")}
                </Link>
              </li>

              <li className="footer-link-flex">
                <AiOutlineRight className="footer-icon" />
                <Link to="/OurAwards" className="footer-part-txt">
                  {t("Awards And Recognitions")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-part-small">
            <h3 className="footer-part-heading">{t("USEFUL LINKS")}</h3>
            <ul className="footer-part-links-flex">
              <li className="footer-link-flex">
                <AiOutlineRight className="footer-icon" />
                <Link to="/IndustrialApplication" className="footer-part-txt">
                  {t("Industries & Applications")}
                </Link>
              </li>

              <li className="footer-link-flex">
                <AiOutlineRight className="footer-icon" />
                <Link to="/Solutions" className="footer-part-txt">
                  {t("Solutions")}
                </Link>
              </li>

              <li className="footer-link-flex">
                <AiOutlineRight className="footer-icon" />
                <Link to="/ReplacementPart" className="footer-part-txt">
                  {t("Replacement Parts")}
                </Link>
              </li>

              <li className="footer-link-flex">
                <AiOutlineRight className="footer-icon" />
                <Link to="/Contact" className="footer-part-txt">
                  {t("Contact Us")}
                </Link>
              </li>

              <li className="footer-link-flex">
                <AiOutlineRight className="footer-icon" />
                <Link to="/" className="footer-part-txt">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-part-big">
            <h3 className="footer-part-heading">{t("CONTACT US")}</h3>
            <div className="footer-con-flex">
              <GoLocation className="footer-con-icon" />
              <p className="footer-part-txt mb-footer">
                {t("ADDRESS")} <br />{" "}
                {t("RAJPUTPARA MAIN ROAD, RAJKOT - 360 001")} <br />{" "}
                {t("GUJARAT,INDIA")}
              </p>
            </div>

            <div className="footer-con-flex">
              <GoLocation className="footer-con-icon" />
              <p className="footer-part-txt mb-footer">
                {t("FACTORY UNIT")} <br />
                {t("PLOT NO HARIPAR PAL INDUSTRIAL AREA")} <br />
                {t("OPP MOTEL THE VILLAGE KALAWAD ROAD RAJKOT")} <br />
                {t("360 005 GUJARAT INDIA")}
              </p>
            </div>

            <div className="footer-con-flex">
              <CiMobile4 className="footer-con-icon" />
              <p className="footer-part-txt mb-footer">{t("PHONE")}</p>
            </div>
            <div className="footer-number-flex">
              <a href="tel:+912812228888" className="footer-part-txt">
                +912812228888
              </a>

              <a href="tel:+91 281 2234695" className="footer-part-txt">
                +91 281 2234695
              </a>

              <a href="tel:+91 281 2231130" className="footer-part-txt">
                +91 281 2231130
              </a>
            </div>

            <div className="footer-con-flex">
              <TfiEmail className="footer-con-icon" />
              <p className="footer-part-txt mb-footer">{t("EMAIL")}</p>
            </div>
            <div className="footer-number-flex">
              <a
                href="mailto:INFO@JALARAMMARKETING.COM"
                className="footer-part-txt"
              >
                {t("INFOJALARAMMARKETINGCOM")}
              </a>
            </div>
          </div>
        </div>

        <div className="footer-copyright-sec">
          <p>{t("COPYRIGHT")}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
