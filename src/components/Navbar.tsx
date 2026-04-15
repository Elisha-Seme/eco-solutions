"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // On the homepage the hero is dark, so nav starts transparent/white text.
  // On inner pages start solid immediately.
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: transparent ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.97)",
        borderBottom: transparent ? "1px solid transparent" : "1px solid #E2E8F0",
        transition: "background-color 0.3s ease, border-color 0.25s ease, box-shadow 0.25s ease",
        boxShadow: transparent ? "none" : "0 1px 12px rgba(0,0,0,0.06)",
        backdropFilter: transparent ? "none" : "blur(12px)",
      }}
    >
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "4.25rem" }}>
        {/* Wordmark */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontWeight: 800, fontSize: "1.05rem", color: transparent ? "#FFFFFF" : "#0F1923", letterSpacing: "0.06em", transition: "color 0.3s" }}>
            ECO SOLUTIONS
          </span>
          <span style={{ fontWeight: 400, fontSize: "0.65rem", color: "#4DBCCF", letterSpacing: "0.18em", marginLeft: "0.35rem" }}>
            LTD
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontSize: "0.875rem",
                  fontWeight: active ? 600 : 400,
                  color: transparent
                    ? active ? "#FFFFFF" : "rgba(255,255,255,0.82)"
                    : active ? "#0B7A8A" : "#374151",
                  textDecoration: "none",
                  paddingBottom: "2px",
                  borderBottom: active
                    ? `2px solid ${transparent ? "#FFFFFF" : "#0B7A8A"}`
                    : "2px solid transparent",
                  transition: "color 0.2s, border-color 0.2s",
                }}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            style={{
              backgroundColor: "#0B7A8A",
              color: "#FFFFFF",
              padding: "0.5rem 1.25rem",
              borderRadius: "3px",
              fontSize: "0.8rem",
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "0.04em",
            }}
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "0.25rem", display: "flex", flexDirection: "column", gap: "5px" }}
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                backgroundColor: transparent ? "#FFFFFF" : "#0F1923",
                borderRadius: "2px",
                transformOrigin: "center",
                transition: "transform 0.2s, opacity 0.2s, background-color 0.3s",
                transform:
                  open
                    ? i === 0 ? "translateY(7px) rotate(45deg)"
                    : i === 2 ? "translateY(-7px) rotate(-45deg)"
                    : "none"
                    : "none",
                opacity: open && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          maxHeight: open ? "360px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
          borderTop: open ? "1px solid #E2E8F0" : "none",
        }}
      >
        <div className="wrap" style={{ display: "flex", flexDirection: "column", paddingTop: "1rem", paddingBottom: "1.5rem", gap: "0.25rem" }}>
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  fontSize: "0.95rem",
                  fontWeight: active ? 600 : 400,
                  color: active ? "#0B7A8A" : "#0F1923",
                  textDecoration: "none",
                  padding: "0.65rem 0",
                  borderBottom: "1px solid #F1F5F9",
                }}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            style={{
              backgroundColor: "#0B7A8A",
              color: "#FFFFFF",
              padding: "0.75rem 1.25rem",
              borderRadius: "3px",
              fontSize: "0.9rem",
              fontWeight: 600,
              textDecoration: "none",
              textAlign: "center",
              marginTop: "0.75rem",
            }}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
