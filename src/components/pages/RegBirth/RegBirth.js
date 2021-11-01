import BannerWrapper from "../../BannerWrapper";
import RegImg from "../../../assets/img/new-user.32b65f85.png";
import Footer from "../../Footer";
import FormMain from "../../FormMain";
import SectionHead from "../../SectionHead";
import SectionTitle from "../../SectionTitle";

function RegBirth({ language }) {
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
                    ? "নিবন্ধন ফর্ম (জন্ম সনদ)"
                    : "Registration (Birth Certificate)"}
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
            ? "নিচের ফর্মে আপনার জন্ম সনদ ও মোবাইল নম্বর যাচাইপূর্বক নিবন্ধন সম্পন্ন করুন। পরবর্তীতে মোবাইল ফোনে এসএমএস বার্তার মাধ্যমে ভ্যাকসিন প্রদানের স্থান ও তারিখ পর্যায়ক্রমে নির্দিষ্ট সময়ে জানানো হবে।"
            : "Complete the registration by verifying your birth certificate number and mobile number in the form below. The place and date of delivery of the vaccine will be informed in due course through SMS message on the mobile phone."}
        </SectionTitle>
        <SectionHead>
          {language === "bn-BD" ? "পরিচয় যাচাই" : "Identity verification"}
        </SectionHead>

        <form action="/" onChange={formHandle}>
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12 mt-md-3 mt-sm-3 mt-xs-3">
              <label className="mb-2">
                {language === "bn-BD"
                  ? "ন্যাশনাল আইডি কার্ড নাম্বারঃ"
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
                  ? "জন্মতারিখ (জাতীয় পরিচয় পত্র অনুযায়ী) ঃ"
                  : "Date of birth (according to national identity card):"}
              </label>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                  <select
                    className="form-select mt-lg-0 mt-md-3 mt-sm-3"
                    id="inputGroupSelect01"
                  >
                    <option value="0">
                      {language === "bn-BD" ? "তারিখ" : "Day..."}
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
                      {language === "bn-BD" ? "মাস" : "Month..."}
                    </option>
                  </select>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                  <select
                    className="form-select mt-lg-0  mt-md-3 mt-sm-3"
                    id="inputGroupSelect01"
                  >
                    <option value="0">
                      {language === "bn-BD" ? "বছর" : "Years..."}
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

export default RegBirth;
