import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://luxewindowworks.com"),
  title: {
    default: "Luxe Window Works | Custom Window Treatments Northern Idaho",
    template: "%s | Luxe Window Works",
  },
  description:
    "Custom window treatments for Northern Idaho homes. Nearly 20 years of expert installation. Serving Coeur d'Alene, Post Falls, Hayden, Rathdrum, and Sandpoint.",
};

function LuxeNav() {
  return (
    <header className="luxe-header">
      <div className="luxe-container">
        <div className="luxe-nav">
          <a href="/luxe" className="luxe-logo">
            <span className="luxe-logo-main">Luxe Window Works</span>
            <span className="luxe-logo-sub">Northern Idaho</span>
          </a>
          <nav className="luxe-nav-links">
            <a href="/luxe" className="luxe-nav-link">Home</a>
            <a href="/luxe/products/cellular-shades" className="luxe-nav-link">Products</a>
            <a href="/luxe/areas/coeur-d-alene" className="luxe-nav-link">Service Areas</a>
            <a href="/luxe/contact" className="luxe-nav-cta">Free Consultation</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

function LuxeFooter() {
  return (
    <footer className="luxe-footer">
      <div className="luxe-container">
        <div className="luxe-footer-grid">
          <div>
            <div className="luxe-footer-logo">Luxe Window Works</div>
            <p className="luxe-footer-tagline">Custom window treatments for Northern Idaho homes.</p>
            <p className="luxe-footer-address">{BUSINESS.address.full}</p>
          </div>
          <div>
            <h4 className="luxe-footer-heading">Products</h4>
            <ul className="luxe-footer-links">
              <li><a href="/luxe/products/cellular-shades">Cellular Shades</a></li>
              <li><a href="/luxe/products/solar-shades">Solar Shades</a></li>
              <li><a href="/luxe/products/roller-shades">Roller Shades</a></li>
              <li><a href="/luxe/products/shutters">Shutters</a></li>
              <li><a href="/luxe/products/motorization">Motorization</a></li>
            </ul>
          </div>
          <div>
            <h4 className="luxe-footer-heading">Service Areas</h4>
            <ul className="luxe-footer-links">
              <li><a href="/luxe/areas/coeur-d-alene">Coeur d&apos;Alene</a></li>
              <li><a href="/luxe/areas/post-falls">Post Falls</a></li>
              <li><a href="/luxe/areas/hayden">Hayden</a></li>
              <li><a href="/luxe/areas/rathdrum">Rathdrum</a></li>
              <li><a href="/luxe/areas/sandpoint">Sandpoint</a></li>
            </ul>
          </div>
          <div>
            <h4 className="luxe-footer-heading">Contact</h4>
            <p className="luxe-footer-contact-item">
              <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>
            </p>
            <p className="luxe-footer-contact-item">
              <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
            </p>
            <a href="/luxe/contact" className="luxe-btn-primary" style={{ marginTop: "1rem", display: "inline-block" }}>
              Book Free Consultation
            </a>
          </div>
        </div>
        <div className="luxe-footer-bottom">
          <p>© {new Date().getFullYear()} Luxe Window Works LLC. All rights reserved.</p>
          <p>{BUSINESS.guarantee}</p>
        </div>
      </div>
    </footer>
  );
}

export default function LuxeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="luxe-site">
      <style>{`
        .luxe-site {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          color: #1a1a1a;
          background: #ffffff;
          min-height: 100vh;
        }
        .luxe-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        /* Header */
        .luxe-header {
          background: #ffffff;
          border-bottom: 1px solid #e5e5e5;
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .luxe-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }
        .luxe-logo {
          text-decoration: none;
          display: flex;
          flex-direction: column;
        }
        .luxe-logo-main {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1a1a1a;
          letter-spacing: -0.02em;
        }
        .luxe-logo-sub {
          font-size: 0.65rem;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .luxe-nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .luxe-nav-link {
          text-decoration: none;
          color: #374151;
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.2s;
        }
        .luxe-nav-link:hover { color: #1a1a1a; }
        .luxe-nav-cta {
          text-decoration: none;
          background: #1a1a1a;
          color: #ffffff;
          padding: 0.5rem 1.25rem;
          border-radius: 4px;
          font-size: 0.85rem;
          font-weight: 600;
          transition: background 0.2s;
        }
        .luxe-nav-cta:hover { background: #374151; }
        /* Buttons */
        .luxe-btn-primary {
          display: inline-block;
          background: #1a1a1a;
          color: #ffffff;
          text-decoration: none;
          padding: 0.75rem 1.75rem;
          border-radius: 4px;
          font-size: 0.9rem;
          font-weight: 600;
          transition: background 0.2s;
        }
        .luxe-btn-primary:hover { background: #374151; }
        .luxe-btn-secondary {
          display: inline-block;
          border: 1.5px solid #1a1a1a;
          color: #1a1a1a;
          text-decoration: none;
          padding: 0.75rem 1.75rem;
          border-radius: 4px;
          font-size: 0.9rem;
          font-weight: 600;
          transition: background 0.2s, color 0.2s;
        }
        .luxe-btn-secondary:hover {
          background: #1a1a1a;
          color: #ffffff;
        }
        /* Footer */
        .luxe-footer {
          background: #111827;
          color: #d1d5db;
          padding: 4rem 0 2rem;
        }
        .luxe-footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 3rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid #374151;
        }
        @media (max-width: 768px) {
          .luxe-footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          .luxe-nav-links {
            display: none;
          }
        }
        .luxe-footer-logo {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.75rem;
        }
        .luxe-footer-tagline {
          font-size: 0.85rem;
          color: #9ca3af;
          margin-bottom: 0.5rem;
        }
        .luxe-footer-address {
          font-size: 0.8rem;
          color: #6b7280;
        }
        .luxe-footer-heading {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #9ca3af;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        .luxe-footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .luxe-footer-links li { margin-bottom: 0.5rem; }
        .luxe-footer-links a {
          text-decoration: none;
          color: #6b7280;
          font-size: 0.875rem;
          transition: color 0.2s;
        }
        .luxe-footer-links a:hover { color: #d1d5db; }
        .luxe-footer-contact-item {
          font-size: 0.875rem;
          color: #9ca3af;
          margin-bottom: 0.35rem;
        }
        .luxe-footer-contact-item a {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.2s;
        }
        .luxe-footer-contact-item a:hover { color: #ffffff; }
        .luxe-footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          font-size: 0.75rem;
          color: #6b7280;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        /* Utility */
        .luxe-section {
          padding: 5rem 0;
        }
        .luxe-section-sm {
          padding: 3rem 0;
        }
        .luxe-badge {
          display: inline-block;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #6b7280;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .luxe-h1 {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #1a1a1a;
        }
        .luxe-h2 {
          font-size: clamp(1.5rem, 3.5vw, 2.5rem);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: #1a1a1a;
        }
        .luxe-h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.5rem;
        }
        .luxe-lead {
          font-size: 1.125rem;
          line-height: 1.7;
          color: #4b5563;
        }
        .luxe-body {
          font-size: 0.9375rem;
          line-height: 1.75;
          color: #4b5563;
        }
        .luxe-divider {
          width: 3rem;
          height: 2px;
          background: #1a1a1a;
          margin: 1.5rem 0;
        }
        .luxe-card {
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 2rem;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .luxe-card:hover {
          border-color: #9ca3af;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
        .luxe-star { color: #f59e0b; }
        .luxe-guarantee-bar {
          background: #f9fafb;
          border-top: 1px solid #e5e7eb;
          border-bottom: 1px solid #e5e7eb;
          padding: 1.25rem 0;
          text-align: center;
          font-size: 0.85rem;
          font-weight: 600;
          color: #374151;
          letter-spacing: 0.02em;
        }
      `}</style>
      <LuxeNav />
      <main>{children}</main>
      <LuxeFooter />
    </div>
  );
}
