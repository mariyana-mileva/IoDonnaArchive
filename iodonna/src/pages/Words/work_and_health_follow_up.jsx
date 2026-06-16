import "../../styles/words-style.scss";

import img1 from "../../assets/work and health/Untitled-3.png";
import img2 from "../../assets/work and health/Untitled-4.png";
import img3 from "../../assets/work and health/Untitled-6png.png";
import img4 from "../../assets/work and health/Untitled-7.png";
import img5 from "../../assets/work and health/Untitled-9.png";
import img6 from "../../assets/work and health/Untitled-10.png";
import img7 from "../../assets/work and health/Untitled-35png.png";

import mapButton from "../../assets/map-button.png";

import { Link } from "react-router-dom";

function Work_and_Health_Follow_Up() {
  return (
    <div className="unrecognition-page">
      <div className="map-button">
        <Link to="/map">
          {" "}
          <img src={mapButton} alt="" />
        </Link>
      </div>
      <h1 className="unrecognition-title">
        <br />
        WORK AND HEALTH
      </h1>
      <div className="img1-health">
        <img src={img1} alt="" />
      </div>
      <div className="img2-health">
        <img src={img2} alt="" />
      </div>
      <div className="img3-health">
        <img src={img3} alt="" />
      </div>
      <div className="img4-health">
        <img src={img4} alt="" />
      </div>
      <div className="img5-health">
        <img src={img5} alt="" />
      </div>
      <div className="img6-health">
        <img src={img6} alt="" />
      </div>
      <div className="img7-health">
        <img src={img7} alt="" />
      </div>
    </div>
  );
}

export default Work_and_Health_Follow_Up;
