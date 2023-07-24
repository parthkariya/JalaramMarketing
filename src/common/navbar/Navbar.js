import React, { useState } from "react";
import "./Navbar.css";
import {
  ImFacebook,
  ImPinterest,
  ImLinkedin2,
  ImTwitter,
} from "react-icons/im";
import { RiInstagramLine } from "react-icons/ri";
import { FiChevronDown } from "react-icons/fi";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineRight,
  AiOutlineDown,
} from "react-icons/ai";
import images from "../../pages/images";
import { Link } from "react-router-dom";
import LanguageSelect from "../../LanguageSelect";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);
  const [sectoggleIcon, setSecToggleIcon] = useState(false);
  const [thirdtoggleIcon, setthirdToggleIcon] = useState(false);
  const [fourthtoggleIcon, setfourthToggleIcon] = useState(false);
  const [toggleIconSecSub, setToggleIconSecSub] = useState(false);
  const [toggleIconThirdSub, setToggleIconThirdSub] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <div className="nav-up"></div>
      <div className="nav-inner">
        <p className="nav-inner-txt">
          {t("Welcome to Jalaram Marketing-nav-head")}
        </p>
        <div className="nav-inner-sec-flex">
          <div className="nav-inner-con-flex">
            <p className="nav-inner-txt">{t("Have any question?")}</p>
            <a className="nav-inner-txt" href="tel:+281 2228888">
              +281 2228888
            </a>
          </div>
          <div className="nav-line"></div>
          <div className="nav-social-icon-flex">
            <a
              href="https://www.facebook.com/jalaramgroupofcompanies"
              target="_blank"
            >
              <ImFacebook className="nav-social-icon" />
            </a>

            <a href="https://www.pinterest.ca/jalaramgroup/" target="_blank">
              <ImPinterest className="nav-social-icon" />
            </a>

            <a
              href="https://www.linkedin.com/authwall?trk=qf&original_referer=https://jalarammarketing.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F31145072%2Fadmin%2F"
              target="_blank"
            >
              <ImLinkedin2 className="nav-social-icon" />
            </a>

            <a
              href="https://www.instagram.com/jalaramgrouprajkot/"
              target="_blank"
            >
              <RiInstagramLine className="nav-social-icon" />
            </a>

            <a href="https://twitter.com/Jalaram_Group" target="_blank">
              <ImTwitter className="nav-social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="nav-main-up">
        <div className="nav-main">
          <div className="logo-box">
            <Link to="/">
              <img src={images.logo} alt="" className="logo" />
            </Link>
          </div>

          <ul className="nav-lists-flex">
            <div
              style={{ background: "#ddd", width: "1px", height: "105px" }}
            ></div>
            <li className="nav-list-flex">
              <Link to="/">{t("HomeHeroTitle")}</Link>
            </li>
            <div
              style={{ background: "#ddd", width: "1px", height: "105px" }}
            ></div>
            <li className="nav-list-flex">
              {t("About Us")} <FiChevronDown className="nav-down-icon" />
              <div className="nav-sub-main">
                <ul>
                  <li className="nav-line-h">
                    <Link to="/aboutus" className="nav-sub-link">
                      {t("About Company")}
                    </Link>
                  </li>
                  <li className="nav-line-h">
                    <Link to="/MissionVisssionValues" className="nav-sub-link">
                      {t("Mission, Vission & Values")}
                    </Link>
                  </li>
                  <li className="nav-line-h">
                    <Link to="/OurStrength" className="nav-sub-link">
                      {t("Our Strength / Competencies")}
                    </Link>
                  </li>
                  <li className="nav-line-h">
                    <Link to="/OurAwards" className="nav-sub-link">
                      {t("Awards And Recognitions")}
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <div
              style={{ background: "#ddd", width: "1px", height: "105px" }}
            ></div>
            <li className="nav-list-flex">
              <Link to="/IndustrialApplication">
                {t("Industrial & Application")}
              </Link>{" "}
            </li>
            <div
              style={{ background: "#ddd", width: "1px", height: "105px" }}
            ></div>
            <li className="nav-list-flex">
              {t("Products")} <FiChevronDown className="nav-down-icon" />
              <div className="nav-sub-main">
                <ul>
                  <li className="nav-line-h">
                    <Link to="/ProductConveyorBelt" className="nav-sub-link">
                      {t("Conveyor Belts")}
                    </Link>
                  </li>
                  <li className="nav-line-h">
                    <Link
                      to="/ProductPowerTransmission"
                      className="nav-sub-link"
                    >
                      {t("Power Transmission")}
                    </Link>
                  </li>
                  <li className="nav-list-flex nav-list-flex-hover nav-sub-link-side nav-line-h">
                    {t("Industrial Lubricant")} &gt;
                    <div className="nav-sub-main-side">
                      <ul>
                        <li className="nav-line-h">
                          <Link
                            to="/ProductIndustrialOil"
                            className="nav-sub-link"
                          >
                            {t("Industrial Oil")}
                          </Link>
                        </li>
                        <li className="nav-line-h">
                          <Link
                            to="/ProductIndustrialGrease"
                            className="nav-sub-link"
                          >
                            {t("Industrial Grease")}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-line-h">
                    <Link to="/ProductTools" className="nav-sub-link">
                      {t("Tools")}
                    </Link>
                  </li>
                  <li className="nav-line-h">
                    <Link to="/ProductTarpaulin" className="nav-sub-link">
                      {t("Tarpaulin")}
                    </Link>
                  </li>
                  <li className="nav-line-h">
                    <Link to="/ProductAgricultureHose" className="nav-sub-link">
                      {t("Agriculture Hose")}
                    </Link>
                  </li>
                  <li className="nav-line-h">
                    <Link to="/ProductFlatBelt" className="nav-sub-link">
                      {t("Flat belt")}
                    </Link>
                  </li>
                  <li className="nav-list-flex nav-list-flex-hover nav-sub-link-side nav-line-h">
                    {t("Industrial Hose")} &nbsp; &nbsp; &nbsp; &nbsp; &gt;
                    <div className="nav-sub-main-side">
                      <ul>
                        <li className="nav-line-h">
                          <Link
                            to="/Air_MultipurposeHose"
                            className="nav-sub-link"
                          >
                            {t("Air & Multipurpose Hose")}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-line-h">
                    <Link to="/ProductPulley" className="nav-sub-link">
                      {t("Pulley")}
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <div
              style={{ background: "#ddd", width: "1px", height: "105px" }}
            ></div>
            <li className="nav-list-flex">
              {t("Solution & Service")}{" "}
              <FiChevronDown className="nav-down-icon" />
              <div className="nav-sub-main">
                <ul>
                  <li className="nav-line-h">
                    <Link to="/Solutions" className="nav-sub-link">
                      {t("Solutions")}
                    </Link>
                  </li>
                  <li className="nav-line-h">
                    <Link to="/ReplacementPart" className="nav-sub-link">
                      {t("Replacement Parts")}
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <div
              style={{ background: "#ddd", width: "1px", height: "105px" }}
            ></div>

            <li className="nav-list-flex">
              {t("Contact Us")} <FiChevronDown className="nav-down-icon" />
              <div className="nav-sub-main">
                <ul>
                  <li className="nav-line-h">
                    <Link to="/Contact" className="nav-sub-link">
                      {t("Contact")}
                    </Link>
                  </li>
                  <li className="nav-line-h">
                    <Link to="/BusinssInquery" className="nav-sub-link">
                      {t("Business Inquery")}
                    </Link>
                  </li>
                  <li className="nav-line-h">
                    <Link to="/Partnerwithus" className="nav-sub-link">
                      {t("Partner With Us")}
                    </Link>
                  </li>
                  <li className="nav-line-h">
                    <Link to="/FeeedbackSuggestion" className="nav-sub-link">
                      {t("Feedback & Suggestion")}
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <div
              style={{ background: "#ddd", width: "1px", height: "105px" }}
            ></div>

            <li className="lang-chng">
              <LanguageSelect />
            </li>
          </ul>

          <li className="lang-chng2">
            <LanguageSelect />
          </li>

          <div className="nav-btn-icon-part">
            {toggleMenu === false ? (
              <button
                className="nav-btn"
                onClick={() => {
                  setToggleMenu(true);
                  window.scrollTo(0, 0);
                }}
              >
                <AiOutlineMenu className="nav-btn-icon" />
              </button>
            ) : (
              <button className="nav-btn" onClick={() => setToggleMenu(false)}>
                <AiOutlineClose className="nav-btn-icon" />
              </button>
            )}
          </div>
        </div>
      </div>
      <>
        {toggleMenu && (
          <div className="mobile-nav-main">
            {/* <div className="logo-box">
              <img src={images.logo} alt="" className="logo" />
            </div> */}
            <ul className="mobile-nav-links">
              <li className="mob-list">
                <Link
                  to={"/"}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link"
                >
                  {t("Home")}
                </Link>
              </li>
              <li className="mob-list" style={{ position: "relative" }}>
                <Link
                  to={"/aboutus"}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link"
                >
                  {t("About Us")}
                </Link>
                <button
                  className="mov-icon-btn"
                  onClick={() => setToggleIcon(!toggleIcon)}
                >
                  {toggleIcon == true ? (
                    <>
                      <AiOutlineDown className="mob-nav-icon" />
                      <div
                        style={{
                          width: "100%",
                          height: "150px",
                          backgroundColor: "#fff",
                          position: "absolute",
                          top: "100%  ",
                          left: 0,
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                          alignItems: "start",
                          zIndex: "11",
                        }}
                      >
                        <Link
                          to="/aboutus"
                          style={{ color: "#232323", fontSize: "14px" }}
                          onClick={() => setToggleMenu(false)}
                        >
                          &gt; {t("About Comapany")}
                        </Link>
                        <Link
                          to="/MissionVisssionValues"
                          style={{ color: "#232323", fontSize: "14px" }}
                          onClick={() => setToggleMenu(false)}
                        >
                          &gt; {t("Mission, Vission & Values")}
                        </Link>
                        <Link
                          to="/OurStrength"
                          style={{
                            color: "#232323",
                            fontSize: "14px",
                            textAlign: "left",
                          }}
                          onClick={() => setToggleMenu(false)}
                        >
                          &gt; {t("Our Strength / Competencies")}
                        </Link>
                        <Link
                          to="/OurAwards"
                          style={{
                            color: "#232323",
                            fontSize: "14px",
                            textAlign: "left",
                          }}
                          onClick={() => setToggleMenu(false)}
                        >
                          &gt; {t("Awards And Recognitions")}
                        </Link>
                      </div>
                    </>
                  ) : (
                    <AiOutlineRight className="mob-nav-icon" />
                  )}
                </button>
              </li>
              <li className="mob-list">
                <Link
                  to={"/IndustrialApplication"}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link"
                >
                  {t("Industrial & Application")}
                </Link>
              </li>
              <li
                className="mob-list mob-list-last"
                style={{ position: "relative" }}
              >
                <Link
                  to={""}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link"
                >
                  {t("Products")}
                </Link>
                <>
                  <Link
                    className="mov-icon-btn"
                    onClick={() => setSecToggleIcon(!sectoggleIcon)}
                  >
                    {sectoggleIcon === true ? (
                      <AiOutlineDown className="mob-nav-icon" />
                    ) : (
                      <AiOutlineRight className="mob-nav-icon" />
                    )}
                  </Link>

                  {sectoggleIcon == true ? (
                    <>
                      {/* <AiOutlineDown className="mob-nav-icon" /> */}
                      <div
                        style={{
                          width: "100%",
                          height: "280px",
                          backgroundColor: "#fff",
                          position: "absolute",
                          top: "100%  ",
                          left: 0,
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                          alignItems: "start",
                          zIndex: "11",
                        }}
                      >
                        <Link
                          to="/ProductConveyorBelt"
                          style={{ color: "#232323", fontSize: "14px" }}
                          onClick={() => setToggleMenu(false)}
                        >
                          &gt; {t("Conveyor Belt")}
                        </Link>
                        <Link
                          to="/ProductPowerTransmission"
                          style={{ color: "#232323", fontSize: "14px" }}
                          onClick={() => setToggleMenu(false)}
                        >
                          &gt; {t("Power Transmission")}
                        </Link>
                        <li
                          className="mob-list"
                          style={{
                            position: "relative",
                            padding: "0px",
                            color: "#000",
                            fontSize: "14px",
                            border: "0px",
                          }}
                        >
                          <Link
                            sty
                            to={""}
                            // onClick={() => setToggleMenu(false)}
                            // className="mobile-nav-link"
                          >
                            &gt; {t("Industrial Lubricant")}
                          </Link>
                          <Link
                            // className="mov-icon-btn"
                            onClick={() => {
                              // setSecToggleIcon(true);
                              setToggleIconThirdSub(!toggleIconThirdSub);
                            }}
                          >
                            {toggleIconThirdSub === true ? (
                              <AiOutlineDown />
                            ) : (
                              <AiOutlineRight />
                            )}
                          </Link>
                          {toggleIconThirdSub == true ? (
                            <>
                              {/* <AiOutlineDown /> */}
                              <div
                                style={{
                                  width: "100%",
                                  height: "150px",
                                  backgroundColor: "#fff",
                                  position: "absolute",
                                  top: "100%",
                                  left: 0,
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "10px",
                                  alignItems: "start",
                                  zIndex: "11",
                                }}
                              >
                                <Link
                                  to="/ProductIndustrialOil"
                                  style={{
                                    color: "#232323",
                                    fontSize: "14px",
                                    paddingTop: "10px",
                                    paddingLeft: "10px",
                                  }}
                                  onClick={() => setToggleMenu(false)}
                                >
                                  &gt; {t("Industrial Oil")}
                                </Link>
                                <Link
                                  to="/ProductIndustrialGrease"
                                  style={{
                                    color: "#232323",
                                    fontSize: "14px",
                                    paddingLeft: "10px",
                                  }}
                                  onClick={() => setToggleMenu(false)}
                                >
                                  &gt; {t("Industrial Grease")}
                                </Link>
                              </div>
                            </>
                          ) : // <AiOutlineRight />
                          null}
                        </li>
                        <Link
                          to="/ProductTools"
                          style={{ color: "#232323", fontSize: "14px" }}
                          onClick={() => setToggleMenu(false)}
                        >
                          &gt; {t("Tools")}
                        </Link>
                        <Link
                          to="/ProductTarpaulin"
                          style={{ color: "#232323", fontSize: "14px" }}
                          onClick={() => setToggleMenu(false)}
                        >
                          &gt; {t("Tarpaulin")}
                        </Link>
                        <Link
                          to="ProductAgricultureHose"
                          style={{ color: "#232323", fontSize: "14px" }}
                          onClick={() => setToggleMenu(false)}
                        >
                          &gt; {t("Agriculture Hose")}
                        </Link>
                        <Link
                          to="ProductFlatBelt"
                          style={{ color: "#232323", fontSize: "14px" }}
                          onClick={() => setToggleMenu(false)}
                        >
                          &gt; {t("Flat Belt")}
                        </Link>
                        {/* <Link 
                          to="/OurAwards"
                          style={{ color: "#232323", fontSize: "14px" }}
                          onClick={() => setToggleMenu(false)}
                        >
                          &gt; {t("Industrial Hose")}
                        </Link> */}

                        <li
                          className="mob-list"
                          style={{
                            position: "relative",
                            padding: "0px",
                            color: "#000",
                            fontSize: "14px",
                            border: "0px",
                          }}
                        >
                          <Link
                            to={"/aboutus"}
                            // onClick={() => setToggleMenu(false)}
                            // className="mobile-nav-link"
                          >
                            &gt; {t("Industrial Hose")}
                          </Link>
                          <Link
                            // className="mov-icon-btn"
                            onClick={() => {
                              setToggleIconSecSub(!toggleIconSecSub);
                            }}
                          >
                            {toggleIconSecSub === true ? (
                              <AiOutlineDown />
                            ) : (
                              <AiOutlineRight />
                            )}
                          </Link>
                          {toggleIconSecSub == true ? (
                            <>
                              {/* <AiOutlineDown /> */}
                              <div
                                style={{
                                  width: "100%",
                                  height: "150px",
                                  backgroundColor: "#fff",
                                  position: "absolute",
                                  top: "100%",
                                  left: 0,
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "10px",
                                  alignItems: "start",
                                  zIndex: "11",
                                }}
                              >
                                <Link
                                  to="/Air_MultipurposeHose"
                                  style={{
                                    color: "#232323",
                                    fontSize: "14px",
                                    paddingTop: "10px",
                                    paddingLeft: "10px",
                                  }}
                                  onClick={() => setToggleMenu(false)}
                                >
                                  &gt; {t("Air & Multipurpose Hose")}
                                </Link>
                              </div>
                            </>
                          ) : // <AiOutlineRight />
                          null}
                        </li>
                        <Link
                          to="/ProductPulley"
                          style={{ color: "#232323", fontSize: "14px" }}
                          onClick={() => setToggleMenu(false)}
                        >
                          &gt; {t("Pulley")}
                        </Link>
                      </div>
                    </>
                  ) : // <AiOutlineRight className="mob-nav-icon" />
                  null}
                </>
              </li>
              <li
                className="mob-list mob-list-last"
                style={{ position: "relative" }}
              >
                <Link
                  to={"/Solutions"}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link"
                >
                  {t("Solution & Service")}
                </Link>
                <button
                  className="mov-icon-btn"
                  onClick={() => setthirdToggleIcon(!thirdtoggleIcon)}
                >
                  {thirdtoggleIcon == true ? (
                    <>
                      <AiOutlineDown className="mob-nav-icon" />
                      <div
                        style={{
                          width: "100%",
                          height: "150px",
                          backgroundColor: "#fff",
                          position: "absolute",
                          top: "100%  ",
                          left: 0,
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                          alignItems: "start",
                          zIndex: "11",
                        }}
                      >
                        <Link
                          to="/Solutions"
                          style={{ color: "#232323", fontSize: "14px" }}
                          onClick={() => setToggleMenu(false)}
                        >
                          &gt; {t("Solutions")}
                        </Link>
                        <Link
                          to="/ReplacementPart"
                          style={{ color: "#232323", fontSize: "14px" }}
                          onClick={() => setToggleMenu(false)}
                        >
                          &gt; {t("Replacement Parts")}
                        </Link>
                      </div>
                    </>
                  ) : (
                    <AiOutlineRight className="mob-nav-icon" />
                  )}
                </button>
              </li>
              <li
                className="mob-list mob-list-last"
                style={{ position: "relative" }}
              >
                <Link
                  to={"/contact"}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link"
                >
                  {t("Contact Us")}
                </Link>
                <button
                  className="mov-icon-btn"
                  onClick={() => setfourthToggleIcon(!fourthtoggleIcon)}
                >
                  {fourthtoggleIcon == true ? (
                    <>
                      <AiOutlineDown className="mob-nav-icon" />
                      <div
                        style={{
                          width: "100%",
                          height: "150px",
                          backgroundColor: "#fff",
                          position: "absolute",
                          top: "100%  ",
                          left: 0,
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                          alignItems: "start",
                          zIndex: "11",
                        }}
                      >
                        <Link
                          to="/Contact"
                          style={{ color: "#232323", fontSize: "14px" }}
                          onClick={() => setToggleMenu(false)}
                        >
                          &gt; {t("Contact")}
                        </Link>
                        <Link
                          to="/BusinssInquery"
                          style={{ color: "#232323", fontSize: "14px" }}
                          onClick={() => setToggleMenu(false)}
                        >
                          &gt; {t("Business Inquery")}
                        </Link>
                        <Link
                          to="/Partnerwithus"
                          style={{ color: "#232323", fontSize: "14px" }}
                          onClick={() => setToggleMenu(false)}
                        >
                          &gt; {t("Partner With Us")}
                        </Link>
                        <Link
                          to="/FeeedbackSuggestion"
                          style={{ color: "#232323", fontSize: "14px" }}
                          onClick={() => setToggleMenu(false)}
                        >
                          &gt; {t("Feedback & Suggestion")}
                        </Link>
                      </div>
                    </>
                  ) : (
                    <AiOutlineRight className="mob-nav-icon" />
                  )}
                </button>
              </li>
            </ul>
            <div className="mob-nav-iconbox">
              <button className="mob-nav-btn-icon">
                {" "}
                <a
                  href="https://www.facebook.com/jalaramgroupofcompanies"
                  target="_blank"
                >
                  <ImFacebook className="nav-social-icon" />
                </a>
              </button>
              <button className="mob-nav-btn-icon">
                <a href="https://twitter.com/Jalaram_Group" target="_blank">
                  <ImTwitter className="nav-social-icon" />
                </a>
              </button>
              <button className="mob-nav-btn-icon">
                <a
                  href="https://www.linkedin.com/authwall?trk=qf&original_referer=https://jalarammarketing.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F31145072%2Fadmin%2F"
                  target="_blank"
                >
                  <ImLinkedin2 className="nav-social-icon" />
                </a>
              </button>
              <button className="mob-nav-btn-icon">
                <a
                  href="https://www.instagram.com/jalaramgrouprajkot/"
                  target="_blank"
                >
                  <RiInstagramLine className="nav-social-icon" />
                </a>
              </button>
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default Navbar;
