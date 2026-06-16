import "../../styles/index.scss";
import "../../styles/women_styles.scss";

import mapButton from "../../assets/map-button-white.png";
import poemButton from "../../assets/poem-button-white.png";
import marisaBackgroundAudio from "../../assets/marisa/marisa.audiomp4.mp3";

import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function RememberMarisa() {
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
        <source src={marisaBackgroundAudio} type="audio/mpeg" />
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
        I remember a strange revulsion for the bride I became in the innocent
        games of my childhood days, I remember how the cursed adults reassured
        me like angels, that the man will come and love me, that the man will
        come and I will love him. And I do not want it and I did not want it and
        I make myself a husband, rather, to the woman who lives within me, which
        is always better than being wife to a man who has never lived inside me.
      </p>
      <p className="p2 fixed">
        I am a placid, good wife 
        <br /> Like a good daughter, I learn. 
        <br /> I am an invincible wife who makes herself man,
        <br />  And whatever man-wife I am to be
        <br />
        If that is what you desire most
        <br /> I will not give you my hand, 
        <br /> Tame before the altar of your fantasies. 
        <br />
        <br /> Yet I am your wife all the same.  <br />I am your wife, but I am
        the wife of others too, 
        <br /> And it is a convalescent state.
        <br />  It occurs to me 
        <br /> To be spoken of as convalescent. <br />
        <br />I am an invincible wife. 
        <br /> I am a wife-man 
        <br /> Or a man-wife, <br />
         Whichever pleases you. 
        <br /> I ask for nothing, no, I will not ask, 
        <br /> But my hand remains unwed. 
        <br /> And let the altar stay buried in your sleep; 
        <br />
        <br /> Little do you return from your fantasies 
        <br /> Because a wife, I am. <br />
        Bend me, let the air be undone within me. <br /> Bend me,  <br />
        and tomorrow I will bend you. 
        <br /> <br />
        For I am a wife-man, 
        <br /> But not a husband. 
        <br /> Do not ask it of me. <br />A wife to play the husband for 
        <br /> I already have, 
        <br /> and she is far away 
        <br />
        <br /> And I, convalescing.
      </p>
    </div>
  );
}

export default RememberMarisa;
