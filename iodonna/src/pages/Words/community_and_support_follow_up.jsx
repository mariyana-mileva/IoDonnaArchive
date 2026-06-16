import "../../styles/words-style.scss";

import img1 from "../../assets/community and support/Asset 2.png";
import img2 from "../../assets/community and support/e.png";
import img3 from "../../assets/community and support/g.png";
import img4 from "../../assets/community and support/h.png";
import img5 from "../../assets/community and support/j.png";
import img6 from "../../assets/community and support/k.png";
import img7 from "../../assets/community and support/l.png";
import img8 from "../../assets/community and support/m.png";
import img9 from "../../assets/community and support/t.png";
import img10 from "../../assets/community and support/u.png";
import img12 from "../../assets/community and support/y.png";

import mapButton from "../../assets/map-button.png";

import { Link } from "react-router-dom";

function Community_and_Support_Follow_Up() {
  return (
    <div className="unrecognition-page">
      <div className="map-button">
        <Link to="/map">
          {" "}
          <img src={mapButton} alt="" />
        </Link>
      </div>
      <h1 className="unrecognition-title">COMMUNITY & SUPPORT</h1>
      <div className="img1-community">
        <img src={img1} alt="" />
      </div>
      <div className="img2-community">
        <img src={img2} alt="" />
      </div>
      <div className="img3-community">
        <img src={img3} alt="" />
      </div>
      <div className="img4-community">
        <img src={img4} alt="" />
      </div>
      <div className="img5-community">
        <img src={img5} alt="" />
      </div>
      <div className="img6-community">
        <img src={img6} alt="" />
      </div>
      <div className="img7-community">
        <img src={img7} alt="" />
      </div>
      <div className="img8-community">
        <img src={img8} alt="" />
      </div>
      <div className="img9-community">
        <img src={img9} alt="" />
      </div>
      <div className="img10-community">
        <img src={img10} alt="" />
      </div>
      <div className="img12-community">
        <img src={img12} alt="" />
      </div>
    </div>
  );
}

export default Community_and_Support_Follow_Up;
