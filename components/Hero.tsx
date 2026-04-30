"use client";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "calc(100vh - 4rem)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        paddingTop: "5rem",
      }}
    >
      {/* Floating decorative stickers */}
      <FloatingSticker
        style={{ top: "20%", right: "5%", "--rot": "12deg" } as any}
        delay="0s"
        bg="var(--coral)"
        color="var(--paper)"
      >
        ★ available for hire
      </FloatingSticker>

      <FloatingSticker
        style={{ top: "65%", right: "12%", "--rot": "-8deg" } as any}
        delay="0.5s"
        bg="var(--mint)"
      >
        based in Rotterdam
      </FloatingSticker>

      <FloatingSticker
        style={{ top: "30%", left: "4%", "--rot": "-6deg" } as any}
        delay="1s"
        bg="var(--sky)"
      >
        ↳ scroll
      </FloatingSticker>

      {/* Avatar — replace /avatar.svg with your real photo when you have one */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          right: "22%",
          width: 110,
          height: 110,
          borderRadius: "50%",
          overflow: "hidden",
          border: "3px solid var(--ink)",
          boxShadow: "5px 5px 0 var(--ink)",
          transform: "rotate(-5deg)",
          background: "var(--acid)",
          animation: "float 5s ease-in-out infinite 0.3s",
          zIndex: 1,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/avatar.svg"
          alt="Burak Kiliç"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      <div className="fade-in" style={{ animationDelay: "0.1s" }}>
        <div
          className="mono"
          style={{
            fontSize: 14,
            color: "var(--grape)",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#22c55e",
              boxShadow: "0 0 0 3px rgba(34, 197, 94, 0.25)",
            }}
          />
          burakkilicnl@gmail.com
        </div>
      </div>

      <h1
        className="fade-in"
        style={{
          fontSize: "clamp(3.5rem, 12vw, 9rem)",
          fontWeight: 800,
          lineHeight: 0.92,
          letterSpacing: "-0.04em",
          marginBottom: "2rem",
          animationDelay: "0.2s",
        }}
      >
        I build{" "}
        <span
          className="serif"
          style={{
            color: "var(--grape)",
            fontWeight: 400,
            fontSize: "1.05em",
          }}
        >
          useful
        </span>
        <br />
        things
        <span
          style={{
            display: "inline-block",
            background: "var(--acid)",
            border: "2.5px solid var(--ink)",
            padding: "0 0.3em",
            transform: "rotate(-2deg)",
            marginLeft: "0.2em",
            boxShadow: "4px 4px 0 var(--ink)",
          }}
        >
          on the web.
        </span>
      </h1>

      <p
        className="fade-in"
        style={{
          fontSize: "clamp(1.1rem, 1.6vw, 1.35rem)",
          maxWidth: 640,
          marginBottom: "2.5rem",
          color: "rgba(26, 19, 37, 0.75)",
          animationDelay: "0.35s",
        }}
      >
        I'm{" "}
        <strong style={{ color: "var(--ink)", fontWeight: 700 }}>
          Burak Kiliç
        </strong>
        , a software developer based in Rotterdam. Currently studying
        Informatica at{" "}
        <span
          style={{
            background: "var(--mint)",
            padding: "1px 8px",
            borderRadius: 6,
            fontWeight: 500,
          }}
        >
          Rotterdam University of Applied Sciences
        </span>{" "}
        and shipping side projects in my spare time.
      </p>

      <div
        className="fade-in"
        style={{
          display: "flex",
          gap: 14,
          flexWrap: "wrap",
          animationDelay: "0.5s",
        }}
      >
        <a
          href="#projects"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "16px 28px",
            background: "var(--ink)",
            color: "var(--paper)",
            borderRadius: 999,
            fontWeight: 500,
            border: "2.5px solid var(--ink)",
            boxShadow: "4px 4px 0 var(--coral)",
            transition: "transform 150ms, box-shadow 150ms",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translate(-2px, -2px)";
            e.currentTarget.style.boxShadow = "6px 6px 0 var(--coral)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translate(0, 0)";
            e.currentTarget.style.boxShadow = "4px 4px 0 var(--coral)";
          }}
        >
          See my work →
        </a>
        <a
          href="/resume.pdf"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "16px 28px",
            background: "var(--paper)",
            color: "var(--ink)",
            borderRadius: 999,
            fontWeight: 500,
            border: "2.5px solid var(--ink)",
          }}
        >
          ↓ download resume
        </a>
      </div>
    </section>
  );
}

function FloatingSticker({
  children,
  style,
  delay,
  bg,
  color,
}: {
  children: React.ReactNode;
  style: React.CSSProperties;
  delay: string;
  bg: string;
  color?: string;
}) {
  return (
    <div
      className="mono"
      style={{
        position: "absolute",
        padding: "8px 16px",
        background: bg,
        color: color || "var(--ink)",
        border: "2.5px solid var(--ink)",
        borderRadius: 999,
        fontSize: 13,
        fontWeight: 500,
        boxShadow: "3px 3px 0 var(--ink)",
        animation: `float 4s ease-in-out infinite ${delay}`,
        whiteSpace: "nowrap",
        zIndex: 1,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
