import { Link } from "react-router-dom";
import "../../styles/index.scss";

function Community_and_Support() {
  return (
    <div className="page">
      <Link to={"/community-and-support-follow-up"}>
        {" "}
        <div className="words-title">COMMUNITY AND SUPPORT</div>
      </Link>
    </div>
  );
}

export default Community_and_Support;
