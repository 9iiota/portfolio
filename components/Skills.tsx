const skills = [
  { name: "Python", level: "experienced", color: "tag-acid" },
  { name: "JavaScript", level: "experienced", color: "tag-mint" },
  { name: "HTML", level: "experienced", color: "tag-coral" },
  { name: "CSS", level: "experienced", color: "tag-sky" },
  { name: "C#", level: "shipped projects", color: "tag-grape" },
  { name: "Java", level: "competent", color: "tag-pink" },
  { name: "Mendix", level: "professional", color: "tag-acid" },
  { name: "REST APIs", level: "comfortable", color: "tag-coral" },
  { name: "SQLite", level: "comfortable", color: "tag-mint" },
  { name: "Git", level: "daily", color: "tag-sky" },
  { name: "Chrome Extensions", level: "shipped one", color: "tag-grape" },
  { name: "Web scraping", level: "comfortable", color: "tag-pink" },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "6rem 0" }}>
      <div className="section-eyebrow">skills</div>
      <h2 className="section-title">
        Things I <br />
        use to build.
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          maxWidth: 900,
        }}
      >
        {skills.map((s, i) => (
          <span
            key={s.name}
            className={`tag ${s.color}`}
            style={{
              fontSize: 14,
              padding: "10px 18px",
              animation: `slideUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.04}s backwards`,
            }}
          >
            {s.name}
            <span
              style={{
                opacity: 0.5,
                fontSize: 11,
                marginLeft: 4,
              }}
            >
              · {s.level}
            </span>
          </span>
        ))}
      </div>

      <p
        style={{
          marginTop: "2.5rem",
          maxWidth: 580,
          color: "rgba(26, 19, 37, 0.65)",
          fontSize: "1rem",
        }}
      >
        Honestly, the language matters less than the problem. Give me a week
        and a good README and I'll figure it out.
      </p>
    </section>
  );
}
