import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "apartment-cleaning",
    title: "Apartment Cleaning",
    tagline: "Healthy homes · Every visit",
    description:
      "Clean homes are a baseline for health and wellbeing. Our teams are trained, uniformed locals who follow a structured checklist on every visit. Predictable schedules and consistent standards mean residents know exactly what to expect.",
    features: [
      "Full kitchen and bathroom deep cleaning",
      "Floor washing, mopping, and surface sanitization",
      "Dusting, bin emptying, and odor control",
      "Window interior cleaning",
      "Post-visit reporting on request",
    ],
    image: "/IMG-20250526-WA0008.jpg",
    imageAlt: "ECO Solutions operative carrying out detailed cleaning work",
    impact: "Each contract sustains stable employment for locally recruited cleaning staff.",
  },
  {
    id: "grounds-maintenance",
    title: "Grounds Maintenance",
    tagline: "Spaces communities are proud of",
    description:
      "The condition of shared outdoor spaces shapes how people feel about where they live. Our grounds teams keep lawns, paths, hedges, and flower beds in order, creating environments that residents and children can use safely.",
    features: [
      "Lawn mowing and edging",
      "Hedge and shrub trimming",
      "Pathway and driveway sweeping",
      "Flower bed and planting maintenance",
      "Seasonal outdoor clearing",
    ],
    image: "/IMG-20250526-WA0020.jpg",
    imageAlt: "ECO Solutions team working at a residential estate",
    impact: "Grounds teams are among our largest employers of local workers per contract.",
  },
  {
    id: "waste-management",
    title: "Waste Management",
    tagline: "Responsible disposal · Cleaner communities",
    description:
      "Poorly managed waste is one of the leading causes of preventable illness in urban residential areas. Our service operates on fixed schedules, uses segregated collection, and ensures responsible disposal.",
    features: [
      "Scheduled, reliable waste collection rounds",
      "Bin washing, deodorizing, and maintenance",
      "Segregated organic, recyclable, and general waste",
      "Bulk and bulky item clearance",
      "Transparent service reporting",
    ],
    image: "/waste-truck.webp",
    imageAlt: "ECO Solutions waste management team loading a collection vehicle",
    impact: "Proper waste management reduces disease vectors and improves public health at the estate level.",
  },
  {
    id: "building-maintenance",
    title: "Building Maintenance",
    tagline: "Shared spaces that reflect shared respect",
    description:
      "Staircases, corridors, lifts, and parking areas are used by every resident every day. When they are clean and maintained, they set a standard of care that shapes how people treat their environment.",
    features: [
      "Staircase and corridor cleaning",
      "Lobby and reception area upkeep",
      "Lift interior maintenance",
      "Car park sweeping and periodic washing",
      "Light fixtures, handrails, and door cleaning",
    ],
    image: "/IMG-20250526-WA0022.jpg",
    imageAlt: "Operative cleaning a residential building interior",
    impact: "Clean common areas reduce slip hazards, pest harbourage, and the spread of airborne illness.",
  },
  {
    id: "facility-services",
    title: "Integrated Facility Services",
    tagline: "One team · One standard · Full accountability",
    description:
      "Managing multiple contractors for cleaning, grounds, and waste creates gaps in accountability and inconsistent quality. We offer a single-contract solution with one team, one supervisor, and one reporting line.",
    features: [
      "Single-contract facility management",
      "Scheduled and reactive service delivery",
      "Supervisor-led, quality-checked teams",
      "Monthly service reports and client reviews",
      "Dedicated account management",
    ],
    image: "/IMG-20250526-WA0017.jpg",
    imageAlt: "ECO Solutions team assembled and ready for a facility assignment",
    impact: "Integrated contracts support larger team deployments, creating more employment per property.",
  },
  {
    id: "specialized-cleaning",
    title: "Specialized Cleaning",
    tagline: "When standard cleaning is not enough",
    description:
      "Post-construction handovers, move-in and move-out transitions, and periodic deep cleans require a different level of preparation. Our specialized teams deploy with appropriate equipment to restore spaces to a high standard.",
    features: [
      "Post-construction debris removal and surface cleaning",
      "Move-in and move-out deep cleans",
      "Periodic heavy-duty floor scrubbing",
      "High-pressure surface washing",
      "Industrial-grade disinfection treatments",
    ],
    image: "/IMG-20250210-WA0013.jpg",
    imageAlt: "ECO Solutions crew ready for a specialized cleaning assignment",
    impact: "Specialized assignments provide additional hours and advanced training opportunities for our teams.",
  },
];

export default function ServicesPage() {
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
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 50%, rgba(77,188,207,0.1), transparent 55%)" }} />
        <div className="wrap" style={{ position: "relative" }}>
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1.25rem" }}>
            <div className="rule-teal" style={{ marginBottom: 0, backgroundColor: "#4DBCCF" }} />
            <p className="eyebrow" style={{ marginBottom: 0, color: "#4DBCCF" }}>What We Offer</p>
          </div>
          <h1
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#FFFFFF",
              marginBottom: "1.25rem",
              lineHeight: 1.05,
              maxWidth: "680px",
            }}
          >
            Six services for every type of client.
          </h1>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(255,255,255,0.7)", maxWidth: "560px", marginBottom: "2rem" }}>
            We serve residential estates, corporate offices, shopping malls,
            institutions, and industrial sites. Choose one service or let us
            manage the full facility brief.
          </p>
          {/* Quick jump pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                style={{
                  padding: "0.4rem 0.9rem",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "background-color 0.2s, border-color 0.2s",
                  backgroundColor: "rgba(255,255,255,0.06)",
                }}
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE MODEL ── */}
      <section style={{ backgroundColor: "#0D1F2D" }}>
        <div className="wrap section">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
              <div className="rule-teal" style={{ marginBottom: 0, backgroundColor: "#4DBCCF" }} />
              <p className="eyebrow" style={{ marginBottom: 0, color: "#4DBCCF" }}>How We Work</p>
              <div className="rule-teal" style={{ marginBottom: 0, backgroundColor: "#4DBCCF" }} />
            </div>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
                lineHeight: 1.1,
              }}
            >
              From first enquiry to a well-run site
            </h2>
          </div>
          <div className="model-steps">
            {[
              {
                step: "01",
                title: "Enquiry",
                body: "Tell us about your property — type, size, and the service you need. We respond within one business day.",
              },
              {
                step: "02",
                title: "Site Scoping",
                body: "We visit your site, assess the scope, and recommend the right service package with a clear, itemised quote.",
              },
              {
                step: "03",
                title: "Team Deployment",
                body: "A trained, uniformed local team is assigned to your site with a named supervisor and a confirmed schedule.",
              },
              {
                step: "04",
                title: "Ongoing Service",
                body: "Regular service delivery, monthly reporting, and a dedicated account contact — one team, one standard.",
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  padding: "2rem 1.75rem",
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "18px",
                }}
              >
                <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "#4DBCCF", lineHeight: 1, marginBottom: "1rem", opacity: 0.6 }}>
                  {item.step}
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.65rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "rgba(255,255,255,0.6)", margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE BLOCKS ── */}
      {services.map((s, i) => {
        const isEven = i % 2 === 0;
        return (
          <section
            key={s.id}
            id={s.id}
            style={{ backgroundColor: isEven ? "#FFFFFF" : "#FAF9F7" }}
          >
            <div className="wrap section">
              <div
                className="two-col"
              >
                {/* Text */}
                <div style={{ order: 1 }} className={isEven ? "lg:order-1" : "lg:order-2"}>
                  <p
                    style={{
                      fontSize: "0.72rem",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "#0B7A8A",
                      fontWeight: 700,
                      marginBottom: "0.85rem",
                    }}
                  >
                    {s.tagline}
                  </p>
                  <h2
                    style={{
                      fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                      color: "#0F1923",
                      marginBottom: "1.25rem",
                      lineHeight: 1.1,
                    }}
                  >
                    {s.title}
                  </h2>
                  <p style={{ fontSize: "0.96rem", lineHeight: 1.85, color: "#4B5563", marginBottom: "1.75rem" }}>
                    {s.description}
                  </p>

                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.75rem" }}>
                    {s.features.map((f) => (
                      <li key={f} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                        <span
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "999px",
                            backgroundColor: "#EBF6F8",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            marginTop: "1px",
                          }}
                        >
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-5" stroke="#0B7A8A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "0.875rem", color: "#374151", lineHeight: 1.65 }}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Impact callout */}
                  <div
                    style={{
                      backgroundColor: "#0D1F2D",
                      borderRadius: "14px",
                      padding: "1.1rem 1.25rem",
                      marginBottom: "1.75rem",
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ color: "#4DBCCF", flexShrink: 0, marginTop: "1px" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </span>
                    <p style={{ fontSize: "0.82rem", lineHeight: 1.65, color: "rgba(255,255,255,0.75)", margin: 0 }}>
                      <span style={{ fontWeight: 600, color: "#4DBCCF" }}>Community impact: </span>
                      {s.impact}
                    </p>
                  </div>

                  <Link href="/contact" className="btn-primary">Enquire about this service</Link>
                </div>

                {/* Image */}
                <div style={{ order: 2 }} className={isEven ? "lg:order-2" : "lg:order-1"}>
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "22px",
                      overflow: "hidden",
                      aspectRatio: "4/5",
                      boxShadow: "0 20px 50px rgba(15,25,35,0.12)",
                    }}
                  >
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      style={{ objectFit: "cover", objectPosition: "center top" }}
                    />
                    {/* Label overlay */}
                    <div
                      style={{
                        position: "absolute",
                        top: "1.25rem",
                        left: "1.25rem",
                        backgroundColor: "rgba(13,31,45,0.85)",
                        color: "#FFFFFF",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        padding: "0.4rem 0.85rem",
                        borderRadius: "999px",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {s.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── BOTTOM CTA ── */}
      <section style={{ backgroundColor: "#0B7A8A" }}>
        <div className="wrap" style={{ paddingTop: "4.5rem", paddingBottom: "4.5rem" }}>
          <div
            className="cta-row"
          >
            <div style={{ maxWidth: "560px" }}>
              <p style={{ fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", fontWeight: 700, marginBottom: "0.5rem" }}>
                Not sure where to start?
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 2.8vw, 2rem)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  marginBottom: "0.5rem",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.2,
                }}
              >
                Tell us about your property and we will recommend the right service.
              </h2>
              <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.78)", margin: 0 }}>
                We can design a single-service contract or an integrated package, whatever your site needs.
              </p>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#0B7A8A",
                  padding: "0.9rem 2rem",
                  borderRadius: "3px",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
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
