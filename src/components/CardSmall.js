import React from "react";
import CardSingle from "./CardSingle";
import statusIcon from "../assets/img/banner_icon_img/status.png";
import vaccinCard from "../assets/img/banner_icon_img/vaccincard.png";
import vaccinfile from "../assets/img/banner_icon_img/vaccinfile.png";
import question from "../assets/img/banner_icon_img/question.png";

function CardSmall({ language }) {
  return (
    <div className="card_small d-flex flex-lg-column flex-md-column mt-3">
      <CardSingle
        link="/vaccine-status"
        cardName="status"
        cardIcon={statusIcon}
        cardTitle={language === "bn-BD" ? "নিবন্ধন স্ট্যাটাস" : "Check Status"}
      />
      <CardSingle
        link="/vaccine-card"
        cardName="vaccine_card"
        cardIcon={vaccinCard}
        cardTitle={language === "bn-BD" ? "টিকা কার্ড সংগ্রহ" : "Vaccine Card"}
      />
      <CardSingle
        link="/certificate"
        cardName="certificate"
        cardIcon={vaccinfile}
        cardTitle={language === "bn-BD" ? "টিকা সনদ সংগ্রহ" : "Certificate"}
      />
      <CardSingle
        link="/faq"
        cardName="faq"
        cardIcon={question}
        cardTitle={language === "bn-BD" ? "সচরাচর জিজ্ঞাসা" : "FAQ"}
      />
    </div>
  );
}

export default CardSmall;
