import "../../styles/index.scss";
import "../../styles/women_styles.scss";

import marilde from "../../assets/marilde/marilde.png";
import marildeOG from "../../assets/marilde/marildeOG.png";
import mapButton from "../../assets/map-button.png";
import poemButton from "../../assets/poem-button.png";

import { useState } from "react";
import { Link } from "react-router-dom";

function Marilde() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeArea, setActiveArea] = useState(null);

  const areas = [
    {
      id: 1,
      text: `“I was hired at Mirafiori as a white-collar employee in what is today the Fiat Research Center, and at the time was the Experimental Test Track Workers department. I had already begun my initial involvement with the union: I had gone to sign up with the FLM, I had joined my first picket lines in the first month of '74..."`,
      style: {
        top: "10%",
        left: "45.5%",
        width: "2%",
        height: "2%",
      },
      textStyle: {
        left: "30px",
      },
    },
    {
      id: 2,
      text: `“My first encounter with the world of the Inter-union Committee was not exactly a happy one. I remember one evening with Tina Fronte, when there was a heated discussion at the Quinta Lega, even though I recognised that women might have specific grievances, since I didn't feel them directly affecting me, I blurted out to her that 'I felt like a white-collar worker first and a woman second.'
Which made her absolutely furious—I think she probably still remembers it today—because looking back on it now, it was a decidedly idiotic thing to say! However, it was part of my development. Even today, many young men and women finishing school don't perceive the problem of gender differences and the contradictions that exist until they hit the working world. And I was in that exact phase: I was twenty years old... twenty-one."`,
      style: {
        top: "22%",
        left: "65%",
        width: "2%",
        height: "2%",
      },
      textStyle: {
        left: "30px",
      },
    },
    {
      id: 3,
      text: `
"Then, partly due to the experience with the unified classification system, which made the discrimination perpetuated by Fiat against women appear much more clearly to me, and partly through the ongoing discussions with the Inter-union Committee, which I no longer avoided, I began to feel a certain curiosity about this group of women; I was struck by the toughness with which comrades like Tina tackled that subject. Then, I remember discussions at the CGIL with Carla Quaglino, and finally, a very important friendship was born with Loredana Baro, which was highly formative for me. The two most formative experiences were Tina Fronte and Loredana Baro—with very different characteristics from one another, but both possessing an indisputable tenacity, I must say.
And slowly, I managed to approach the work and commitment of the Inter-union Committee with a different spirit; but always, I must confess, with an underlying sense of awkwardness. There, I felt a bit different: not different in a better way, but different in the sense of struggling. I don't know how to explain it better, but that's how it was. There was this element of discomfort that I felt completely during the women's meetings, once I started going more regularly; this was probably due to my sheer lack of habit when it came to women-only discussions.”`,
      style: {
        top: "41%",
        left: "57%",
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
      text: `“The initiative of the Women's Inter-union Committee that I remember best was the occupation of the Sant'Anna gynaecological hospital in November 1978 when, five months after the passing of Law 194 on the voluntary termination of pregnancy, nothing had yet been done, and women, facing long waiting lists, were at risk of passing the three-month mark and losing their right. I remember that on that occasion, the support of a group of female hospital workers and the Sant'Anna Women's Collective, which used to meet in the small union room, was crucial. It was autumn and the weather was grey and rainy; the problem we were setting out to confront was enraging and dramatic. Inside, among the women, you could feel the pain and anger. Unlike many other occupations or sit-ins, where in reality there is room to chat and catch up, there you could genuinely feel the palpable outrage and the heavy discussion of complex issues. Then, the suffering of the women on the waiting lists who came to the Hospital in those days—we all internalised it."`,
      style: {
        top: "60%",
        left: "60%",
        width: "2%",
        height: "2%",
      },
      textStyle: {
        left: "30px",
      },
    },
    {
      id: 5,
      text: `"When I talk about the intercategoriale donne, due to my own professional bias, I connect it strongly to trade union work. In reality, the merit of this group's experience was that it opened itself up to broader external social issues and built a strong alliance with the Women's Movement—something that didn't happen in other cities, and what I still regret to this day is that it didn't continue.”
`,
      style: {
        top: "88%",
        left: "35%",
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
      text: `“I have already mentioned how uncomfortable I felt during my initial encounters and clashes with the Women's Inter-union Committee. Paradoxically, however, this allowed me to actually accomplish something when I joined the political staff on Via Porpora in 1977. Because feeling like an outsider, even during moments of collective discussion, made me raise a series of even greater questions about how a female comrade on the technical staff must feel alienated in a union structure that used her in completely repetitive roles—just like the corporate ones—without actually treating her like a comrade."`,
      style: {
        top: "50%",
        left: "46%",
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
      text: `““The issues raised even during the contractual and negotiating disputes regarding the unified classification system brought sex discrimination to light with all the force imaginable. At its core was the rationale that women inherently possessed the characteristics to support male labor better than anyone else, and to settle for lower [pay] because she herself judged her contribution as merely supplementary. And third, but not least, that in reality she was content doing those tasks and did them well, usually under a male boss. This was highly visible among the white-collar staff, and—something I discovered years later—among the blue-collar women, this was actually recognised as a normal mechanism. They had a harder time dealing with a female boss than a male one.
This was also because the few female managers were terrible. Probably because of the exhausting effort it took them to get there, they were unbearable. Where I worked, I remember there was one who was the most feared, more than all the male bosses, because she identified entirely with her job. Maybe she was even married, I don't remember, but essentially it was as if she didn't have a family. So much so that none of us, I think, even remembers whether she had a family or not. When they wanted to push her out of her job, as she was over sixty by then, she started crying like a fountain.”`,
      style: {
        top: "22%",
        left: "47%",
        width: "2%",
        height: "2%",
      },
      textStyle: {
        width: "400px",
        left: "30px",
      },
    },
  ];

  return (
    <div className="women-page">
      <div className="page-image domenica">
        <div className="image-wrapper">
          <img
            src={marilde}
            alt=""
            className={`woman-image ${isHovered ? "fade-out" : ""}`}
          />

          <img
            src={marildeOG}
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
        Marilde Provera
      </div>
      <Link to="/rememberMarilde">
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

export default Marilde;
