import "../../styles/index.scss";
import "../../styles/women_styles.scss";

import mapButton from "../../assets/map-button-white.png";
import poemButton from "../../assets/poem-button-white.png";
import domenicaBackgroundAudio from "../../assets/domenica/DSCF1179.mp3";

import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function RememberDomenica() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <div className="page">
      <audio ref={audioRef} loop>
        <source src={domenicaBackgroundAudio} type="audio/mpeg" />
      </audio>
      <div className="map-button">
        <Link to="/map">
          {" "}
          <img src={mapButton} alt="" />
        </Link>
      </div>
      <div className="poem-button">
        <Link to="/poem">
          {" "}
          <img src={poemButton} alt="" />
        </Link>
      </div>
      <p className="p3">
        I REMEMBER SHAPING WORLDS AND SHAPING THOSE WHO LIVED IN IT, I REMEMBER
        THE SISTERHOOD WE SHARED, WE SHARE. I REMBER WHERE FRIENDSHIP LEADS THE
        HEARTS, AND I REMEMBER US BEING WOMEN TOGETHER.
      </p>
      <p className="p2">
        You are of a wandering sadness, <br /> drift a little in my heart,
        <br />
        for its foam comes from yours.
        <br /> Rest, my friend, <br />
        your violent unraveling does not frighten me—
        <br /> but you do, <br />
        where are you? <br /> <br />
        You and I kept ourselves intact <br /> in the limbo of hope,
        <br /> strange little girls,
        <br /> and you know me, I know you,
        <br /> and is that not anguish enough already? <br />
        <br /> But I understand you <br />
        in the crow perched upon that balcony <br />
        that too little I listened to, <br /> though it was an accomplice of the
        sky. <br /> In the crow I understand you, <br />
        and in the sound that carries it away. <br /> <br />I know you; <br />{" "}
        the shadow of our friendship <br />
        cradles my sleep. <br /> <br />
        Dear friend, come here, <br /> the bed is wide <br />
        and life will arrive soon enough. <br /> Life arrives, <br />
        for it follows you faithfully. <br /> <br /> Come here, <br />I wait for
        you <br />
        as one waits <br /> for a sister.
      </p>
    </div>
  );
}

export default RememberDomenica;
