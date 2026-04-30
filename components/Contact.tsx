export default function Contact() {
  return (
    <section id="contact" style={{ padding: "6rem 0 2rem" }}>
      <div
        className="sticker"
        style={{
          background: "var(--ink)",
          color: "var(--paper)",
          padding: "clamp(2.5rem, 6vw, 5rem)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative blobs */}
        <div
          style={{
            position: "absolute",
            top: -40,
            right: -40,
            width: 180,
            height: 180,
            background: "var(--coral)",
            borderRadius: "50%",
            opacity: 0.9,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -50,
            left: -30,
            width: 140,
            height: 140,
            background: "var(--acid)",
            borderRadius: "50%",
            opacity: 0.85,
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            className="mono"
            style={{
              fontSize: 13,
              color: "var(--acid)",
              marginBottom: "1.5rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            ✦ let's talk ✦
          </div>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              marginBottom: "2rem",
            }}
          >
            Got something <br />
            <span className="serif" style={{ fontWeight: 400, color: "var(--mint)" }}>
              interesting
            </span>{" "}
            to build?
          </h2>

          <a
            href="mailto:burakkilicnl@gmail.com"
            style={{
              display: "inline-block",
              padding: "18px 36px",
              background: "var(--acid)",
              color: "var(--ink)",
              borderRadius: 999,
              fontSize: "1.1rem",
              fontWeight: 600,
              border: "2.5px solid var(--paper)",
              boxShadow: "5px 5px 0 var(--coral)",
            }}
          >
            burakkilicnl@gmail.com →
          </a>

          <div
            style={{
              marginTop: "2.5rem",
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <SocialLink href="https://github.com/9iiota">github</SocialLink>
            <SocialLink href="https://www.linkedin.com/in/burak-kilic-nl/">
              linkedin
            </SocialLink>
            <SocialLink href="/resume.pdf">resume</SocialLink>
          </div>
        </div>
      </div>

      <div
        className="mono"
        style={{
          textAlign: "center",
          fontSize: 12,
          marginTop: "3rem",
          opacity: 0.5,
        }}
      >
        © 2026 · Burak Kiliç · made in Rotterdam
      </div>
    </section>
  );
}

function SocialLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="mono"
      style={{
        fontSize: 13,
        padding: "8px 18px",
        border: "1.5px solid var(--paper)",
        borderRadius: 999,
        opacity: 0.85,
        transition: "all 150ms",
      }}
    >
      {children} ↗
    </a>
  );
}
