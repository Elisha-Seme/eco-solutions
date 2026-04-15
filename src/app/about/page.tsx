import Image from "next/image";
import Link from "next/link";

const values = [
  {
    title: "Reliability",
    body: "Our clients and the communities we serve depend on us showing up consistently. Trust is earned one visit at a time.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Community",
    body: "We recruit locally, train intentionally, and reinvest in the neighbourhoods we work in. Our workers are our neighbours.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Sustainability",
    body: "Eco-responsible waste disposal and low-waste practices across all service lines. We protect the environment we all share.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12" /><path d="M5 12c0-4.4 3.1-8 7-8s7 3.6 7 8" /><path d="M3 22h18" />
      </svg>
    ),
  },
  {
    title: "Dignity",
    body: "Every person deserves a clean, safe home environment. That conviction shapes how we work and why we go beyond the bottom line.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
];

const timeline = [
  { year: "2013", title: "Pearl Cleaning Services Founded", body: "Founded in Nairobi with a small team of local workers, focusing on apartment cleaning and hiring from within the communities we served." },
  { year: "2016", title: "Expanded to Grounds Maintenance", body: "Added landscaping and grounds care, creating additional skilled roles and growing our footprint across residential estates." },
  { year: "2019", title: "Waste Management Launched", body: "Introduced environmentally responsible waste collection, addressing a critical gap in community sanitation and creating more stable employment." },
  { year: "2022", title: "Formal Staff Training Programme", body: "Launched structured pre-deployment training for all new hires, raising standards and improving employment outcomes for our workforce." },
  { year: "2024", title: "Rebranded as ECO Solutions LTD", body: "Rebranded to reflect our grown scope and explicit commitment to eco-conscious, community-centred operations." },
];

const metrics = [
  { v: "50+", l: "Local jobs created", sub: "with formal contracts and training" },
  { v: "3", l: "Communities served", sub: "with active service contracts" },
  { v: "10+", l: "Years of operation", sub: "building trust in Nairobi" },
  { v: "100%", l: "Local recruitment", sub: "from communities we work in" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section
        style={{
          position: "relative",
          backgroundColor: "#0D1F2D",
          paddingTop: "8rem",
          paddingBottom: "5rem",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 70% 50%, rgba(77,188,207,0.12), transparent 55%)",
          }}
        />
        <div className="wrap" style={{ position: "relative" }}>
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1.25rem" }}>
            <div className="rule-teal" style={{ marginBottom: 0, backgroundColor: "#4DBCCF" }} />
            <p className="eyebrow" style={{ marginBottom: 0, color: "#4DBCCF" }}>Our Story</p>
          </div>
          <h1
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#FFFFFF",
              marginBottom: "1.25rem",
              lineHeight: 1.05,
              maxWidth: "700px",
            }}
          >
            A decade of service, grounded in community.
          </h1>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(255,255,255,0.7)", maxWidth: "560px" }}>
            From Pearl Cleaning Services to ECO Solutions LTD: ten years of
            building trust in Nairobi one estate at a time, while creating
            formal employment for the communities we serve.
          </p>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <div className="wrap section">
          <div className="two-col-start">
            <div>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1rem" }}>
                <div className="rule-teal" style={{ marginBottom: 0 }} />
                <p className="eyebrow" style={{ marginBottom: 0 }}>Who We Are</p>
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "#0F1923",
                  lineHeight: 1.12,
                  marginBottom: "1.5rem",
                }}
              >
                A social enterprise built on everyday service
              </h2>
              <p style={{ fontSize: "0.96rem", lineHeight: 1.85, color: "#4B5563", marginBottom: "1.25rem" }}>
                ECO Solutions LTD is the evolution of Pearl Cleaning Services,
                built over more than a decade on one foundational belief: that
                facilities work, done well and done ethically, can improve life
                in Nairobi residential communities in ways that go far beyond
                a clean floor.
              </p>
              <p style={{ fontSize: "0.96rem", lineHeight: 1.85, color: "#4B5563", marginBottom: "1.25rem" }}>
                We are a for-profit enterprise, and we need to be: financial
                sustainability is what allows us to employ people, invest in
                their training, and maintain service quality over time. But
                profit is not the ceiling of our ambition.
              </p>
              <p style={{ fontSize: "0.96rem", lineHeight: 1.85, color: "#4B5563", marginBottom: "2rem" }}>
                Every contract we win funds more jobs. Every job reduces
                precarious informal labour in our communities. Every space we
                clean lowers disease risk and raises the standard of shared life.
              </p>
              <Link href="/contact" className="btn-primary">Work With Us</Link>
            </div>

            <div style={{ position: "relative" }}>
              <div
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  aspectRatio: "3/4",
                  position: "relative",
                  boxShadow: "0 24px 60px rgba(15,25,35,0.14)",
                }}
              >
                <Image
                  src="/worker-residential.webp"
                  alt="ECO Solutions uniformed worker at a Nairobi residential property"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  left: "-1.5rem",
                  backgroundColor: "#0B7A8A",
                  color: "#FFFFFF",
                  padding: "1.25rem 1.5rem",
                  borderRadius: "16px",
                  boxShadow: "0 8px 32px rgba(11,122,138,0.35)",
                }}
              >
                <div style={{ fontSize: "2rem", fontWeight: 800, lineHeight: 1 }}>10+</div>
                <div style={{ fontSize: "0.78rem", opacity: 0.85, marginTop: "0.3rem", lineHeight: 1.4 }}>
                  Years of community-rooted service
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT METRICS ── */}
      <section style={{ backgroundColor: "#0B7A8A" }}>
        <div className="wrap">
          <div
            className="four-col-metrics"
            style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
          >
            {metrics.map((m) => (
              <div
                key={m.l}
                style={{
                  padding: "2.75rem 2rem",
                  textAlign: "center",
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
              >
                <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "#FFFFFF", lineHeight: 1, marginBottom: "0.4rem" }}>{m.v}</div>
                <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "rgba(255,255,255,0.9)", marginBottom: "0.2rem" }}>{m.l}</div>
                <div style={{ fontSize: "0.775rem", color: "rgba(255,255,255,0.55)" }}>{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ backgroundColor: "#FAF9F7" }}>
        <div className="wrap section">
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1rem" }}>
            <div className="rule-teal" style={{ marginBottom: 0 }} />
            <p className="eyebrow" style={{ marginBottom: 0 }}>What Drives Us</p>
          </div>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#0F1923",
              marginBottom: "3rem",
              lineHeight: 1.1,
            }}
          >
            Our core values
          </h2>
          <div className="two-col-cards">
            {values.map((v) => (
              <div
                key={v.title}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  padding: "1.75rem",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "18px",
                  transition: "box-shadow 0.2s",
                }}
              >
                <div
                  style={{
                    color: "#0B7A8A",
                    flexShrink: 0,
                    marginTop: "2px",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#EBF6F8",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {v.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0F1923", marginBottom: "0.5rem" }}>{v.title}</h3>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "#4B5563", margin: 0 }}>{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ backgroundColor: "#0D1F2D" }}>
        <div className="wrap section">
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1rem" }}>
            <div className="rule-teal" style={{ marginBottom: 0, backgroundColor: "#4DBCCF" }} />
            <p className="eyebrow" style={{ marginBottom: 0, color: "#4DBCCF" }}>Our Journey</p>
          </div>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
              marginBottom: "3.5rem",
              lineHeight: 1.1,
            }}
          >
            How we got here
          </h2>
          <div style={{ maxWidth: "680px" }}>
            {timeline.map((t, i) => (
              <div
                key={t.year}
                style={{ display: "flex", gap: "2rem", paddingBottom: i < timeline.length - 1 ? "3rem" : 0, position: "relative" }}
              >
                {i < timeline.length - 1 && (
                  <div style={{ position: "absolute", left: "3rem", top: "2.5rem", bottom: 0, width: "1px", backgroundColor: "rgba(255,255,255,0.1)" }} />
                )}
                <div style={{ flexShrink: 0 }}>
                  <div
                    style={{
                      backgroundColor: "#0B7A8A",
                      color: "#FFFFFF",
                      padding: "0.45rem 0.7rem",
                      borderRadius: "8px",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      width: "60px",
                      textAlign: "center",
                    }}
                  >
                    {t.year}
                  </div>
                </div>
                <div style={{ paddingTop: "0.25rem" }}>
                  <h3 style={{ fontSize: "0.975rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.4rem" }}>{t.title}</h3>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "rgba(255,255,255,0.6)", margin: 0 }}>{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM / OUR PEOPLE ── */}
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <div className="wrap section">
          <div className="two-col-start">
            <div>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1rem" }}>
                <div className="rule-teal" style={{ marginBottom: 0 }} />
                <p className="eyebrow" style={{ marginBottom: 0 }}>Our People</p>
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "#0F1923",
                  lineHeight: 1.12,
                  marginBottom: "1.5rem",
                }}
              >
                Local employment is central to what we do
              </h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "#4B5563", marginBottom: "1.25rem" }}>
                Creating stable, formal employment in communities that face high
                rates of informal and precarious work is one of our primary
                social commitments. We do not use our workforce as a footnote.
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "#4B5563", marginBottom: "1.25rem" }}>
                Every new hire receives structured pre-deployment training, a
                uniform, and a formal employment contract. We are investing in
                people, not just filling positions.
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "#4B5563", marginBottom: "2.5rem" }}>
                For many of our workers, ECO Solutions has been their first
                experience of formal employment. We take that responsibility
                seriously.
              </p>
              <Link href="/contact" className="btn-primary">Work With Us</Link>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div
                style={{
                  borderRadius: "18px",
                  overflow: "hidden",
                  aspectRatio: "3/4",
                  position: "relative",
                  boxShadow: "0 12px 32px rgba(15,25,35,0.1)",
                }}
              >
                <Image
                  src="/IMG-20250526-WA0017.jpg"
                  alt="ECO Solutions team members standing together"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <div
                style={{
                  borderRadius: "18px",
                  overflow: "hidden",
                  aspectRatio: "3/4",
                  position: "relative",
                  marginTop: "2rem",
                  boxShadow: "0 12px 32px rgba(15,25,35,0.1)",
                }}
              >
                <Image
                  src="/IMG-20250210-WA0013.jpg"
                  alt="Two ECO Solutions crew members with cleaning equipment"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FUNDER CALLOUT ── */}
      <section style={{ backgroundColor: "#0B7A8A" }}>
        <div className="wrap" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem", alignItems: "flex-start" }}
            className="md:flex-row md:items-center md:justify-between"
          >
            <div style={{ maxWidth: "580px" }}>
              <p className="eyebrow" style={{ marginBottom: "0.75rem", color: "rgba(255,255,255,0.7)" }}>
                For Funders and Partners
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  marginBottom: "0.75rem",
                  lineHeight: 1.2,
                  letterSpacing: "-0.025em",
                }}
              >
                Interested in supporting community-grounded enterprise?
              </h2>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "rgba(255,255,255,0.78)", margin: 0 }}>
                We are actively seeking grant funding and impact investment to
                scale our employment and training programmes. We welcome
                conversations with foundations, development organisations, and
                social investors who share our values.
              </p>
            </div>
            <Link
              href="/contact"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#0B7A8A",
                padding: "0.9rem 2rem",
                borderRadius: "3px",
                fontWeight: 700,
                fontSize: "0.875rem",
                textDecoration: "none",
                flexShrink: 0,
                whiteSpace: "nowrap",
              }}
            >
              Reach Out
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
