import "../../styles/words-style.scss";

import img1 from "../../assets/doctor's relationship/Asset 2.png";
import img2 from "../../assets/doctor's relationship/q.png";
import img3 from "../../assets/doctor's relationship/u.png";
import img4 from "../../assets/doctor's relationship/w.png";
import img5 from "../../assets/doctor's relationship/y.png";
import mapButton from "../../assets/map-button.png";

import { Link } from "react-router-dom";

function Doctor_Relationship_Follow_Up() {
  return (
    <div className="unrecognition-page">
      <div className="map-button">
        <Link to="/map">
          {" "}
          <img src={mapButton} alt="" />
        </Link>
      </div>

      <h1 className="unrecognition-title">DOCTOR'S RELATIONSHIP</h1>

      <div className="img1-doctor">
        <img src={img1} alt="" />
      </div>
      <div className="img2-doctor">
        <img src={img2} alt="" />
      </div>
      <div className="img3-doctor">
        <img src={img3} alt="" />
      </div>
      <div className="img4-doctor">
        <img src={img4} alt="" />
      </div>
      <div className="img5-doctor">
        <img src={img5} alt="" />
      </div>
    </div>
  );
}

export default Doctor_Relationship_Follow_Up;
