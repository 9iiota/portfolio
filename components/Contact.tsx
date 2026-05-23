export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>
        Get in touch.{' '}
        <span className="muted">Open to internships, freelance, and collaboration.</span>
      </h2>

      <div className="contact-side">
        <a href="mailto:burakkilicnl@gmail.com" className="contact-row">
          <div>
            <div className="lbl">Email</div>
            <div className="val">burakkilicnl@gmail.com</div>
          </div>
          <span className="arrow">↗</span>
        </a>
        <a href="https://github.com/9iiota" target="_blank" rel="noopener noreferrer" className="contact-row">
          <div>
            <div className="lbl">GitHub</div>
            <div className="val">github.com/9iiota</div>
          </div>
          <span className="arrow">↗</span>
        </a>
        <a
          href="https://www.linkedin.com/in/burak-kilic-nl/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-row"
        >
          <div>
            <div className="lbl">LinkedIn</div>
            <div className="val">linkedin.com/in/burak-kilic-nl</div>
          </div>
          <span className="arrow">↗</span>
        </a>
        <a href="/resume.pdf" className="contact-row">
          <div>
            <div className="lbl">Resume</div>
            <div className="val">Download PDF</div>
          </div>
          <span className="arrow">↓</span>
        </a>
      </div>
    </section>
  );
}
