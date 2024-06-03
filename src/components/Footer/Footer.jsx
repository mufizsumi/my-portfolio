import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
    <img src={Wave} alt="" style={{ width: "100%" }} />
    <div className="f-content">
      <span>
        <a href="mailto:mufizsumi09@gmail.com" className="email-link">mufizsumi09@gmail.com</a>
      </span>
      <div className="f-icons">
        <a href="https://www.linkedin.com/in/mufeez-ullah-webdeveloper/" target="_blank" rel="noopener noreferrer">
          <Linkedin color="white" size={"3rem"} />
        </a>
        <a href="https://twitter.com/mufeezullah3" target="_blank" rel="noopener noreferrer">
          <Twitter color="white" size={"3rem"} />
        </a>
        <a href="https://github.com/mufizsumi" target="_blank" rel="noopener noreferrer">
          <Github color="white" size={"3rem"} />
        </a>
      </div>
    </div>
  </div>
  );
};

export default Footer;
