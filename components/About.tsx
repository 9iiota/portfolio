export default function About() {
  return (
    <section id="about" style={{ padding: "8rem 0 6rem" }}>
      <div className="section-eyebrow">about</div>
      <h2 className="section-title">
        A few things <br />
        about me.
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        <Card bg="var(--paper)" rotate="-1deg">
          <div className="mono" style={{ fontSize: 12, marginBottom: 10, opacity: 0.6 }}>
            01 / how it started
          </div>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.55 }}>
            I used to resell sneakers. The market was full of bots, and trying
            to compete with them got me curious about how they worked. That
            curiosity turned into{" "}
            <strong>writing my own scripts</strong>, then writing software,
            then studying it.
          </p>
        </Card>

        <Card bg="var(--acid)" rotate="1deg">
          <div className="mono" style={{ fontSize: 12, marginBottom: 10, opacity: 0.7 }}>
            02 / what I build
          </div>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.55 }}>
            Browser extensions, automation tools, gym management systems,
            video generators. If something feels like a small repetitive
            problem worth solving, I'll probably try to build a tool for it.
          </p>
        </Card>

        <Card bg="var(--paper)" rotate="-0.5deg">
          <div className="mono" style={{ fontSize: 12, marginBottom: 10, opacity: 0.6 }}>
            03 / outside code
          </div>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.55 }}>
            Lifting weights, reading, gaming, anime &amp; manga, and slowly
            chipping away at learning Japanese. The stuff I do for fun has a
            lot more discipline involved than people usually expect.
          </p>
        </Card>
      </div>
    </section>
  );
}

function Card({
  children,
  bg,
  rotate,
}: {
  children: React.ReactNode;
  bg: string;
  rotate: string;
}) {
  return (
    <div
      className="sticker"
      style={{
        background: bg,
        padding: "1.75rem",
        transform: `rotate(${rotate})`,
      }}
    >
      {children}
    </div>
  );
}
