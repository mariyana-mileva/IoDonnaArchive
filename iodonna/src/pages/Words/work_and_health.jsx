import "../../styles/index.scss";
import { Link } from "react-router-dom";

function Work_and_Health() {
  return (
    <div className="page">
      <Link to={"/work-and-health-follow-up"}>
        <div className="words-title">WORK AND HEALTH</div>
      </Link>
    </div>
  );
}

export default Work_and_Health;
