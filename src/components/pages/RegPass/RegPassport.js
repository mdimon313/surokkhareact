import BannerWrapper from "../../BannerWrapper";
import RegImg from "../../../assets/img/new-user.32b65f85.png";

import FormMain from "../../FormMain";
import SectionHead from "../../SectionHead";
import SectionTitle from "../../SectionTitle";
import { useState } from "react";
import Footer from "../../Footer";

function RegPassport({ language }) {
  const [selectValue, setSelectValue] = useState("");
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
                    ? "নিবন্ধন ফর্ম (পাসপোর্ট)"
                    : "Registration (Passport)"}
                </h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12 text-center">
              <div className="banner_img">
                <img src={RegImg} alt="new user" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </BannerWrapper>
      <FormMain>
        <SectionTitle>
          {language === "bn-BD"
            ? "নিচের ফর্মে আপনার পাসপোর্ট ও মোবাইল নম্বর যাচাইপূর্বক নিবন্ধন সম্পন্ন করুন। পরবর্তীতে মোবাইল ফোনে এসএমএস বার্তার মাধ্যমে ভ্যাকসিন প্রদানের স্থান ও তারিখ পর্যায়ক্রমে নির্দিষ্ট সময়ে জানানো হবে।"
            : "Complete the registration by verifying your passport and mobile number in the form below. The place and date of delivery of the vaccine will be informed in due course through SMS message on the mobile phone."}
        </SectionTitle>
        <SectionHead>
          {language === "bn-BD" ? "পরিচয় যাচাই" : "Identity verification"}
        </SectionHead>

        <form action="/" onChange={formHandle}>
          <label className="mb-2">
            {language === "bn-BD"
              ? "শ্রেণী (ধরণ) নির্বাচন করুন:"
              : "Select type:"}
          </label>
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="input-group mb-4">
                <select
                  className="form-select"
                  value={selectValue}
                  onChange={(e) => setSelectValue(e.target.value)}
                  id="inputGroupSelect01"
                >
                  <option value="">
                    {language === "bn-BD" ? "--সিলেক্ট--" : "--Select--"}
                  </option>
                  <option value="28">
                    {language === "bn-BD"
                      ? "বিদেশি জাতীয়তা"
                      : "Foreign Nationals"}
                  </option>
                  <option value="29">
                    {language === "bn-BD"
                      ? "বাংলাদেশী কর্রমজীবী"
                      : "Bangladeshi Workers"}
                  </option>
                  <option value="30">
                    {language === "bn-BD"
                      ? "বাংলাদেশী ছাত্র"
                      : "Bangladeshi Students"}
                  </option>
                </select>
              </div>
            </div>
          </div>

          {selectValue && (
            <div className="row">
              <div className="col-lg-4 col-md-12 col-12 mt-md-3 mt-sm-3 mt-xs-3">
                <label className="mb-2">
                  {language === "bn-BD"
                    ? "পাসপোর্ট নাম্বারঃ"
                    : "Passport Number:"}
                </label>
                <input
                  type="number"
                  className="form-control input_control"
                  placeholder="AC0215425"
                />
              </div>

              <div className="col-lg-4 col-md-12 col-12 mt-md-3 mt-sm-3 mt-xs-3">
                <label className="mb-2">
                  {language === "bn-BD" ? "দেশঃ" : "Country:"}
                </label>
                <div className="input-group mb-4">
                  <select className="form-select" id="inputGroupSelect01">
                    <option value="">
                      {language === "bn-BD" ? "--সিলেক্ট--" : "--Select--"}
                    </option>
                    <option value="1">
                      {language === "bn-BD" ? "বাংলাদেশ" : "Bangladesh"}
                    </option>
                    <option value="2">
                      {language === "bn-BD" ? "পাকিস্তান" : "Pakistan"}
                    </option>
                    <option value="3">
                      {language === "bn-BD" ? "ইন্ডিয়া" : "India"}
                    </option>
                  </select>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-12 mt-md-3 mt-sm-3 mt-xs-3">
                <label className="mb-2">
                  {language === "bn-BD"
                    ? "জস্মতারিখ (পাসর্পোট অনুযায়ী)ঃ"
                    : "Date of birth (according to Passport):"}
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
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
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
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

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

export default RegPassport;
