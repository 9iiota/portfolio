type Status = 'live' | 'archived' | 'school';

type Project = {
  num: string;
  year: string;
  name: string;
  lede: string;
  stack: string[];
  link?: string;
  linkLabel?: string;
  status: Status;
  feature?: boolean;
};

const projects: Project[] = [
  {
    num: '01',
    year: '2026',
    name: 'ICU Delirium Detection',
    lede:
      'Capstone research project comparing Random Forest, XGBoost, and LSTM for early delirium detection in ICU patients using structured EHR data from MIMIC-IV. Builds a prediction ensemble, evaluates lead time against standard CAM-ICU screening cycles, and includes SHAP-based interpretability and demographic fairness analysis. Team of four. Targeting publication as a scientific paper.',
    stack: ['Python', 'scikit-learn', 'XGBoost', 'PyTorch', 'SHAP', 'pandas'],
    status: 'school',
    linkLabel: 'Research in progress',
    feature: true,
  },
  {
    num: '02',
    year: '2025',
    name: 'NYC Taxi Forecasting',
    lede:
      'A team data-science project forecasting NYC green-taxi trip volumes from 2017 to 2020, factoring in weather and temporal patterns. Custom pipeline pulling 4 years of TLC parquet data, lagged time-series features, Prophet benchmarked against gradient-boosted models with k-fold CV, deployed via Plotly Dash.',
    stack: ['Python', 'Prophet', 'scikit-learn', 'Plotly Dash'],
    status: 'school',
    linkLabel: 'School project',
  },
  {
    num: '03',
    year: '2025',
    name: 'Prayer Times',
    lede:
      'A Chrome extension that displays daily Islamic prayer times with live badge countdowns and configurable notifications. Pulls from the IslamicFinder API with Diyanet and IslamVakti as fallbacks, and uses OpenStreetMap Nominatim for geolocation. Published to the Chrome Web Store.',
    stack: ['JavaScript', 'Chrome API', 'OSM Nominatim', 'Web scraping'],
    link: 'https://github.com/9iiota/prayer-times-namaz-vakitleri-extension',
    linkLabel: 'View on GitHub',
    status: 'live',
  },
  {
    num: '04',
    year: '2024',
    name: 'Shopify Ops Toolkit',
    lede:
      'An internal Python CLI for CandyVillage that wires together Shopify, Moneybird, Google Drive and Sheets, and DPD into a single workflow. Class-based managers per service, configurable via .ini, pytest tests, and PyMuPDF for invoice parsing. Replaced hours of weekly admin work.',
    stack: ['Python', 'Shopify API', 'Moneybird API', 'Google APIs'],
    status: 'archived',
    linkLabel: 'Closed source',
  },
  {
    num: '05',
    year: '2023',
    name: 'Quran TikTok Generator',
    lede:
      'A Python tool that generates short-form videos featuring Quranic recitation with synchronised Arabic text and translations. Uses MoviePy for composition, multithreading for parallel generation, and FuzzyWuzzy for matching verse text against audio timestamps.',
    stack: ['Python', 'MoviePy', 'FuzzyWuzzy'],
    link: 'https://github.com/9iiota/quran-tiktok-generator',
    linkLabel: 'View on GitHub',
    status: 'live',
  },
  {
    num: '06',
    year: '2023',
    name: 'Fit+',
    lede:
      'A Python gym management system with role-based authentication for super admins, system admins, and trainers. SQLite with encrypted credentials, login attempt tracking, activity logging, and suspicious-activity detection. Modular managers per domain.',
    stack: ['Python', 'SQLite', 'Cryptography'],
    status: 'school',
    linkLabel: 'School project',
  },
  {
    num: '07',
    year: '2022',
    name: 'CinemaSharp',
    lede:
      'A C# console-based cinema booking system built largely solo for a school project. Customers browse films by genre, view showtimes, pick seats, order snacks, and complete bookings. Admins manage films and consumables. Pages and Classes layered architecture with JSON persistence.',
    stack: ['C#', '.NET', 'JSON'],
    status: 'school',
    linkLabel: 'School project',
  },
];

function StatusPill({ s }: { s: Status }) {
  if (s === 'live') return <span className="work-status"><span className="dot" />Live</span>;
  if (s === 'archived') return <span className="work-status archived"><span className="dot" />Archived</span>;
  return <span className="work-status school"><span className="dot" />Coursework</span>;
}

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="section-head">
        <div className="lead">
          <span className="num">02 / Work</span>
          <h2>Selected projects.</h2>
          <p className="desc">
            Production work, side projects, and university coursework.
          </p>
        </div>
        <span className="meta">{projects.length} projects</span>
      </div>

      <div className="work-list">
        {projects.map((p) => (
          <article key={p.num} className={`work-card ${p.feature ? 'feature' : ''}`}>
            <div className="work-top">
              <span className="work-num">{p.num} · {p.year}</span>
              <StatusPill s={p.status} />
            </div>
            <h3>{p.name}</h3>
            <p className="lede">{p.lede}</p>
            <div className="work-stack">
              {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
            </div>
            <div className="work-foot">
              <span>{p.year}</span>
              {p.link ? (
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  {p.linkLabel ?? 'View project'} <span className="arrow">↗</span>
                </a>
              ) : (
                <span>{p.linkLabel ?? '—'}</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
