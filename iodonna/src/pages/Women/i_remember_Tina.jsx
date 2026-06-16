import "../../styles/index.scss";
import "../../styles/women_styles.scss";

import mapButton from "../../assets/map-button-white.png";
import poemButton from "../../assets/poem-button-white.png";
import tinaBackgroundAudio from "../../assets/audio/Tina.mp3";

import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function RememberTina() {
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
      <audio autoPlay loop>
        <source src={tinaBackgroundAudio} type="audio/mpeg" />
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
        I keep the memory of absolute dreams,
        <br /> and of how I was woken from a leaden sleep <br />
        when I became aware of the days gone by <br /> and of their persuasive
        silence.
      </p>
      <p className="p2">
        I remember my eyes open, listeningto
        <br /> the righteousness growing in my chest.
        <br /> <br /> Raving creature of mine, <br />
        lay your tongue upon lucid languages, <br /> or else remain silent in
        your slow desiccation;
        <br />
        spare us the discomfort of a pitiful losing of oneself <br />
        and its frivolous lamentations.
        <br />
        Stretch your idle legs and walk, <br />
        walk in reverse, ignoring the ignorance that courts you; <br />
        command your limbs, <br />
        make the passer-by a thing passed; <br />
        you whose loosened stringsh <br />
        ang about a lifeless neck.
        <br />
        <br /> I force words into my throat:
        <br /> "Then astonish that which cannot be astonished,
        <br />
        and transform what could never be transformed." <br />
        Your heart, or their heart? <br />
        Or is it my heart <br />
        that must change? <br /> <br />
        They told me: <br />
        persevere in the justices you wear; <br />
        and I look at those whose justices are better than mine, <br />
        and hide my face within the worn-out shadow.
        <br /> <br />
        Morning as always is long <br />
        and smells of the night that was, <br />
        but day arrives, as it must arrive, <br />
        and I begin to walk toward <br />
        the righteousness that shall be cradled.
      </p>
    </div>
  );
}

export default RememberTina;
