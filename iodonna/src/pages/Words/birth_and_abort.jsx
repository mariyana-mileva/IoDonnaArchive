import "../../styles/index.scss";

import { Link } from "react-router-dom";

function Birth_and_Abort() {
  return (
    <div className="page">
      <Link to={"/birth-and-abort-follow-up"}>
        <div className="words-title">BIRTH AND ABORT</div>
      </Link>
    </div>
  );
}

export default Birth_and_Abort;
