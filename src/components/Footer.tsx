"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const workLinks = [
  { href: "/services#apartment-cleaning", label: "Apartment Cleaning" },
  { href: "/services#grounds-maintenance", label: "Grounds Maintenance" },
  { href: "/services#waste-management", label: "Waste Management" },
  { href: "/services#building-maintenance", label: "Building Maintenance" },
  { href: "/services#facility-services", label: "Integrated Facility Services" },
];

const getInvolvedLinks = [
  { href: "/contact", label: "Request a Quote" },
  { href: "/contact", label: "Partnerships" },
  { href: "/contact", label: "Grant Enquiries" },
  { href: "/contact", label: "Job Applications" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background:
          "radial-gradient(circle at top left, rgba(77,188,207,0.08), transparent 32%), linear-gradient(180deg, #0D1F2D 0%, #091622 100%)",
        color: "#FFFFFF",
      }}
    >
      {/* Top CTA bar */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div
          className="wrap"
          style={{
            paddingTop: "3rem",
            paddingBottom: "3rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "#4DBCCF", fontWeight: 700, marginBottom: "0.5rem" }}>
              Ready to talk?
            </p>
            <h2 style={{ fontSize: "clamp(1.35rem, 2.5vw, 1.85rem)", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.025em", lineHeight: 1.2, margin: 0, maxWidth: "500px" }}>
              Tell us what your property needs and we will scope the right service.
            </h2>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Request a Quote</Link>
            <a href="tel:+254723808519" className="btn-outline-white">Call Now</a>
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div className="wrap" style={{ paddingTop: "3rem", paddingBottom: "2rem" }}>

        {/* Single horizontal row: brand + 3 link groups + contact */}
        <div
          className="footer-columns"
          style={{
            paddingBottom: "2.5rem",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "0.85rem" }}>
              <span style={{ fontWeight: 800, fontSize: "1.05rem", letterSpacing: "0.08em", color: "#FFFFFF" }}>
                PEARL ECO
              </span>
              <span style={{ fontSize: "0.8rem", letterSpacing: "0.12em", color: "#4DBCCF", marginLeft: "0.35rem", fontWeight: 500 }}>
                SOLUTIONS
              </span>
            </div>
            <p style={{ fontSize: "0.855rem", lineHeight: 1.8, color: "rgba(255,255,255,0.55)", margin: 0, maxWidth: "240px" }}>
              Professional facility services for residential estates, corporates, malls, institutions, and industrial sites across Nairobi. Est. 2013.
            </p>
          </div>

          {/* Our Work */}
          <div>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#4DBCCF", fontWeight: 700, marginBottom: "1rem" }}>
              Our Work
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
              {workLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  style={{ fontSize: "0.845rem", color: "rgba(255,255,255,0.6)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.3rem", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Get Involved */}
          <div>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#4DBCCF", fontWeight: 700, marginBottom: "1rem" }}>
              Get Involved
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
              {getInvolvedLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  style={{ fontSize: "0.845rem", color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#4DBCCF", fontWeight: 700, marginBottom: "1rem" }}>
              Navigation
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{ fontSize: "0.845rem", color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#4DBCCF", fontWeight: 700, marginBottom: "1rem" }}>
              Contact
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <a
                href="tel:+254723808519"
                style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.855rem", color: "#FFFFFF", textDecoration: "none" }}
              >
                <Phone size={14} strokeWidth={2} style={{ color: "#4DBCCF", flexShrink: 0 }} />
                +254 723 808 519
              </a>
              <a
                href="mailto:info@pearlcleaningservices.co.ke"
                style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.82rem", color: "rgba(255,255,255,0.6)", textDecoration: "none", wordBreak: "break-all" }}
              >
                <Mail size={14} strokeWidth={2} style={{ color: "#4DBCCF", flexShrink: 0, marginTop: "2px" }} />
                info@pearlcleaningservices.co.ke
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <MapPin size={14} strokeWidth={2} style={{ color: "#4DBCCF", flexShrink: 0 }} />
                <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)" }}>Nairobi, Kenya</span>
              </div>
              <a
                href="https://www.pearlcleaningservices.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontSize: "0.8rem", color: "#4DBCCF", textDecoration: "none", marginTop: "0.25rem" }}
              >
                Visit website <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "1.25rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.3)", margin: 0 }}>
            &copy; {new Date().getFullYear()} Pearl ECO Solutions. All rights reserved.
          </p>
          <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.3)", margin: 0 }}>
            Nairobi, Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}
