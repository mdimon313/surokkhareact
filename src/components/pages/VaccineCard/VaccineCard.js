import BannerWrapper from "../../BannerWrapper";
import VaccineCardImg from "../../../assets/img/new-card.73172282.png";
import Footer from "../../Footer";
import FormMain from "../../FormMain";
import SectionHead from "../../SectionHead";
import SectionTitle from "../../SectionTitle";
import { Link } from "react-router-dom";

function VaccineCard({ language }) {
  function formHandle(e) {
    e.preventDefault();
  }

  return (
    <>
      <BannerWrapper className="reg_banner py-3">
        <div className="container banner_wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12 text-center">
              <div className="heading">
                <h2>
                  {language === "bn-BD"
                    ? "কোভিড-১৯ ভ্যাকসিন কার্ড সংগ্রহ"
                    : "Vaccine Card Download"}
                </h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12 text-center">
              <div className="banner_img">
                <img
                  src={VaccineCardImg}
                  alt="cirtificate"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </BannerWrapper>
      <FormMain>
        <SectionHead className="card_header_link mb-4">
          <Link to="/birth-reg-enroll">
            {language === "bn-BD"
              ? "টিকা কার্ড ডাউনলোড (জন্ম সনদ)"
              : "Download your Vaccine Card (Birth Certificate)"}
          </Link>
        </SectionHead>
        <SectionHead className="card_header_link mb-4">
          <Link to="/foreigner-enroll">
            {language === "bn-BD"
              ? "টিকা কার্ড ডাউনলোড (পাসপোর্টধারী বাংলাদেশি এবং বিদেশি নাগরিক)"
              : "Download your Vaccine Card (Passport holder Bangladeshi and Foreigners"}
            )
          </Link>
        </SectionHead>

        <SectionTitle>
          {language === "bn-BD"
            ? 'নিচের ফরমে আপনার জাতীয় পরিচয়পত্র নম্বর ও জন্ম তারিখ (জাতীয় পরিচয়পত্র অনুযায়ী) প্রদান করে "যাচাই করুণ" বাটনে ক্লিক করলে নিবন্ধনের সময় প্রদানকৃত মোবাইল নম্বরে একটি OTP কোড SMS এর মাধ্যমে পাঠানো হবে, তা পরবর্তী OTP কোড ঘরে প্রদান করে "ভ্যাকসিন কার্ড ডাউনলোড" বাটনে ক্লিক করলে ভ্যাকসিন কার্ড সংগ্রহ করা যাবে।'
            : 'Enter your National Identity Card number and date of birth (according to the National Identity Card) in the form below and click on the "Verify" button. An OTP code will be sent via SMS to the mobile number provided at the time of registration. Then, you can download the Covid-19 Vaccine Certificate.'}
        </SectionTitle>

        <form action="/" onChange={formHandle}>
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12 mt-md-3 mt-sm-3 mt-xs-3">
              <label className="mb-2">
                {language === "bn-BD"
                  ? "জাতীয় পরিচয় পত্র নাম্বারঃ"
                  : "National Identity Card Number:"}
              </label>
              <input
                type="number"
                className="form-control input_control"
                placeholder={
                  language === "bn-BD"
                    ? "উদাহারণ - ১২৩৪৫৬৭৮৯"
                    : "Example - 123456789"
                }
              />
            </div>

            <div className="col-lg-4 col-md-12 col-12 mt-md-3 mt-sm-3 mt-xs-3">
              <label className="mb-2">
                {language === "bn-BD"
                  ? "জস্মতারিখ (জাতীয় পরিচয় পত্র অনুযায়ী)ঃ"
                  : "Date of birth (according to national identity card):"}
              </label>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                  <select
                    className="form-select mt-lg-0 mt-md-3 mt-sm-3"
                    id="inputGroupSelect01"
                  >
                    <option value="0">
                      {language === "bn-BD" ? "দিন..." : "Day..."}
                    </option>
                    {/* {
                        for(let i = 1; i < 10; i++)
                         console.log(i + "\n");
                        // <option key={i} value={i}>
                        //   {i}
                        // </option>
                    } */}
                  </select>
                </div>
                <div className="col-lg-4 mt-lg-0 col-md-4 col-sm-12 col-xs-12 ">
                  <select
                    className="form-select mt-lg-0 mt-md-3 mt-sm-3"
                    id="inputGroupSelect01"
                  >
                    <option value="0">
                      {language === "bn-BD" ? "মাস..." : "Month..."}
                    </option>
                  </select>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                  <select
                    className="form-select mt-lg-0  mt-md-3 mt-sm-3"
                    id="inputGroupSelect01"
                  >
                    <option value="0">
                      {language === "bn-BD" ? "বছর..." : "Years..."}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-5">
              <div className="verify_option card border">
                <div className="card_number border-bottom p-2">
                  <h4 className="text-center user-select-none">I M G 0 2 E</h4>
                </div>
                <div className="verify_box p-2">
                  <p className="verify_title">
                    {language === "bn-BD"
                      ? "উপরের লিখাটি সঠিকভাবে নিচে লিখুন"
                      : "Write the letters from above here"}
                  </p>
                  <input type="text" className="form-control input_control" />
                </div>
              </div>
              <button
                type="button"
                className="btn btn-secondary w-100 mt-3 disabled verify_btn"
              >
                {language === "bn-BD" ? "যাচাই" : "Verify"}
              </button>
            </div>
          </div>
        </form>
      </FormMain>
      <Footer language={language} />
    </>
  );
}

export default VaccineCard;
