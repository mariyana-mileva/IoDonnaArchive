import "../../styles/words-style.scss";

import img1 from "../../assets/inequality and misogyny/IMG_6953.png";
import img2 from "../../assets/inequality and misogyny/IMG_6957.png";
import img3 from "../../assets/inequality and misogyny/IMG_6959.png";
import img4 from "../../assets/inequality and misogyny/IMG_6960.png";
import img5 from "../../assets/inequality and misogyny/IMG_6970.png";
import img6 from "../../assets/inequality and misogyny/IMG_6978.png";
import img7 from "../../assets/inequality and misogyny/IMG_7009.png";
import img8 from "../../assets/inequality and misogyny/IMG_7013.png";
import img9 from "../../assets/inequality and misogyny/Untitled-3.png";

import mapButton from "../../assets/map-button.png";

import { Link } from "react-router-dom";

function Inequality_Equality_and_Misoginy_Follow_Up() {
  return (
    <div className="unrecognition-page">
      <div className="map-button">
        <Link to="/map">
          {" "}
          <img src={mapButton} alt="" />
        </Link>
      </div>
      <h1 className="unrecognition-title">
        Inequality, Equality <br /> and Misoginy
      </h1>
      <div className="img1-inequality">
        <img src={img1} alt="" />
      </div>
      <div className="img2-inequality">
        <img src={img2} alt="" />
      </div>
      <div className="img3-inequality">
        <img src={img3} alt="" />
      </div>
      <div className="img4-inequality">
        <img src={img4} alt="" />
      </div>
      <div className="img5-inequality">
        <img src={img5} alt="" />
      </div>
      <div className="img6-inequality">
        <img src={img6} alt="" />
      </div>
      <div className="img7-inequality">
        <img src={img7} alt="" />
      </div>
      <div className="img8-inequality">
        <img src={img8} alt="" />
      </div>
      <div className="img9-inequality">
        <img src={img9} alt="" />
      </div>
    </div>
  );
}

export default Inequality_Equality_and_Misoginy_Follow_Up;
