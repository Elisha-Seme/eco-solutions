import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    label: "Cleaning · Grounds",
    title: "Professional Facility Services",
    body: "Apartment cleaning, grounds maintenance, and building upkeep delivered by trained, uniformed teams on a consistent schedule.",
    img: "/IMG-20250526-WA0022.jpg",
    alt: "Pearl ECO Solutions cleaning team at work",
  },
  {
    label: "Employment · Training",
    title: "Community Employment",
    body: "We recruit locally, train every hire before deployment, and provide formal contracts — turning facility work into stable livelihoods.",
    img: "/IMG-20250526-WA0017.jpg",
    alt: "Pearl ECO Solutions uniformed team members",
  },
  {
    label: "Waste · Environment",
    title: "Eco-Responsible Practices",
    body: "Structured waste collection, responsible disposal, and low-waste operations that protect public health and shared environments.",
    img: "/waste-truck.webp",
    alt: "Pearl ECO Solutions waste management vehicle",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          backgroundColor: "#0D1F2D",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/worker-residential.webp"
            alt="Pearl ECO Solutions worker at a Nairobi property"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(13,31,45,0.88) 0%, rgba(13,31,45,0.65) 50%, rgba(13,31,45,0.5) 100%)",
            }}
          />
        </div>

        <div className="wrap" style={{ position: "relative", paddingTop: "8rem", paddingBottom: "5rem", width: "100%" }}>
          <div className="trust-pill" style={{ marginBottom: "1.5rem", display: "inline-flex" }}>
            <span className="trust-pill-dot" />
            Pearl ECO Solutions · Nairobi · Est. 2013
          </div>

          <h1
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: "-0.04em",
              color: "#FFFFFF",
              marginBottom: "1.5rem",
              maxWidth: "780px",
            }}
          >
            Keeping Nairobi{" "}
            <span style={{ color: "#4DBCCF", fontStyle: "italic" }}>Clean,</span>{" "}
            One Trained Team at a Time
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.78)",
              marginBottom: "2.25rem",
              maxWidth: "560px",
            }}
          >
            Professional facility services for residential estates, corporates,
            malls, institutions, and industrial sites — delivered by trained,
            uniformed local teams.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
            <Link href="/contact" className="btn-primary">Get a Quote</Link>
            <Link href="/about" className="btn-outline-white">Our Story</Link>
          </div>

          <div className="hero-stats">
            {[
              { v: "50+", l: "Local jobs created" },
              { v: "10+", l: "Years operating" },
              { v: "3", l: "Communities served" },
              { v: "100%", l: "Local recruitment" },
            ].map((s) => (
              <div key={s.l} className="hero-stat">
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#4DBCCF", lineHeight: 1, marginBottom: "0.3rem" }}>
                  {s.v}
                </div>
                <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.65)", letterSpacing: "0.03em" }}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <div className="wrap section">
          <div className="two-col">
            <div>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1rem" }}>
                <div className="rule-teal" style={{ marginBottom: 0 }} />
                <p className="eyebrow" style={{ marginBottom: 0 }}>Our Story</p>
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "#0F1923",
                  lineHeight: 1.08,
                  marginBottom: "1.25rem",
                }}
              >
                Professional facility services. Real community impact.
              </h2>
              <p style={{ fontSize: "0.96rem", lineHeight: 1.85, color: "#4B5563", marginBottom: "1rem" }}>
                Pearl ECO Solutions (formerly Pearl Cleaning Services) serves
                residential estates, corporate offices, shopping malls,
                institutions, and industrial sites across Nairobi.
              </p>
              <p style={{ fontSize: "0.96rem", lineHeight: 1.85, color: "#4B5563", marginBottom: "2rem" }}>
                We deliver dependable cleaning, grounds, waste, and facility
                management through trained, uniformed local teams — creating
                formal employment in the communities we work in.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/about" className="btn-primary">Read the Full Story</Link>
                <Link href="/contact" className="btn-outline">Get in Touch</Link>
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <Image
                src="/IMG-20250526-WA0017.jpg"
                alt="Pearl ECO Solutions team assembled on site"
                width={560}
                height={700}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "24px",
                  objectFit: "cover",
                  objectPosition: "center top",
                  boxShadow: "0 24px 60px rgba(15,25,35,0.14)",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  left: "-1rem",
                  backgroundColor: "#0B7A8A",
                  color: "#FFFFFF",
                  padding: "0.6rem 0.9rem",
                  borderRadius: "10px",
                  boxShadow: "0 4px 16px rgba(11,122,138,0.35)",
                }}
              >
                <div style={{ fontSize: "1.1rem", fontWeight: 800, lineHeight: 1 }}>2013</div>
                <div style={{ fontSize: "0.65rem", opacity: 0.85, marginTop: "0.2rem", lineHeight: 1.3 }}>
                  Founded as Pearl Cleaning Services
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS ── */}
      <section style={{ backgroundColor: "#FAF9F7" }}>
        <div className="wrap section">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
              <div className="rule-teal" style={{ marginBottom: 0 }} />
              <p className="eyebrow" style={{ marginBottom: 0 }}>What We Do</p>
              <div className="rule-teal" style={{ marginBottom: 0 }} />
            </div>
            <h2
              style={{
                fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#0F1923",
                lineHeight: 1.08,
                maxWidth: "580px",
                margin: "0 auto",
              }}
            >
              The service, the people, and the planet.
            </h2>
          </div>

          <div className="pillar-grid">
            {pillars.map((p) => (
              <div key={p.title} className="pillar-card">
                <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
                  <Image src={p.img} alt={p.alt} fill style={{ objectFit: "cover", objectPosition: "center top" }} />
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      backgroundColor: "rgba(11,122,138,0.9)",
                      color: "#FFFFFF",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "0.35rem 0.75rem",
                      borderRadius: "999px",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {p.label}
                  </div>
                </div>
                <div className="pillar-card-body">
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0F1923", marginBottom: "0.65rem", lineHeight: 1.3 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "#4B5563", margin: 0 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <Link href="/services" className="btn-outline">Explore All Services</Link>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section style={{ backgroundColor: "#0B7A8A" }}>
        <div className="wrap" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
          <div
            className="cta-row"
          >
            <div style={{ maxWidth: "580px" }}>
              <p style={{ fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", fontWeight: 700, marginBottom: "0.5rem" }}>
                Ready to talk?
              </p>
              <h2 style={{ fontSize: "clamp(1.5rem, 2.8vw, 2rem)", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.025em", lineHeight: 1.2, marginBottom: "0.5rem" }}>
                Tell us about your property and we will scope the right service.
              </h2>
              <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.75)", margin: 0 }}>
                One contract, one team, one point of contact — for any type of site.
              </p>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ backgroundColor: "#FFFFFF", color: "#0B7A8A", padding: "0.9rem 2rem", borderRadius: "3px", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", whiteSpace: "nowrap" }}>
                Request a Quote
              </Link>
              <a href="tel:+254723808519" className="btn-outline-white" style={{ whiteSpace: "nowrap" }}>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
