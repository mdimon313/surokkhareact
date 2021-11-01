import FooterSingleColumn from "./FooterSingleColumn";
import "../Styles/Footer.css";
import FooterLogo from "../assets/img/logo_white.8ef9a1c4.svg";
import AffiliateImg from "../assets/img/org.ed08c793.png";
import AffiliateImg1 from "../assets/img/org.ed08c793.png";

function Footer({ language }) {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <FooterSingleColumn className="f-logo">
            <img src={FooterLogo} alt="Footer Logo" className="img-fluid" />
          </FooterSingleColumn>

          <FooterSingleColumn className="f_menu">
            <ul>
              <li>
                <a href="/" className="text-capitalize">
                  {language === "bn-BD" ? "জিজ্ঞাসা" : "FAQ"}
                </a>
              </li>
              <li>
                <a href="/" className="text-capitalize">
                  {language === "bn-BD" ? "সহায়িকা" : "Manual"}
                </a>
              </li>
              <li>
                <a href="/" className="text-capitalize">
                  {language === "bn-BD" ? "প্রাইভেসি পলিসি" : "privacy policy"}
                </a>
              </li>
              <li>
                <a href="/" className="text-capitalize">
                  {language === "bn-BD"
                    ? "টার্মস অফ সার্ভিসেস"
                    : "terms of service"}
                </a>
              </li>
              <li>
                <a href="/" className="text-capitalize">
                  {language === "bn-BD"
                    ? "অন্যান্য সহযোগী প্রতিষ্ঠানসমূহ"
                    : "other Affiliates"}
                </a>
              </li>
            </ul>
          </FooterSingleColumn>

          <FooterSingleColumn className="affiliates_area">
            <h6 className="text-capitalize text-white">
              {language === "bn-BD"
                ? "কারিগরি সহায়তায় - তথ্য ও যোগাযোগ প্রযুক্তি অধিদপ্তর  "
                : "Developed by - department of ICT"}
            </h6>
            <img src={AffiliateImg} alt="Ict" className="img-fluid" />
          </FooterSingleColumn>

          <FooterSingleColumn className="affiliates_area">
            <h6 className="text-capitalize text-white">
              {language === "bn-BD" ? "সহযোগী সংস্থাসমূহ - " : "affilites -"}
            </h6>
            <img src={AffiliateImg1} alt="affiliates" className="img-fluid" />
          </FooterSingleColumn>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
