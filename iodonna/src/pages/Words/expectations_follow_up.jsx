import "../../styles/words-style.scss";

import img1 from "../../assets/expectations/IMG_6984.png";
import img2 from "../../assets/expectations/IMG_7013.png";
import img3 from "../../assets/expectations/png.png";
import img4 from "../../assets/expectations/s.png";
import img5 from "../../assets/expectations/1.png";
import img6 from "../../assets/expectations/Untitled-4png.png";
import mapButton from "../../assets/map-button.png";

import { Link } from "react-router-dom";

function Expectation_Follow_Up() {
  return (
    <div className="unrecognition-page">
      <div className="map-button">
        <Link to="/map">
          {" "}
          <img src={mapButton} alt="" />
        </Link>
      </div>

      <h1 className="unrecognition-title">EXPECTATIONS</h1>

      <div className="img1-expectation">
        <img src={img1} alt="" />
      </div>
      <div className="img2-expectation">
        <img src={img2} alt="" />
      </div>
      <div className="img3-expectation">
        <img src={img3} alt="" />
      </div>
      <div className="img4-expectation">
        <img src={img4} alt="" />
      </div>
      <div className="img5-expectation">
        <img src={img5} alt="" />
      </div>
      <div className="img6-expectation">
        <img src={img6} alt="" />
      </div>
    </div>
  );
}

export default Expectation_Follow_Up;
