import "../../styles/index.scss";
import "../../styles/women_styles.scss";

import loredana from "../../assets/loredana/loredana.png";
import loredanaOG from "../../assets/loredana/loredanaOG.png";
import mapButton from "../../assets/map-button.png";
import poemButton from "../../assets/poem-button.png";

import { useState } from "react";
import { Link } from "react-router-dom";

function Loredana() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeArea, setActiveArea] = useState(null);

  const areas = [
    {
      id: 1,
      text: `"... This cousin of mine had initially suggested a secretarial office for Giovanni Agnelli on Corso Marconi. I think he did it partly as a provocation, or perhaps to test my intentions. I was left extremely uneasy and worried about the proposal (it was one of the offices furthest removed from the famous workers' movement). So, I tried a muddled excuse: 'Well, it just seems like too much for me.' Fortunately, the reply was: 'Alright, then not right there, but somewhere nearby, so you can still keep an eye on things.' Consequently, I went to work on Via Morgari, which is very close to Corso Marconi..."`,
      style: {
        top: "6%",
        left: "40.5%",
        width: "2%",
        height: "2%",
      },
      textStyle: {
        left: "30px",
      },
    },
    {
      id: 2,
      text: `“ A short time later, at the famous coffee machine, I met Mariangela Rosolen and Beatrice Vicarioli, white-collar delegates from Corso Marconi. We became friends, a friendship that has lasted over time and through them, I began to get to know the union."`,
      style: {
        top: "25%",
        left: "52%",
        width: "2%",
        height: "2%",
      },
      textStyle: {
        left: "30px",
      },
    },
    {
      id: 3,
      text: `It was 1978; during a strike that included a protest march, a group of women and I decided that we needed to teach a lesson to put an end to the chauvinistic and offensive behaviour of our male colleagues. This included catcalling when we walked down the office hallways, incredibly crude sexual comments, and pin-up calendars and pictures of naked women plastered everywhere."`,
      style: {
        top: "35%",
        left: "55%",
        width: "2%",
        height: "2%",
      },
      textStyle: {
        width: "500px",
        left: "30px",
      },
    },
    {
      id: 4,
      text: `“Disgusted and furious, we then grabbed all the images and calendars of naked women, desk by desk, drafting table by drafting table, and tore them up. Also during that strike, a few other tragicomic episodes occurred, such as the one involving a guy who had a veritable sex shop catalog under his desk glass, and who threw himself onto the desk to stop us from lifting the glass and to save his precious material.”`,
      style: {
        top: "55%",
        left: "50%",
        width: "2%",
        height: "2%",
      },
      textStyle: {
        left: "30px",
      },
    },
    {
      id: 5,
      text: `“This initiative helped bring about a few small changes; slowly and with difficulty, conversations about women's rights began. We were no longer so invisible and disregarded. The journey was long, and even today, there is still much to be said and done."
`,
      style: {
        top: "88%",
        left: "53%",
        width: "2%",
        height: "2%",
      },
      textStyle: {
        width: "500px",
        left: "30px",
      },
    },
    {
      id: 6,
      text: `"...under the glass he had a veritable sex shop catalog, and he threw himself onto the desk to stop us from lifting the glass and to save his precious material. This episode prompted some men to reflect; others, instead, later delighted us with phone calls—anonymous, of course—saying things like, 'You whores, don't you have anything better to do in the office? And we even pay you to be here!'. For about a month and a half, my colleagues and I also received anonymous envelopes containing pictures of naked female body parts cut out of magazines and newspapers."`,
      style: {
        top: "77%",
        left: "38%",
        width: "2%",
        height: "2%",
      },
      textStyle: {
        width: "400px",
        left: "30px",
      },
    },
    {
      id: 7,
      text: `"...Normally, when the protest march of striking office workers passed through the drafting rooms, some of the draftsmen would come out and join the march, while others who had no intention of participating in the strike would stand at the windows waiting for the march to finish filing past.
On that famous day, we women in the march were keeping a particularly close eye on our male colleagues, and at a certain point, we noticed a draftsman who, sitting right at his desk, was trying to hide something. We approached that desk as a group, shoved the technician aside a bit, and discovered, to our utter disbelief, that under the glass desk protector—right alongside a photo of the Pope and a portrait of his wife and children—there were enlarged photos of a wide collection of female anatomical parts: a butt, a vagina, and so much more."`,
      style: {
        top: "50%",
        left: "38%",
        width: "2%",
        height: "2%",
      },
      textStyle: {
        width: "400px",
        left: "30px",
      },
    },
    {
      id: 8,
      text: `“In 1975, our office was transferred from Lingotto to Mirafiori, where I met the female white-collar delegates, Tina Fronte, Cristiana Cavagna, and others. With them, I began this splendid journey that was the Women's Inter-union Committee. First came the course with Anna Bravo, then the birth of the group on Via Barbaroux, the women-only meetings at the Quinta Lega (Fifth League), the support we brought to various factories where women were striking, and the '150 hours' course on 'Women's Health.' It was an experience that, for the first time, clearly highlighted the gender problem within the union and changed a great deal on the path toward equality—even if today, unfortunately, we are forced to re-debate and fight for values and rights we believed had already been won.”`,
      style: {
        top: "30%",
        left: "35%",
        width: "2%",
        height: "2%",
      },
      textStyle: {
        left: "-340px",
      },
    },
  ];

  return (
    <div className="women-page">
      <div className="page-image domenica">
        <div className="image-wrapper">
          <img
            src={loredana}
            alt=""
            className={`woman-image ${isHovered ? "fade-out" : ""}`}
          />

          <img
            src={loredanaOG}
            alt=""
            className={`woman-image overlay ${isHovered ? "fade-in" : ""}`}
          />
        </div>
        {areas.map((area) => (
          <div
            key={area.id}
            className="hover-area"
            style={{
              ...area.style,
              opacity: isHovered ? 0 : 1,
              pointerEvents: isHovered ? "none" : "auto",
            }}
            onMouseEnter={() => setActiveArea(area.id)}
            onMouseLeave={() => setActiveArea(null)}
          >
            {activeArea === area.id && !isHovered && (
              <div className="hover-text" style={area.textStyle}>
                {area.text}
              </div>
            )}
          </div>
        ))}
      </div>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="woman-name"
      >
        Loredana Baro
      </div>
      <Link to="/rememberLoredana">
        {" "}
        <div className="quote">I remember</div>
      </Link>
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
    </div>
  );
}

export default Loredana;
