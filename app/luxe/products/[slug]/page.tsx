import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { productPages } from "@/lib/product-data";
import { BUSINESS, PRODUCTS } from "@/lib/constants";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = productPages[params.slug];
  if (!product) return {};
  return {
    title: product.metaTitle,
    description: product.metaDescription,
  };
}

export default function LuxeProductPage({ params }: Props) {
  const product = productPages[params.slug];
  if (!product) notFound();

  const otherProducts = PRODUCTS.filter((p) => p.slug !== params.slug).slice(0, 3);

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
            {" / "}
            <Link href="/luxe/products/cellular-shades" style={{ color: "#6b7280", textDecoration: "none" }}>Products</Link>
            {" / "}
            {product.name}
          </p>
          <h1 className="luxe-h1" style={{ color: "#ffffff", maxWidth: "700px", marginBottom: "1rem" }}>
            {product.headline}
          </h1>
          <p className="luxe-lead" style={{ color: "#9ca3af", maxWidth: "560px", marginBottom: "2rem" }}>
            {product.subheadline}
          </p>
          <Link href="/luxe/contact" className="luxe-btn-primary">
            Book Free Consultation
          </Link>
        </div>
      </section>

      {/* Main content */}
      <section className="luxe-section">
        <div className="luxe-container">
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "5rem", alignItems: "start" }}>

            {/* Left: content */}
            <div>
              {/* Problem */}
              <div style={{ marginBottom: "2.5rem" }}>
                <p className="luxe-badge">The Problem</p>
                <p className="luxe-body">{product.problem}</p>
              </div>

              {/* Solution */}
              <div style={{ marginBottom: "2.5rem" }}>
                <p className="luxe-badge">The Solution</p>
                <p className="luxe-body">{product.solution}</p>
              </div>

              {/* Expert Insight */}
              <div style={{
                background: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderLeft: "4px solid #1a1a1a",
                borderRadius: "4px",
                padding: "1.75rem",
                marginBottom: "2.5rem",
              }}>
                <p style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#6b7280", fontWeight: "600", marginBottom: "0.75rem" }}>
                  Mark&apos;s Expert Insight
                </p>
                <p className="luxe-body" style={{ fontStyle: "italic" }}>
                  &ldquo;{product.expertInsight}&rdquo;
                </p>
              </div>

              {/* Local Context */}
              <div style={{ marginBottom: "2.5rem" }}>
                <p className="luxe-badge">In Northern Idaho</p>
                <p className="luxe-body">{product.localContext}</p>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="luxe-h2" style={{ marginBottom: "1.5rem" }}>
                  Frequently Asked Questions
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {product.faqs.map((faq, i) => (
                    <div key={i} style={{
                      padding: "1.5rem",
                      background: "#f9fafb",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                    }}>
                      <h3 style={{ fontWeight: "700", fontSize: "0.9375rem", color: "#1a1a1a", marginBottom: "0.75rem" }}>
                        {faq.question}
                      </h3>
                      <p className="luxe-body" style={{ fontSize: "0.875rem" }}>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: sidebar */}
            <div style={{ position: "sticky", top: "5rem" }}>
              {/* CTA Card */}
              <div className="luxe-card" style={{ marginBottom: "1.5rem" }}>
                <h3 className="luxe-h3" style={{ marginBottom: "0.5rem" }}>
                  Free In-Home Consultation
                </h3>
                <p className="luxe-body" style={{ fontSize: "0.875rem", marginBottom: "1.5rem" }}>
                  Mark comes to you with samples. No pressure, no obligation.
                </p>
                <Link href="/luxe/contact" className="luxe-btn-primary" style={{ display: "block", textAlign: "center" }}>
                  Schedule Now
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

              {/* Features */}
              <div style={{
                background: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                padding: "1.5rem",
                marginBottom: "1.5rem",
              }}>
                <h4 style={{ fontWeight: "700", fontSize: "0.875rem", color: "#1a1a1a", marginBottom: "1rem" }}>
                  Key Features
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {product.features.map((f, i) => (
                    <li key={i} style={{ display: "flex", gap: "0.5rem", fontSize: "0.8125rem", color: "#374151" }}>
                      <span style={{ color: "#1a1a1a", fontWeight: "700", flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal For */}
              <div style={{
                background: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                padding: "1.5rem",
              }}>
                <h4 style={{ fontWeight: "700", fontSize: "0.875rem", color: "#1a1a1a", marginBottom: "1rem" }}>
                  Ideal For
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {product.idealFor.map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: "0.5rem", fontSize: "0.8125rem", color: "#374151" }}>
                      <span style={{ color: "#1a1a1a", fontWeight: "700", flexShrink: 0 }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Products */}
      <section style={{ background: "#f9fafb", padding: "4rem 0", borderTop: "1px solid #e5e7eb" }}>
        <div className="luxe-container">
          <h2 className="luxe-h2" style={{ marginBottom: "2rem" }}>
            Other Products
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {otherProducts.map((p) => (
              <Link key={p.slug} href={`/luxe/products/${p.slug}`} style={{ textDecoration: "none" }}>
                <div className="luxe-card">
                  <h3 className="luxe-h3">{p.name}</h3>
                  <p className="luxe-body" style={{ fontSize: "0.875rem", marginBottom: "0.75rem" }}>
                    {p.shortDescription}
                  </p>
                  <span style={{ fontSize: "0.8rem", fontWeight: "600", color: "#1a1a1a", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
