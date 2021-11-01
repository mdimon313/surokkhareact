import React from "react";
import logo from "../assets/img/logo.png";
import "../Styles/Nav.css";
import Button from "./Button";
import { Link } from "react-router-dom";

function Nav({ language, lanHandle }) {
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Surokkha" className="img-fluid" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link d-block active"
                    aria-current="page"
                    to="/"
                  >
                    {language === "bn-BD" ? "হোম" : "Home"}
                  </Link>
                </li>
                <li className="nav-item d-block">
                  <Link className="nav-link" to="/enroll">
                    {language === "bn-BD" ? "নিবন্ধন" : "Registration"}
                  </Link>
                </li>
                <li className="nav-item d-block">
                  <Link className="nav-link" to="/birth-reg-enroll">
                    {language === "bn-BD"
                      ? "নিবন্ধন(জন্ম সনদ)"
                      : "Registration (Birth Cert)"}
                  </Link>
                </li>
                <li className="nav-item d-block">
                  <Link className="nav-link" to="/foreigner-enroll">
                    {language === "bn-BD"
                      ? "নিবন্ধন(পাসপোর্ট)"
                      : "Registration (Passport)"}
                  </Link>
                </li>
                <li className="nav-item d-block">
                  <Link className="nav-link" to="/vaccine-card">
                    {language === "bn-BD" ? "টিকা কার্ড" : "Card"}
                  </Link>
                </li>
                <li className="nav-item d-block">
                  <Link className="nav-link" to="/certificate">
                    {language === "bn-BD" ? "টিকা সনদ" : "Certificate"}
                  </Link>
                </li>
                <li className="nav-item d-block">
                  <Link className="nav-link" to="/verify">
                    {language === "bn-BD"
                      ? "টিকা সনদ যাচাই"
                      : "Verify Certificate"}
                  </Link>
                </li>
              </ul>
              {language === "bn-BD" ? (
                <Button
                  type="button"
                  className="btn btn-warning text-white"
                  lanHandle={lanHandle}
                  language="en-US"
                />
              ) : (
                <Button
                  type="button"
                  className="btn btn-warning text-white"
                  lanHandle={lanHandle}
                  language="bn-BD"
                />
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Nav;
