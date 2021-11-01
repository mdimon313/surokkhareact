import React from "react";
import SingleContactCard from "../../SingleContactCard";
import img from "../../../assets/img/user_headphone.png";
import "../../../Styles/Contact.css";

function Contact({ language }) {
  return (
    <section className="contacts">
      <div className="container">
        <div className="contact rounded d-flex">
          <ul className="single_contact_card align-items-center">
            <SingleContactCard link="https://surokkha.gov.bd/">
              <span className="img_headphonde">
                <img src={img} alt="user headphone" className="img-fluid" />
              </span>
              <span className="contact_title">
                {language === "bn-BD" ? "হটলাইন" : "HotLine"}
              </span>
            </SingleContactCard>

            <SingleContactCard link="tel:333">
              <span>{language === "bn-BD" ? "৩৩৩" : "333"}</span>
              <span className="contact_title">
                {language === "bn-BD"
                  ? "জাতীয় কল সেন্টার"
                  : "National Call Center"}
              </span>
            </SingleContactCard>

            <SingleContactCard link="tel:16263">
              <span>{language === "bn-BD" ? "১৬২৬৩" : "16263"}</span>
              <span className="contact_title">
                {language === "bn-BD" ? "স্বাস্থ্য বাতায়ন" : "Helth Portal"}
              </span>
            </SingleContactCard>

            <SingleContactCard link="tel:10655">
              <span>{language === "bn-BD" ? "১০৬৫৫" : "10655"}</span>
              <span className="contact_title">
                {language === "bn-BD" ? "আইইডিসিআর" : "IEDCR"}
              </span>
            </SingleContactCard>

            <SingleContactCard link="tel:09666777222">
              <span>
                {language === "bn-BD" ? "০৯৬৬৬৭৭৭২২২" : "09666777222"}
              </span>
              <span className="contact_title">
                {language === "bn-BD"
                  ? "কোভিড-১৯ টেলিহেলথ"
                  : "Covid-19 Telehealth"}
              </span>
            </SingleContactCard>

            <SingleContactCard link="https://surokkha.gov.bd/">
              <span className="img_headphonde">
                <img src={img} alt="user headphone" className="img-fluid" />
              </span>
              <span className="contact_title">
                {language === "bn-BD" ? "সকল কল সেন্টার" : "All Call Center"}
              </span>
            </SingleContactCard>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
