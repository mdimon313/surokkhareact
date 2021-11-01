import React from "react";
import "../Styles/SingleCard.css";
import { Link } from "react-router-dom";

function CardSingle({ link, cardName, cardIcon, cardTitle }) {
  return (
    <Link to={link} className={`single_sm_card ${cardName} pe-3 ps-4 py-2`}>
      <div className="card card_sm">
        <div className="card_head_sm d-flex align-items-center">
          <span>
            <img src={cardIcon} alt="single card" />
          </span>
          <h2 className="text-capitalize">{cardTitle}</h2>
        </div>
      </div>
    </Link>
  );
}

export default CardSingle;
