import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/craig/PageHero";
import AnimateIn from "@/components/craig/AnimateIn";

export const metadata: Metadata = {
  title: "The Philosophy | Craig Abplanalp — Four Decades. One Pursuit.",
  description:
    "From a landmark proof-of-concept system in the 1990s to Ascendo Immersive Audio today — Craig Abplanalp's philosophy has never wavered. The tools have evolved. The standard hasn't.",
  alternates: {
    canonical: "https://www.craigabplanalp.com/philosophy",
  },
  openGraph: {
    title: "The Philosophy | Craig Abplanalp",
    description:
      "Four decades. One pursuit. The tools have evolved. The standard hasn't.",
    url: "https://www.craigabplanalp.com/philosophy",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Philosophy — Four Decades. One Pursuit. No Shortcuts.",
  "description":
    "Craig Abplanalp's design philosophy traces from a landmark proof-of-concept system in the late 1990s through four decades of reference-level work to his current partnership with Ascendo Immersive Audio.",
  "author": {
    "@type": "Person",
    "name": "Craig Abplanalp",
    "url": "https://www.craigabplanalp.com",
    "jobTitle": "Custom Sales Manager",
    "worksFor": {
      "@type": "Organization",
      "name": "Definitive Audio",
    },
  },
  "publisher": {
    "@type": "Organization",
    "name": "Craig Abplanalp",
    "url": "https://www.craigabplanalp.com",
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.craigabplanalp.com/philosophy",
  },
  "url": "https://www.craigabplanalp.com/philosophy",
  "about": [
    { "@type": "Thing", "name": "Reference Home Theater Design" },
    { "@type": "Thing", "name": "Immersive Audio Philosophy" },
    { "@type": "Thing", "name": "Wilson Audio" },
    { "@type": "Thing", "name": "Mark Levinson" },
    { "@type": "Thing", "name": "Ascendo Immersive Audio" },
    { "@type": "Thing", "name": "Room Acoustics" },
    { "@type": "Thing", "name": "Audio Visual Integration" },
  ],
  "keywords": [
    "reference home theater philosophy",
    "immersive audio design principles",
    "Wilson Audio Grand Slam",
    "Mark Levinson No. 33",
    "Ascendo Immersive Audio",
    "room acoustics and calibration",
    "music and cinema integration",
    "Craig Abplanalp philosophy",
    "Pacific Northwest home theater",
    "reference audio system design",
  ],
  "mentions": [
    {
      "@type": "Product",
      "name": "Wilson Audio Grand Slam",
      "brand": { "@type": "Brand", "name": "Wilson Audio" },
    },
    {
      "@type": "Product",
      "name": "Mark Levinson No. 33 Monoblock",
      "brand": { "@type": "Brand", "name": "Mark Levinson" },
    },
    {
      "@type": "Product",
      "name": "Wilson Audio WATT/Puppy",
      "brand": { "@type": "Brand", "name": "Wilson Audio" },
    },
    {
      "@type": "Organization",
      "name": "Ascendo Immersive Audio",
      "description": "German manufacturer of reference-level immersive audio systems",
    },
    {
      "@type": "Organization",
      "name": "Madrigal Audio Laboratories",
      "description": "Audio manufacturer — home to Mark Levinson, Proceed, and Revel",
    },
    {
      "@type": "Organization",
      "name": "Wisdom Audio",
    },
    {
      "@type": "Organization",
      "name": "Kaleidescape",
    },
    {
      "@type": "Person",
      "name": "Todd Sutherland",
      "jobTitle": "U.S. Importer",
      "worksFor": { "@type": "Organization", "name": "Ascendo Immersive Audio" },
    },
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Craig Abplanalp",
  "url": "https://www.craigabplanalp.com",
  "jobTitle": "Custom Sales Manager",
  "worksFor": {
    "@type": "Organization",
    "name": "Definitive Audio",
    "url": "https://definitive.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bellevue",
      "addressRegion": "WA",
      "addressCountry": "US",
    },
  },
  "description":
    "Reference-level home theater and immersive audio specialist with over 40 years of experience. Known for pioneering the integration of reference music reproduction and reference cinema in a single environment. Current authorized specialist for Ascendo Immersive Audio.",
  "knowsAbout": [
    "Reference home theater design",
    "Immersive audio systems",
    "Room acoustics and calibration",
    "Wilson Audio loudspeakers",
    "Mark Levinson amplification",
    "Ascendo Immersive Audio",
    "Dolby Atmos",
    "Trinnov room correction",
    "Audio visual system integration",
    "Residential lighting design",
  ],
  "telephone": "206.650.9017",
  "email": "craig@craigabplanalp.com",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Craig Abplanalp's design philosophy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Craig Abplanalp's philosophy is built on four principles: physics before marketing (every claim grounded in measurement), every seat not just the sweet spot (consistent performance at every listening position), integration over isolation (music and cinema as a single unified pursuit), and the room is half the system (acoustics and space design before equipment selection). This philosophy was established through a landmark proof-of-concept system in the late 1990s and has guided every project in the four decades since.",
      },
    },
    {
      "@type": "Question",
      "name": "What was Craig Abplanalp's proof of concept system in the 1990s?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In the late 1990s, Craig Abplanalp designed a reference system using Wilson Audio Grand Slams as main front speakers, each driven by a dedicated Mark Levinson No. 33 Monoblock amplifier — one amplifier per speaker. Wilson Audio WATT/Puppies handled center and surround channels, with dual stacked Sony G90 CRT projectors and Faroudja Line Quadrupler processing completing the picture. The system demonstrated that reference music reproduction and reference cinema could be achieved in a single unified environment.",
      },
    },
    {
      "@type": "Question",
      "name": "Why does Craig Abplanalp recommend Ascendo Immersive Audio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Craig Abplanalp recommends Ascendo Immersive Audio because their founding engineering principles align with his own design philosophy — prioritizing physics over marketing, measurable performance over specifications, and the physical experience of sound over convention. Ascendo's infrasonic bass capability, reproducing frequencies as low as 3Hz, represents the most complete expression of Craig's four-decade pursuit of unified reference music and cinema reproduction.",
      },
    },
    {
      "@type": "Question",
      "name": "Can one room serve as both a reference music room and a home theater?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Craig Abplanalp's core philosophy — established through a proof-of-concept system in the late 1990s — is that the boundary between audiophile music reproduction and cinematic immersion is artificial. With the right room design, component selection, and calibration, a single space can deliver reference-level performance for both music and cinema simultaneously. This integration is one of the defining principles of Craig's approach.",
      },
    },
    {
      "@type": "Question",
      "name": "What does Craig Abplanalp mean by the room is half the system?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Craig Abplanalp's principle that the room is half the system means that no amount of investment in loudspeakers, amplification, or electronics can overcome the acoustic limitations of a poorly designed or untreated space. His design process always begins with the room — its dimensions, surfaces, acoustic treatment, and integration with lighting and control systems — before any equipment decisions are made.",
      },
    },
  ],
};

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PhilosophyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        eyebrow="The Philosophy"
        title="The Philosophy"
        subtitle="Four decades. One pursuit. No shortcuts."
        image="/images/private-cinema-optimized.jpeg"
      />

      {/* ORIGIN STORY */}
      <section className="section-padding" style={{ background: "#0d0d0d" }}>
        <div className="craig-container">
          <div className="max-w-3xl mx-auto">

            <AnimateIn>
              <div className="flex items-center gap-6 mb-12">
                <div className="gold-divider-left" />
                <span className="text-gold uppercase tracking-widest font-sans" style={{ fontSize: "0.65rem", letterSpacing: "0.24em" }}>
                  Origin
                </span>
              </div>
            </AnimateIn>

            <div className="space-y-8 font-sans text-pearl/80 leading-relaxed" style={{ fontSize: "1.0625rem", lineHeight: "1.85" }}>
              <AnimateIn delay={0.05}>
                <p>
                  There is a fundamental difference between audio and video equipment built for
                  commercial environments and equipment built for the uncompromising home.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <p>
                  Commercial installations &mdash; cinemas, concert venues, sports facilities
                  &mdash; are engineered with constraints that have nothing to do with
                  performance. Return on investment. Maintenance schedules. Coverage patterns
                  designed for thousands of seats at once. The equipment has to be reliable,
                  serviceable, and cost-effective across thousands of installations. That math
                  shapes every decision.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.15}>
                <p style={{ color: "#F5F5F5" }}>
                  The high-performance home market operates from an entirely different premise.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <p>
                  What if there were no cost constraints? No return on investment requirement.
                  No need to serve the back row of a 400-seat auditorium. No compromises driven
                  by what needs to work in ten thousand rooms at once.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.25}>
                <p>
                  Companies like Ascendo start from that question. What is physically possible
                  when engineering is the only constraint? What happens when a loudspeaker is
                  designed to perform &mdash; not to hit a price point, not to fit a product
                  line, not to satisfy an accountant?
                </p>
              </AnimateIn>

              <AnimateIn delay={0.3}>
                <p>
                  The answer, when executed correctly, is something most people have never
                  experienced: a home environment that doesn&rsquo;t approximate a world-class
                  cinema. It surpasses one.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.35}>
                <p>
                  Craig Abplanalp has spent more than four decades understanding how to make
                  that possible.
                </p>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* ASCENDO CONNECTION */}
      <section className="section-padding" style={{ background: "#0d0d0d" }}>
        <div className="craig-container">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <div className="flex items-center gap-6 mb-12">
                <div className="gold-divider-left" />
                <span className="text-gold uppercase tracking-widest font-sans" style={{ fontSize: "0.65rem", letterSpacing: "0.24em" }}>
                  Where It Leads
                </span>
              </div>
            </AnimateIn>

            <div className="space-y-7 font-sans text-pearl/80 leading-relaxed" style={{ fontSize: "1.0625rem", lineHeight: "1.85" }}>
              <AnimateIn delay={0.1}>
                <p>
                  Commercial theaters get you close. They are engineered for scale, for
                  reliability, for the economics of running a public venue. But scale and
                  economics are compromises. The low-frequency extension that pressurizes a
                  room. The dynamic range that never clips under peak load. The spatial
                  precision that places sound exactly where the mix intended &mdash; these are
                  the things that budget and installation constraints quietly remove from
                  commercial systems.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.15}>
                <p style={{ color: "#F5F5F5" }}>
                  In a purpose-designed home environment, those compromises disappear.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.2}>
                <p>
                  Craig has worked alongside Todd Sutherland &mdash; U.S. importer for Ascendo
                  Immersive Audio &mdash; for over two decades. What Ascendo represents is the
                  clearest expression yet of what no-compromise engineering produces: dynamics
                  that are unrestricted, bass that pressurizes the room, infrasonic energy that
                  registers physically before it registers consciously.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.25}>
                <p>
                  When that&rsquo;s achieved &mdash; thoughtfully designed, precisely
                  integrated, aligned with the right space &mdash; it stops being impressive
                  sound. It becomes immersion that commercial exhibition simply cannot deliver.
                </p>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* THE PRINCIPLES */}
      <section className="section-padding" style={{ background: "#111111" }}>
        <div className="craig-container">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <div className="flex items-center gap-6 mb-12">
                <div className="gold-divider-left" />
                <span className="text-gold uppercase tracking-widest font-sans" style={{ fontSize: "0.65rem", letterSpacing: "0.24em" }}>
                  The Principles
                </span>
              </div>
              <h2
                className="font-serif text-pearl font-light mb-10"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.01em" }}
              >
                What Separates a Good System From an Unforgettable One
              </h2>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  number: "01",
                  title: "Physics Before Marketing",
                  body: "Every claim Craig makes is grounded in acoustics, mathematics, and verifiable measurement. When he says a room is calibrated, it is calibrated — not just voiced to sound pleasant during a demo.",
                },
                {
                  number: "02",
                  title: "Every Seat, Not Just the Sweet Spot",
                  body: "A truly great room doesn't have one perfect position and several acceptable ones. Every listening position should deliver the designer's intent — that's the standard Craig works to.",
                },
                {
                  number: "03",
                  title: "Integration Over Isolation",
                  body: "Music and cinema are not separate pursuits requiring separate rooms. Done correctly — with the right philosophy, components, and calibration — one room serves both at the highest level.",
                },
                {
                  number: "04",
                  title: "The Room Is Half the System",
                  body: "The most expensive loudspeakers in the world cannot overcome a poorly designed or treated space. Craig's philosophy starts with the room, not the equipment catalog.",
                },
              ].map((item, i) => (
                <AnimateIn key={item.number} delay={i * 0.1} direction="up">
                  <div className="cinema-card p-8 h-full">
                    <span
                      className="font-serif text-gold/30 block mb-4"
                      style={{ fontSize: "2.5rem", lineHeight: 1, fontWeight: 300 }}
                    >
                      {item.number}
                    </span>
                    <h3 className="font-serif text-pearl font-light mb-4" style={{ fontSize: "1.375rem" }}>
                      {item.title}
                    </h3>
                    <p className="text-mist font-sans text-sm leading-relaxed" style={{ lineHeight: "1.8" }}>
                      {item.body}
                    </p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA TRANSITION */}
      <section className="py-24 md:py-32 border-t border-slate/50" style={{ background: "#0a0a0a" }}>
        <div className="craig-container">
          <AnimateIn>
            <div className="max-w-2xl mx-auto text-center">
              <div className="gold-divider mb-10" />
              <h3
                className="font-serif text-pearl font-light mb-6"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", letterSpacing: "-0.01em" }}
              >
                Forty years.{" "}
                <span className="italic" style={{ color: "rgba(201,168,76,0.9)" }}>One unbroken standard.</span>
              </h3>
              <p className="text-mist font-sans mb-10 leading-relaxed" style={{ fontSize: "1rem" }}>
                Read about the expertise that turned philosophy into practice — the certifications,
                the relationships, and the career built on a single conviction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/expertise" className="btn-gold-solid">
                  The Expertise
                </Link>
                <Link href="/contact" className="btn-gold">
                  Start a Conversation <ArrowRight />
                </Link>
              </div>
              <div className="gold-divider mt-10" />
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
