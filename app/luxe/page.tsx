import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, PRODUCTS, REVIEWS, SERVICE_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Custom Window Treatments Northern Idaho | Free In-Home Consultation",
  description:
    "Luxe Window Works — nearly 20 years of custom window treatment installation in Northern Idaho. Cellular shades, solar shades, shutters, and motorization. Free in-home consultation.",
};

const STAR = "★";

export default function LuxeHomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
        color: "#ffffff",
        padding: "6rem 0 5rem",
      }}>
        <div className="luxe-container">
          <p className="luxe-badge" style={{ color: "#9ca3af" }}>
            Northern Idaho&apos;s Window Treatment Specialists
          </p>
          <h1 className="luxe-h1" style={{ color: "#ffffff", maxWidth: "700px", marginBottom: "1.5rem" }}>
            Custom Window Treatments.<br />
            <span style={{ color: "#e5e7eb" }}>Installed Right.</span>
          </h1>
          <p className="luxe-lead" style={{ color: "#9ca3af", maxWidth: "560px", marginBottom: "2.5rem" }}>
            Nearly 20 years of expert installation across Coeur d&apos;Alene, Post Falls, Hayden, Rathdrum, and Sandpoint.
            Lifetime installation guarantee on every job.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <Link href="/luxe/contact" className="luxe-btn-primary">
              Book Free In-Home Consultation
            </Link>
            <a href={BUSINESS.phoneHref} style={{ color: "#d1d5db", textDecoration: "none", fontSize: "0.9rem", fontWeight: "500" }}>
              Call {BUSINESS.phone}
            </a>
          </div>
          {/* Social proof */}
          <div style={{ marginTop: "3rem", display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: "1.75rem", fontWeight: "700", color: "#ffffff" }}>
                {STAR}{STAR}{STAR}{STAR}{STAR}
              </div>
              <div style={{ fontSize: "0.75rem", color: "#6b7280", marginTop: "0.25rem" }}>
                {BUSINESS.google.reviewCount} Google Reviews
              </div>
            </div>
            <div>
              <div style={{ fontSize: "1.75rem", fontWeight: "700", color: "#ffffff" }}>
                20 yrs
              </div>
              <div style={{ fontSize: "0.75rem", color: "#6b7280", marginTop: "0.25rem" }}>
                Installation Experience
              </div>
            </div>
            <div>
              <div style={{ fontSize: "1rem", fontWeight: "700", color: "#ffffff", paddingTop: "0.4rem" }}>
                Lifetime Guarantee
              </div>
              <div style={{ fontSize: "0.75rem", color: "#6b7280", marginTop: "0.25rem" }}>
                On Every Installation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee bar */}
      <div className="luxe-guarantee-bar">
        {BUSINESS.guarantee} &nbsp;·&nbsp; Free In-Home Consultation &nbsp;·&nbsp; Brands: Alta, Norman, Lafayette
      </div>

      {/* Products */}
      <section className="luxe-section">
        <div className="luxe-container">
          <p className="luxe-badge">What We Install</p>
          <h2 className="luxe-h2" style={{ marginBottom: "0.75rem" }}>
            Window Treatments for Every Room
          </h2>
          <p className="luxe-body" style={{ maxWidth: "560px", marginBottom: "3rem" }}>
            From energy-saving cellular shades to motorized smart shades — we carry Alta, Norman, and Lafayette,
            three of the most respected brands in the industry.
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}>
            {PRODUCTS.map((product) => (
              <Link
                key={product.slug}
                href={`/luxe/products/${product.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div className="luxe-card" style={{ height: "100%" }}>
                  <h3 className="luxe-h3">{product.name}</h3>
                  <p className="luxe-body" style={{ marginBottom: "1rem" }}>
                    {product.shortDescription}
                  </p>
                  <span style={{
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    color: "#1a1a1a",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                  }}>
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Luxe */}
      <section style={{ background: "#f9fafb", padding: "5rem 0", borderTop: "1px solid #e5e7eb" }}>
        <div className="luxe-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div>
              <p className="luxe-badge">Why Luxe Window Works</p>
              <h2 className="luxe-h2" style={{ marginBottom: "1.5rem" }}>
                The difference experience makes.
              </h2>
              <div className="luxe-divider" />
              <p className="luxe-body" style={{ marginBottom: "1.25rem" }}>
                Most window treatment companies send a salesperson who also installs.
                Mark has nearly two decades of hands-on installation experience — not sales
                experience. He knows what works in Northern Idaho homes, what doesn&apos;t,
                and why precision measurement matters more than most people realize.
              </p>
              <p className="luxe-body" style={{ marginBottom: "2rem" }}>
                Every consultation is free and pressure-free. Mark brings samples to your home,
                assesses the actual conditions of your windows, and gives you honest recommendations
                — backed by a lifetime installation guarantee.
              </p>
              <Link href="/luxe/contact" className="luxe-btn-primary">
                Schedule a Free Consultation
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { title: "Nearly 20 Years of Experience", body: "Installed in hundreds of Northern Idaho homes, from historic Coeur d'Alene bungalows to new construction in Post Falls and Rathdrum." },
                { title: "Lifetime Installation Guarantee", body: "If anything we install fails due to workmanship, we fix it. No conditions, no expiration." },
                { title: "Free In-Home Consultation", body: "Mark comes to you with samples, takes precise measurements, and gives honest recommendations without any sales pressure." },
                { title: "Alta, Norman & Lafayette Brands", body: "Three of the most respected names in the window treatment industry — not the brands you find at big-box stores." },
              ].map((item) => (
                <div key={item.title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: "1.5rem", height: "1.5rem", background: "#1a1a1a", borderRadius: "50%", flexShrink: 0, marginTop: "0.2rem" }} />
                  <div>
                    <h4 style={{ fontWeight: "700", fontSize: "0.9375rem", color: "#1a1a1a", marginBottom: "0.25rem" }}>{item.title}</h4>
                    <p className="luxe-body" style={{ fontSize: "0.875rem" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="luxe-section">
        <div className="luxe-container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="luxe-badge">Client Reviews</p>
            <h2 className="luxe-h2">
              {BUSINESS.google.rating} stars on Google
            </h2>
            <p className="luxe-body" style={{ marginTop: "0.5rem" }}>
              {BUSINESS.google.reviewCount} verified reviews
            </p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}>
            {REVIEWS.map((review, i) => (
              <div key={i} className="luxe-card">
                <div style={{ fontSize: "1rem", color: "#f59e0b", marginBottom: "0.75rem" }}>
                  {STAR.repeat(review.rating)}
                </div>
                <p className="luxe-body" style={{ fontStyle: "italic", marginBottom: "1rem" }}>
                  &ldquo;{review.text}&rdquo;
                </p>
                <p style={{ fontSize: "0.8rem", fontWeight: "600", color: "#6b7280" }}>
                  — {review.author}
                </p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <a
              href={BUSINESS.google.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.875rem", color: "#374151", fontWeight: "500" }}
            >
              Read all reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section style={{ background: "#f9fafb", padding: "5rem 0", borderTop: "1px solid #e5e7eb" }}>
        <div className="luxe-container">
          <p className="luxe-badge">Where We Work</p>
          <h2 className="luxe-h2" style={{ marginBottom: "0.75rem" }}>
            Serving Northern Idaho
          </h2>
          <p className="luxe-body" style={{ maxWidth: "500px", marginBottom: "2.5rem" }}>
            Based in Post Falls, Mark serves the entire Northern Idaho corridor —
            no travel fee for the communities below.
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1rem",
          }}>
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/luxe/areas/${area.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div className="luxe-card" style={{ textAlign: "center" }}>
                  <h3 style={{ fontWeight: "700", fontSize: "1rem", color: "#1a1a1a", marginBottom: "0.5rem" }}>
                    {area.name}
                  </h3>
                  <p style={{ fontSize: "0.8rem", color: "#6b7280", lineHeight: "1.5" }}>
                    {area.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: "#111827",
        color: "#ffffff",
        padding: "5rem 0",
        textAlign: "center",
      }}>
        <div className="luxe-container">
          <p className="luxe-badge" style={{ color: "#6b7280" }}>Get Started</p>
          <h2 className="luxe-h2" style={{ color: "#ffffff", marginBottom: "1rem" }}>
            Ready to transform your windows?
          </h2>
          <p className="luxe-body" style={{ color: "#9ca3af", maxWidth: "480px", margin: "0 auto 2.5rem" }}>
            Schedule a free, no-pressure in-home consultation. Mark brings samples,
            measures your windows precisely, and gives you straight talk about what will work best.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/luxe/contact" className="luxe-btn-primary">
              Book Free Consultation
            </Link>
            <a href={BUSINESS.phoneHref} className="luxe-btn-secondary" style={{ borderColor: "#374151", color: "#d1d5db" }}>
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
