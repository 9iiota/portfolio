type Tool = { name: string; level: string };

const tools: Tool[] = [
  { name: 'Python', level: 'Proficient' },
  { name: 'JavaScript', level: 'Proficient' },
  { name: 'HTML & CSS', level: 'Proficient' },
  { name: 'Mendix', level: 'Professional' },
  { name: 'Git & GitHub', level: 'Daily use' },
  { name: 'REST APIs', level: 'Comfortable' },
  { name: 'SQLite & SQL', level: 'Comfortable' },
  { name: 'Web scraping', level: 'Comfortable' },
  { name: 'Java', level: 'Competent' },
  { name: 'C#', level: 'Coursework' },
];

export default function Stack() {
  return (
    <section id="stack" className="section">
      <div className="section-head">
        <div className="lead">
          <span className="num">03 / Stack</span>
          <h2>Languages and tools.</h2>
          <p className="desc">
            Languages and tools I&apos;ve worked with, with an honest indication of comfort level.
          </p>
        </div>
        <span className="meta">{tools.length} tools</span>
      </div>

      <div className="stack-grid">
        {tools.map((t) => (
          <div key={t.name} className="stack-cell">
            <span className="level">{t.level}</span>
            <span className="name">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
