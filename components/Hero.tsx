export default function Hero()
{
  return (
    <section className="hero" id="top">
      <h1 className="hero-title rise d2">
        Software developer{ ' ' }
        <span className="muted">building tools, automation, and applications.</span>
      </h1>

      <div className="hero-meta rise d3">
        <div>
          <div className="k">Name</div>
          <div className="v">Burak Kiliç</div>
        </div>
        <div>
          <div className="k">Based in</div>
          <div className="v">Rotterdam, NL</div>
        </div>
        <div>
          <div className="k">Studying</div>
          <div className="v">Informatica, RUAS</div>
        </div>
      </div>

      <p className="hero-bio rise d4">
        I build Chrome extensions, automation scripts, internal tools, and small applications.
        Third-year Informatica student at Rotterdam University of Applied Sciences. I&apos;ve shipped production
        work for a Mendix consultancy and an e-commerce business I ran.
      </p>

      <div className="hero-actions rise d5">
        <a href="#work" className="btn btn-primary">
          View my work
          <span className="arrow">→</span>
        </a>
        <a href="/resume.pdf" className="btn btn-ghost">
          Download CV
        </a>
      </div>
    </section>
  );
}
