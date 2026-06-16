import "../../styles/index.scss";
import "../../styles/women_styles.scss";

import mapButton from "../../assets/map-button-white.png";
import poemButton from "../../assets/poem-button-white.png";
import loredanaBackgroundAudio from "../../assets/loredana/loredana baro audio.mp3";

import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function RememberLoredana() {
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
        <source src={loredanaBackgroundAudio} type="audio/mpeg" />
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
        I’ve come to realise there's a contradiction hidden deep within my
        longest days—one that sometimes terrifies me and other times brings me
        comfort. It’s the flashes of anger sparked by the stories my friends and
        I share about blatant injustices, which somehow blur into a profound
        sense of guilt. A guilt that, in my eyes, leaves all my values exposed
        and hollow, stripped of their meaning by their very opposites…
      </p>
      <p className="p2 big">
        To swallow metaphors of beauty and compassion <br /> To dress the filth{" "}
        <br />
        with filth To lay naked and to tremble - alone. <br />
        <br />
        How rotten, this way I move <br /> the scent of mirrors, <br />
        the doctrine of purity, <br />
        and the contradiction in my own inebriety.
        <br /> In me, the acute lust to be stripped by the eyes
        <br /> and the tedious innocence <br />
        that refuses the gaze of intimacy.
        <br />
        <br /> Who is the man I do not want? <br />
        Who the woman I spit in the face of what I ache for?
        <br />
        <br /> Here is the truth: <br />I lick the hems of lips with no eyes,
        <br /> I tear the pupils from eyes with no lips. <br />
        <br />
        More simply: <br />I make love with the distant body,
        <br /> and I do not hide my skin <br />
        from the man in the street.
      </p>
    </div>
  );
}

export default RememberLoredana;
