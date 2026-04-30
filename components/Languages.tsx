const languages = [
  { name: "Dutch", level: "Native", flag: "🇳🇱", bg: "var(--coral)", color: "var(--paper)" },
  { name: "English", level: "Fluent", flag: "🇬🇧", bg: "var(--acid)", color: "var(--ink)" },
  { name: "Turkish", level: "Conversational", flag: "🇹🇷", bg: "var(--mint)", color: "var(--ink)" },
  { name: "Japanese", level: "Beginner · learning", flag: "🇯🇵", bg: "var(--sky)", color: "var(--ink)" },
];

export default function Languages() {
  return (
    <section id="languages" style={{ padding: "6rem 0" }}>
      <div className="section-eyebrow">languages</div>
      <h2 className="section-title">
        Languages I <br />
        speak (and study).
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.25rem",
          maxWidth: 900,
        }}
      >
        {languages.map((l, i) => (
          <div
            key={l.name}
            className="sticker"
            style={{
              background: l.bg,
              color: l.color,
              padding: "1.5rem",
              transform: `rotate(${i % 2 === 0 ? "-0.5deg" : "0.5deg"})`,
              animation: `slideUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.08}s backwards`,
            }}
          >
            <div
              style={{
                fontSize: 40,
                marginBottom: 6,
                lineHeight: 1,
              }}
            >
              {l.flag}
            </div>
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                marginBottom: 2,
              }}
            >
              {l.name}
            </div>
            <div
              className="mono"
              style={{
                fontSize: 12,
                opacity: 0.75,
              }}
            >
              {l.level}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
