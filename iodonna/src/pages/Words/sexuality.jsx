import { Link } from "react-router-dom";
import "../../styles/index.scss";

function Sexuality() {
  return (
    <div className="page">
      <Link to={"/sexuality-follow-up"}>
        <div className="words-title">SEXUALITY</div>
      </Link>
    </div>
  );
}

export default Sexuality;
