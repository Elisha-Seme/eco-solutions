"use client";

import { ReactNode } from "react";
import Link from "next/link";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  eyebrow?: string;
};

export default function ServiceCard({ icon, title, description, href, eyebrow }: ServiceCardProps) {
  return (
    <Link href={href} className="service-card-link">
      <div style={{ color: "#0B7A8A", marginBottom: "1.1rem" }}>
        {icon}
      </div>
      {eyebrow ? (
        <p
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontWeight: 600,
            color: "#0B7A8A",
            marginBottom: "0.75rem",
          }}
        >
          {eyebrow}
        </p>
      ) : null}
      <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0F1923", marginBottom: "0.6rem", letterSpacing: "-0.01em" }}>
        {title}
      </h3>
      <p style={{ fontSize: "0.85rem", lineHeight: 1.75, color: "#4B5563", marginBottom: "1rem" }}>
        {description}
      </p>
      <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#0B7A8A" }}>
        Learn more
      </span>
    </Link>
  );
}
