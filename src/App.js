import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import VerifyCir from "./components/pages/VerifyCirtificate/VerifyCir";
import Cirtificate from "./components/pages/Cirtificate/Cirtificate";
import RegPassport from "./components/pages/RegPass/RegPassport";
import RegBirth from "./components/pages/RegBirth/RegBirth";
import Registration from "./components/pages/Registration/Registration";
import Home from "./components/pages/Home/Home";
import VaccineCard from "./components/pages/VaccineCard/VaccineCard";
import "./Styles/App.css";
// import Error from "./components/Error";

const App = () => {
  const [language, setLanguage] = useState("en-US");
  function changeLanguage(lan) {
    setLanguage(lan);
  }

  return (
    <>
      <Nav language={language} lanHandle={changeLanguage} />
      <Switch>
        <Route exact path="/">
          {() => <Home language={language} />}
        </Route>
        <Route exact path="/enroll">
          {() => <Registration language={language} />}
        </Route>
        <Route exact path="/birth-reg-enroll">
          {() => <RegBirth language={language} />}
        </Route>
        <Route exact path="/foreigner-enroll">
          {() => <RegPassport language={language} />}
        </Route>
        <Route exact path="/vaccine-card">
          {() => <VaccineCard language={language} />}
        </Route>
        <Route exact path="/certificate">
          {() => <Cirtificate language={language} />}
        </Route>
        <Route exact path="/verify">
          {() => <VerifyCir language={language} />}
        </Route>
        {/* <Route component={Error} /> */}
      </Switch>
    </>
  );
};

export default App;
