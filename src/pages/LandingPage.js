import React, { useEffect } from "react";
import {
  FooterUp,
  Hero,
  HomeCards,
  HomeOurStory,
  NumericDigit,
  OurBrand,
  OurProducts,
  Testimonial,
} from "../components";
import images from "./images";

import { ImArrowUp } from "react-icons/im";

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <HomeCards />
      <HomeOurStory />
      <OurProducts />
      <OurBrand />
      <Testimonial />
      <NumericDigit />
      <FooterUp />

      {/* <a
        className="whats-app"
        href="https://api.whatsapp.com/send?phone=919825710006"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp className="my-float" />
      </a> */}
      <div className="whats-app-main">
        <button className="whats-app" onClick={() => window.scrollTo(0, 0)}>
          <ImArrowUp className="float-icon" />
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
