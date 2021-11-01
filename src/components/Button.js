import React from "react";

function Button({ type, children, className, language, lanHandle }) {
  return (
    <>
      <button
        type={type}
        className={className}
        onClick={() => lanHandle(language)}
      >
        {language !== "bn-BD" ? "English" : "বাংলা"}
      </button>
    </>
  );
}

export default Button;
