import React from "react";

// Images
import Logo from "../assets/img/logo.png";
import BbcLogo from "../assets/img/logo-bbc.png";
import ForbesLogo from "../assets/img/logo-forbes.png";
import TechCrunchLogo from "../assets/img/logo-techcrunch.png";
import BiLogo from "../assets/img/logo-bi.png";

const Header = (props) => {
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="header__logo" />
      <h3 className="heading-3">Your own home</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <button className="header__btn btn">View our properties</button>
      <div className="header__seenon-text">Seen on</div>
      <div className="header__seenon-logos">
        <img src={BbcLogo} alt="bbc logo" />
        <img src={ForbesLogo} alt="forbes logo" />
        <img src={TechCrunchLogo} alt="tech crunch logo" />
        <img src={BiLogo} alt="bi logo" />
      </div>
    </div>
  );
};

export default Header;
