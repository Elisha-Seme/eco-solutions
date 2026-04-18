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
  { year: "2024", title: "Rebranded as Pearl ECO Solutions", body: "Rebranded to reflect our grown scope and explicit commitment to eco-conscious, community-centred operations." },
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
            From Pearl Cleaning Services to Pearl ECO Solutions: serving
            residential estates, corporates, malls, institutions, and industrial
            sites across Nairobi since 2013.
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
                Pearl ECO Solutions grew from Pearl Cleaning Services into a
                full-scope facility services company serving residential estates,
                corporate offices, shopping malls, institutions, and industrial
                sites across Nairobi.
              </p>
              <p style={{ fontSize: "0.96rem", lineHeight: 1.85, color: "#4B5563", marginBottom: "2rem" }}>
                We deliver dependable cleaning, grounds, waste, and facility
                management through trained, uniformed local teams. Every
                contract funds more jobs. Every job reduces informal precarious
                work in our communities.
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
                Every hire receives pre-deployment training, a uniform, and a
                formal contract. For many, Pearl ECO Solutions is their first
                experience of formal employment.
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "#4B5563", marginBottom: "2.5rem" }}>
                We recruit entirely from the communities we serve. Local
                employment is not a footnote — it is central to why we exist.
              </p>
              <Link href="/contact" className="btn-primary">Work With Us</Link>
            </div>

            <div className="two-col-photos">
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

      {/* ── PHOTO GALLERY ── */}
      <section style={{ backgroundColor: "#FAF9F7" }}>
        <div className="wrap section">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
              <div className="rule-teal" style={{ marginBottom: 0 }} />
              <p className="eyebrow" style={{ marginBottom: 0 }}>From the Ground</p>
              <div className="rule-teal" style={{ marginBottom: 0 }} />
            </div>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#0F1923",
                lineHeight: 1.1,
              }}
            >
              Our teams, our sites, our work
            </h2>
          </div>
          <div className="gallery-grid">
            {[
              { src: "/IMG-20250526-WA0022.jpg", alt: "ECO Solutions cleaning team at a residential building" },
              { src: "/IMG-20250526-WA0017.jpg", alt: "Uniformed Pearl ECO Solutions team members" },
              { src: "/IMG-20250526-WA0020.jpg", alt: "Grounds maintenance crew at an estate" },
              { src: "/IMG-20250526-WA0008.jpg", alt: "ECO Solutions operative cleaning an apartment" },
              { src: "/worker-residential.webp", alt: "Worker at a Nairobi residential property" },
              { src: "/waste-truck.webp", alt: "ECO Solutions waste management vehicle" },
              { src: "/IMG-20250210-WA0013.jpg", alt: "Crew ready for a specialized cleaning assignment" },
              { src: "/IMG-20250526-WA0017.jpg", alt: "Team assembled and ready for a facility assignment" },
            ].map((img, i) => (
              <div
                key={i}
                style={{
                  borderRadius: "14px",
                  overflow: "hidden",
                  aspectRatio: i === 0 || i === 4 ? "4/5" : "1/1",
                  position: "relative",
                  boxShadow: "0 8px 24px rgba(15,25,35,0.1)",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITY TESTIMONIAL ── */}
      <section style={{ backgroundColor: "#0D1F2D" }}>
        <div className="wrap section">
          <div className="two-col-start">
            <div>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1.25rem" }}>
                <div className="rule-teal" style={{ marginBottom: 0, backgroundColor: "#4DBCCF" }} />
                <p className="eyebrow" style={{ marginBottom: 0, color: "#4DBCCF" }}>Community Impact</p>
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "#FFFFFF",
                  lineHeight: 1.12,
                  marginBottom: "2rem",
                }}
              >
                Real jobs. Real families. Real communities.
              </h2>
              <blockquote
                style={{
                  borderLeft: "3px solid #4DBCCF",
                  paddingLeft: "1.5rem",
                  marginBottom: "2rem",
                }}
              >
                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.85)",
                    fontStyle: "italic",
                    marginBottom: "1rem",
                  }}
                >
                  "Before Pearl ECO Solutions, I was doing casual work with no
                  contract and no certainty. Now I have a uniform, a schedule,
                  and I know what I earn every month. That changes everything
                  for my family."
                </p>
                <footer style={{ fontSize: "0.82rem", color: "#4DBCCF", fontWeight: 600 }}>
                  Team member, residential estate contract
                </footer>
              </blockquote>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.85, color: "rgba(255,255,255,0.65)", margin: 0 }}>
                Every service contract we sign translates directly into stable
                employment for local residents. Training, formal contracts, and
                consistent pay transform casual work into livelihoods.
              </p>
            </div>

            <div className="two-col-photos">
              {[
                { src: "/IMG-20250526-WA0017.jpg", alt: "Team member on site" },
                { src: "/IMG-20250526-WA0022.jpg", alt: "Cleaning operative at work" },
                { src: "/IMG-20250526-WA0020.jpg", alt: "Grounds crew at an estate" },
                { src: "/IMG-20250526-WA0008.jpg", alt: "ECO Solutions worker in uniform" },
              ].map((img, i) => (
                <div
                  key={i}
                  style={{
                    borderRadius: "14px",
                    overflow: "hidden",
                    aspectRatio: "1/1",
                    position: "relative",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SUSTAINABILITY ── */}
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <div className="wrap section">
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1rem" }}>
            <div className="rule-teal" style={{ marginBottom: 0 }} />
            <p className="eyebrow" style={{ marginBottom: 0 }}>Sustainability</p>
          </div>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#0F1923",
              marginBottom: "1rem",
              lineHeight: 1.1,
              maxWidth: "560px",
            }}
          >
            Eco-responsible operations, every day
          </h2>
          <p style={{ fontSize: "0.96rem", lineHeight: 1.85, color: "#4B5563", marginBottom: "3rem", maxWidth: "560px" }}>
            Our name reflects our commitment. We structure waste collection
            responsibly, minimise chemical use, and train teams to protect the
            environments they work in.
          </p>

          <div className="two-col-cards" style={{ marginBottom: "3.5rem" }}>
            {[
              {
                stat: "0",
                label: "Toxic chemicals used",
                body: "All cleaning products selected for low environmental impact and resident safety.",
              },
              {
                stat: "100%",
                label: "Local recruitment",
                body: "Zero commuter transport footprint. Our workers live in the communities they serve.",
              },
              {
                stat: "3-stream",
                label: "Waste segregation",
                body: "Organic, recyclable, and general waste separated at point of collection on every contract.",
              },
              {
                stat: "Low",
                label: "Waste operations target",
                body: "Equipment shared across contracts, supply waste minimised, and consumables tracked per site.",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  padding: "1.75rem",
                  backgroundColor: "#FAF9F7",
                  border: "1px solid #E2E8F0",
                  borderRadius: "18px",
                }}
              >
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#0B7A8A", lineHeight: 1, marginBottom: "0.4rem" }}>
                  {item.stat}
                </div>
                <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#0F1923", marginBottom: "0.5rem" }}>{item.label}</div>
                <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "#4B5563", margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>

          <div>
            <p style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4B5563", marginBottom: "1.25rem" }}>
              Aligned with UN Sustainable Development Goals
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {[
                { num: "3", label: "Good Health & Well-Being" },
                { num: "8", label: "Decent Work & Economic Growth" },
                { num: "11", label: "Sustainable Cities" },
                { num: "13", label: "Climate Action" },
              ].map((sdg) => (
                <div
                  key={sdg.num}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.6rem 1rem",
                    backgroundColor: "#EBF6F8",
                    borderRadius: "999px",
                    border: "1px solid rgba(11,122,138,0.2)",
                  }}
                >
                  <span
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "6px",
                      backgroundColor: "#0B7A8A",
                      color: "#FFFFFF",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {sdg.num}
                  </span>
                  <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#0F1923" }}>{sdg.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FUNDER CALLOUT ── */}
      <section style={{ backgroundColor: "#0B7A8A" }}>
        <div className="wrap" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
          <div
            className="cta-row"
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
