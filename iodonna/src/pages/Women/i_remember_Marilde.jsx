import "../../styles/index.scss";
import "../../styles/women_styles.scss";

import mapButton from "../../assets/map-button-white.png";
import poemButton from "../../assets/poem-button-white.png";
import marildeBackgroundAudio from "../../assets/marilde/marilde provera audio.mp3";

import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function RememberMarilde() {
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
        <source src={marildeBackgroundAudio} type="audio/mpeg" />
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
        I have told myself the sweet gospel of I-don't-know, and what a faithful
        believer I have found within my heart.
      </p>
      <p className="p2 fixed">
        Dear, bow too, if you wish 
        <br /> then seal your ears with wax <br /> so you need not hear the
        truths <br />
        of the heretic lovers you choose. <br />
        Who is truer <br />
        you, or they?
        <br />
        <br /> I know doubt beats beneath your skin,
        <br /> yet with your pride now wounded <br />
        you linger motionless still <br />
        In your vague dreams. <br />
        <br />
        Yet I would like to know
        <br /> how not to gasp along the road,
        <br /> and how what I write might be true <br /> also in what I say,
        <br /> perhaps in what I think. <br />
        <br />I am a poet <br />
        there, the only enveloping life <br />
        to which I surrender. <br />
        What an innocent conviction,
        <br /> what a dim reality. <br />I confess: <br />
        you too are slower in the heart.
        <br />
        <br /> My back aches, <br /> yet I am never old.
        <br /> But the earth knows <br />
        how long it has been waiting for me, <br />
        and I carry still another doubt: <br />
        that I have been lost <br />
        for more years than I have lived.
        <br /> In any case, this individualism,
        <br /> with whom I fuck <br />
        comes in me violent <br />
        and I carry its twins within my womb. <br />
        One of them they’ll crucify, <br />
        the other will want to be a nurse <br />
        while making war.
        <br /> <br />
        Though truth be told, <br />I never wished to be a mother at all, <br />
        and I love women
        <br /> even more than before.
      </p>
    </div>
  );
}

export default RememberMarilde;
