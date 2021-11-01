import React from "react";
import regIcon from "../assets/img/banner_icon_img/regicon.png";
import regProcess from "../assets/img/banner_icon_img/reg_process.png";
import "../Styles/CardLarg.css";
import { Link } from "react-router-dom";

function cardLarg({ language }) {
  return (
    <div className="card_large">
      <div className="card card_lg me-lg-2 me-md-2">
        <Link
          to="/enroll"
          className="card_reg_top d-flex  align-items-center justify-content-between flex-column"
        >
          <div className="card_head d-flex align-items-center">
            <span>
              <img src={regIcon} className="img-fluid" alt="reg icon" />
            </span>
            <h2 className="me-2 text-uppercase">
              {language === "bn-BD"
                ? "ভ্যাকসিনের জন্য নিবন্ধন করুন"
                : "Vacine Registration"}
            </h2>
          </div>
          <div className="reg_process">
            <h6 className="mb-3 text-center">
              {language === "bn-BD"
                ? "নিবন্ধন সময় প্রয়োজন হবে"
                : "During Residtration You Need"}
            </h6>
            <img src={regProcess} alt="reg precess" className="img-fluid" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default cardLarg;
