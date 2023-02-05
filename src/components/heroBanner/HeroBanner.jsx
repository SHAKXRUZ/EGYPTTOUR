import "./HeroBanner.css";
import HeroBannerImg from "../../assets/images/heroBanner.png";
import { MdKeyboardArrowDown } from "react-icons/md";
const HeroBanner = () => {
  return (
    <div className="hero">
      <img className="hero_img" src={HeroBannerImg} alt="heroBannerImg" />
      <div className="heroBannerBottom">
        <div className="heroBottom_card">
          <p className="heroBottom_title">Gender</p>
          <p className="heroBottom_text">
            Male <MdKeyboardArrowDown />
          </p>
        </div>
        <p className="heroBottom_linr"></p>
        <div className="heroBottom_card">
          <p className="heroBottom_title">Age</p>
          <p className="heroBottom_text">
            24+ <MdKeyboardArrowDown />
          </p>
        </div>
        <p className="heroBottom_linr"></p>
        <div className="heroBottom_card">
          <p className="heroBottom_title">Language</p>
          <p className="heroBottom_text">
            English <MdKeyboardArrowDown />
          </p>
        </div>
        <p className="heroBottom_linr"></p>
        <div className="heroBottom_card">
          <p className="heroBottom_title">Lacalisation</p>
          <p className="heroBottom_text">
            Cairo <MdKeyboardArrowDown />
          </p>
        </div>
        <button className="heroBottom_btn">Search</button>
      </div>
    </div>
  );
};
export default HeroBanner;
