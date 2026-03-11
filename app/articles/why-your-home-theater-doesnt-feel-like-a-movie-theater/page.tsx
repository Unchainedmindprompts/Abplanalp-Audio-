import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import AnimateIn from "@/components/craig/AnimateIn";

const SITE_URL = "https://www.craigabplanalp.com";
const ARTICLE_SLUG = "why-your-home-theater-doesnt-feel-like-a-movie-theater";
const ARTICLE_URL = `${SITE_URL}/articles/${ARTICLE_SLUG}`;
const PUB_DATE = "2026-03-11";
const PUB_DATE_DISPLAY = "March 11, 2026";

export const metadata: Metadata = {
  title: "Why Your Home Theater Doesn't Feel Like a Movie Theater | Craig Abplanalp",
  description:
    "The gap between a great cinema and your home theater has a name: room pressurization. Craig Abplanalp explains what infrasonic bass does and what it takes to close that gap.",
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: "Why Your Home Theater Doesn't Feel Like a Movie Theater — And How to Fix It",
    description: "Something is missing in most home theaters. Here's what it is and how to fix it.",
    url: ARTICLE_URL,
    type: "article",
  },
};

// ─── Schema Blocks ────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Why Your Home Theater Doesn't Feel Like a Movie Theater — And How to Fix It",
  description:
    "The gap between a great commercial cinema and your home theater has a name: room pressurization. Here's what infrasonic bass does, why most systems can't reproduce it, and what it takes to close that gap.",
  author: {
    "@type": "Person",
    name: "Craig Abplanalp",
    jobTitle: "System Performance Specialist",
    description:
      "Over four decades of experience designing reference-level audio and home theater environments in the Pacific Northwest.",
  },
  datePublished: PUB_DATE,
  dateModified: PUB_DATE,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": ARTICLE_URL,
  },
  keywords: [
    "home theater",
    "room pressurization",
    "infrasonic subwoofer",
    "home cinema bass",
    "reference home theater",
    "high performance audio",
    "infrasonic bass",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why doesn't my home theater feel like a commercial cinema?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The missing element is almost always room pressurization — the reproduction of infrasonic bass frequencies below 20Hz that you feel rather than hear. Most home subwoofers cannot reproduce these frequencies at any meaningful level, which is why even expensive systems lack the physical presence of the best commercial cinemas.",
      },
    },
    {
      "@type": "Question",
      name: "What is room pressurization in home theater?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Room pressurization refers to the physical sensation created when very low frequency sound — particularly infrasonic bass below 20Hz — is reproduced at sufficient levels to be felt throughout the body and the room itself. It creates the visceral, immersive quality that distinguishes the best large format cinema experiences from conventional home theater.",
      },
    },
    {
      "@type": "Question",
      name: "What is an infrasonic subwoofer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An infrasonic subwoofer is a specialized speaker system designed to reproduce bass frequencies below the threshold of human hearing — typically below 20Hz. Unlike conventional subwoofers, infrasonic subwoofers require very large driver surface areas and specialized motor structures to move the volume of air necessary to create physical bass sensation at these extreme low frequencies.",
      },
    },
    {
      "@type": "Question",
      name: "Does infrasonic bass improve music playback as well as home theater?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — certain music contains significant infrasonic content that most systems never retrieve. Pipe organ, large orchestral works, and recordings made in very large acoustic spaces all benefit from infrasonic reproduction. When present, the lowest frequencies acquire the physical presence they have in live performance, fundamentally changing the emotional impact of the music.",
      },
    },
  ],
};

const tableSchema = {
  "@context": "https://schema.org",
  "@type": "Table",
  about: "Comparison of home theater experience without and with infrasonic bass reproduction",
  description:
    "A structured comparison showing the difference in home theater performance between systems without infrasonic bass capability and systems with dedicated infrasonic subwoofers and room pressurization.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Articles",
      item: `${SITE_URL}/articles`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Why Your Home Theater Doesn't Feel Like a Movie Theater",
      item: ARTICLE_URL,
    },
  ],
};

// ─── Frequency Chart ──────────────────────────────────────────────────────────
// Log scale: position% = (log10(hz) / log10(20000)) * 100
// log10(20000) ≈ 4.301

const BANDS = [
  {
    label: "Infrasonic",
    range: "1 – 20 Hz",
    note: "You FEEL this — most systems never get here",
    left: "0%",
    width: "30.25%",
    accent: true,
  },
  {
    label: "Bass",
    range: "20 – 200 Hz",
    note: "Subwoofer range — explosions, bass guitar, drums",
    left: "30.25%",
    width: "23.25%",
    accent: false,
  },
  {
    label: "Midrange",
    range: "200 – 4,000 Hz",
    note: "Voice, instruments, most music content",
    left: "53.5%",
    width: "30.26%",
    accent: false,
  },
  {
    label: "High Frequency",
    range: "4k – 20k Hz",
    note: "Clarity, detail, air",
    left: "83.76%",
    width: "16.24%",
    accent: false,
  },
];

const TICKS = [
  { label: "1", left: "0%" },
  { label: "10", left: "23.25%" },
  { label: "100", left: "46.5%" },
  { label: "1k", left: "69.75%" },
  { label: "10k", left: "93%" },
  { label: "20k", left: "100%" },
];

function FrequencyChart() {
  return (
    <div
      className="my-10 p-6 md:p-8"
      style={{ background: "#111111", border: "1px solid rgba(42,42,42,0.8)" }}
    >
      <p
        className="font-serif text-pearl font-light mb-1"
        style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", letterSpacing: "-0.005em" }}
      >
        The Frequency Spectrum: What You Hear vs. What You Feel
      </p>
      <p
        className="font-sans mb-8"
        style={{ color: "#7a7a7a", fontSize: "0.72rem", letterSpacing: "0.1em" }}
      >
        Logarithmic scale &nbsp;·&nbsp; 1 Hz – 20,000 Hz
      </p>

      {/* Spectrum bar */}
      <div className="relative" style={{ height: "56px" }}>
        {BANDS.map((band) => (
          <div
            key={band.label}
            className="absolute top-0 h-full flex flex-col items-center justify-center"
            style={{
              left: band.left,
              width: band.width,
              background: band.accent ? "rgba(201,168,76,0.15)" : "#202020",
              border: `1px solid ${band.accent ? "#C9A84C" : "#333333"}`,
            }}
          >
            <span
              style={{
                color: band.accent ? "#C9A84C" : "#7a7a7a",
                fontSize: "0.55rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textAlign: "center",
                lineHeight: 1.3,
                padding: "0 4px",
                fontFamily: "sans-serif",
              }}
            >
              {band.label}
            </span>
          </div>
        ))}
      </div>

      {/* X-axis */}
      <div
        className="relative mt-0"
        style={{ borderTop: "1px solid #333333", height: "36px" }}
      >
        {TICKS.map((tick) => (
          <div
            key={tick.label}
            className="absolute top-0 flex flex-col items-center"
            style={{ left: tick.left, transform: "translateX(-50%)" }}
          >
            <div style={{ width: "1px", height: "5px", background: "#555555" }} />
            <span
              style={{
                color: "#7a7a7a",
                fontSize: "0.58rem",
                fontFamily: "sans-serif",
                marginTop: "3px",
                whiteSpace: "nowrap",
              }}
            >
              {tick.label}
            </span>
          </div>
        ))}
      </div>

      <p
        className="text-center font-sans uppercase"
        style={{ color: "#5a5a5a", fontSize: "0.52rem", letterSpacing: "0.2em", marginTop: "0.2rem" }}
      >
        Frequency (Hz) — Logarithmic Scale
      </p>

      {/* Band descriptions */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-7 pt-6"
        style={{ borderTop: "1px solid rgba(60,60,60,0.7)" }}
      >
        {BANDS.map((band) => (
          <div key={band.label}>
            <div className="flex items-center gap-2 mb-1.5">
              <div
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: band.accent ? "#C9A84C" : "transparent",
                  border: band.accent ? "none" : "1px solid #5a5a5a",
                  flexShrink: 0,
                }}
              />
              <span
                className="font-sans uppercase"
                style={{
                  color: band.accent ? "#C9A84C" : "#7a7a7a",
                  fontSize: "0.58rem",
                  letterSpacing: "0.12em",
                }}
              >
                {band.label}
              </span>
            </div>
            <p
              className="font-sans"
              style={{
                color: band.accent ? "rgba(201,168,76,0.8)" : "#6a6a6a",
                fontSize: "0.72rem",
                lineHeight: "1.65",
                paddingLeft: "1rem",
              }}
            >
              {band.note}
            </p>
          </div>
        ))}
      </div>

      {/* Annotation */}
      <p
        className="font-sans italic mt-6 pt-5"
        style={{
          color: "rgba(201,168,76,0.75)",
          fontSize: "0.7rem",
          borderTop: "1px solid rgba(60,60,60,0.6)",
        }}
      >
        The room pressurization zone — where cinema lives
      </p>
    </div>
  );
}

// ─── Comparison Table ─────────────────────────────────────────────────────────

const TABLE_ROWS: [string, string][] = [
  ["Bass you hear", "Bass you hear AND feel"],
  [
    "Main subwoofers straining at their limits",
    "Main subwoofers performing cleanly across their range",
  ],
  ["Flat, two-dimensional low end", "Physical, pressurized room presence"],
  ["Spatial cues in recordings go unretrieved", "Full spatial information revealed"],
  ["Good home theater", "Reference cinema experience"],
  ["System works harder, sounds more effortful", "System breathes easily, sounds effortless"],
];

function ComparisonTable() {
  return (
    <div
      className="my-10 overflow-x-auto"
      style={{ border: "1px solid rgba(60,60,60,0.9)" }}
    >
      <p
        className="font-serif text-pearl font-light px-6 pt-6 pb-4"
        style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", letterSpacing: "-0.005em" }}
      >
        Without Infrasonic Bass vs. With Infrasonic Bass
      </p>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#111111" }}>
            <th
              style={{
                textAlign: "left",
                padding: "0.75rem 1.25rem",
                borderTop: "1px solid #333333",
                borderBottom: "1px solid #333333",
                color: "#7a7a7a",
                fontSize: "0.62rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontFamily: "sans-serif",
                fontWeight: 400,
                width: "50%",
              }}
            >
              Without
            </th>
            <th
              style={{
                textAlign: "left",
                padding: "0.75rem 1.25rem",
                borderTop: "1px solid #333333",
                borderBottom: "1px solid #333333",
                color: "#C9A84C",
                fontSize: "0.62rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontFamily: "sans-serif",
                fontWeight: 400,
                width: "50%",
              }}
            >
              With Infrasonic Bass
            </th>
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(([without, withBass], i) => (
            <tr
              key={i}
              style={{
                borderBottom:
                  i < TABLE_ROWS.length - 1 ? "1px solid rgba(60,60,60,0.5)" : "none",
                background: i % 2 === 0 ? "#0d0d0d" : "transparent",
              }}
            >
              <td
                style={{
                  padding: "0.875rem 1.25rem",
                  color: "#7a7a7a",
                  fontSize: "0.875rem",
                  lineHeight: "1.65",
                  fontFamily: "sans-serif",
                  verticalAlign: "top",
                }}
              >
                {without}
              </td>
              <td
                style={{
                  padding: "0.875rem 1.25rem",
                  color: "#9a9a9a",
                  fontSize: "0.875rem",
                  lineHeight: "1.65",
                  fontFamily: "sans-serif",
                  verticalAlign: "top",
                }}
              >
                {withBass}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Shared text styles ───────────────────────────────────────────────────────

const bodyText: CSSProperties = {
  color: "rgba(200,200,200,0.92)",
  fontSize: "1rem",
  lineHeight: "1.85",
  fontFamily: "sans-serif",
};

const h2Style: CSSProperties = {
  fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
  letterSpacing: "-0.01em",
};

const h3Style: CSSProperties = {
  fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
  letterSpacing: "-0.005em",
};

function GoldRule() {
  return (
    <div
      style={{ width: "36px", height: "1px", background: "#C9A84C", margin: "2.5rem 0 2rem" }}
    />
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tableSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── Article Header ── */}
      <section
        style={{
          background: "#0a0a0a",
          paddingTop: "7rem",
          paddingBottom: "3.5rem",
          borderBottom: "1px solid rgba(70,70,70,0.7)",
        }}
      >
        <div className="craig-container">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 mb-10 font-sans"
            style={{ fontSize: "0.7rem" }}
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="transition-colors duration-200 hover:text-gold"
              style={{ color: "#7a7a7a" }}
            >
              Home
            </Link>
            <span style={{ color: "#555555" }}>/</span>
            <Link
              href="/articles"
              className="transition-colors duration-200 hover:text-gold"
              style={{ color: "#7a7a7a" }}
            >
              Articles
            </Link>
            <span style={{ color: "#555555" }}>/</span>
            <span style={{ color: "#6a6a6a" }}>Why Your Home Theater&hellip;</span>
          </nav>

          <AnimateIn direction="up">
            {/* Eyebrow */}
            <div className="flex items-center gap-6 mb-8">
              <div className="gold-divider-left" />
              <span
                className="text-gold uppercase tracking-widest font-sans"
                style={{ fontSize: "0.65rem", letterSpacing: "0.24em" }}
              >
                Perspectives
              </span>
            </div>

            {/* H1 */}
            <h1
              className="font-serif text-pearl font-light mb-8"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                letterSpacing: "-0.02em",
                maxWidth: "840px",
                lineHeight: "1.15",
              }}
            >
              Why Your Home Theater Doesn&rsquo;t Feel Like a Movie Theater — And How to Fix It
            </h1>

            {/* Byline */}
            <div className="flex items-center gap-5 font-sans" style={{ fontSize: "0.75rem" }}>
              <span style={{ color: "#7a7a7a" }}>{PUB_DATE_DISPLAY}</span>
              <div style={{ width: "1px", height: "14px", background: "#505050" }} />
              <span style={{ color: "#7a7a7a" }}>Craig Abplanalp</span>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Article Body ── */}
      <section style={{ background: "#0d0d0d" }} className="section-padding">
        <div className="craig-container">
          <div style={{ maxWidth: "720px" }}>

            {/* Intro */}
            <div className="space-y-5">
              <p style={bodyText}>
                You&rsquo;ve invested in a serious system. The speakers are exceptional. The screen fills
                your wall. The amplification is beyond reproach. And yet — something is missing.
              </p>
              <p style={bodyText}>
                It&rsquo;s not something you can easily name. The system measures beautifully. Everyone
                who hears it is impressed. But when you watch a film with real weight to it — a war
                epic, a space sequence, a thunderstorm scene crafted by a great sound designer — you
                don&rsquo;t quite feel it the way you do in the best commercial cinemas.
              </p>
              <p style={bodyText}>
                That gap has a name. And closing it is one of the most transformative things you can
                do for a high-performance home theater.
              </p>
            </div>

            {/* H2: The Missing Element */}
            <GoldRule />
            <AnimateIn direction="up">
              <h2
                className="font-serif text-pearl font-light mb-5"
                style={h2Style}
              >
                The Missing Element: Room Pressurization
              </h2>
            </AnimateIn>
            <div className="space-y-5">
              <p style={bodyText}>
                The most visceral experiences in cinema — the ones that stay with you long after the
                credits roll — don&rsquo;t just happen through your ears. They happen through your
                entire body.
              </p>
              <p style={bodyText}>
                The lowest octaves of sound, frequencies that extend below the threshold of human
                hearing, register not as sound but as physical sensation. Your chest tightens. The
                air in the room seems to thicken. You feel the scene before you consciously hear it.
              </p>
              <p style={bodyText}>
                This is room pressurization — and it&rsquo;s the most overlooked dimension of
                high-performance home theater design.
              </p>
              <p style={bodyText}>
                Most subwoofers, even exceptional ones, struggle to reproduce frequencies below 20Hz
                with any authority. They&rsquo;re designed to handle the bass you hear. But the bass
                you feel — the infrasonic range below human hearing — requires something
                fundamentally different.
              </p>
            </div>

            <AnimateIn direction="up">
              <FrequencyChart />
            </AnimateIn>

            {/* H2: What Infrasonic Bass Actually Does */}
            <GoldRule />
            <AnimateIn direction="up">
              <h2
                className="font-serif text-pearl font-light mb-5"
                style={h2Style}
              >
                What Infrasonic Bass Actually Does
              </h2>
            </AnimateIn>
            <div className="space-y-5">
              <p style={bodyText}>
                Think about what the world&rsquo;s great sound designers are actually encoding into
                a film&rsquo;s soundtrack. A volcanic eruption. A spacecraft entering atmosphere.
                The subsonic rumble beneath a pivotal scene that you may not consciously register,
                but that your body responds to instinctively.
              </p>
              <p style={bodyText}>
                That information exists in the recording. Most home systems simply cannot retrieve
                it.
              </p>
              <p style={bodyText}>
                When infrasonic bass is properly reproduced in a room, several things happen
                simultaneously:
              </p>
            </div>

            {/* H3: The Room Comes Alive */}
            <div className="mt-9 mb-4">
              <h3
                className="font-serif text-pearl font-light italic mb-4"
                style={h3Style}
              >
                The Room Comes Alive
              </h3>
              <p style={bodyText}>
                A properly pressurized room has an entirely different character. The air itself
                seems to participate in the experience. Sounds that were previously two-dimensional
                acquire physical presence — they occupy space in a way that a conventional system,
                regardless of its quality, cannot achieve.
              </p>
            </div>

            {/* H3: Your Main System Performs Better */}
            <div className="mt-9 mb-4">
              <h3
                className="font-serif text-pearl font-light italic mb-4"
                style={h3Style}
              >
                Your Main System Performs Better
              </h3>
              <div className="space-y-5">
                <p style={bodyText}>
                  This is the counterintuitive part that surprises even experienced listeners:
                  offloading the deepest bass to dedicated infrasonic subwoofers allows your main
                  system to perform at a higher level across its entire range.
                </p>
                <p style={bodyText}>
                  When conventional subwoofers are no longer straining to reproduce frequencies at
                  the absolute limits of their capability, they deliver cleaner, tighter, more
                  articulate mid-bass. The whole system breathes more easily. Every frequency
                  benefits.
                </p>
              </div>
            </div>

            {/* H3: Spatial Information Is Revealed */}
            <div className="mt-9 mb-4">
              <h3
                className="font-serif text-pearl font-light italic mb-4"
                style={h3Style}
              >
                Spatial Information Is Revealed
              </h3>
              <p style={bodyText}>
                Exceptional recordings contain ambient spatial cues embedded in the deep bass
                region — information that contributes to the sense of the room or environment in
                which something was recorded. When infrasonic bass is properly reproduced, that
                spatial information becomes audible and felt. Rooms that previously sounded like a
                capable home theater begin to sound and feel genuinely large — not through any
                artificial processing, but because the recording&rsquo;s actual spatial content is
                finally being retrieved.
              </p>
            </div>

            {/* H2: The Physics of the Problem */}
            <GoldRule />
            <AnimateIn direction="up">
              <h2
                className="font-serif text-pearl font-light mb-5"
                style={h2Style}
              >
                The Physics of the Problem
              </h2>
            </AnimateIn>
            <div className="space-y-5">
              <p style={bodyText}>
                Reproducing the lowest octaves requires physics that simply cannot be compromised.
                Cone surface area, motor structure, cabinet volume — these are not variables that
                can be engineered around. They are fundamental.
              </p>
              <p style={bodyText}>
                This is why serious infrasonic subwoofers are large. A 24-inch driver is a starting
                point. The largest purpose-built infrasonic subwoofers measure 100 inches — not as
                an engineering curiosity, but as a practical necessity. Reproducing 8Hz at reference
                levels in a large room requires that kind of surface area.
              </p>
              <p style={bodyText}>
                The engineering goal is extension without distortion. Deep bass that distorts is
                worse than no deep bass at all — it muddies the entire presentation and fatigues the
                listener without their understanding why. The standard is clean, effortless extension
                into the infrasonic range, reproduced at whatever level the content demands without
                strain.
              </p>
            </div>

            {/* H2: Music and the Infrasonic Range */}
            <GoldRule />
            <AnimateIn direction="up">
              <h2
                className="font-serif text-pearl font-light mb-5"
                style={h2Style}
              >
                Music and the Infrasonic Range
              </h2>
            </AnimateIn>
            <div className="space-y-5">
              <p style={bodyText}>
                The benefits extend well beyond cinema.
              </p>
              <p style={bodyText}>
                Certain music — particularly pipe organ, orchestral bass, and certain acoustic
                recordings made in large spaces — contains infrasonic content that most systems
                never retrieve. When that content is present in the room, the experience of
                listening to music at its most serious changes fundamentally.
              </p>
              <p style={bodyText}>
                The lowest pedal notes of a great pipe organ don&rsquo;t just become louder. They
                acquire the physical presence they have in a great concert hall — the sensation of
                standing near an instrument whose power you feel as much as hear. Orchestral bass
                takes on a weight and authority that transforms the emotional impact of the
                performance.
              </p>
              <p style={bodyText}>
                For the listener who pursues the reproduction of live music as a serious endeavor,
                the infrasonic range isn&rsquo;t an accessory. It&rsquo;s the foundation that
                everything else rests on.
              </p>
            </div>

            {/* Comparison Table — before "What This Means for System Design" */}
            <AnimateIn direction="up">
              <ComparisonTable />
            </AnimateIn>

            {/* H2: What This Means for System Design */}
            <GoldRule />
            <AnimateIn direction="up">
              <h2
                className="font-serif text-pearl font-light mb-5"
                style={h2Style}
              >
                What This Means for System Design
              </h2>
            </AnimateIn>
            <div className="space-y-5">
              <p style={bodyText}>
                Integrating infrasonic capability into a high-performance system is not simply a
                matter of adding a large subwoofer. It requires careful thinking about room
                acoustics, system calibration, crossover design, and the interaction between
                infrasonic, conventional bass, and the rest of the system.
              </p>
              <p style={bodyText}>
                Done well, the result doesn&rsquo;t call attention to itself. You don&rsquo;t notice
                the infrasonic subwoofers any more than you notice the foundation of a well-built
                house. What you notice is that the system does something you haven&rsquo;t
                experienced before — that the gap between your room and the reference experience
                you&rsquo;ve been chasing has finally closed.
              </p>
              <p style={bodyText}>
                That&rsquo;s the work I find most compelling. Not the individual components, as
                extraordinary as some of them are, but the integrated experience that only becomes
                possible when every element — including the elements most people never think about
                — is considered and addressed.
              </p>
            </div>

            {/* H2: A Final Thought */}
            <GoldRule />
            <AnimateIn direction="up">
              <h2
                className="font-serif text-pearl font-light mb-5"
                style={h2Style}
              >
                A Final Thought
              </h2>
            </AnimateIn>
            <div className="space-y-5">
              <p style={bodyText}>
                The best commercial cinemas don&rsquo;t feel the way they do by accident. Decades
                of research, acoustic engineering, and careful calibration have gone into
                understanding what makes a large format presentation physically overwhelming in the
                best sense — the kind of experience that justifies the existence of cinema as an
                art form.
              </p>
              <p style={bodyText}>
                That experience is achievable in the home. The technology exists. The physics are
                understood. What it requires is a commitment to going beyond the obvious, addressing
                the frequencies most systems never touch, and designing for the experience you
                actually want — not just the specifications that look impressive on paper.
              </p>
              <p style={bodyText}>
                If you&rsquo;ve ever walked out of a great cinema and wondered why your home system
                — despite its quality and cost — doesn&rsquo;t quite do the same thing, now you
                know where to look.
              </p>
            </div>

            {/* Author Bio */}
            <div
              className="mt-14 pt-8 font-sans"
              style={{ borderTop: "1px solid rgba(60,60,60,0.8)" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div style={{ width: "28px", height: "1px", background: "#C9A84C" }} />
                <span
                  className="text-gold uppercase tracking-widest"
                  style={{ fontSize: "0.6rem", letterSpacing: "0.22em" }}
                >
                  About the Author
                </span>
              </div>
              <p style={{ color: "#8a8a8a", fontSize: "0.9375rem", lineHeight: "1.8" }}>
                Craig Abplanalp is a system performance specialist with over four decades of
                experience designing reference-level audio and home theater environments. Based in
                the Pacific Northwest, he works with clients who demand the highest level of
                performance from their systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-24 md:py-32 border-t border-slate/50"
        style={{ background: "#0a0a0a" }}
      >
        <div className="craig-container text-center">
          <AnimateIn>
            <div className="max-w-2xl mx-auto">
              <div className="gold-divider mb-10" />
              <h3
                className="font-serif text-pearl font-light mb-6"
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  letterSpacing: "-0.01em",
                }}
              >
                Ready to close the gap?
                <br />
                <span className="italic" style={{ color: "rgba(201,168,76,0.9)" }}>
                  Start a conversation.
                </span>
              </h3>
              <p
                className="text-mist font-sans mb-10 leading-relaxed"
                style={{ fontSize: "1rem" }}
              >
                Explore what a reference-level system actually looks like, or reach out directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/the-work" className="btn-gold-solid">
                  See the Work
                </Link>
                <Link href="/contact" className="btn-gold">
                  Start a Conversation{" "}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: "inline", marginLeft: "6px" }}
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
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
