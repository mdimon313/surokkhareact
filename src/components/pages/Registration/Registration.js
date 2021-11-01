import BannerWrapper from "../../BannerWrapper";
import RegImg from "../../../assets/img/new-user.32b65f85.png";
import Footer from "../../Footer";
import FormMain from "../../FormMain";
import SectionHead from "../../SectionHead";
import SectionTitle from "../../SectionTitle";
import { useState } from "react";

function Registration({ language }) {
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
                    ? "কোভিড-১৯ ভ্যাকসিন নিবন্ধন ফর্ম"
                    : "Vaccine Registration"}
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
            ? "নিচের ফর্মে আপনার জাতীয় পরিচয়পত্র ও মোবাইল নম্বর যাচাইপূর্বক নিবন্ধন সম্পন্ন করুন। পরবর্তীতে মোবাইল ফোনে এসএমএস বার্তার মাধ্যমে ভ্যাকসিন প্রদানের স্থান ও তারিখ পর্যায়ক্রমে নির্দিষ্ট সময়ে জানানো হবে।"
            : "Complete the registration by verifying your national identity card and mobile number in the form below. The place and date of delivery of the vaccine will be informed in due course through SMS message on the mobile phone."}
        </SectionTitle>

        <SectionHead>
          {language === "bn-BD" ? "পরিচয় যাচাই" : "Identity verification"}
        </SectionHead>

        <form action="/" onChange={formHandle}>
          <label className="mb-2">
            {language === "bn-BD" ? "সিলেক্ট টাইপঃ" : "Select type:"}
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
                  <option value="">--Select--</option>
                  <option value="1">
                    Citizen registration (25 years &amp; above)
                  </option>
                  <option value="2">
                    All officers and employees of the Government Health and
                    Family Planning Department
                  </option>
                  <option value="3">
                    Approved private health and family planning
                    officers-employees
                  </option>
                  <option value="4">
                    All directly involved government and private health care
                    officers-employees
                  </option>
                  <option value="5">
                    Heroic freedom fighters and heroines
                  </option>
                  <option value="6">Front-line law enforcement agency</option>
                  <option value="7">
                    Military and paramilitary defense forces
                  </option>
                  <option value="24">Civilian Aircraft</option>
                  <option value="8">
                    Essential Offices for governance the state
                  </option>
                  <option value="31">Bar Council Registrar Attorney</option>
                  <option value="23">Educational Institutions</option>
                  <option value="9">Front-line media workers</option>
                  <option value="10">Elected Public representative</option>
                  <option value="11">
                    Front-line officers and employees of City Corporation and
                    the municipality
                  </option>
                  <option value="12">
                    Religious Representatives (of all religions)
                  </option>
                  <option value="13">Engaged in burial</option>
                  <option value="14">
                    Government officials and employees at the forefront of
                    emergency electricity, water, gas, sewerage and fire
                    services.
                  </option>
                  <option value="15">
                    Government officials and employees of railway stations,
                    airports, Land ports and seaports
                  </option>
                  <option value="16">
                    Government officials and employees involved in emergency
                    public service in districts and upazilas
                  </option>
                  <option value="17">Bank officer-employee</option>
                  <option value="32">Farmer</option>
                  <option value="33">Workers</option>
                  <option value="19">National players</option>
                  <option value="25">
                    Students in medical education related subjects
                  </option>
                  <option value="26">
                    {language === "bn-BD"
                      ? "১৮ বছর ও তার উপরে"
                      : "Student 18 years and above"}
                  </option>
                </select>
              </div>
            </div>
          </div>

          {selectValue && (
            <div className="row">
              <div className="col-lg-4 col-md-12 col-12 mt-md-3 mt-sm-3 mt-xs-3">
                <label className="mb-2">National Identity Card Number:</label>
                <input
                  type="number"
                  className="form-control input_control"
                  placeholder="Example - 123456789"
                />
              </div>

              <div className="col-lg-4 col-md-12 col-12 mt-md-3 mt-sm-3 mt-xs-3">
                <label className="mb-2">
                  {language === "bn-BD"
                    ? "জন্মতারিখ (ভোটার কার্ড অনুযায়ী)"
                    : "Date of birth (according to national identity card)"}{" "}
                </label>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                    <select
                      className="form-select mt-lg-0 mt-md-3 mt-sm-3"
                      id="inputGroupSelect01"
                    >
                      <option value="0">Day...</option>
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
                      <option value="0">Month...</option>
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
                      <option value="0">Years...</option>
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
                Verify
              </button>
            </div>
          </div>
        </form>
      </FormMain>
      <Footer language={language} />
    </>
  );
}

export default Registration;
