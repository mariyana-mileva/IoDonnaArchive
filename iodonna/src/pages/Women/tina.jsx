import "../../styles/index.scss";
import "../../styles/women_styles.scss";

import tina from "../../assets/tina.png";
import tinaHover from "../../assets/tinaHover.png";
import mapButton from "../../assets/map-button.png";
import poemButton from "../../assets/poem-button.png";

import { useState } from "react";
import { Link } from "react-router-dom";

function Tina() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeArea, setActiveArea] = useState(null);

  const areas = [
    {
      id: 1,
      text: `“I STILL LAUGH IF I tHINK ABOUT MY FIRST MONTHS, BETWEEN BLUSHING AND RESTRAINT. never a dream more frustrated than that. in fiat you would not go forward if you were “good”, but only if you accepted the logic of the herd, the assertive sheep, the “yes” to the boss even if you perceived him as way more inferior than you in knowledge, in culture... “`,
      style: {
        top: "7%",
        left: "69%",
        width: "2%",
        height: "2%",
      },
      textStyle: {
        left: "30px",
      },
    },
    {
      id: 2,
      text: `“one morning, i do not even remember why, I found myself helplessly sobbing in the changing room: i was twenty years old and what was waiting for me in my work were days always the same. a colleague of mine, she was already fifty years old, consoled me brutally: “just think you are getting paid and stop caring about the rest. YOU’LL FIND a husband in here, you’ll fuck on Saturdays and you’ll live happy and content” `,
      style: {
        top: "40%",
        left: "75%",
        width: "2%",
        height: "2%",
      },
      textStyle: {
        left: "30px",
      },
    },
    {
      id: 3,
      text: `"Initially, I did not participate in the strikes and did not accept in any way the workers' picket lines at the gates. I felt my person was violated, my right to decide, and since I already did not accept impositions from anyone, imagine if someone could have blocked me (me!). During the strikes, management allowed office employees to enter even at 3 in the morning, and I believe they called it "overtime."
With a group of other employees, I entered very early once. Many felt clever for having evaded the picket lines; I sank into the darkest shame: hiding was not like me. From then on, I began to show up at Gate 4 regularly at five to eight in the morning, right in the thick of the pickets, and it was obvious that I would clash with the "damn workers" ("operaiacci"), as I used to call them.
With a great deal of imprudence—and impudence—I did not shy away from physical clashes. Mind you, it's not like I got into fistfights, but if someone shoved me, I didn't hesitate to give it back to them with interest.
Once, it went rather badly. One of them snatched the paper bag out of my hand with my lunchbox ("baracchino") and a peach inside! I turned on him, taking back the lunchbox and shouting at him: "Try touching me again and I'll kill you!"
If he could have, he would have strangled me, such was the hatred I read on his face. I walked away with my head held high, and my peach—I liked them very firm—grazed my head, smashing against the boundary wall, accompanied by: "Go to the boss, he's got a hard one for you."
A guard—that's what the Fiat supervisors were nicknamed—exclaimed, "Good job, young lady!" and I told him to get lost too.
A few months later, I was picketing with the workers too."`,
      style: {
        top: "50%",
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
      text: `“when you ask me about the union, the editorial union staff and so on, you should actually ask me about the men of the union, of the reaction of the men of the union, because of men it was composed  - like today anyway - in majority. AND it wis honest to state that there were many differences between men and men, and between men part of different union organisations (and political ones)”`,
      style: {
        top: "55%",
        left: "80%",
        width: "2%",
        height: "2%",
      },
      textStyle: {
        left: "30px",
      },
    },
    {
      id: 5,
      text: `“Each of us remembers the struggle involved in getting a motion passed, making an intervention, requesting assemblies among the women workers or among the female office employees ‘as women.’ And we ourselves — when we were a close-knit group — had adopted different approaches depending on the workers or the union secretaries involved. Jokingly, we would toss the tasks back and forth: ‘You go to that one,’ ‘No, absolutely not, I already went last time.’ I think that if all of us were to write down our memories, what would emerge would be a hilarious — but also very miserable — picture of the men in the union.
And yet I also remember attentive men who, while not obstructing our work, stayed on the sidelines, curious. Or there would be a timid invitation to dinner to talk, ask questions, understand. It was not easy even for them to grasp this female revolt, considering that, at times, they already had the revolution at home. Many worker delegates would say, ‘I won’t let my wife see you, because then she’ll ruin me.’ Then perhaps they would introduce her to us during a demonstration or some other occasion, and an intense exchange would begin under their gaze, somewhere between pleased and worried — very worried!”
`,
      style: {
        top: "70%",
        left: "80%",
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
      text: `“Things got worse when it came to the ‘feminist delegates’: there was malicious discrediting, pointless gossip. When I had my first ‘official’ meeting with two delegates and the women from the Sellerie [saddlery/workshop section] (though the coordinator was a male delegate, and I had to address myself to him), afterward the women told me: ‘We thought you were different.’ And in that different there was everything that someone had probably said about me — the feminist who’s a bit of a slut, the one who knows what she says, be careful, etc. Another issue concerned sexuality, emotional relationships, and the relationships that were forming; many men, through their new feminist partners, were changing their attitude toward the movement… Yes, I think each of us would have a great deal to tell.”`,
      style: {
        top: "78%",
        left: "73%",
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
      text: `“the occupation of a ward at the Sant'Anna [hospital] was a peak moment of the struggle. For the first time, organized women, and even unionized ones, forced their way into the sanctum sanctorum of gynecologists. Professor Siliquini's new and empty ward, intended for private clients, was occupied by hundreds of women, determined to enforce the abortion law using the Karman method. I remember fiery assemblies in the main hall of the University Clinic with medical barons who were completely disoriented yet unexpectedly understanding (Bocci and Gagliardi), young gynecologists who were sincerely available and others ready to seize the opportunity, nurses and midwives who finally had their say on an issue that was so feminine, yet completely dominated by men.”`,
      style: {
        top: "70%",
        left: "47%",
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
      text: `"Cristiana Cavagna was very important to me during the starting months of what would become the Intercategoriale Donne Cgil Cisl Uil (at the beginning we signed off as the unitary group of female delegates). She was a very strong woman, sometimes almost harsh, and of extraordinary intelligence. At the time, she did not have a 'feminist' background, nor, as far as I know, extra-parliamentary sympathies. She was simply a young woman who was maturing many of her personal choices. `,
      style: {
        top: "65%",
        left: "20%",
        width: "2%",
        height: "2%",
      },
      textStyle: {
        left: "-340px",
      },
    },
    {
      id: 9,
      text: `Starting from November 1974, the labor union, based on a project by Anna Bravo—a lecturer close to Lotta Continua—had organized a '150 hours' (150 ore) course on the condition of women at Palazzo Nuovo. I participated in several meetings, but I would leave them feeling unsatisfied. The themes addressed, even though I agreed with them, seemed too inward-looking (intimiste) to me."`,
      style: {
        top: "45%",
        left: "20%",
        width: "2%",
        height: "2%",
      },
      textStyle: {
        left: "-340px",
      },
    },
    {
      id: 10,
      text: `I believe that the women's movement began to unravel when the splendid minds that "led" it started to lead only themselves, to distance themselves from those who constituted their strength, to "analyze" them, to build theories, to look for data, and to compile tables—no less true for that, but far removed from the daily lives of all of us. Did the thought of gender difference originate in a workshop? Not that it makes it any less effective, but try explaining it to those who today bend their backs to make ends meet. They are empty words and concepts that find no echo in everyday life. Self-referentiality marked an undeniable individual advancement, but it left behind the vast majority of the women of that time. An absence that does not help those who are entering the world today. A change of preposition, "for women instead of with women," means solitude for those who are still involved in politics or the union, and alienation for those who are far from it or "do not want" to go there. It's tough. (Written contribution of July 20, 2005)`,
      style: {
        top: "48%",
        left: "33%",
        width: "2%",
        height: "2%",
      },
      textStyle: {
        left: "-340px",
      },
    },
    {
      id: 11,
      text: `In Turin, the first discussions and analyses on domestic work had brought to the fore what would come to be called "care work" (lavoro di cura). Not only the family understood as spouses and children, but also the elderly, disadvantaged people, and children with disabilities. Trying to pursue different paths was also a challenge.
The program of the "women and cooperatives" course was aimed at employed women, unemployed women, housewives, and even another new "category": women on redundancy funds (cassaintegrate) who, like me, had experienced factory life and had been pushed out in a completely new way. Three groups participated in the "Women and Cooperatives" course. The course concluded with the birth of the cooperative Le Mani ("The Hands"), of which I was the President for two years. I had wanted to call it that because women's hands know how to face the world's labor, but they also know how to create the infinite beautiful things that make life pleasant.`,
      style: {
        top: "47%",
        left: "44%",
        width: "2%",
        height: "2%",
      },
      textStyle: {
        left: "-340px",
      },
    },
    {
      id: 12,
      text: `"The event that marked a turning point, or rather it would be better to say the person, was a student demonstration in Piazza Castello in 1967. The Greek actress Melina Mercouri had been invited; she had fled Greece following the coup d'état by Colonel Papadopoulos, who had ordered the arrest of thousands of opponents. A friend of mine and I went to listen to her. At a certain point, clashes broke out, the police began to charge, and porphyry cobblestones flew (after which the square was paved with asphalt...). We took refuge behind the first column of Via Pietro Micca, and from there I watched that wonderful woman who, heedless of the noise, the smoke from the tear gas canisters, and everything else, continued to harangue the crowd and speak about her country.... It gave me pause, and I reflected that perhaps it was time for me to start learning more about the world I lived in.`,
      style: {
        top: "20%",
        left: "45%",
        width: "2%",
        height: "2%",
      },
      textStyle: {
        left: "-340px",
      },
    },
    {
      id: 13,
      text: `“Fiat was for me a great step forward in the making of a “future”; the permanent position that would have made it possible to satisfy desires that up to that point were just desires: no longer weigh on the family budget, travelling, buying books finally “mine” and not borrowing them from libraries; thinking about finding a house all for me... Especially, a great will of showing my skills with the awareness that “if one is really able, he will make a career because there will be authoritative people that will recognise these skills”...`,
      style: {
        top: "19%",
        left: "55%",
        width: "2%",
        height: "2%",
      },
    },
  ];

  return (
    <div className="women-page">
      <div className="page-image">
        <div className="image-wrapper">
          <img
            src={tina}
            alt=""
            className={`woman-image ${isHovered ? "fade-out" : ""}`}
          />

          <img
            src={tinaHover}
            alt=""
            className={`woman-image overlay ${isHovered ? "fade-in" : ""}`}
          />
        </div>{" "}
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
        Tina Fronte
      </div>
      <Link to="/rememberTina">
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

export default Tina;
