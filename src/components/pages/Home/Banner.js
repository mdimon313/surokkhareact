import React from "react";
import "../../../Styles/Banner.css";
import BannerWrapper from "../../BannerWrapper";
import CardLarg from "../../CardLarg";
import CardSmall from "../../CardSmall";

function Banner({ language }) {
  return (
    <BannerWrapper className="banner py-5">
      <div className="container">
        <div className="cards d-flex justify-content-between align-items-center sm-flex-wrap">
          <CardLarg language={language} />
          <CardSmall language={language} />
        </div>
      </div>
    </BannerWrapper>
    // <div className="banner py-5">
    // </div>
  );
}

export default Banner;
