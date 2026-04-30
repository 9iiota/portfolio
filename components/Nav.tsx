"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: scrolled ? 16 : 24,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        gap: 4,
        padding: "6px 8px",
        background: "var(--paper)",
        border: "2.5px solid var(--ink)",
        borderRadius: 999,
        boxShadow: "4px 4px 0 var(--ink)",
        transition: "top 300ms cubic-bezier(0.34, 1.56, 0.64, 1)",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 13,
        fontWeight: 500,
      }}
    >
      <NavLink href="#about">about</NavLink>
      <NavLink href="#skills">skills</NavLink>
      <NavLink href="#projects">projects</NavLink>
      <NavLink href="#experience">experience</NavLink>
      <NavLink href="#contact" highlighted>
        contact
      </NavLink>
    </nav>
  );
}

function NavLink({
  href,
  children,
  highlighted = false,
}: {
  href: string;
  children: React.ReactNode;
  highlighted?: boolean;
}) {
  return (
    <a
      href={href}
      style={{
        padding: "8px 14px",
        borderRadius: 999,
        background: highlighted ? "var(--acid)" : "transparent",
        transition: "background 150ms",
      }}
      onMouseEnter={(e) => {
        if (!highlighted) e.currentTarget.style.background = "var(--bg)";
      }}
      onMouseLeave={(e) => {
        if (!highlighted) e.currentTarget.style.background = "transparent";
      }}
    >
      {children}
    </a>
  );
}
