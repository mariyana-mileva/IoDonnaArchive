import "../../styles/index.scss";
import "../../styles/women_styles.scss";

import mapButton from "../../assets/map-button-white.png";
import poemButton from "../../assets/poem-button-white.png";
import rinaBackgroundAudio from "../../assets/rina/rina d'incà audio.mp3";

import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function RememberRina() {
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
        <source src={rinaBackgroundAudio} type="audio/mpeg" />
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
        I REMEMBER ASKING YOU TO SEE, WHAT IS IT THAT THEY WERE ASKING OF YOU,
        WHAT IS IT THAT YOU WERE NOT OF THEM. I REMEMBER I BELIEVED IN YOU SO
        INTENSELY THAT THEIR WORDS WOULD HURT ME TOO. I REMEMBER YOU SMILE WHEN
        I CAME BACK, AND YOU HAD SAVED YOURSELF.
      </p>
      <p className="p3">I ASK MY FRIEND</p>
      <p className="p2 fixed">
        Come now, do you not see the strange path you <br /> are following?{" "}
        <br />
        <br /> Delirious footsteps yours, come now take my <br />
        hand <br /> you are my friend.
        <br /> I heard you talk, breath passions and loves 
        <br /> I watched you dress, undress 
        <br /> I saw you laugh, write, I saw you sleep.
        <br />
        <br /> Come now, do not fear the bitterness of
        <br />
        solitude <br />
        for it will not attempt at you dignity— <br />
        but they will, they are. <br />I beg you to give back yourself to the
        hands of <br />
        your body
        <br /> in your skin parasites walk, voices of
        <br /> faceless men that bite at your heart.
        <br />
        <br /> It is not too late to be loved,  <br />I love you. <br />
        You are my sister <br />
        and you are a friend of many. <br />
        Dance next to me until we fall to the core of <br />
        our promises.
        <br />
        <br /> Come now, remember your dreams 
        <br /> and the things you valued 
        <br />
        they beat in your soul - I hear them talk. <br />
        rest well this night and the ones to come <br />I will arrive soon,
        <br /> I have not forgotten the life we lived
        <br />
        I have not forgotten
        <br /> and you shall not too.
      </p>
    </div>
  );
}

export default RememberRina;
