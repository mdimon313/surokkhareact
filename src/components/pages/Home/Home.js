import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import MujibPortal from "./MujibPortal";
import GetApps from "./GetApps";
import RegProcess from "./RegProcess";
import Footer from "../../Footer";
function Home({ language }) {
  return (
    <>
      <Banner language={language} />
      <Contact language={language} />
      <RegProcess language={language} />
      <GetApps language={language} />
      <MujibPortal language={language} />
      <Footer language={language} />
    </>
  );
}

export default Home;
