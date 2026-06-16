import "../../styles/index.scss";

import { Link } from "react-router-dom";

function Motherhood() {
  return (
    <div className="page">
      <Link to={"/motherhood-follow-up"}>
        {" "}
        <div className="words-title">MOTHERHOOD</div>
      </Link>
    </div>
  );
}

export default Motherhood;
