import "../styles/index.scss";
import "../styles/map.scss";
import mapSvg from "../assets/mapImg.png";

import { Link } from "react-router-dom";

import FadeIn from "../components/fadeInAnimation";

import { useNavigate } from "react-router-dom";

function Map() {
  const navigate = useNavigate();

  const sections = [
    {
      id: 1,
      cx: 33,
      cy: 18,
      rx: 11,
      ry: 11,
      route: "/unrecognition",
    },
    {
      id: 2,
      cx: 51,
      cy: 9,
      rx: 6,
      ry: 6,

      route: "/motherhood",
    },
    {
      id: 3,
      cx: 71,
      cy: 14,
      rx: 13,
      ry: 13,
      route: "/birth-and-abort",
    },
    {
      id: 4,
      cx: 53,
      cy: 28,
      rx: 11,
      ry: 15,
      route: "/inequality_equality_misoginy",
    },
    {
      id: 5,
      cx: 70,
      cy: 35,
      rx: 6.5,
      ry: 8.5,
      route: "/sexuality",
    },
    {
      id: 6,
      cx: 83,
      cy: 33,
      rx: 8,
      ry: 11,
      route: "/doctor-relationship",
    },
    {
      id: 7,
      cx: 34,
      cy: 46.5,
      rx: 15,
      ry: 14,
      route: "/work-and-health",
    },
    {
      id: 8,
      cx: 62,
      cy: 60,
      rx: 14,
      ry: 20,
      route: "/community-and-support",
    },
    {
      id: 9,
      cx: 87,
      cy: 57,
      rx: 11,
      ry: 12,
      route: "/expectations",
    },
    {
      id: 10,
      cx: 85,
      cy: 80,
      rx: 14,
      ry: 11,
      route: "/double-labor",
    },
  ];
  return (
    <div className="map-container">
      <FadeIn delay={500}>
        <div className="map-nav">
          <Link to="/about" className="map-nav-link">
            About
          </Link>

          <Link to="/credits" className="map-nav-link">
            Credits
          </Link>
        </div>
        <img src={mapSvg} alt="Map" className="map-image" />
        <svg
          className="map-overlay"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <radialGradient id="hoverGradient" cx="50%" cy="50%" r="50%">
              {/* Center */}
              <stop offset="0%" stopColor="rgba(0,0,0,0)" />

              {/* Slight inner visibility */}
              <stop offset="90%" stopColor="rgba(0,0,0,0.01)" />

              {/* Darker edge */}
              <stop offset="100%" stopColor="rgba(0,0,0,0.2)" />
            </radialGradient>
          </defs>

          {sections.map((section) => (
            <ellipse
              key={section.id}
              cx={section.cx}
              cy={section.cy}
              rx={section.rx}
              ry={section.ry}
              className="hover-circle"
              onClick={() => navigate(section.route)}
            />
          ))}
        </svg>
        <Link to="/poem" className="map-title">
          <span className="map-title-text">
            <p>IO... DONNA</p>
          </span>
        </Link>
      </FadeIn>
    </div>
  );
}

export default Map;
