import SectionHead from "../../SectionHead";
import img from "../../../assets/img/mujib100new.png";
import img1 from "../../../assets/img/download.png";
import img2 from "../../../assets/img/apple.png";
import "../../../Styles/MujibPortal.css";
import SinglePortalCard from "../../SinglePortalCard";

function MujibPortal({ language }) {
  return (
    <section className="py-5">
      <div className="container">
        <SectionHead>
          {language !== "en-US" ? "মুজিব ১০০" : "Mujib 100"}
        </SectionHead>
        <div
          class="
              m_portal_wrapper
              row
              align-items-center
              justify-content-center
              p-5
            "
        >
          <SinglePortalCard
            src={img}
            title={
              language === "bn-BD" ? "মুজিব ১০০ পোর্টাল" : "Mujib 100 portal"
            }
            link="/"
          />
          <SinglePortalCard
            src={img1}
            title={
              language === "bn-BD"
                ? "মুজিব ১০০ এন্ড্রয়েড অ্যাপ"
                : "Mujib 100 Android App"
            }
            link="/"
          />
          <SinglePortalCard
            src={img2}
            title={
              language === "bn-BD"
                ? "মুজিব ১০০ আইওএস অ্যাপ"
                : "Mujib 100 iOS App"
            }
            link="/"
          />
        </div>
      </div>
    </section>
  );
}

export default MujibPortal;
