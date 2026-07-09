export default function About()
{
  return (
    <section id="about" className="section">
      <div className="section-head">
        <div className="lead">
          <span className="num">01 / About</span>
          <h2>About me.</h2>
          <p className="desc">
            Background, what I work on, and what I do outside of it.
          </p>
        </div>
        <span className="meta">~/about</span>
      </div>

      <div className="about-grid">
        <div className="about-prose">
          <p>
            I started writing code in high school. I was reselling sneakers at the time and kept
            losing drops to bots, which got me curious about how they worked. Trying to keep up
            led me to Python, then to writing my own scripts, then to running a small business
            selling proxies, and eventually to enrolling at Rotterdam University of Applied Sciences to study it
            properly.
          </p>
          <p>
            Today I focus on web development and automation. I&apos;ve built and shipped a
            Chrome extension to the Chrome Web Store, an internal Python toolkit that ran the
            back office of an e-commerce store, and a handful of school and side projects in
            C#, Java, and JavaScript. I worked at <span className="strong">Thorix</span> as a
            junior Mendix developer for a year, building real applications used by real people.
          </p>
          <p>
            Outside of work I lift, read, watch anime, and study Japanese.
          </p>
        </div>

        <div className="about-right">
          <div className="about-photo">
            <img src="/photo.jpg" alt="Burak Kiliç" />
          </div>
          <aside className="about-facts">
            <div className="row"><div className="k">Location</div><div className="v">Rotterdam, NL</div></div>
            <div className="row"><div className="k">Education</div><div className="v">Rotterdam University of Applied Sciences</div></div>
            <div className="row"><div className="k">Year</div><div className="v">4th year, Informatica</div></div>
            <div className="row"><div className="k">Languages</div><div className="v">NL, EN, TR, JP</div></div>
            <div className="row"><div className="k">Focus</div><div className="v">Tools, automation, applications</div></div>
            <div className="row"><div className="k">Open to</div><div className="v">Internships and full-time positions</div></div>
          </aside>
        </div>
      </div>
    </section>
  );
}
