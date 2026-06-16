import "../../styles/words-style.scss";

import img1 from "../../assets/double labour/IMG_6970.png";
import img2 from "../../assets/double labour/IMG_6977.png";
import img3 from "../../assets/double labour/Untitled-3 2.png";
import img4 from "../../assets/double labour/Untitled-3.png";
import img5 from "../../assets/double labour/Untitled-4.png";
import img6 from "../../assets/double labour/Untitled-4png.png";
import img7 from "../../assets/double labour/Untitled-5.png";
import img8 from "../../assets/double labour/Untitled-6.png";
import img9 from "../../assets/double labour/Untitled-7.png";

import mapButton from "../../assets/map-button.png";

import { Link } from "react-router-dom";

function Double_Labor_Follow_Up() {
  return (
    <div className="unrecognition-page">
      <div className="map-button">
        <Link to="/map">
          {" "}
          <img src={mapButton} alt="" />
        </Link>
      </div>
      <h1 className="unrecognition-title">DOUBLE LABOR</h1>
      <div className="img1-labor">
        <img src={img1} alt="" />
      </div>
      <div className="img2-labor">
        <img src={img2} alt="" />
      </div>
      <div className="img3-labor">
        <img src={img3} alt="" />
      </div>
      <div className="img4-labor">
        <img src={img4} alt="" />
      </div>
      <div className="img5-labor">
        <img src={img5} alt="" />
      </div>
      <div className="img6-labor">
        <img src={img6} alt="" />
      </div>
      <div className="img7-labor">
        <img src={img7} alt="" />
      </div>
      <div className="img8-labor">
        <img src={img8} alt="" />
      </div>
      <div className="img9-labor">
        <img src={img9} alt="" />
      </div>
    </div>
  );
}

export default Double_Labor_Follow_Up;
