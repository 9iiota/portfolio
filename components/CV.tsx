type Item = {
  when: string;
  role: string;
  org: string;
  orgLink?: string;
  where: string;
  body: string;
};

const items: Item[] = [
  {
    when: '2023 — 2024',
    role: 'Junior Mendix Developer',
    org: 'Thorix B.V.',
    orgLink: 'https://thorix.nl',
    where: 'Barendrecht, NL',
    body:
      'Built Mendix applications for leave management, expense claims, project tracking, time registration, and QR-based reservation systems. Wrote custom microflows, integrated REST APIs, and built dynamic UI components.',
  },
  {
    when: '2023 — 2024',
    role: 'Founder',
    org: 'CandyVillage',
    where: 'Online',
    body:
      'Started and ran a Shopify-based store selling halal-certified candy. Sourced inventory, handled bookkeeping in Moneybird, and built the internal Python toolkit that automated most day-to-day operations.',
  },
  {
    when: '2020',
    role: 'Founder',
    org: 'ikoProxies',
    where: 'Online',
    body:
      'Sold datacenter proxies to sneaker resellers. Provisioned Linux servers over SSH and configured them to expose authenticated proxy endpoints. First real exposure to running infrastructure and dealing with paying customers.',
  },
  {
    when: '2020 — present',
    role: 'Informatica student',
    org: 'Rotterdam University of Applied Sciences',
    orgLink: 'https://www.rotterdamuas.com',
    where: 'Rotterdam, NL',
    body:
      'Coursework in OOP, algorithms and data structures, operating systems, concurrency, software quality, functional programming, and modeling and system analysis.',
  },
  {
    when: 'Completed',
    role: 'HAVO diploma',
    org: 'Avicenna College',
    where: 'Rotterdam, NL',
    body: 'Pre-university secondary education.',
  },
];

export default function CV()
{
  return (
    <section id="cv" className="section">
      <div className="section-head">
        <div className="lead">
          <span className="num">05 / Experience</span>
          <h2>Where I&apos;ve worked and studied.</h2>
        </div>
      </div>

      <div className="cv-list">
        { items.map((i) => (
          <div key={ i.role + i.org } className="cv-item">
            <div className="cv-when">{ i.when }</div>
            <div className="cv-body">
              <h4>
                { i.role } <span className="at">at</span>{ ' ' }
                { i.orgLink ? (
                  <a href={ i.orgLink } target="_blank" rel="noopener noreferrer">
                    { i.org }
                  </a>
                ) : (
                  i.org
                ) }
              </h4>
              <p>{ i.body }</p>
            </div>
            <div className="cv-where">{ i.where }</div>
          </div>
        )) }
      </div>
    </section>
  );
}
