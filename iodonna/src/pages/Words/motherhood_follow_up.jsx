import "../../styles/words-style.scss";

import img1 from "../../assets/motherhood/IMG_6961.png";
import img2 from "../../assets/motherhood/IMG_6977.png";
import img3 from "../../assets/motherhood/IMG_6984.png";
import img4 from "../../assets/motherhood/Untitled-3.png";
import img5 from "../../assets/motherhood/Untitled-4png.png";

import mapButton from "../../assets/map-button.png";
import { Link } from "react-router-dom";

function Motherhood_Follow_Up() {
  return (
    <div className="unrecognition-page">
      <div className="map-button">
        <Link to="/map">
          {" "}
          <img src={mapButton} alt="" />
        </Link>
      </div>
      <h1 className="unrecognition-title">MOTHERHOOD</h1>
      <div className="img1-motherhood">
        <img src={img1} alt="" />
      </div>
      <div className="img2-motherhood">
        <img src={img2} alt="" />
      </div>
      <div className="img3-motherhood">
        <img src={img3} alt="" />
      </div>
      <div className="img4-motherhood">
        <img src={img4} alt="" />
      </div>
      <div className="img5-motherhood">
        <img src={img5} alt="" />
      </div>
    </div>
  );
}

export default Motherhood_Follow_Up;
