"use client";

import { useState } from "react";
import Image from "next/image";
import { Building2, Handshake, HardHat } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  enquiryType: string;
  service: string;
  message: string;
};

type Status = "idle" | "submitting" | "success";

const contactItems = [
  {
    label: "Phone",
    value: "+254 723 808 519",
    href: "tel:+254723808519",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12 19.79 19.79 0 0 1 1.21 3.48a2 2 0 0 1 1.95-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 14.92z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "info@pearlcleaningservices.co.ke",
    href: "mailto:info@pearlcleaningservices.co.ke",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Nairobi, Kenya",
    href: null,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const audienceCards = [
  {
    title: "Property managers",
    body: "Residential estates, managed properties, and institutions looking for cleaning, grounds, or facility management.",
    Icon: Building2,
  },
  {
    title: "Funders and investors",
    body: "Foundations and impact investors supporting community enterprise, employment growth, and sustainable operations.",
    Icon: Handshake,
  },
  {
    title: "Job seekers",
    body: "Local residents looking for formal employment with training, a uniform, and a structured deployment opportunity.",
    Icon: HardHat,
  },
];

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "", email: "", phone: "", enquiryType: "", service: "", message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    setForm({ name: "", email: "", phone: "", enquiryType: "", service: "", message: "" });
  };

  const isPartnership = form.enquiryType === "partnership" || form.enquiryType === "grant";

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    border: "1.5px solid #E2E8F0",
    borderRadius: "10px",
    fontSize: "0.875rem",
    color: "#0F1923",
    backgroundColor: "#FFFFFF",
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 0.2s",
  };

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
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 80% 50%, rgba(77,188,207,0.1), transparent 50%)" }} />
        <div className="wrap" style={{ position: "relative" }}>
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1.25rem" }}>
            <div className="rule-teal" style={{ marginBottom: 0, backgroundColor: "#4DBCCF" }} />
            <p className="eyebrow" style={{ marginBottom: 0, color: "#4DBCCF" }}>Reach Out</p>
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
            Whether you manage estates, fund community enterprise, or need a job, we want to hear from you.
          </h1>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(255,255,255,0.7)", maxWidth: "520px" }}>
            We respond to all enquiries within one business day.
          </p>
        </div>
      </section>

      {/* ── AUDIENCE CARDS ── */}
      <section style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
        <div className="wrap" style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}>
          <div className="three-col-cards">
            {audienceCards.map((card) => (
              <div
                key={card.title}
                style={{
                  padding: "1.5rem",
                  backgroundColor: "#FAF9F7",
                  border: "1px solid #E2E8F0",
                  borderRadius: "16px",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ flexShrink: 0, color: "#0B7A8A" }}><card.Icon size={22} strokeWidth={1.6} /></div>
                <div>
                  <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#0F1923", marginBottom: "0.4rem" }}>{card.title}</h3>
                  <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "#4B5563", margin: 0 }}>{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + DETAILS ── */}
      <section style={{ backgroundColor: "#FAF9F7" }}>
        <div className="wrap section">
          <div className="contact-grid">
            {/* Left: contact info + image */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "20px",
                  padding: "1.75rem",
                }}
              >
                <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#0F1923", marginBottom: "1.5rem" }}>
                  Contact Details
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {contactItems.map((c) => (
                    <div key={c.label} style={{ display: "flex", gap: "0.9rem", alignItems: "flex-start" }}>
                      <div
                        style={{
                          color: "#0B7A8A",
                          flexShrink: 0,
                          width: "36px",
                          height: "36px",
                          backgroundColor: "#EBF6F8",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {c.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7280", fontWeight: 600, marginBottom: "0.15rem" }}>
                          {c.label}
                        </div>
                        {c.href ? (
                          <a href={c.href} style={{ fontSize: "0.875rem", color: "#0F1923", textDecoration: "none", wordBreak: "break-all" }}>
                            {c.value}
                          </a>
                        ) : (
                          <span style={{ fontSize: "0.875rem", color: "#0F1923" }}>{c.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div
                style={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  aspectRatio: "3/4",
                  boxShadow: "0 12px 32px rgba(15,25,35,0.12)",
                }}
              >
                <Image
                  src="/IMG-20250526-WA0017.jpg"
                  alt="ECO Solutions team ready for deployment"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>

              {/* Funder callout */}
              <div
                style={{
                  backgroundColor: "#0D1F2D",
                  padding: "1.5rem",
                  borderRadius: "16px",
                  border: "1px solid rgba(77,188,207,0.2)",
                }}
              >
                <p className="eyebrow" style={{ color: "#4DBCCF", marginBottom: "0.6rem" }}>For funders</p>
                <p style={{ fontSize: "0.83rem", lineHeight: 1.75, color: "rgba(255,255,255,0.72)", margin: 0 }}>
                  We are actively seeking grant funding and impact investment to
                  scale our employment and training programmes. Select
                  &ldquo;Grant or funding enquiry&rdquo; in the form so we can
                  route your message correctly.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "24px",
                  padding: "2.5rem",
                  boxShadow: "0 8px 32px rgba(15,25,35,0.06)",
                }}
              >
                <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0F1923", marginBottom: "0.4rem" }}>
                  Send a Message
                </h2>
                <p style={{ fontSize: "0.85rem", color: "#6B7280", marginBottom: "2rem" }}>
                  We respond to all enquiries within one business day.
                </p>

                {status === "success" ? (
                  <div
                    style={{
                      backgroundColor: "#EBF6F8",
                      border: "1px solid #0B7A8A",
                      borderRadius: "16px",
                      padding: "2.5rem",
                      textAlign: "center",
                    }}
                  >
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0B7A8A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto 1rem" }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <p style={{ fontWeight: 700, color: "#0F1923", marginBottom: "0.3rem", fontSize: "1rem" }}>Message sent</p>
                    <p style={{ fontSize: "0.875rem", color: "#4B5563", margin: 0 }}>We will be in touch within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                    <div className="form-name-row">
                      <div>
                        <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#374151", marginBottom: "0.4rem" }}>Full Name *</label>
                        <input name="name" value={form.name} onChange={onChange} required placeholder="Your full name" style={inputStyle}
                          onFocus={(e) => (e.target.style.borderColor = "#0B7A8A")}
                          onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")} />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#374151", marginBottom: "0.4rem" }}>Phone</label>
                        <input type="tel" name="phone" value={form.phone} onChange={onChange} placeholder="e.g. 0712 345 678" style={inputStyle}
                          onFocus={(e) => (e.target.style.borderColor = "#0B7A8A")}
                          onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")} />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#374151", marginBottom: "0.4rem" }}>Email *</label>
                      <input type="email" name="email" value={form.email} onChange={onChange} required placeholder="your@email.com" style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "#0B7A8A")}
                        onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")} />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#374151", marginBottom: "0.4rem" }}>Type of Enquiry *</label>
                      <select name="enquiryType" value={form.enquiryType} onChange={onChange} required style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                        onFocus={(e) => (e.target.style.borderColor = "#0B7A8A")}
                        onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}>
                        <option value="">Select enquiry type</option>
                        <option value="service">Service contract enquiry</option>
                        <option value="quote">Request a quote</option>
                        <option value="grant">Grant or funding enquiry</option>
                        <option value="partnership">Partnership or collaboration</option>
                        <option value="employment">Employment opportunity</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {!isPartnership && (
                      <div>
                        <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#374151", marginBottom: "0.4rem" }}>Service Required</label>
                        <select name="service" value={form.service} onChange={onChange} style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                          onFocus={(e) => (e.target.style.borderColor = "#0B7A8A")}
                          onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}>
                          <option value="">Select a service (optional)</option>
                          <option value="apartment-cleaning">Apartment Cleaning</option>
                          <option value="grounds-maintenance">Grounds Maintenance</option>
                          <option value="waste-management">Waste Management</option>
                          <option value="building-maintenance">Building Maintenance</option>
                          <option value="facility-services">Integrated Facility Services</option>
                          <option value="specialized-cleaning">Specialized Cleaning</option>
                          <option value="not-sure">Not sure yet</option>
                        </select>
                      </div>
                    )}

                    {isPartnership && (
                      <div
                        style={{
                          backgroundColor: "#EBF6F8",
                          borderLeft: "3px solid #0B7A8A",
                          padding: "0.85rem 1rem",
                          borderRadius: "0 10px 10px 0",
                        }}
                      >
                        <p style={{ fontSize: "0.82rem", lineHeight: 1.65, color: "#0F1923", margin: 0 }}>
                          Please include details of your organisation and the type of funding or collaboration you are exploring.
                        </p>
                      </div>
                    )}

                    <div>
                      <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#374151", marginBottom: "0.4rem" }}>Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={onChange}
                        required
                        rows={5}
                        placeholder={isPartnership ? "Tell us about your organisation and what you have in mind..." : "Tell us about your property, location, and what you need..."}
                        style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                        onFocus={(e) => (e.target.style.borderColor = "#0B7A8A")}
                        onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      style={{
                        backgroundColor: "#0B7A8A",
                        color: "#FFFFFF",
                        padding: "0.85rem 1.85rem",
                        borderRadius: "10px",
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        border: "none",
                        cursor: status === "submitting" ? "not-allowed" : "pointer",
                        opacity: status === "submitting" ? 0.7 : 1,
                        fontFamily: "inherit",
                        letterSpacing: "0.03em",
                        alignSelf: "flex-start",
                        transition: "background-color 0.2s",
                      }}
                    >
                      {status === "submitting" ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
