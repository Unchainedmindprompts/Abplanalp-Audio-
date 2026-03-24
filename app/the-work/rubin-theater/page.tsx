import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/craig/PageHero";
import AnimateIn from "@/components/craig/AnimateIn";

export const metadata: Metadata = {
  title: "The Rubin Theater",
  description:
    "A purpose-built private cinema designed to reference-level standards. Commercial cinema projection, precision audio, and acoustic construction refined across decades.",
  openGraph: {
    title: "The Rubin Theater | Craig Abplanalp",
    description: "A purpose-built private cinema designed to reference-level standards.",
  },
};

function ArrowLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 8H3M7 12l-4-4 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const images = [
  {
    src: "/images/haydn-screen-angle-view.webp",
    alt: "Rubin Theater — screen angle view",
    caption: "Screen · Angle View",
  },
  {
    src: "/images/haydn-christie-projector.webp",
    alt: "Rubin Theater — Christie projector installation",
    caption: "Projection · Christie 4K",
  },
  {
    src: "/images/haydn-projection-booth 1.webp",
    alt: "Rubin Theater — projection booth",
    caption: "Projection Booth",
  },
  {
    src: "/images/haydn-construction-seating.webp",
    alt: "Rubin Theater — seating under construction",
    caption: "Construction · Seating",
  },
  {
    src: "/images/haydn-construction-speakers.webp",
    alt: "Rubin Theater — speaker installation under construction",
    caption: "Construction · Speakers",
  },
];

export default function RubinTheaterPage() {
  return (
    <>
      <PageHero
        eyebrow="Pacific Northwest Residence"
        title="The Rubin Theater"
        subtitle="A purpose-built private cinema designed to the same uncompromising standard as the finest commercial theaters in the world."
        image="/images/haydn-screen-front-view.webp"
      />

      {/* BACK LINK */}
      <div style={{ background: "#0d0d0d" }} className="border-b border-slate/30">
        <div className="craig-container py-5">
          <Link
            href="/the-work"
            className="inline-flex items-center gap-2 text-mist hover:text-gold transition-colors duration-300 font-sans uppercase tracking-widest"
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
                  The Project
                </span>
              </div>
              <p
                className="font-serif text-pearl font-light leading-relaxed mb-8"
                style={{ fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)", lineHeight: "1.6", letterSpacing: "-0.01em" }}
              >
                The full case study is coming soon.
              </p>
              <p className="text-pearl/80 font-sans leading-relaxed" style={{ fontSize: "1rem", lineHeight: "1.9" }}>
                This project represents another level of commitment to reference-level private cinema. The images below document the installation — from acoustic construction through projector calibration and final commissioning.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="section-padding" style={{ background: "#111111" }}>
        <div className="craig-container">
          <AnimateIn>
            <div className="flex items-center gap-6 mb-12">
              <div className="gold-divider-left" />
              <span className="text-gold uppercase tracking-widest font-sans" style={{ fontSize: "0.65rem", letterSpacing: "0.24em" }}>
                The Installation
              </span>
            </div>
          </AnimateIn>

          {/* Hero image — screen front view */}
          <AnimateIn delay={0.05}>
            <div className="relative w-full overflow-hidden rounded-sm border border-slate/30 mb-6" style={{ aspectRatio: "16/9" }}>
              <Image
                src="/images/haydn-screen-angle-view.webp"
                alt="Rubin Theater — screen angle view"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1280px) 100vw, 1280px"
                quality={90}
              />
              <div className="absolute bottom-0 left-0 right-0 px-5 py-3 border-t border-slate/30" style={{ background: "rgba(0,0,0,0.6)" }}>
                <span className="text-pearl/70 font-sans uppercase tracking-widest" style={{ fontSize: "0.6rem", letterSpacing: "0.18em" }}>
                  Screen · Angle View
                </span>
              </div>
            </div>
          </AnimateIn>

          {/* Two-column grid for remaining images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.slice(1).map((img, i) => (
              <AnimateIn key={img.src} delay={0.05 + i * 0.05} direction="up">
                <div className="relative w-full overflow-hidden rounded-sm border border-slate/30" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-5 py-3 border-t border-slate/30" style={{ background: "rgba(0,0,0,0.6)" }}>
                    <span className="text-pearl/70 font-sans uppercase tracking-widest" style={{ fontSize: "0.6rem", letterSpacing: "0.18em" }}>
                      {img.caption}
                    </span>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
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
                The Standard
              </p>
              <h3
                className="font-serif text-pearl font-light mb-6"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", letterSpacing: "-0.01em", lineHeight: "1.25" }}
              >
                Every project held to
                <br />
                <span className="italic" style={{ color: "rgba(201,168,76,0.9)" }}>the same uncompromising bar.</span>
              </h3>
              <p className="text-pearl/80 font-sans mb-12 leading-relaxed" style={{ fontSize: "1rem", lineHeight: "1.8" }}>
                The full case study for the Rubin Theater is coming soon. In the meantime, explore the rest of the work or start a conversation about your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-gold-solid">
                  Start a Conversation
                </Link>
                <Link
                  href="/the-work"
                  className="inline-flex items-center gap-2 border border-slate text-mist hover:text-gold hover:border-gold/40 transition-all duration-300 font-sans uppercase tracking-widest px-8 py-4"
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
