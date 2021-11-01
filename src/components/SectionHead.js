import React from "react";

function SectionHead({ children, ...res }) {
  return (
    <div className="sectionTitle">
      <h1 {...res}>{children}</h1>
    </div>
  );
}

export default SectionHead;
