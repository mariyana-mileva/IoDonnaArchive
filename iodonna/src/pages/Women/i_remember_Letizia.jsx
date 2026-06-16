import "../../styles/index.scss";
import "../../styles/women_styles.scss";

import mapButton from "../../assets/map-button-white.png";
import poemButton from "../../assets/poem-button-white.png";
import letiziaBackgroundAudio from "../../assets/letizia/letizia FINAL AUDIO.mp3";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function RememberLetizia() {
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
        <source src={letiziaBackgroundAudio} type="audio/mpeg" />
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
        I remember an immense unease, an acute discomfort at the thought of a
        female body, a body called mine by those who mine were not
      </p>
      <p className="p2">
        I remember the hiding places <br /> of a distant little girl <br /> who
        did not yet understand <br /> the permanence of the parts she hated,
        <br /> and which were watched
        <br />
        by those who did not know her.
        <br /> <br /> I remember, later, the grown attempts to uncover it,{" "}
        <br /> that cursed body,
        <br /> and I remember the fear of listening to it. <br /> <br /> But
        then I met a singular woman,
        <br /> and I remember the femininity she exalted, <br /> and I remember
        the way I fell in love <br /> before the mirror of a dim room. <br />{" "}
        <br /> I do not truly know what defines me <br /> as woman, <br /> but a
        woman I am, <br /> and woman I love <br /> with arduous passion. <br />{" "}
        <br /> The woman I am, I love her more than rest; <br /> hungry for
        life, she leans out onto the balcony,
        <br />
        frightened by some wretched banality, <br /> accused of every wrong{" "}
        <br /> by herself, by her foremothers.
        <br /> <br /> The woman I am, I am her through dreams and desires,
        <br />
        a star-filled mind. <br /> Eternally watched by blind eyes, <br /> mine
        and yours.
        <br /> <br />
        Gracefully I laugh within this woman,
        <br /> as a man, freedom would be born with a breath,
        <br /> and yet, woman as I am <br /> the dream of it gladdens all the
        more
      </p>
    </div>
  );
}

export default RememberLetizia;
