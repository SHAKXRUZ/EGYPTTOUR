import "./Work.css";
import WorkImages1 from "../../assets/images/work1.png";
import WorkImages2 from "../../assets/images/work2.png";
import WorkImages3 from "../../assets/images/work3.png";

const Work = () => {
  return (
    <div className="work">
      <h2 className="work_title">How does it Work?</h2>
      <div className="work_card_group">
        <div className="work_card">
          <img src={WorkImages1} alt="work_images" />
          <p className="work_card_title">Select a Guide</p>
        </div>
        <div className="work_card">
          <img src={WorkImages2} alt="work_images" />
          <p className="work_card_title">Contact Guide</p>
        </div>
        <div className="work_card">
          <img src={WorkImages3} alt="work_images" />
          <p className="work_card_title">Create your Travel</p>
        </div>
      </div>
    </div>
  );
};
export default Work;
