import "../Styles/BannerWrapper.css";

function BannerWrapper({ className, children }) {
  return <section className={className}>{children}</section>;
}

export default BannerWrapper;
