import "./About.css";
import aboutCard1 from "../../assets/images/about_card1.png";
import aboutCard2 from "../../assets/images/about_card2.png";
import aboutCard3 from "../../assets/images/about_card3.png";

import { FiArrowUpRight } from "react-icons/fi";
const About = () => {
  return (
    <div className="about">
      <h2 className="about_title">Learn more About Egypt</h2>
      <div className="about_content">
        <div className="about_card_left">
          <img
            className="about_cards1_images"
            src={aboutCard1}
            alt="about_card_images"
          />
          <button className="about_card1_btn1">Hotel</button>
          <p className="about_card1_title">
            Where to sleep in Luxor? <FiArrowUpRight className="abot_arrow" />
          </p>
        </div>

        <div className="about_card_right">
          <dic className="about_cards">
            <img
              className="about_cards1_images"
              src={aboutCard2}
              alt="about_card_images"
            />
            <div className="about_cards_right">
              <button className="about_card1_btn2">Restaurant</button>
              <p className="about_card1_title">
                5 restaurant in Cairo <FiArrowUpRight className="abot_arrow" />
              </p>
            </div>
          </dic>
          <dic className="about_cards">
            <img
              className="about_cards1_images"
              src={aboutCard3}
              alt="about_card_images"
            />
            <div className="about_cards_right">
              <button className="about_card1_btn3">Advance & Tip</button>
              <p className="about_card1_title">
                Is Egypt dangerous?
                <FiArrowUpRight className="abot_arrow" />
              </p>
            </div>
          </dic>
        </div>
      </div>
    </div>
  );
};
export default About;
