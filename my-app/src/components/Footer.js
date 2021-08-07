import React from "react";
import facebook from "../front-end-dev-test-assets/facebook.svg";
import instagram from "../front-end-dev-test-assets/instagram.svg";

const Footer = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-bottom">
      <div className="socialLinksFooter">
        <a href="https://www.facebook.com/gdukes707" target="blank">
          <img src={facebook} alt="Facebook Logo"></img>
        </a>
        <a href="https://www.instagram.com/geddydukes/" target="blank">
          <img src={instagram} alt="instagram Logo"></img>
        </a>
      </div>
    </nav>
  );
};

export default Footer;
