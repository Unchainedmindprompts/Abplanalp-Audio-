import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/craig/PageHero";
import AnimateIn from "@/components/craig/AnimateIn";

export const metadata: Metadata = {
  title: "The Haydn Theater — Ascendo Immersive Audio",
  description:
    "The most ambitious residential cinema Craig has completed. Dual Christie 4K projectors, Wisdom Audio, Trinnov Altitude32, and five VUE subwoofers in a purpose-built Pacific Northwest theater.",
  openGraph: {
    title: "The Haydn Theater | Craig Abplanalp",
    description: "A private cinema that doesn't just match the world's best commercial theaters — it exceeds them.",
  },
};

function ArrowLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 8H3M7 12l-4-4 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const specs = [
  {
    category: "Video System",
    items: [
      { label: "Projectors", value: "Dual Christie 4K commercial cinema projectors" },
      { label: "2D Configuration", value: "Dedicated single projector" },
      { label: "3D Configuration", value: "Dual-projector stack" },
      { label: "3D Processing", value: "Christie SKA-3D & Dolby DFC-100" },
      { label: "Screen", value: "Stewart Filmscreen — acoustically transparent, curved" },
      { label: "Screen Dimensions", value: '334.125" W × 188" H' },
    ],
  },
  {
    category: "Audio Processing",
    items: [
      { label: "Surround Processor", value: "Trinnov Altitude32" },
      { label: "Active Crossovers", value: "Lab Gruppen LM-26" },
    ],
  },
  {
    category: "Screen Channels",
    items: [
      { label: "Speakers", value: "Wisdom Audio LS4 with Wisdom STS" },
      { label: "Configuration", value: "L · L-Mid · C · R-Mid · R (5-channel array)" },
    ],
  },
  {
    category: "Low Frequency",
    items: [
      { label: "Subwoofers", value: "Five VUE Audiotechnik HS-28" },
      { label: "Capability", value: "Room pressurization below 20Hz" },
    ],
  },
  {
    category: "Surround & Height",
    items: [
      { label: "Surround Speakers", value: "Wisdom Audio L150i" },
      { label: "Surround Positions", value: "Side L/R (×4 each) · Rear (×4)" },
      { label: "Height Channels", value: "Wisdom Audio C38i — 6 channels" },
    ],
  },
  {
    category: "Amplification",
    items: [
      { label: "Monoblock", value: "Classé Audio CT-M600" },
      { label: "Multi-Channel", value: "Classé Audio CT-5300" },
    ],
  },
];

export default function HaydnTheaterPage() {
  return (
    <>
      <PageHero
        eyebrow="Pacific Northwest Residence · 2016"
        title="The Haydn Theater"
        subtitle="A private cinema that doesn't just match the world's best commercial theaters — it exceeds them."
        image="/images/kaleidescape-theater.png"
      />

      {/* BACK LINK */}
      <div style={{ background: "#0d0d0d" }} className="border-b border-slate/30">
        <div className="craig-container py-5">
          <Link
            href="/the-work"
            className="inline-flex items-center gap-2 text-mist/50 hover:text-gold transition-colors duration-300 font-sans uppercase tracking-widest"
            style={{ fontSize: "0.65rem", letterSpacing: "0.2em" }}
          >
            <ArrowLeft />
            All Projects
          </Link>
        </div>
      </div>

      {/* INTRO */}
      <section className="section-padding" style={{ background: "#0d0d0d" }}>
        <div className="craig-container">
          <div className="max-w-3xl">
            <AnimateIn>
              <div className="flex items-center gap-6 mb-12">
                <div className="gold-divider-left" />
                <span className="text-gold uppercase tracking-widest font-sans" style={{ fontSize: "0.65rem", letterSpacing: "0.24em" }}>
                  The Vision
                </span>
              </div>
              <p
                className="font-serif text-pearl font-light leading-relaxed mb-8"
                style={{ fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)", lineHeight: "1.6", letterSpacing: "-0.01em" }}
              >
                The Haydn Theater was conceived with an uncompromising vision: to create a private cinema that doesn&rsquo;t just match the world&rsquo;s best commercial theaters — but exceeds them.
              </p>
              <p className="text-mist font-sans leading-relaxed mb-6" style={{ fontSize: "1rem", lineHeight: "1.9" }}>
                The client came into the process having experienced many of the finest theaters globally. That perspective shaped every decision. This wasn&rsquo;t about building a great home theater. It was about redefining what a private cinema could be.
              </p>
              <p className="text-mist font-sans leading-relaxed" style={{ fontSize: "1rem", lineHeight: "1.9" }}>
                From the earliest design phases, every element was treated as critical. Acoustic performance, image fidelity, system scale, and integration all had to work in absolute harmony. There were no shortcuts, no assumptions, and no detail too small to matter.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* SPEC TAGS ROW */}
      <div style={{ background: "#111111" }} className="border-y border-slate/30 py-6">
        <div className="craig-container">
          <div className="flex flex-wrap gap-2">
            {["Dual Christie 4K Projectors", "Trinnov Altitude32", "Wisdom Audio LS4", "5× VUE HS-28 Subwoofers", "Classé Audio Amplification", "Stewart Filmscreen", "Dolby DFC-100", "19-Channel Immersive"].map((tag) => (
              <span
                key={tag}
                className="text-mist/60 border border-slate font-sans px-3 py-1"
                style={{ fontSize: "0.7rem", letterSpacing: "0.08em" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* IMAGE + BODY SECTIONS */}
      <section className="section-padding" style={{ background: "#0d0d0d" }}>
        <div className="craig-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Main body column */}
            <div className="lg:col-span-7 space-y-16">

              {/* Video */}
              <AnimateIn direction="up">
                <div>
                  <div className="flex items-center gap-6 mb-8">
                    <div className="gold-divider-left" />
                    <span className="text-gold uppercase tracking-widest font-sans" style={{ fontSize: "0.65rem", letterSpacing: "0.24em" }}>
                      Image & Projection
                    </span>
                  </div>
                  <p className="text-mist font-sans leading-relaxed mb-5" style={{ fontSize: "1rem", lineHeight: "1.9" }}>
                    At the heart of the experience is a true commercial cinema projection system. The image is massive, immersive, and effortless — equally capable of delivering pristine 2D content and fully realized 3D presentations with a level of brightness and clarity rarely achieved in residential environments.
                  </p>
                  <p className="text-mist font-sans leading-relaxed" style={{ fontSize: "1rem", lineHeight: "1.9" }}>
                    The curved, acoustically transparent Stewart Filmscreen allows sound and image to originate from the same space, preserving realism at a scale that immediately pulls you into the film. A dual Christie 4K projector architecture optimizes each format independently — one projector dedicated to 2D, both deployed for 3D — ensuring neither discipline compromises the other.
                  </p>
                </div>
              </AnimateIn>

              {/* Audio */}
              <AnimateIn direction="up" delay={0.05}>
                <div>
                  <div className="flex items-center gap-6 mb-8">
                    <div className="gold-divider-left" />
                    <span className="text-gold uppercase tracking-widest font-sans" style={{ fontSize: "0.65rem", letterSpacing: "0.24em" }}>
                      Audio System
                    </span>
                  </div>
                  <p className="text-mist font-sans leading-relaxed mb-5" style={{ fontSize: "1rem", lineHeight: "1.9" }}>
                    The audio system was designed to do more than surround the audience — it was built to disappear. Dialogue is anchored with precision, movement across the room is seamless, and dynamics are delivered without strain, even at reference levels. The system maintains clarity and composure no matter how complex or demanding the content becomes.
                  </p>
                  <p className="text-mist font-sans leading-relaxed" style={{ fontSize: "1rem", lineHeight: "1.9" }}>
                    Wisdom Audio LS4 speakers line the screen in a five-channel array, with the Trinnov Altitude32 providing the surgical processing backbone. Classé Audio amplification — CT-M600 monoblocks and CT-5300 multi-channel — delivers the current reserve needed to maintain absolute composure at any level.
                  </p>
                </div>
              </AnimateIn>

              {/* LF */}
              <AnimateIn direction="up" delay={0.05}>
                <div>
                  <div className="flex items-center gap-6 mb-8">
                    <div className="gold-divider-left" />
                    <span className="text-gold uppercase tracking-widest font-sans" style={{ fontSize: "0.65rem", letterSpacing: "0.24em" }}>
                      Low Frequency
                    </span>
                  </div>
                  <p className="text-mist font-sans leading-relaxed mb-5" style={{ fontSize: "1rem", lineHeight: "1.9" }}>
                    Low frequency performance was approached with equal intention. Five VUE Audiotechnik HS-28 subwoofers were deployed not simply for impact, but to pressurize the room — creating a physical connection to the content that you feel as much as you hear.
                  </p>
                  <p className="text-mist font-sans leading-relaxed" style={{ fontSize: "1rem", lineHeight: "1.9" }}>
                    It&rsquo;s controlled, effortless, and deeply immersive, extending the experience beyond traditional listening into something that engages the entire body.
                  </p>
                </div>
              </AnimateIn>

              {/* Conclusion */}
              <AnimateIn direction="up" delay={0.05}>
                <div
                  className="border-l-2 pl-8 py-2"
                  style={{ borderColor: "rgba(201,168,76,0.4)" }}
                >
                  <p
                    className="font-serif text-pearl/90 font-light italic leading-relaxed"
                    style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)", lineHeight: "1.7" }}
                  >
                    What ultimately defines the Haydn Theater is not any single component, but how everything comes together. The technology serves the experience, not the other way around. When the system disappears, and the viewer is fully transported — that&rsquo;s when the design succeeds.
                  </p>
                  <p className="text-gold/70 font-sans mt-5 uppercase tracking-widest" style={{ fontSize: "0.65rem", letterSpacing: "0.2em" }}>
                    Craig Abplanalp
                  </p>
                </div>
              </AnimateIn>

            </div>

            {/* Sidebar — specs */}
            <aside className="lg:col-span-5">
              <AnimateIn direction="up" delay={0.1}>
                <div className="sticky top-28 space-y-1">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="gold-divider-left" />
                    <span className="text-gold uppercase tracking-widest font-sans" style={{ fontSize: "0.65rem", letterSpacing: "0.24em" }}>
                      System Specification
                    </span>
                  </div>
                  {specs.map((section) => (
                    <div key={section.category} className="cinema-card overflow-hidden mb-3">
                      <div
                        className="px-5 py-3 border-b border-slate/50"
                        style={{ background: "rgba(201,168,76,0.04)" }}
                      >
                        <span
                          className="text-gold/80 font-sans uppercase tracking-widest"
                          style={{ fontSize: "0.6rem", letterSpacing: "0.2em" }}
                        >
                          {section.category}
                        </span>
                      </div>
                      <div className="px-5 py-4 space-y-3">
                        {section.items.map((item) => (
                          <div key={item.label} className="flex gap-4 justify-between">
                            <span
                              className="text-mist/50 font-sans flex-shrink-0"
                              style={{ fontSize: "0.75rem", lineHeight: "1.6" }}
                            >
                              {item.label}
                            </span>
                            <span
                              className="text-pearl/80 font-sans text-right"
                              style={{ fontSize: "0.8rem", lineHeight: "1.6" }}
                            >
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateIn>
            </aside>

          </div>
        </div>
      </section>

      {/* WIRING DIAGRAM */}
      <section className="section-padding" style={{ background: "#111111" }}>
        <div className="craig-container">
          <AnimateIn>
            <div className="flex items-center gap-6 mb-10">
              <div className="gold-divider-left" />
              <span className="text-gold uppercase tracking-widest font-sans" style={{ fontSize: "0.65rem", letterSpacing: "0.24em" }}>
                System Architecture
              </span>
            </div>
            <h2
              className="font-serif text-pearl font-light mb-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", letterSpacing: "-0.01em" }}
            >
              Wiring & Signal Flow
            </h2>
            <p className="text-mist font-sans mb-10 max-w-2xl" style={{ fontSize: "0.9375rem", lineHeight: "1.8" }}>
              Every signal path, every equipment rack, every room connection — documented at the level of precision the system demands.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div
              className="relative overflow-hidden rounded-sm border border-slate/50"
              style={{ background: "#0a0a0a" }}
            >
              {/* Top label bar */}
              <div
                className="flex items-center justify-between px-6 py-3 border-b border-slate/50"
                style={{ background: "rgba(201,168,76,0.03)" }}
              >
                <span
                  className="text-gold/60 font-sans uppercase tracking-widest"
                  style={{ fontSize: "0.6rem", letterSpacing: "0.2em" }}
                >
                  Haydn Theater · System Wiring Diagram · 2016
                </span>
                <span
                  className="text-mist/30 font-sans"
                  style={{ fontSize: "0.6rem" }}
                >
                  Craig Abplanalp · Definitive Audio
                </span>
              </div>

              {/* Diagram */}
              <div className="relative w-full" style={{ minHeight: "500px" }}>
                <Image
                  src="/images/haydn-project-wiring-diagram.webp"
                  alt="Haydn Theater system wiring diagram — full signal flow and equipment connections"
                  fill
                  className="object-contain object-center p-4 md:p-8"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  quality={95}
                />
              </div>

              {/* Bottom caption */}
              <div className="px-6 py-4 border-t border-slate/30">
                <p className="text-mist/40 font-sans" style={{ fontSize: "0.7rem", lineHeight: "1.6" }}>
                  Complete signal routing for the Haydn Theater installation. Dual Christie 4K projector architecture, Trinnov Altitude32 processing, Wisdom Audio speaker array, five VUE HS-28 subwoofers, and Classé Audio amplification — all mapped to scale.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: "#0a0a0a" }}>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[250px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(ellipse, #C9A84C, transparent 70%)" }}
        />
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)" }}
        />
        <div className="craig-container relative z-10">
          <AnimateIn>
            <div className="max-w-2xl mx-auto text-center">
              <div className="gold-divider mb-10" />
              <p
                className="text-gold uppercase tracking-widest font-sans mb-6"
                style={{ fontSize: "0.65rem", letterSpacing: "0.25em" }}
              >
                The Benchmark
              </p>
              <h3
                className="font-serif text-pearl font-light mb-6"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", letterSpacing: "-0.01em", lineHeight: "1.25" }}
              >
                This project remains the most ambitious residential theater I&rsquo;ve completed.
                <br />
                <span className="italic" style={{ color: "rgba(201,168,76,0.9)" }}>A benchmark for what is possible.</span>
              </h3>
              <p className="text-mist font-sans mb-12 leading-relaxed" style={{ fontSize: "1rem", lineHeight: "1.8" }}>
                When every decision is guided by performance, precision, and a clear vision of the outcome — the result speaks for itself.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-gold-solid">
                  Start a Conversation
                </Link>
                <Link
                  href="/the-work"
                  className="inline-flex items-center gap-2 border border-slate text-mist/70 hover:text-gold hover:border-gold/40 transition-all duration-300 font-sans uppercase tracking-widest px-8 py-4"
                  style={{ fontSize: "0.75rem", letterSpacing: "0.15em" }}
                >
                  All Projects
                </Link>
              </div>
              <div className="gold-divider mt-12" />
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
