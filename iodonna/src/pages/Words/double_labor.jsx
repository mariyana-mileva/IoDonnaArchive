import { Link } from "react-router-dom";
import "../../styles/index.scss";

function Double_Labor() {
  return (
    <div className="page">
      <Link to={"/double-labor-follow-up"}>
        {" "}
        <div className="words-title">DOUBLE LABOR</div>
      </Link>
    </div>
  );
}

export default Double_Labor;
