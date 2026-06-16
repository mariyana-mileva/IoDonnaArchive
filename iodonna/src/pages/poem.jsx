import "../styles/index.scss";
import "../styles/poem_style.scss";
import domenica from "../assets/domenica/domenica.png";
import letizia from "../assets/letizia/letizia.png";
import loredana from "../assets/loredana/loredana.png";
import marisa from "../assets/marisa/marisa.png";
import tina from "../assets/tina.png";
import marilde from "../assets/marilde/marilde.png";
import renata from "../assets/renata/reneta.png";
import rina from "../assets/rina/rina.png";

import FadeIn from "../components/fadeInAnimation";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Poem() {
  const [expanded, setExpanded] = useState(false);
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    [domenica, letizia, loredana, marisa, tina].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const handleContinue = () => {
    console.log("Button clicked");
    setExpanded(true);

    setTimeout(() => {
      setShowImages(true);
    }, 1000);
  };

  const italianPoem = `
Ci sono dei giorni
che quasi mi arrendo
ripenso ai miei sogni
e di nascosto piango

Per chi quel pianeta
dai mille tesori
se tante come me
ne restano fuori?

Vicino ai telai
tra tanto rumore
mi isolo un poco
e sogno per ore:

Una donna istruita
riverita elegante
che si gode la vita
ogni singolo istante

Il doppio lavoro
che la vita ha rubata
è solo un ricordo
una storia passata

Ma poi ho rimorso
di tanta scemenza
conosco solo un modo
per questa mia esistenza

E' vero che allo specchio
mi vedo sciupata
in fretta io invecchio
ma son ripagata:

I miei figli forse avranno
quel che a me non è toccato
e allora capiranno
che questo mi è bastato.`;

  const englishPoem = `
There are days 
when I almost give up, 
I think back on my dreams 
and secretly I cry.  

Who is that planet for, 
with its thousand treasures, 
if so many like me 
are left outside of it?  

Beside the looms, 
amid so much noise, 
I withdraw into myself a little 
and dream for hours:  

An educated woman, 
respected, elegant, 
who enjoys life 
in every single moment.  

The double burden of work 
that life imposed on her 
is only a memory now, 
a story of the past.  

But then I feel remorse 
for such foolish fantasies; 
I know only one way 
for this life of mine.  

It’s true that in the mirror 
I see myself worn out, 
I am aging too quickly, 
yet I am rewarded:  

Perhaps my children will have
what was never granted to me, and 
then they will understand that 
this alone was enough for me.  

(i.m.) `;

  console.log(showImages);
  return (
    <div className="poem-page">
      <FadeIn delay={300}>
        <div className={`poem-container ${expanded ? "expanded" : ""}`}>
          {" "}
          <div className="poem-column italian">
            <pre>{italianPoem}</pre>
          </div>
          {showImages && (
            <div className="images-container">
              <Link to={"/domenica"}>
                <img src={domenica} alt="Domenica" />
              </Link>

              <Link to={"/letizia"}>
                <img src={letizia} alt="Letizia" />
              </Link>
              <Link to={"/loredana"}>
                <img src={loredana} alt="Loredana" />
              </Link>
              <Link to={"/marisa"}>
                <img src={marisa} alt="Marisa" />
              </Link>
              <Link to="/tina">
                {" "}
                <img src={tina} alt="Tina" />
              </Link>
              <Link to={"/renata"}>
                <img src={renata} alt="Tina" />
              </Link>
              <Link to={"/rina"}>
                <img src={rina} alt="Tina" />
              </Link>
              <Link to={"/marilde"}>
                {" "}
                <img src={marilde} alt="Tina" />
              </Link>
            </div>
          )}
          <div className="poem-column english">
            <pre>{englishPoem}</pre>
          </div>
          {!expanded && (
            <button className="continue-button" onClick={handleContinue}>
              <span>CONTINUE</span>
            </button>
          )}
        </div>
      </FadeIn>
    </div>
  );
}
export default Poem;
