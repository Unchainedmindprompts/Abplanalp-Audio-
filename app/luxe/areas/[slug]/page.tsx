import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { areaPages } from "@/lib/area-data";
import { BUSINESS, SERVICE_AREAS, PRODUCTS } from "@/lib/constants";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return SERVICE_AREAS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = areaPages[params.slug];
  if (!area) return {};
  return {
    title: area.metaTitle,
    description: area.metaDescription,
  };
}

export default function LuxeAreaPage({ params }: Props) {
  const area = areaPages[params.slug];
  if (!area) notFound();

  const otherAreas = SERVICE_AREAS.filter((a) => a.slug !== params.slug);

  return (
    <>
      {/* Hero */}
      <section style={{
        background: "#111827",
        color: "#ffffff",
        padding: "4rem 0 3.5rem",
      }}>
        <div className="luxe-container">
          <p className="luxe-badge" style={{ color: "#6b7280" }}>
            <Link href="/luxe" style={{ color: "#6b7280", textDecoration: "none" }}>Home</Link>
            {" / Service Areas / "}
            {area.name}
          </p>
          <h1 className="luxe-h1" style={{ color: "#ffffff", maxWidth: "700px", marginBottom: "1rem" }}>
            {area.headline}
          </h1>
          <p className="luxe-lead" style={{ color: "#9ca3af", maxWidth: "560px", marginBottom: "2rem" }}>
            {area.subheadline}
          </p>
          <Link href="/luxe/contact" className="luxe-btn-primary">
            Book Free In-Home Consultation
          </Link>
        </div>
      </section>

      {/* Main content */}
      <section className="luxe-section">
        <div className="luxe-container">
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "5rem", alignItems: "start" }}>

            {/* Left */}
            <div>
              {/* Description */}
              <div style={{ marginBottom: "2.5rem" }}>
                <p className="luxe-body" style={{ fontSize: "1rem", lineHeight: "1.8" }}>{area.description}</p>
              </div>

              {/* Neighborhoods */}
              <div style={{ marginBottom: "2.5rem" }}>
                <p className="luxe-badge">Neighborhoods We Serve</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {area.neighborhoods.map((n) => (
                    <span key={n} style={{
                      background: "#f9fafb",
                      border: "1px solid #e5e7eb",
                      borderRadius: "4px",
                      padding: "0.35rem 0.75rem",
                      fontSize: "0.8125rem",
                      color: "#374151",
                    }}>
                      {n}
                    </span>
                  ))}
                </div>
              </div>

              {/* Housing Types */}
              <div style={{ marginBottom: "2.5rem" }}>
                <p className="luxe-badge">Housing Types</p>
                <p className="luxe-body">{area.housingTypes}</p>
              </div>

              {/* Climate */}
              <div style={{
                background: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderLeft: "4px solid #1a1a1a",
                borderRadius: "4px",
                padding: "1.75rem",
                marginBottom: "2.5rem",
              }}>
                <p style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#6b7280", fontWeight: "600", marginBottom: "0.75rem" }}>
                  Local Climate Considerations
                </p>
                <p className="luxe-body">{area.climateConsiderations}</p>
              </div>

              {/* Products */}
              <div>
                <h2 className="luxe-h2" style={{ marginBottom: "1.5rem" }}>
                  Popular Products for {area.name}
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  {PRODUCTS.map((product) => (
                    <Link key={product.slug} href={`/luxe/products/${product.slug}`} style={{ textDecoration: "none" }}>
                      <div className="luxe-card" style={{ padding: "1.25rem" }}>
                        <h4 style={{ fontWeight: "700", fontSize: "0.9rem", color: "#1a1a1a", marginBottom: "0.35rem" }}>
                          {product.name}
                        </h4>
                        <p style={{ fontSize: "0.8rem", color: "#4b5563", lineHeight: "1.5" }}>
                          {product.tagline}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: sidebar */}
            <div style={{ position: "sticky", top: "5rem" }}>
              {/* CTA Card */}
              <div className="luxe-card" style={{ marginBottom: "1.5rem" }}>
                <h3 className="luxe-h3" style={{ marginBottom: "0.5rem" }}>
                  Serving {area.name}
                </h3>
                <p className="luxe-body" style={{ fontSize: "0.875rem", marginBottom: "1.5rem" }}>
                  {area.localCTA}
                </p>
                <Link href="/luxe/contact" className="luxe-btn-primary" style={{ display: "block", textAlign: "center" }}>
                  Book Free Consultation
                </Link>
                <a href={BUSINESS.phoneHref} style={{
                  display: "block",
                  textAlign: "center",
                  marginTop: "0.75rem",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: "#374151",
                  textDecoration: "none",
                }}>
                  Call {BUSINESS.phone}
                </a>
              </div>

              {/* Credentials */}
              <div style={{
                background: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                padding: "1.5rem",
                marginBottom: "1.5rem",
              }}>
                <h4 style={{ fontWeight: "700", fontSize: "0.875rem", color: "#1a1a1a", marginBottom: "1rem" }}>
                  Why Choose Luxe
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {[
                    `${BUSINESS.experience} of installation experience`,
                    BUSINESS.guarantee,
                    "Free in-home consultation",
                    "Alta, Norman & Lafayette brands",
                    "Local to Northern Idaho",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", gap: "0.5rem", fontSize: "0.8125rem", color: "#374151" }}>
                      <span style={{ color: "#1a1a1a", fontWeight: "700", flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Other Areas */}
              <div style={{
                background: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                padding: "1.5rem",
              }}>
                <h4 style={{ fontWeight: "700", fontSize: "0.875rem", color: "#1a1a1a", marginBottom: "1rem" }}>
                  Other Service Areas
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {otherAreas.map((a) => (
                    <li key={a.slug}>
                      <Link href={`/luxe/areas/${a.slug}`} style={{
                        fontSize: "0.875rem",
                        color: "#374151",
                        textDecoration: "none",
                        fontWeight: "500",
                      }}>
                        {a.name} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: "#111827",
        color: "#ffffff",
        padding: "4rem 0",
        textAlign: "center",
      }}>
        <div className="luxe-container">
          <h2 className="luxe-h2" style={{ color: "#ffffff", marginBottom: "1rem" }}>
            Ready to get started in {area.name}?
          </h2>
          <p className="luxe-body" style={{ color: "#9ca3af", maxWidth: "480px", margin: "0 auto 2rem" }}>
            {area.localCTA}
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
