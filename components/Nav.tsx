export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">B</span>
          <span>Burak Kiliç</span>
        </a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#stack">Stack</a>
          <a href="#cv">Experience</a>
        </nav>
        <a href="#contact" className="nav-cta">
          Get in touch
        </a>
      </div>
    </header>
  );
}
