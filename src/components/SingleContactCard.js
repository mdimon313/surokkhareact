import React from "react";
function SingleContactCard({ link, children }) {
  return (
    <>
      <li className="nav-item text-center">
        <a
          href={link}
          className="
                    nav-link
                    d-inline-flex
                    align-items-center
                    justify-content-center
                    flex-column
                  "
        >
          {children}
        </a>
      </li>
    </>
  );
}

export default SingleContactCard;
