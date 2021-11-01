import BannerWrapper from "../../BannerWrapper";
import CirtificateImg from "../../../assets/img/new-certification-card.ac1c4d8c.png";
import Footer from "../../Footer";
import FormMain from "../../FormMain";
import SectionHead from "../../SectionHead";
import SectionTitle from "../../SectionTitle";
import { Link } from "react-router-dom";

function Cirtificate({ language }) {
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
                    ? "টিকা সনদ যাচাই"
                    : "Verify Certificate"}
                </h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12 text-center">
              <div className="banner_img">
                <img
                  src={CirtificateImg}
                  alt="cirtificate"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </BannerWrapper>
      <FormMain>
        <SectionTitle>
          {language === "bn-BD"
            ? 'নিচের ফরমে আপনার জাতীয় পরিচয়পত্র নম্বর, জন্ম তারিখ (জাতীয় পরিচয়পত্র অনুযায়ী) ও ভ্যাকসিন সনদপত্র নম্বর প্রদান করে "ভ্যাকসিন সনদ যাচাই করুন" বাটনে ক্লিক করে ভ্যাকসিন সনদ যাচাই করা যাবে।'
            : 'Vaccination Certificate can be verified by clicking on "Verify Vaccination Certificate" button using NID, date of birth and Vaccination Certificate Number.'}
        </SectionTitle>
        <SectionHead className="card_header_link mb-4">
          <Link href="/">
            {language === "bn-BD"
              ? "টিকা সনদ যাচাই (পাসপোর্টধারী বাংলাদেশি এবং বিদেশি নাগরিক)"
              : "Download your Vaccine Card (Passport holder Bangladeshi and Foreigners"}
          </Link>
        </SectionHead>

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

          <div class="col-lg-4 col-md-12 col-12 mt-lg-5 mt-md-4 mt-sm-4 mt-xs-4">
            <label class="mb-2">
              {language === "bn-BD"
                ? "ভ্যাকসিন সনদপত্র নম্বর:"
                : "Vaccination Certificate Number"}
              :
            </label>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                BD
              </span>
              <input
                type="text"
                class="form-control input_control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
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

export default Cirtificate;
