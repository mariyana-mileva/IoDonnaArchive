import "../../styles/words-style.scss";

import img1 from "../../assets/birth and abort/Asset 2.png";
import img2 from "../../assets/birth and abort/e.png";
import img3 from "../../assets/birth and abort/i.png";
import img4 from "../../assets/birth and abort/q.png";
import img5 from "../../assets/birth and abort/r.png";
import img6 from "../../assets/birth and abort/s.png";
import img7 from "../../assets/birth and abort/t.png";
import img8 from "../../assets/birth and abort/u.png";
import img9 from "../../assets/birth and abort/Untitled-3.png";
import img10 from "../../assets/birth and abort/y.png";

import mapButton from "../../assets/map-button.png";

import { Link } from "react-router-dom";

function Birth_and_Abort_Follow_Up() {
  return (
    <div className="unrecognition-page">
      <div className="map-button">
        <Link to="/map">
          {" "}
          <img src={mapButton} alt="" />
        </Link>
      </div>
      <h1 className="unrecognition-title">BIRTH AND ABORT</h1>
      <div className="img1-abort">
        <img src={img1} alt="" />
      </div>
      <div className="img2-abort">
        <img src={img2} alt="" />
      </div>
      <div className="img3-abort">
        <img src={img3} alt="" />
      </div>
      <div className="img4-abort">
        <img src={img4} alt="" />
      </div>
      <div className="img5-abort">
        <img src={img5} alt="" />
      </div>
      <div className="img6-abort">
        <img src={img6} alt="" />
      </div>
      <div className="img7-abort">
        <img src={img7} alt="" />
      </div>
      <div className="img8-abort">
        <img src={img8} alt="" />
      </div>
      <div className="img9-abort">
        <img src={img9} alt="" />
      </div>
      <div className="img10-abort">
        <img src={img10} alt="" />
      </div>
    </div>
  );
}

export default Birth_and_Abort_Follow_Up;
