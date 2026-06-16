import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import "../styles/title_style.scss";
import "../styles/index.scss";

function TitlePage() {
  return (
    <div className="page">
      <div className="frame">
        <Link to="/map" className="title">
          <span className="title-text">
            <TypeAnimation
              sequence={[2000, "IO... DONNA"]}
              speed={400}
              cursor={false}
            />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default TitlePage;
