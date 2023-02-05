import "./Card.css";
import Cards_images1 from "../../assets/images/cards_images1.png";
import Cards_images2 from "../../assets/images/cards_images2.png";
import Cards_images3 from "../../assets/images/cards_images3.png";
import Cards_images4 from "../../assets/images/cards_images4.png";
import { AiFillStar } from "react-icons/ai";

const Card = () => {
  return (
    <div className="card">
      <div className="card_title">
        <h2 className="cards_title">Guides for you!</h2>
        <button className="cards_btn">See All Guides</button>
      </div>
      <div className="media_cards">
        <div className="cards_group">
          <div className="cards">
            <img className="cards_images" src={Cards_images1} alt="cards_img" />
            <div className="cards_text_content">
              <p className="cardsTitle hov">Abayomi Mallik</p>
              <p className="cards_star hov">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </p>
              <p className="cards_text hov">1000+ reviews</p>
            </div>
          </div>

          <div className="cards">
            <img className="cards_images" src={Cards_images2} alt="cards_img" />
            <div className="cards_text_content">
              <p className="cardsTitle hov">Berenike Eman</p>
              <p className="cards_star hov">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </p>
              <p className="cards_text hov">1000+ reviews</p>
            </div>
          </div>
          <div className="cards">
            <img className="cards_images" src={Cards_images3} alt="cards_img" />
            <div className="cards_text_content">
              <p className="cardsTitle hov">Abu Bakar</p>
              <p className="cards_star hov">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </p>
              <p className="cards_text hov">1000+ reviews</p>
            </div>
          </div>
          <div className="cards">
            <img className="cards_images" src={Cards_images4} alt="cards_img" />
            <div className="cards_text_content">
              <p className="cardsTitle hov">Dendera Heba</p>
              <p className="cards_star hov">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </p>
              <p className="cards_text hov">1000+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
