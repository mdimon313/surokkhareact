import img from "../../../assets/img/download.png";

function GetApps({ language }) {
  return (
    <section className="dwn_app py-5">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 text-center">
            <h6 className="dwn_text">
              {language === "bn-BD" ? "অ্যাপ ডাউনলোড করুন" : "Download Now"}
            </h6>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 text-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.codersbucket.surokkha_app"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img} alt="plastore img" className="img-fluid" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetApps;
