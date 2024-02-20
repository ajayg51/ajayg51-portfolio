import "./footer.css";

import Assets from "../../assets/Assets";
import FooterContent from "./footer_content";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <a href={FooterContent.mobNo} target="mob" className="footer-text">
          <span className="footer-links">{FooterContent.mobNoCleanText}</span>
        </a>
        <a href={FooterContent.gmailID} target="gmail" className="footer-text">
          <span className="footer-links">{FooterContent.gmailIDCleanLink}</span>
        </a>
        <a
          href={FooterContent.resumeLink}
          target="resume"
          className="footer-text"
        >
          <span className="footer-links">Click here to view resume</span>
        </a>
      </div>
    </>
  );
};

export default Footer;
