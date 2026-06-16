import "../../styles/index.scss";
import "../../styles/women_styles.scss";

import mapButton from "../../assets/map-button-white.png";
import poemButton from "../../assets/poem-button-white.png";
import renataBackgroundAudio from "../../assets/renata/RENATA FINAL.mp3";

import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function RememberRenata() {
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
        <source src={renataBackgroundAudio} type="audio/mpeg" />
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
        Ghosts! and the sky falls mute, and the bed falls mute, and the
        footsteps fall mute
      </p>
      <p className="p2 big">
        Ghosts! shady dwellers of my heart <br />
        gather at the front <br />
        where my little soldiers live.
        <br />
        <br /> A dreadful pity, Dear God,
        <br /> and I, blasphemy <br />
        of your petrified soul, <br />
        chase the hem of death;
        <br />
        between white fingers, these shards of glass,
        <br /> between red limbs, these wounds.
        <br />
        <br /> We are not such enemies after all:
        <br /> you, man of all;
        <br /> I, woman of myself <br />
        myself and half again.
        <br />
        <br /> My flesh trembles beneath
        <br /> the weight of feminine will <br />
        and my frail illusions
        <br /> of an androgynous being.
        <br />
        <br /> Yet in this vast solitude,
        <br />
        where the head falls upon my lap, <br />
        desperately, I brush against my memories
        <br /> and call a thousand names <br />
        and you, God, <br />
        you are but one among them.
      </p>
    </div>
  );
}

export default RememberRenata;
