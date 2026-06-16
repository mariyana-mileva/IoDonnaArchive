import "../styles/landing_page_style.scss";
import "../styles/index.scss";
import FadeIn from "../components/fadeInAnimation";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="page">
      <div className="frame">
        <FadeIn delay={500}>
          <Link to="/title" className="quote">
            sono quasi una sessantenne mai doma che conserva il privilegio di
            continuare ad indignarsi. ancora, ancora e ancora...
          </Link>

          <div className="author">
            - Tina Fronte, founder of intercategoriale donne.
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export default LandingPage;
