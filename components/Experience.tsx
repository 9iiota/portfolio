const items = [
  {
    role: "Junior Mendix Developer",
    company: "Thorix B.V.",
    location: "Barendrecht, NL",
    period: "2023 — 2024",
    summary:
      "Built Mendix applications for leave management, expense claims, project tracking, time registration, and QR-based reservation systems. Wrote custom microflows, integrated REST APIs, and built dynamic UI components. Delivered tools that cut down on real administrative busywork.",
    accent: "var(--coral)",
  },
  {
    role: "Founder",
    company: "CandyVillage",
    location: "Online",
    period: "2023 — 2024",
    summary:
      "Started and ran a Shopify-based store selling halal-certified candy. Sourced inventory, handled bookkeeping in Moneybird, and built the internal Python toolkit (see projects) that automated most of the day-to-day operations. Learned more about logistics, taxes, and customer service than any class taught me.",
    accent: "var(--hot-pink)",
  },
  {
    role: "Founder",
    company: "ikoProxies",
    location: "Online",
    period: "2020",
    summary:
      "Started and ran a small business selling datacenter proxies to sneaker resellers. Provisioned Linux servers over SSH and configured them to expose batches of authenticated proxy endpoints. My first real exposure to running infrastructure and dealing with paying customers.",
    accent: "var(--grape)",
    accentText: "var(--paper)",
  },
  {
    role: "Informatica student",
    company: "Rotterdam University of Applied Sciences",
    location: "Rotterdam, NL",
    period: "2020 — present",
    summary:
      "Coursework in OOP, algorithms & data structures, operating systems, concurrency, software quality, functional programming, and modeling & system analysis. Most of my real learning happens on side projects.",
    accent: "var(--mint)",
  },
  {
    role: "HAVO diploma",
    company: "Avicenna College",
    location: "Rotterdam, NL",
    period: "completed",
    summary:
      "Pre-university secondary education in the Netherlands. Where I first started teaching myself how to code, somewhere between class and reselling sneakers.",
    accent: "var(--sky)",
  },
];

export default function Experience()
{
  return (
    <section id="experience" style={ { padding: "6rem 0" } }>
      <div className="section-eyebrow">experience &amp; education</div>
      <h2 className="section-title">
        Where I've <br />
        spent my time.
      </h2>

      <div
        style={ {
          position: "relative",
          paddingLeft: "1.5rem",
          borderLeft: "2.5px dashed var(--ink)",
          maxWidth: 800,
        } }
      >
        { items.map((j, i) => (
          <div
            key={ i }
            style={ {
              position: "relative",
              marginBottom: i === items.length - 1 ? 0 : "2.5rem",
            } }
          >
            <div
              style={ {
                position: "absolute",
                left: -33,
                top: 6,
                width: 18,
                height: 18,
                background: j.accent,
                border: "2.5px solid var(--ink)",
                borderRadius: "50%",
              } }
            />
            <div
              className="sticker"
              style={ {
                padding: "1.5rem 1.75rem",
                background: "var(--paper)",
              } }
            >
              <div
                style={ {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: 12,
                  flexWrap: "wrap",
                  marginBottom: 8,
                } }
              >
                <h3 style={ { fontSize: "1.3rem", fontWeight: 700 } }>
                  { j.role }{ " " }
                  <span
                    className="serif"
                    style={ { color: "var(--grape)", fontWeight: 400 } }
                  >
                    @ { j.company }
                  </span>
                </h3>
                <span
                  className="mono"
                  style={ {
                    fontSize: 12,
                    padding: "3px 10px",
                    background: j.accent,
                    color: (j as any).accentText || "var(--ink)",
                    border: "1.5px solid var(--ink)",
                    borderRadius: 999,
                  } }
                >
                  { j.period }
                </span>
              </div>
              <div
                className="mono"
                style={ {
                  fontSize: 12,
                  opacity: 0.5,
                  marginBottom: 12,
                } }
              >
                { j.location }
              </div>
              <p style={ { opacity: 0.8, lineHeight: 1.55 } }>{ j.summary }</p>
            </div>
          </div>
        )) }
      </div>
    </section>
  );
}
