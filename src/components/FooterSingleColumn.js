function FooterSingleColumn({ className, children }) {
  return (
    <div className="col-lg-3 col-md-3 col-sm-12">
      <div className={className}>{children}</div>
    </div>
  );
}

export default FooterSingleColumn;
