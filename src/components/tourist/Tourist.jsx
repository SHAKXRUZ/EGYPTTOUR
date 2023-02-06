import "./Tourist.css";
import touristImg from "../../assets/images/tourist.png";
import tourist_bottom from "../../assets/images/tourist_bottom.png";
const Tourist = () => {
  return (
    <div className="tourist">
      <img className="touristImages" src={touristImg} alt="tourist_images" />
      <div className="tourist_bottom">
        <div className="tourist_bottom_left">
          <p className="tourist_left_text1">Be referenced on our site,</p>
          <p className="tourist_left_text2">it's 100% free!</p>
        </div>
        <div className="tourist_bottom_right">
          <button className="tourist_right_btn">I am a Tourist Guide</button>
          <div className="tourist_right_bottom">
            <img src={tourist_bottom} alt="tourist_images" />
            <p className="tourist_right_bottom_text">
              <span className="tourist_join">1000+</span> tourist join us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tourist;
