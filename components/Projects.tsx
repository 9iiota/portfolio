const projects = [
  {
    name: "Prayer Times",
    tagline: "A Chrome extension for daily prayer times",
    description:
      "A Chrome extension that displays daily Islamic prayer times with real-time badge updates and configurable notifications. Pulls from the IslamicFinder API, scrapes Diyanet and IslamVakti as fallbacks, and uses OpenStreetMap's Nominatim API for geolocation. Published to the Chrome Web Store.",
    tags: ["JavaScript", "Chrome API", "Web scraping"],
    accent: "var(--coral)",
    rotate: "-1deg",
    year: "2025",
    link: "https://github.com/9iiota/prayer-times-namaz-vakitleri-extension",
  },
  {
    name: "Shopify Ops Toolkit",
    tagline: "An e-commerce back office, in code",
    description:
      "An internal CLI tool I built for CandyVillage that wires together four services into a single workflow: Shopify (orders, inventory, transaction fees), Moneybird (sales invoices, payments, PDF attachments), Google Drive + Sheets (backup uploads, inventory tracking), and DPD (shipping label generation). Class-based managers per service, configurable via .ini, pytest tests, and PyMuPDF for parsing invoice PDFs. Replaced hours of weekly admin work.",
    tags: ["Python", "Shopify API", "Moneybird API", "Google APIs"],
    accent: "var(--mint)",
    rotate: "1deg",
    year: "2024",
    link: "#",
  },
  {
    name: "NYC Taxi Forecasting",
    tagline: "Predicting green taxi demand with weather and time",
    description:
      "A team data science project (where I played a major role) forecasting NYC green taxi trip volumes from 2017–2020, factoring in weather and temporal patterns. Built a custom data pipeline that pulled and cleaned 4 years of TLC parquet data, engineered lagged time-series features, and benchmarked Prophet, multiple linear regression, and gradient-boosted models with k-fold cross-validation. Deployed an interactive Plotly Dash dashboard.",
    tags: ["Python", "Prophet", "scikit-learn", "Plotly Dash"],
    accent: "var(--grape)",
    accentText: "var(--paper)",
    rotate: "-0.5deg",
    year: "2025",
    link: "#",
  },
  {
    name: "Quran TikTok Generator",
    tagline: "Automated Quranic recitation videos",
    description:
      "A Python automation tool that generates TikTok-ready videos featuring Quranic recitations with synchronized Arabic text, translations, and verse numbers. Uses MoviePy for video composition, multithreading to parallelize generation, and FuzzyWuzzy to match verse text against audio timestamps despite minor variations.",
    tags: ["Python", "MoviePy", "FuzzyWuzzy"],
    accent: "var(--sky)",
    rotate: "0.5deg",
    year: "2023",
    link: "https://github.com/9iiota/quran-tiktok-generator",
  },
  {
    name: "CinemaSharp",
    tagline: "A console-based cinema booking system",
    description:
      "A C# console application built largely solo for a school project. Customers can browse films by genre, view showtimes, pick seats, order snacks, and complete bookings. Admins get a separate flow for managing films, showtimes, and consumables. Architected with separate Pages and Classes layers, JSON persistence, and a custom logo I built in Blender.",
    tags: ["C#", ".NET", "School project"],
    accent: "var(--hot-pink)",
    rotate: "-0.5deg",
    year: "2022",
    link: "#",
  },
  {
    name: "Fit+",
    tagline: "Gym management with serious security",
    description:
      "A Python-based gym management system with role-based authentication for super admins, system admins, and trainers. Built with SQLite, encrypted credentials, login attempt tracking, activity logging, and suspicious activity detection. Layered architecture with modularised managers.",
    tags: ["Python", "SQLite", "School project"],
    accent: "var(--acid)",
    rotate: "0.5deg",
    year: "2023",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "6rem 0" }}>
      <div className="section-eyebrow">projects</div>
      <h2 className="section-title">
        Things I've <br />
        actually shipped.
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2rem",
        }}
      >
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.link}
            target={p.link.startsWith("http") ? "_blank" : undefined}
            rel={p.link.startsWith("http") ? "noopener noreferrer" : undefined}
            className="sticker"
            style={{
              padding: 0,
              overflow: "hidden",
              display: "block",
              transform: `rotate(${p.rotate})`,
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.5fr)",
                minHeight: 220,
              }}
            >
              {/* Visual side */}
              <div
                style={{
                  background: p.accent,
                  color: (p as any).accentText || "var(--ink)",
                  borderRight: "2.5px solid var(--ink)",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  minHeight: 220,
                }}
              >
                <div
                  className="mono"
                  style={{ fontSize: 12, opacity: 0.7 }}
                >
                  {p.year}
                </div>
                <div
                  style={{
                    fontSize: "clamp(2rem, 5vw, 3.5rem)",
                    fontWeight: 800,
                    lineHeight: 0.95,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {p.name}
                </div>
              </div>

              {/* Content side */}
              <div
                style={{
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                <div>
                  <p
                    className="serif"
                    style={{
                      fontSize: "1.4rem",
                      color: "var(--grape)",
                      marginBottom: "0.75rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {p.tagline}
                  </p>
                  <p style={{ fontSize: "1rem", lineHeight: 1.55, opacity: 0.85 }}>
                    {p.description}
                  </p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="mono"
                      style={{
                        fontSize: 11,
                        padding: "4px 10px",
                        background: "var(--bg)",
                        border: "1.5px solid var(--ink)",
                        borderRadius: 999,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
