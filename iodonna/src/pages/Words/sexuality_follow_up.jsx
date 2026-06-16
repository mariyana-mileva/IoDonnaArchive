import "../../styles/words-style.scss";

import img1 from "../../assets/sexuality/Asset 2.png";
import img2 from "../../assets/sexuality/n.png";
import mapButton from "../../assets/map-button.png";

import { Link } from "react-router-dom";

function Sexuality_Follow_Up() {
  return (
    <div className="unrecognition-page">
      <div className="map-button">
        <Link to="/map">
          {" "}
          <img src={mapButton} alt="" />
        </Link>
      </div>

      <h1 className="unrecognition-title">SEXUALITY</h1>

      <div className="img1-sexuality">
        <img src={img1} alt="" />
      </div>
      <div className="img2-sexuality">
        <img src={img2} alt="" />
      </div>
    </div>
  );
}

export default Sexuality_Follow_Up;
