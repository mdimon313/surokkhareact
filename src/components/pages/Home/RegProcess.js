import SectionHead from "../../SectionHead";
import img from "../../../assets/img/vaccine_process/1.png";
import img1 from "../../../assets/img/vaccine_process/2.png";
import img2 from "../../../assets/img/vaccine_process/3.png";
import "../../../Styles/RegPorcess.css";
import SingleCard from "../../SingleCard";

function RegProcess({ language }) {
  return (
    <section className="pt-5 reg_process">
      <div className="container">
        <div className="process px-3 py-5">
          <SectionHead>
            {language === "bn-BD"
              ? "কোভিড-১৯ করোনা ভ্যাকসিন গ্রহণের প্রক্রিয়া"
              : "The process of receiving the Covid-19 corona vaccine"}
          </SectionHead>
          <div className="row mt-5 process_box">
            <SingleCard
              img={img}
              title={
                language === "bn-BD"
                  ? "অনলাইন রেজিস্ট্রেশন"
                  : "Online Registration"
              }
              desc={
                language === "bn-BD"
                  ? "প্রথমে এই পোর্টালের মাধ্যমে জাতীয় পরিচয়পত্র ও সঠিক মোবাইল নম্বর যাচাইপূর্বক অনলাইনে নিবন্ধন সম্পন্ন করবেন।"
                  : "First, you have to complete the online registration by verifying your national identity card and correct mobile number through this portal."
              }
            />
            <SingleCard
              img={img1}
              title={
                language === "bn-BD" ? "এসএমএস নোটিফিকেশন" : "SMS Notification"
              }
              desc={
                language === "bn-BD"
                  ? "অনলাইনে নিবন্ধন পরবর্তী তথ্য যাচাইপূর্বক পর্যায়ক্রমে টিকা প্রদানের তারিখ ও কেন্দ্রের নাম উল্লেখপূর্বক মুঠোফোনে খুদেবার্তা পাবেন।"
                  : "After registering online, you will receive a text message on your mobile phone mentioning the date of vaccination and the name of the vaccination center."
              }
            />
            <SingleCard
              img={img2}
              title={language === "bn-BD" ? "ভ্যাকসিন" : "Vaccination"}
              desc={
                language === "bn-BD"
                  ? "মুঠোফোনে খুদেবার্তা প্রাপ্তি সাপেক্ষে টিকাকার্ড জাতীয় পরিচয়পত্র ও সম্মতিপত্রসহ নির্দিষ্ট তারিখে টিকাদান কেন্দ্রে স্ব-শরীরে উপস্থিত হয়ে কোভিড-১৯ টিকা গ্রহণ করবেন।"
                  : "Subject to receiving a text message on the mobile phone, you have to appear in person at the vaccination center on the specified date with the vaccine card, national identity card and signed consent form to receive the Covid-19 vaccine."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegProcess;
