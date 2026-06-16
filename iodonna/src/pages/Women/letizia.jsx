import "../../styles/index.scss";
import "../../styles/women_styles.scss";

import letizia from "../../assets/letizia/letizia.png";
import letiziaOG from "../../assets/letizia/letiziaOG.png";
import mapButton from "../../assets/map-button.png";
import poemButton from "../../assets/poem-button.png";

import { useState } from "react";
import { Link } from "react-router-dom";

function Letizia() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeArea, setActiveArea] = useState(null);

  const areas = [
    {
      id: 1,
      text: `"...+ And then there was a girl, Mascia, 20 years old, who was very brave; whenever strikes were called, she would walk out all by herself. Seeing this really made me reflect, and I had started striking too."`,
      style: {
        top: "10%",
        left: "49%",
        width: "2%",
        height: "2%",
      },
      textStyle: {
        left: "30px",
      },
    },
    {
      id: 2,
      text: `"...but I started picketing outside the gates instead. And that was how I got to know all the male and female white-collar delegates at Mirafiori, including Vincenzo Elafro, who loved to joke around and would always tell us female clerks, 'Always remember that you were born from a useless rib.”`,
      style: {
        top: "32%",
        left: "47%",
        width: "2%",
        height: "2%",
      },
      textStyle: {
        left: "30px",
      },
    },
    {
      id: 3,
      text: `"...the strikes for the 1973 CCNL, the famous collective bargaining agreement through which we won the single grading system, which abolished discrimination between blue-collar and white-collar workers. I used to enter through Gate 4, and I was in a large open office full of men. I felt a bit uncomfortable because they were constantly coming over to talk to me with a thousand different excuses. Then the boss would take it out on me, saying, 'Don't distract them, don't let them come near you.'”`,
      style: {
        top: "40%",
        left: "60%",
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
      text: `"periodically the three groups would meet up together in the Main Auditorium to share their experiences. From that course, the intercategoriale donne was born, but I couldn't always participate because in 1975 I had a young daughter and was separated.”`,
      style: {
        top: "65%",
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
      text: `In 1978, I took part in the course on 'Women's Health,' and what I remember best is the moment of the self-examination. There was all this embarrassment about undressing, about learning to insert the 'speculum' ourselves with the help of the gynecologist; we giggled a bit, and we listened with rapt attention to the gynecologist explaining how our bodies were made. It was something that really brought us close together."`,
      style: {
        top: "73%",
        left: "50%",
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
      text: `"And then I participated in the occupation of the Sant'Anna hospital. I remember the meetings with the midwives and doctors like Tullia Todros and Gagliardi, not just regarding abortion but also to humanize childbirth, which at the time was quite problematic at Sant'Anna. I had just given birth to a baby girl in 1975, and I had actually gone to Cuneo to have her because Sant'Anna did not have a good reputation. And so, I was particularly sensitive to that issue. (Interview from November 15, 2005)"`,
      style: {
        top: "85%",
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
      id: 7,
      text: `“In 1975, I took part in the '150 hours' course on 'The Condition of Women.' There were three groups: one led by Anna Bravo, one by Maria Clara Rogozinski, and I was in the third one, led by Lucetta Scaraffia. I remember Anna Bravo’s group had a 'historical' approach, whereas in our group, we practiced consciousness-raising regarding our issues as women. It was a truly wonderful and interesting experience; we spoke freely, and many of us would knit while we shared confidences, cried, and supported one another. I had even managed to bring along some of my female colleagues.”`,
      style: {
        top: "63%",
        left: "35%",
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
      text: `"Then the boss would take it out on me, saying, 'Don't distract them, don't let them come near you.' The day of the strike arrives, and comrade Vasone, who was a delegate, comes over and tells me, 'Don't go on strike. We need to be careful for the time being.'
I turned red with rage (whenever we cross paths, he still reminds me of it to this day), and that one time I obeyed. But during the next strike, not only did I join in, but I started picketing outside the gates instead."`,
      style: {
        top: "47%",
        left: "40%",
        width: "2%",
        height: "2%",
      },
      textStyle: {
        left: "-340px",
      },
    },
    {
      id: 9,
      text: `"...my parents, and I chose the Technical Linguistic Institute in order to find a job quickly. In 1968, at fifteen years old, I had participated in the high school student struggles and protests. During one of these, a friend of mine was arrested, and I went to the Police Chief of Turin to ask for her release, naively thinking that since I was the daughter of the Police Chief of Cuneo, they would listen to me. The only result was that they opened a file on me.
Because of this, when I got my Foreign Languages diploma in 1972 and asked the mayor of Cuneo to put in a good word for me for a job at Fiat, I got an interview with Dr. Massia, who told me, 'I have a great deal of respect for your father, but I must tell you that you are flagged in the records at the Turin Police Headquarters as a Maoist.' Despite this, he decided to take a chance on me..."`,
      style: {
        top: "20%",
        left: "42%",
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
            src={letizia}
            alt=""
            className={`woman-image ${isHovered ? "fade-out" : ""}`}
          />

          <img
            src={letiziaOG}
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
        Letizia Pipitone
      </div>
      <Link to="/rememberLetizia">
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

export default Letizia;
