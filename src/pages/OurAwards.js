import React, { useEffect } from "react";
import { AboutOurAwards } from "../components";

const OurAwards = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutOurAwards />
    </div>
  );
};

export default OurAwards;
