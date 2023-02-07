import "./Footer.css";
import footerLogo from "../../assets/images/footer_logo.svg";
import { FiMail, FiInstagram } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="footer_text_content">
          <div className="footer_text_card">
            <img src={footerLogo} alt="footer_logo" />
            <p className="footer_card_texts">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="footer_text_card">
            <p className="footer_card_title">Useful Links</p>
            <p className="footer_card_text">About</p>
            <p className="footer_card_text">Guide</p>
            <p className="footer_card_text">Inspiration</p>
            <p className="footer_card_text">Contact</p>
          </div>
          <div className="footer_text_card">
            <p className="footer_card_title">Resources</p>
            <p className="footer_card_text">Become a guide</p>
            <p className="footer_card_text">Legal</p>
            <p className="footer_card_text">Blog</p>
            <p className="footer_card_text">Help</p>
          </div>
          <div className="footer_text_card">
            <p className="footer_card_title">Contact Us</p>
            <p className="footer_card_text email">
              <FiMail className="footer_icons" />
              infomail@gmail.com
            </p>
            <p className="footer_card_text email">
              <TfiLocationPin className="footer_icons" />
              48 Street Road, Cairo
            </p>
            <p className="footer_card_text icons">
              <span className="icons_span">
                <FaFacebookF className="footer_radius_icons" />
              </span>
              <span className="icons_span">
                <BsTwitter className="footer_radius_icons" />
              </span>{" "}
              <span className="icons_span">
                <FiInstagram className="footer_radius_icons" />
              </span>{" "}
              <span className="icons_span">
                <FaLinkedinIn className="footer_radius_icons" />
              </span>
            </p>
          </div>
        </div>

        <div className="footer_bottom_content">
          <p className="footer_bootom_left">
            © 2022 <span className="link_logo">EgyptTour</span>
          </p>
          <p className="footer_bootom_left">Privacy Policy Term of Condition</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
