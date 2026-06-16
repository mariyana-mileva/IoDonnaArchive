import { Link } from "react-router-dom";
import "../../styles/index.scss";

function Doctor_Relationship() {
  return (
    <div className="page">
      <Link to={"/doctor-relationship-follow-up"}>
        {" "}
        <div className="words-title">DOCTOR'S RELATIONSHIP</div>
      </Link>
    </div>
  );
}

export default Doctor_Relationship;
