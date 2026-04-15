import Image from "next/image";
import Link from "next/link";
import { Home as HomeIcon, Users, Trash2, Settings2 } from "lucide-react";

const pillars = [
  {
    label: "Cleaning · Grounds",
    title: "Professional Facility Services",
    body: "Apartment cleaning, grounds maintenance, and building upkeep delivered by trained, uniformed teams on a consistent schedule.",
    img: "/IMG-20250526-WA0022.jpg",
    alt: "ECO Solutions cleaning team at work in a Nairobi residential estate",
  },
  {
    label: "Employment · Training",
    title: "Community Employment",
    body: "We recruit locally, train every hire before deployment, and provide formal contracts that turn facility work into stable, dignified livelihoods.",
    img: "/IMG-20250526-WA0017.jpg",
    alt: "ECO Solutions uniformed team members standing together",
  },
  {
    label: "Waste · Environment",
    title: "Eco-Responsible Practices",
    body: "Structured waste collection, responsible disposal, and low-waste operations that protect public health and the shared environments we all live in.",
    img: "/waste-truck.webp",
    alt: "ECO Solutions waste management vehicle on collection route",
  },
];

const photos = [
  { src: "/IMG-20250526-WA0008.jpg", alt: "ECO Solutions team on site" },
  { src: "/IMG-20250526-WA0017.jpg", alt: "Uniformed ECO Solutions workers" },
  { src: "/IMG-20250526-WA0020.jpg", alt: "ECO Solutions crew in the field" },
  { src: "/IMG-20250526-WA0021.jpg", alt: "Grounds maintenance work" },
  { src: "/IMG-20250526-WA0022.jpg", alt: "Cleaning team at residential estate" },
  { src: "/IMG-20250526-WA0023.jpg", alt: "ECO Solutions waste management" },
  { src: "/IMG-20250526-WA0024.jpg", alt: "Team at work in Nairobi" },
  { src: "/IMG-20250210-WA0013.jpg", alt: "ECO Solutions cleaning crew" },
];

const impacts = [
  { value: "50+", label: "Local jobs created", sub: "with training & formal contracts" },
  { value: "10+", label: "Years of operation", sub: "building trust in Nairobi" },
  { value: "3", label: "Communities served", sub: "with active service contracts" },
  { value: "100%", label: "Local recruitment", sub: "from communities we work in" },
  { value: "6", label: "Service lines", sub: "cleaning to facility management" },
  { value: "0", label: "Informal workers", sub: "every hire gets a formal contract" },
];

const modelSteps = [
  {
    num: "01",
    title: "Tell us about your property",
    body: "Share your location, estate size, and current service gaps. We listen before we recommend.",
  },
  {
    num: "02",
    title: "We scope the right service",
    body: "Cleaning, grounds, waste, or integrated: we help you choose the right mix for your site.",
  },
  {
    num: "03",
    title: "Launch with one accountable team",
    body: "Your service runs on a clear schedule with a named supervisor and consistent on-site standards.",
  },
  {
    num: "04",
    title: "Review and grow together",
    body: "Regular check-ins and transparent reporting. Expand services as your needs evolve.",
  },
];

const revenues = [
  {
    Icon: HomeIcon,
    title: "Cleaning Contracts",
    body: "Recurring residential and commercial cleaning fees from property managers and estate operators.",
  },
  {
    Icon: Users,
    title: "Grounds and Maintenance",
    body: "Scheduled lawn care, trimming, and building upkeep retainers that keep shared spaces presentable.",
  },
  {
    Icon: Trash2,
    title: "Waste Management",
    body: "Structured collection and responsible disposal services billed per estate or community.",
  },
  {
    Icon: Settings2,
    title: "Integrated Facility Services",
    body: "Full-scope facility management packages combining all service lines under one accountable contract.",
  },
];

const tiers = [
  {
    name: "Property Manager",
    badge: "Service Client",
    description: "Looking for reliable cleaning, grounds, or waste support for residential estates and shared spaces.",
    cta: "Request a Quote",
    href: "/contact",
    featured: false,
  },
  {
    name: "Impact Funder",
    badge: "Partner",
    description: "Support a community-rooted enterprise creating formal employment and healthier Nairobi neighbourhoods.",
    cta: "Explore Partnership",
    href: "/contact",
    featured: true,
  },
  {
    name: "Job Seeker",
    badge: "Join the Team",
    description: "Looking for formal employment with training, a uniform, and structured deployment opportunities.",
    cta: "Contact Our Team",
    href: "/contact",
    featured: false,
  },
];

const sdgs = [
  { num: "SDG 1", label: "No Poverty", color: "#E5243B" },
  { num: "SDG 8", label: "Decent Work", color: "#A21942" },
  { num: "SDG 10", label: "Reduced Inequalities", color: "#DD1367" },
  { num: "SDG 11", label: "Sustainable Cities", color: "#FD9D24" },
  { num: "SDG 12", label: "Responsible Consumption", color: "#BF8B2E" },
  { num: "SDG 17", label: "Partnerships", color: "#19486A" },
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
        {/* Background image */}
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/worker-residential.webp"
            alt="ECO Solutions worker at a Nairobi residential property"
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
          {/* Trust pill */}
          <div className="trust-pill" style={{ marginBottom: "1.5rem", display: "inline-flex" }}>
            <span className="trust-pill-dot" />
            Nairobi social enterprise · Est. 2013
          </div>

          {/* Headline */}
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
            Keeping Nairobi&apos;s Properties{" "}
            <span
              style={{
                color: "#4DBCCF",
                fontStyle: "italic",
              }}
            >
              Clean,
            </span>{" "}
            One Trained Team at a Time
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.78)",
              marginBottom: "2.25rem",
              maxWidth: "580px",
            }}
          >
            ECO Solutions LTD delivers professional cleaning, grounds
            maintenance, waste management, and facility services for residential
            estates, while creating formal local employment across Nairobi.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
            <Link href="/contact" className="btn-primary">
              Partner With Us
            </Link>
            <Link href="/about" className="btn-outline-white">
              Our Story
            </Link>
          </div>

          {/* Stats strip */}
          <div className="hero-stats">
            {[
              { v: "50+", l: "Local jobs created" },
              { v: "10+", l: "Years operating" },
              { v: "3", l: "Communities served" },
              { v: "100%", l: "Local recruitment" },
            ].map((s) => (
              <div key={s.l} className="hero-stat">
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "#4DBCCF",
                    lineHeight: 1,
                    marginBottom: "0.3rem",
                  }}
                >
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
      <section id="story" style={{ backgroundColor: "#FFFFFF" }}>
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
                The problem: poorly maintained estates and invisible workers.
              </h2>
              <p style={{ fontSize: "0.96rem", lineHeight: 1.85, color: "#4B5563", marginBottom: "1rem" }}>
                Across Nairobi&apos;s residential estates, property managers
                struggle to find reliable service partners. Workers in the
                cleaning and grounds sector are too often engaged informally,
                with no contracts, no training, and no stability.
              </p>
              <p style={{ fontSize: "0.96rem", lineHeight: 1.85, color: "#4B5563", marginBottom: "2rem" }}>
                ECO Solutions LTD (formerly Pearl Cleaning Services) was
                built to solve both problems at once. We deliver professional
                facility services that clients depend on, and we do it through
                a workforce that is trained, uniformed, and formally employed.
                Every contract we win funds more jobs. Every job reduces
                precarious informal labour in our communities.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/about" className="btn-primary">Read the Full Story</Link>
                <Link href="/contact" className="btn-outline">Get in Touch</Link>
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <Image
                src="/IMG-20250526-WA0017.jpg"
                alt="ECO Solutions team assembled on site"
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
              {/* Floating stat */}
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
      <section id="our-work" style={{ backgroundColor: "#FAF9F7" }}>
        <div className="wrap section">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
              <div className="rule-teal" style={{ marginBottom: 0 }} />
              <p className="eyebrow" style={{ marginBottom: 0 }}>Three Pillars</p>
              <div className="rule-teal" style={{ marginBottom: 0 }} />
            </div>
            <h2
              style={{
                fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#0F1923",
                lineHeight: 1.08,
                maxWidth: "620px",
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
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#0F1923",
                      marginBottom: "0.65rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "#4B5563", margin: 0 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FROM THE GROUND (Photo Gallery) ── */}
      <section style={{ backgroundColor: "#0D1F2D" }}>
        <div className="wrap section">
          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1rem" }}>
              <div className="rule-teal" style={{ marginBottom: 0, backgroundColor: "#4DBCCF" }} />
              <p className="eyebrow" style={{ marginBottom: 0, color: "#4DBCCF" }}>From the Ground</p>
            </div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
                lineHeight: 1.1,
                maxWidth: "540px",
              }}
            >
              Real teams. Real estates. Real impact.
            </h2>
          </div>

          <div className="gallery-grid">
            {photos.map((photo) => (
              <div
                key={photo.src}
                style={{
                  position: "relative",
                  aspectRatio: "1/1",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR IMPACT ── */}
      <section id="impact" style={{ backgroundColor: "#0B7A8A" }}>
        <div className="wrap section">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
              <div className="rule-teal" style={{ marginBottom: 0, backgroundColor: "rgba(255,255,255,0.5)" }} />
              <p className="eyebrow" style={{ marginBottom: 0, color: "rgba(255,255,255,0.8)" }}>Our Impact</p>
              <div className="rule-teal" style={{ marginBottom: 0, backgroundColor: "rgba(255,255,255,0.5)" }} />
            </div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
                lineHeight: 1.1,
              }}
            >
              Ten years of numbers that matter.
            </h2>
          </div>

          <div className="impact-grid">
            {impacts.map((item) => (
              <div key={item.label} className="impact-cell">
                <div
                  style={{
                    fontSize: "clamp(2.25rem, 5vw, 3.25rem)",
                    fontWeight: 800,
                    color: "#FFFFFF",
                    lineHeight: 1,
                    marginBottom: "0.4rem",
                  }}
                >
                  {item.value}
                </div>
                <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "rgba(255,255,255,0.9)", marginBottom: "0.2rem" }}>
                  {item.label}
                </div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.55)" }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE MODEL ── */}
      <section style={{ backgroundColor: "#0D1F2D" }}>
        <div className="wrap section">
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1rem" }}>
              <div className="rule-teal" style={{ marginBottom: 0, backgroundColor: "#4DBCCF" }} />
              <p className="eyebrow" style={{ marginBottom: 0, color: "#4DBCCF" }}>The Model</p>
            </div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
                lineHeight: 1.1,
                maxWidth: "520px",
              }}
            >
              From first enquiry to a well-run site.
            </h2>
          </div>

          <div className="model-steps">
            {modelSteps.map((step) => (
              <div key={step.num} className="model-step">
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    color: "rgba(77,188,207,0.3)",
                    lineHeight: 1,
                    marginBottom: "1rem",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {step.num}
                </div>
                <h3 style={{ fontSize: "0.975rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.65rem", lineHeight: 1.35 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.75, color: "rgba(255,255,255,0.6)", margin: 0 }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVENUE STREAMS ── */}
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <div className="wrap section">
          <div style={{ maxWidth: "600px", marginBottom: "3rem" }}>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1rem" }}>
              <div className="rule-teal" style={{ marginBottom: 0 }} />
              <p className="eyebrow" style={{ marginBottom: 0 }}>Service Lines</p>
            </div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#0F1923",
                lineHeight: 1.1,
                marginBottom: "1rem",
              }}
            >
              Choose one service, or hand us the whole brief.
            </h2>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "#4B5563", margin: 0 }}>
              Each service line stands alone or combines into an integrated facility package: one team, one supervisor, one contract.
            </p>
          </div>

          <div className="revenue-grid">
            {revenues.map((r) => (
              <div key={r.title} className="revenue-card">
                <div style={{ marginBottom: "1rem", color: "#0B7A8A" }}>
                  <r.Icon size={28} strokeWidth={1.6} />
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0F1923", marginBottom: "0.6rem" }}>{r.title}</h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "#4B5563", margin: 0 }}>{r.body}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <Link href="/services" className="btn-outline">Explore all services</Link>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY IMPACT / TESTIMONIAL ── */}
      <section id="community" style={{ backgroundColor: "#FAF9F7" }}>
        <div className="wrap section">
          <div className="two-col">
            {/* Images */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div className="img-portrait">
                <Image
                  src="/IMG-20250210-WA0013.jpg"
                  alt="ECO Solutions crew member"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <div style={{ display: "grid", gap: "1rem" }}>
                <div className="img-wide">
                  <Image
                    src="/IMG-20250210-WA0018.jpg"
                    alt="ECO Solutions team on site"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                  />
                </div>
                <div className="img-wide">
                  <Image
                    src="/IMG-20250526-WA0024.jpg"
                    alt="ECO Solutions cleaning crew"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                  />
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1rem" }}>
                <div className="rule-teal" style={{ marginBottom: 0 }} />
                <p className="eyebrow" style={{ marginBottom: 0 }}>Community Impact</p>
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "#0F1923",
                  lineHeight: 1.1,
                  marginBottom: "2rem",
                }}
              >
                Cleaner sites. More stable work.
              </h2>

              <blockquote
                style={{
                  margin: 0,
                  padding: "1.75rem 2rem",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderLeft: "4px solid #0B7A8A",
                  borderRadius: "0 16px 16px 0",
                  marginBottom: "2rem",
                }}
              >
                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.8,
                    color: "#0F1923",
                    fontStyle: "italic",
                    margin: 0,
                    marginBottom: "1rem",
                  }}
                >
                  &ldquo;Before ECO Solutions, we struggled to keep contractors accountable.
                  Now we have one team, one number to call, and our residents
                  notice the difference every day.&rdquo;
                </p>
                <footer style={{ fontSize: "0.82rem", fontWeight: 600, color: "#0B7A8A" }}>
                  Property Manager, Nairobi Residential Estate
                </footer>
              </blockquote>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "Uniformed, trained workers residents can trust",
                  "Consistent schedules with no drop-offs in service quality",
                  "One supervisor, one point of contact for all queries",
                ].map((point) => (
                  <div key={point} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
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
                    <span style={{ fontSize: "0.875rem", color: "#374151", lineHeight: 1.65 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUSTAINABILITY / SOCIAL IMPACT ── */}
      <section id="sustainability" style={{ backgroundColor: "#0D1F2D" }}>
        <div className="wrap section">
          <div className="two-col">
            <div>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1rem" }}>
                <div className="rule-teal" style={{ marginBottom: 0, backgroundColor: "#4DBCCF" }} />
                <p className="eyebrow" style={{ marginBottom: 0, color: "#4DBCCF" }}>Sustainability</p>
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.65rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                  marginBottom: "1.25rem",
                }}
              >
                Local employment as our primary social commitment.
              </h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "rgba(255,255,255,0.7)", marginBottom: "1rem" }}>
                Creating stable, formal employment in communities that face high
                rates of informal and precarious work is central to our mission.
                We do not use our workforce as a footnote.
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "rgba(255,255,255,0.7)", marginBottom: "2rem" }}>
                Every hire receives structured pre-deployment training, a
                uniform, and a formal employment contract. Many of our workers
                experience their first formal job with ECO Solutions, a
                responsibility we take seriously.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {[
                  { v: "50+", l: "Formal jobs created" },
                  { v: "100%", l: "Locally recruited" },
                  { v: "2022", l: "Training programme launched" },
                  { v: "0", l: "Informal engagements" },
                ].map((s) => (
                  <div
                    key={s.l}
                    style={{
                      padding: "1.25rem",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "14px",
                    }}
                  >
                    <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#4DBCCF", lineHeight: 1, marginBottom: "0.3rem" }}>
                      {s.v}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.6)" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* SDG alignment */}
            <div>
              <p
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#4DBCCF",
                  fontWeight: 700,
                  marginBottom: "1.25rem",
                }}
              >
                Global Alignment · 6 UN SDGs
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem", marginBottom: "2rem" }}>
                {sdgs.map((sdg) => (
                  <div
                    key={sdg.num}
                    className="sdg-badge"
                    style={{ backgroundColor: sdg.color, width: "100%", height: "auto", padding: "1rem 0.5rem", borderRadius: "10px" }}
                  >
                    <div>
                      <div style={{ fontSize: "0.78rem", fontWeight: 800 }}>{sdg.num}</div>
                      <div style={{ fontSize: "0.65rem", fontWeight: 500, opacity: 0.9, marginTop: "0.2rem" }}>{sdg.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.8, color: "rgba(255,255,255,0.6)" }}>
                Our work directly advances six United Nations Sustainable
                Development Goals, from poverty reduction and decent work to
                sustainable cities and responsible consumption.
              </p>
              <Link href="/about" className="btn-outline-white" style={{ marginTop: "1.5rem", display: "inline-block" }}>
                Read our full story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WORK WITH US / PARTNER ── */}
      <section id="work-with-us" style={{ backgroundColor: "#FAF9F7" }}>
        <div className="wrap section">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
              <div className="rule-teal" style={{ marginBottom: 0 }} />
              <p className="eyebrow" style={{ marginBottom: 0 }}>Work With Us</p>
              <div className="rule-teal" style={{ marginBottom: 0 }} />
            </div>
            <h2
              style={{
                fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#0F1923",
                lineHeight: 1.08,
                marginBottom: "1rem",
                maxWidth: "600px",
                margin: "0 auto 1rem",
              }}
            >
              Different visitors, one clear next step.
            </h2>
            <p style={{ fontSize: "0.96rem", lineHeight: 1.8, color: "#4B5563", maxWidth: "520px", margin: "0 auto" }}>
              Whether you manage properties, fund community enterprise, or are
              looking for formal employment, there is a path for you here.
            </p>
          </div>

          <div className="tier-grid">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                style={{
                  backgroundColor: tier.featured ? "#0B7A8A" : "#FFFFFF",
                  border: `1px solid ${tier.featured ? "#0B7A8A" : "#E2E8F0"}`,
                  borderRadius: "20px",
                  padding: "2.25rem",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: tier.featured ? "0 16px 48px rgba(11,122,138,0.3)" : "none",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {tier.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: "1.25rem",
                      right: "1.25rem",
                      backgroundColor: "#4DBCCF",
                      color: "#FFFFFF",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "0.3rem 0.7rem",
                      borderRadius: "999px",
                    }}
                  >
                    Featured
                  </div>
                )}
                <span
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: tier.featured ? "rgba(255,255,255,0.7)" : "#0B7A8A",
                    marginBottom: "0.75rem",
                    display: "block",
                  }}
                >
                  {tier.badge}
                </span>
                <h3
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 800,
                    color: tier.featured ? "#FFFFFF" : "#0F1923",
                    marginBottom: "0.85rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {tier.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.75,
                    color: tier.featured ? "rgba(255,255,255,0.8)" : "#4B5563",
                    marginBottom: "1.75rem",
                    flex: 1,
                  }}
                >
                  {tier.description}
                </p>
                <Link
                  href={tier.href}
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "0.85rem",
                    borderRadius: "10px",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    textDecoration: "none",
                    backgroundColor: tier.featured ? "#FFFFFF" : "#0B7A8A",
                    color: tier.featured ? "#0B7A8A" : "#FFFFFF",
                    transition: "opacity 0.2s",
                  }}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Contact info */}
          <div
            style={{
              marginTop: "3.5rem",
              padding: "2rem",
              backgroundColor: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: "20px",
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p style={{ fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0B7A8A", fontWeight: 700, marginBottom: "0.4rem" }}>
                Direct contact
              </p>
              <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0F1923", marginBottom: "0.3rem" }}>+254 723 808 519</p>
              <p style={{ fontSize: "0.875rem", color: "#4B5563", margin: 0 }}>info@pearlcleaningservices.co.ke · Nairobi, Kenya</p>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href="tel:+254723808519" className="btn-primary">Call Now</a>
              <Link href="/contact" className="btn-outline">Send a Message</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
