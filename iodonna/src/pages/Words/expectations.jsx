import { Link } from "react-router-dom";
import "../../styles/index.scss";

function Expectations() {
  return (
    <div className="page">
      <Link to={"/expectations-follow-up"}>
        {" "}
        <div className="words-title">EXPECTATIONS</div>
      </Link>
    </div>
  );
}

export default Expectations;
