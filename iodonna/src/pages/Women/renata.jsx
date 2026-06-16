import "../../styles/index.scss";
import "../../styles/women_styles.scss";

import renata from "../../assets/renata/reneta.png";
import renataOG from "../../assets/renata/renetaOG.png";
import mapButton from "../../assets/map-button.png";
import poemButton from "../../assets/poem-button.png";

import { useState } from "react";
import { Link } from "react-router-dom";

function Renata() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeArea, setActiveArea] = useState(null);

  const areas = [
    {
      id: 1,
      text: `"...my dad retired and I was hired on September 15, 1968, at Fiat Mirafiori. I was in the Blue-Collar Payroll Office for the Body Shop, and I entered through Gate 2 on Corso Tazzoli. My family was very Catholic; I knew nothing about the union. I had only been told that anyone who went on strike was a communist. A gentleman escorted me to the office and told me, 'You'll be working in the Payroll Offices? Well, my dear, you'll find it quite tough.' And in fact, it was just like being on the assembly line. Every morning we were assigned our tasks for the day. Every evening we had to report back, and we only had 8 hours of time, because two hours were needed, taking turns, to cover for any absent colleagues. We worked 10 hours a day, we went in on Saturdays too, and the workloads were insane."`,
      style: {
        top: "6%",
        left: "22%",
        width: "2%",
        height: "2%",
      },
      textStyle: {
        left: "30px",
      },
    },
    {
      id: 2,
      text: `“At a certain point I met—I don’t remember exactly how, because I never went to the union assemblies—three delegates: Carlo Daghino, Gianfranco Zabaldano, and Vincenzo Elafri. With them, I started to discover a few things about the union. Furthermore, I attended a parish where the assistant pastor, Armando Pomatto, had become a worker-priest; I had started doing a 'review of life,' beginning to understand that faith meant, above all, fighting for justice and offering solidarity. Because while it is true that the Gospel says 'the last shall be first in the Kingdom of Heaven,' we were convinced that the fullness of this 'kingdom'..."`,
      style: {
        top: "32%",
        left: "41%",
        width: "2%",
        height: "2%",
      },
      textStyle: {
        left: "30px",
      },
    },
    {
      id: 3,
      text: `“One fine day in 1970, we all decided together to 'cross our arms' during the time of the month when the 'envelope stuffing'$^{21}$ was done. I wasn't a union delegate yet, and I told them, 'Don't worry; if they come to say something to us, I'll do the talking.' It was completely unexpected for Management, who brought in the “guardioni“ overnight to finish the envelopes, because the next day was payday and if the envelopes hadn't been ready, there would have been a workers' uprising.”`,
      style: {
        top: "35%",
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
      text: `"... I was terrified; I never would have gone alone[to confront]. We managed to get two girls hired, even if only on a fixed-term contract, and after a few renewals, they let them go. We 'crossed our arms' again, all in agreement, and we managed to get these two girls brought back. It was a great victory, truly beautiful. Too bad that these two girls sometimes went on strike and sometimes didn't, but oh well, we were happy all the same."`,
      style: {
        top: "55%",
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
      text: `"In 1969, when the first workers' struggles erupted, Fiat Management would send a bus to pick us up at home and sneak us in. I was absolutely mortified by this. I had talked about it with my coworkers—there were 60 of us, all women, and, naturally, we had a male boss. Even though I knew nothing about the union, I said that it felt wrong to go in like that, sneaking around, that the contract was for everyone, and above all, that we couldn't keep working at that pace. I would leave exhausted and go to sleep at nine in the evening, even though I was only 24 years old.”
`,
      style: {
        top: "25%",
        left: "30%",
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
      text: `“In 1975, I was working as a white-collar employee at Fiat Mirafiori in the Blue-Collar Payroll Office for the Body Shop, and I was a union delegate. Tina Fronte and Domenica Airaudo invited me to join a group of women from various job categories who met up together—women only. As usual, I followed Tina's lead, and I discovered it was the CGIL-CISL-UIL Women's Inter-union Committee. We would meet at the Quinta Lega, right in front of the Mirafiori administration building on Corso Unione Sovietica. I felt very much at home there, because this group helped me feel less alone; I knew that out there, in other factories, there were other women like me who were fighting and who shared my exact same ideals.”`,
      style: {
        top: "77%",
        left: "65%",
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
      text: `The person who constantly summoned us was Dr. Paolo Annibaldi, the Director of Personnel for the entire company, and I preferred to go see him with my 'guardian angels' because his arrogant way of speaking to people intimidated me. We had to go in, negotiate, and get the warnings withdrawn, because after the third one, you risked being fired.
However, they never fired us, partly because the moment the strikes ended and an agreement was reached, we always caught up on the backlog of work out of a sense of responsibility toward the blue-collar workers.”`,
      style: {
        top: "67%",
        left: "45%",
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
      text: `“Then I met Tina Fronte, who was the one who gave me the push and the tools I needed. Because I only had a few years of schooling, I’ve always had a complex—and I still have it today—about not being educated enough, about not being up to the task of writing flyers and doing all those kinds of things. Then I met Domenica Airaudo, and I started talking with them and the other delegates. That’s when I realized that instead of continuing to work like animals, we could demand that they hire more people."`,
      style: {
        top: "50%",
        left: "30%",
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
            src={renata}
            alt=""
            className={`woman-image ${isHovered ? "fade-out" : ""}`}
          />

          <img
            src={renataOG}
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
        Renata Bonino
      </div>
      <Link to="/rememberRenata">
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

export default Renata;
