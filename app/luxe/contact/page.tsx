import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Free In-Home Consultation | Contact Luxe Window Works",
  description:
    "Book your free in-home window treatment consultation with Luxe Window Works. Serving Coeur d'Alene, Post Falls, Hayden, Rathdrum, and Sandpoint. Call 208-660-8643.",
};

const HOURS = BUSINESS.hours;

export default function LuxeContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: "#f9fafb",
        borderBottom: "1px solid #e5e7eb",
        padding: "4rem 0 3rem",
      }}>
        <div className="luxe-container">
          <p className="luxe-badge">Contact</p>
          <h1 className="luxe-h1" style={{ marginBottom: "1rem" }}>
            Book Your Free Consultation
          </h1>
          <p className="luxe-lead" style={{ maxWidth: "560px" }}>
            Mark comes to your home, brings samples, takes precise measurements,
            and gives honest recommendations — no pressure, no sales tactics.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="luxe-section">
        <div className="luxe-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>

            {/* Left: Contact Info */}
            <div>
              <h2 className="luxe-h2" style={{ marginBottom: "2rem" }}>
                Get in Touch
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}>
                <div>
                  <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6b7280", fontWeight: "600", marginBottom: "0.35rem" }}>
                    Phone
                  </p>
                  <a href={BUSINESS.phoneHref} style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "#1a1a1a",
                    textDecoration: "none",
                  }}>
                    {BUSINESS.phone}
                  </a>
                  <p style={{ fontSize: "0.8rem", color: "#6b7280", marginTop: "0.25rem" }}>
                    Call or text — Mark responds quickly
                  </p>
                </div>

                <div>
                  <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6b7280", fontWeight: "600", marginBottom: "0.35rem" }}>
                    Email
                  </p>
                  <a href={`mailto:${BUSINESS.email}`} style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#1a1a1a",
                    textDecoration: "none",
                  }}>
                    {BUSINESS.email}
                  </a>
                </div>

                <div>
                  <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6b7280", fontWeight: "600", marginBottom: "0.35rem" }}>
                    Location
                  </p>
                  <p style={{ fontSize: "0.9375rem", color: "#1a1a1a", fontWeight: "500" }}>
                    {BUSINESS.address.full}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "#6b7280", marginTop: "0.25rem" }}>
                    In-home consultations throughout Northern Idaho
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div>
                <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6b7280", fontWeight: "600", marginBottom: "1rem" }}>
                  Business Hours
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {HOURS.map(({ day, open, close }) => (
                    <div key={day} style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0.4rem 0",
                      borderBottom: "1px solid #f3f4f6",
                      fontSize: "0.875rem",
                    }}>
                      <span style={{ fontWeight: "500", color: "#374151" }}>{day}</span>
                      <span style={{ color: open ? "#374151" : "#9ca3af" }}>
                        {open ? `${open} – ${close}` : "Closed"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Review links */}
              <div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid #e5e7eb" }}>
                <p style={{ fontSize: "0.8rem", color: "#6b7280", marginBottom: "0.75rem" }}>
                  Read our reviews:
                </p>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <a href={BUSINESS.google.mapsUrl} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: "0.8rem", fontWeight: "600", color: "#1a1a1a" }}>
                    Google Reviews →
                  </a>
                  <a href={BUSINESS.yelp.url} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: "0.8rem", fontWeight: "600", color: "#1a1a1a" }}>
                    Yelp →
                  </a>
                  <a href={BUSINESS.bbb.url} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: "0.8rem", fontWeight: "600", color: "#1a1a1a" }}>
                    BBB →
                  </a>
                </div>
              </div>
            </div>

            {/* Right: What to Expect */}
            <div>
              <div className="luxe-card" style={{ padding: "2.5rem" }}>
                <h3 className="luxe-h3" style={{ marginBottom: "1.5rem" }}>
                  What to Expect at Your Consultation
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {[
                    { step: "01", title: "Mark Comes to You", body: "No showroom, no commute. Mark visits your home at a time that works for you — evenings and weekends available." },
                    { step: "02", title: "Samples in Your Actual Light", body: "He brings product samples from Alta, Norman, and Lafayette so you can see fabrics and finishes in the real lighting conditions of your home." },
                    { step: "03", title: "Precise Measurements", body: "Every window is measured carefully, accounting for frames that may not be perfectly square — especially important in Northern Idaho homes with freeze-thaw settling." },
                    { step: "04", title: "Honest Recommendations", body: "Mark tells you what will work best for your windows, your budget, and your goals — not what has the highest margin." },
                    { step: "05", title: "No Pressure", body: "There&apos;s no obligation to buy. The consultation is genuinely free. If you decide to move forward, Mark handles everything from order to installation." },
                  ].map((item) => (
                    <div key={item.step} style={{ display: "flex", gap: "1rem" }}>
                      <div style={{
                        width: "2rem",
                        height: "2rem",
                        background: "#1a1a1a",
                        color: "#ffffff",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.65rem",
                        fontWeight: "700",
                        flexShrink: 0,
                      }}>
                        {item.step}
                      </div>
                      <div>
                        <h4 style={{ fontWeight: "700", fontSize: "0.9rem", color: "#1a1a1a", marginBottom: "0.25rem" }}>
                          {item.title}
                        </h4>
                        <p style={{ fontSize: "0.85rem", color: "#4b5563", lineHeight: "1.6" }}>
                          {item.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: "1.5rem", padding: "1.5rem", background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "8px" }}>
                <p style={{ fontSize: "0.875rem", fontWeight: "700", color: "#1a1a1a", marginBottom: "0.5rem" }}>
                  {BUSINESS.guarantee}
                </p>
                <p style={{ fontSize: "0.8rem", color: "#6b7280", lineHeight: "1.6" }}>
                  If anything we install fails due to workmanship, we come back and fix it.
                  No fine print, no expiration date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas quick reference */}
      <section style={{ background: "#f9fafb", padding: "3rem 0", borderTop: "1px solid #e5e7eb" }}>
        <div className="luxe-container" style={{ textAlign: "center" }}>
          <p style={{ fontSize: "0.85rem", color: "#6b7280", marginBottom: "0.5rem" }}>
            We serve all of Northern Idaho including:
          </p>
          <p style={{ fontWeight: "600", color: "#1a1a1a", fontSize: "0.9375rem" }}>
            Coeur d&apos;Alene · Post Falls · Hayden · Rathdrum · Sandpoint · and surrounding areas
          </p>
        </div>
      </section>
    </>
  );
}
