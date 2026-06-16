import "../styles/credits.scss";

export default function CredtisPage() {
  const testimonies = [
    {
      title: "ANONYMOUS REGISTERED TESTIMONY\n-WOMEN AND WORK",
      url: "https://www.mirafiori-accordielotte.org/wp-content/uploads/2012/12/1978.81TESTIMONIANZE-REG.pdf",
    },
    {
      title: "DELEGATES TESTIMONIES\n-CAREER AND STRUGGLES",
      url: "https://www.mirafiori-accordielotte.org/wp-content/uploads/2017/04/testimonianze_integrali.pdf",
    },
    {
      title:
        "DELEGATES TESTIMONIES\n-EXPERIENCES OF WOMEN THROUGH FORMAL DOCUMENTS",
      url: "https://www.mirafiori-accordielotte.org/wp-content/uploads/2012/12/1975.78-LA-SPINA-NELLOCCHIELLO.pdf",
    },
    {
      title: "NEWS EXTRACTS\n-WOMEN EMPLOYMENT",
      url: "https://www.mirafiori-accordielotte.org/wp-content/uploads/2013/01/1979-unità.pdf",
    },
    {
      title:
        "REPORT\n-COORDINATION AND TESTIMONIES FORM 150 HOURS COURSE ON HEALTH",
      url: "https://www.mirafiori-accordielotte.org/wp-content/uploads/2012/12/1978.-RIPRENDIAMOCI-LA-VITA.pdf",
    },
    {
      title: "PUBLICATION\n-DIRECT TESTIMONIES",
      url: "https://www.mirafiori-accordielotte.org/wp-content/uploads/2012/12/1990.-LALTRA-FACCIA-DELLA-FIAT-intero-.pdf",
    },
    {
      title: "PUBLICATION\n-INTERVIEWS",
      url: "https://buponline.com/az13zg/uploads/wpforms/6916-fd0357b44310bb9c674c186fee40bbc4/oa-2-149-delrossi-migliucci-romeo-sindacaliste-52003490c534bb0a229eaac4ceb7c9eb.pdf",
    },
    {
      title: "ARTICLE\n-TESTIMONIES WITH WORKERS",
      url: "https://libcom.org/article/interview-workers-fiat-1970",
    },
  ];

  const videos = [
    {
      title: "INTERVIEW\n-DISAPPOINTMENT FROM FIAT",
      url: "https://www.youtube.com/watch?v=UAJmJLgzK8k",
    },
    {
      title: "MANIFESTATIONS AND\nINTERVIEWS",
      url: "https://youtu.be/kCafqYsfrK8",
    },
    {
      title: "DOCUMENTARY\n-INTERCATEGORIALE DONNE\nEXPERIENCE",
      url: "https://youtu.be/lhpzNzjtcbk",
    },
  ];

  const articles = [
    {
      title: "ARTICLE\n-A GENERAL OVERVIEW",
      url: "https://libcom.org/article/italy-women-fiat-factory",
    },
    {
      title: "ESSAY\n-FEMINIST EXPERIENCE IN ITALY",
      url: "https://www.carocci.it/files/riviste/digitali/04_lussana.pdf?srsltid=AfmBOop2Xksm2xObEL3jABE2UuwkSD3DR9ImRU4FZaGIho1u3aNrhYx3",
    },
    {
      title: "MANIFESTO\n-WOMEN AGAINST FIRINGS",
      url: "https://www.mirafiori-accordielotte.org/wp-content/uploads/2012/12/1980-A-CASA-NON-SI-TORNA.pdf",
    },
    {
      title: "REPORTS",
      url: "https://www.mirafiori-accordielotte.org/wp-content/uploads/2012/12/1978.81-IL-SINDACATO-DI-EVA.pdf",
    },
    {
      title: "ARTICLE\n-THE 150 HOURS ON HEALTH",
      url: "https://efferivistafemminista.it/2014/12/con-le-donne-non-sulle-donne/",
    },
    {
      title: "ESSAY\n-GENDERED DEINDUSTRIALISATION",
      url: "https://www.jstor.org/stable/26852452",
    },
    {
      title: "RESEARCH PAPER\n-GENDERED DEINDUSTRIALISATION",
      url: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://access.archive-ouverte.unige.ch/access/metadata/184bcc10-97b0-47ad-bc10-9860d54f9f25/download&ved=2ahUKEwiMwLKe_YiVAxX9_rsIHYSINUQQFnoECBwQAQ&usg=AOvVaw0H7jmuyNSbdBJ5u7z-UXiv",
    },
    {
      title: "ESSAY\n-THE HIERARCHIES OF FIAT",
      url: "https://www.cambridge.org/core/journals/international-labor-and-working-class-history/article/abs/we-wont-go-back-home-womens-experiences-with-deindustrialization-and-unemployment-at-fiat-and-lip-a-comparative-perspective/83E2E873B839BEA8EC21CDA25C0EE8EF",
    },
    {
      title: "ESSAY\n-SOCIOLOGY OF THE FACTORY",
      url: "https://sociologica.unibo.it/article/view/11400/11594",
    },
  ];

  return (
    <div className="resources-page">
      <div className="resources-grid">
        <ResourceColumn title="TESTIMONIES" links={testimonies} />

        <ResourceColumn title="VIDEOS" links={videos} />

        <ResourceColumn title="ARTICLES AND ESSAYS" links={articles} />
      </div>
    </div>
  );
}

function ResourceColumn({ title, links }) {
  return (
    <div className="resource-column">
      <h2>{title}</h2>

      <div className="resource-links">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="resource-link"
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
}
