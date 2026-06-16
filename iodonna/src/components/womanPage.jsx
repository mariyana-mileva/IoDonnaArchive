import { useState } from "react";
import { Link } from "react-router-dom";

import mapButton from "../assets/map-button.png";
import poemButton from "../assets/poem-button.png";

function WomanPage({ name, image, hoverImage, rememberRoute, areas }) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeArea, setActiveArea] = useState(null);

  return (
    <div className="women-page">
      <div className="page-image">
        <img
          src={isHovered ? hoverImage : image}
          alt={name}
          className="woman-image"
        />

        {areas.map((area) => (
          <div
            key={area.id}
            className="hover-area"
            style={{
              ...area.style,
              opacity: isHovered ? 0 : 1,
              pointerEvents: isHovered ? "none" : "auto",
            }}
            onMouseEnter={() => setActiveArea(area.id)}
            onMouseLeave={() => setActiveArea(null)}
          >
            {activeArea === area.id && (
              <div className="hover-text" style={area.textStyle}>
                {area.text}
              </div>
            )}
          </div>
        ))}
      </div>

      <div
        className="woman-name"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {name}
      </div>

      <Link to={rememberRoute}>
        <div className="quote">I remember</div>
      </Link>

      <div className="map-button">
        <Link to="/map">
          <img src={mapButton} alt="" />
        </Link>
      </div>

      <div className="poem-button">
        <Link to="/poem">
          <img src={poemButton} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default WomanPage;
