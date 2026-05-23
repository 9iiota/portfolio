type Lang = { iso: string; name: string; level: string };

const langs: Lang[] = [
  { iso: 'NL', name: 'Dutch', level: 'Native' },
  { iso: 'EN', name: 'English', level: 'Fluent' },
  { iso: 'TR', name: 'Turkish', level: 'Conversational' },
  { iso: 'JP', name: 'Japanese', level: 'Beginner, learning' },
];

export default function Languages() {
  return (
    <section id="languages" className="section">
      <div className="section-head">
        <div className="lead">
          <span className="num">04 / Languages</span>
          <h2>Languages I speak.</h2>
        </div>
      </div>

      <div className="lang-grid">
        {langs.map((l) => (
          <div key={l.iso} className="lang">
            <div className="iso">{l.iso}</div>
            <div className="name">{l.name}</div>
            <div className="lvl">{l.level}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
