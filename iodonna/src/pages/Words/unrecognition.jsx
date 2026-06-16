import "../../styles/index.scss";
import { Link } from "react-router-dom";

function Unrecognition() {
  return (
    <div className="page">
      <Link to={"/unrecognition-follow-up"}>
        <div className="words-title">UNRECOGNITION</div>
      </Link>
    </div>
  );
}

export default Unrecognition;
