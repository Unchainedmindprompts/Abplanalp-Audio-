import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimateIn from "@/components/craig/AnimateIn";

const SITE_URL = "https://www.craigabplanalp.com";
const ARTICLE_SLUG = "the-most-overlooked-room-in-every-luxury-home";
const ARTICLE_URL = `${SITE_URL}/articles/${ARTICLE_SLUG}`;
const PUB_DATE = "2026-03-11";
const PUB_DATE_DISPLAY = "March 11, 2026";

export const metadata: Metadata = {
  title: "The Most Overlooked Room in Every Luxury Home | Craig Abplanalp",
  description:
    "Luxury homes invest $150,000 in kitchens and $100,000 in master baths. The room used most every evening gets a soundbar. Craig Abplanalp on the awareness gap that costs high-end homeowners the experience they deserve.",
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: "The Most Overlooked Room in Every Luxury Home",
    description:
      "The room used most in a luxury home receives the least considered investment. Not by choice — by awareness.",
    url: ARTICLE_URL,
    type: "article",
    images: [
      {
        url: "/images/craig-great-room.webp",
        alt: "Luxury great room with reference-level audio and video integration — Craig Abplanalp",
      },
    ],
  },
};

// ─── Schema Blocks ────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Most Overlooked Room in Every Luxury Home",
  description:
    "Most luxury homes invest heavily in every sensory experience — except one. The awareness gap between what's possible in reference-level audio and video and what most high-end homeowners actually have is the most overlooked opportunity in luxury home design.",
  author: {
    "@type": "Person",
    name: "Craig Abplanalp",
    jobTitle: "System Performance Specialist",
    description:
      "Over four decades of experience designing reference-level audio and home theater environments in the Pacific Northwest.",
  },
  image: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/craig-great-room.webp`,
    description: "Luxury great room with reference-level audio and video integration — Craig Abplanalp",
  },
  datePublished: PUB_DATE,
  dateModified: PUB_DATE,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": ARTICLE_URL,
  },
  keywords: [
    "luxury home theater",
    "reference audio",
    "high end home cinema",
    "luxury AV design",
    "custom home theater",
    "reference level audio",
    "luxury home audio",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much should a luxury home theater cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A reference-level home theater in a luxury home typically represents an investment comparable to other high-end rooms in the house. Homeowners who routinely invest $75,000 to $150,000 in kitchen appliances often find that a similar investment in a properly designed home theater — one used every evening — delivers a far greater return in daily enjoyment and quality of life.",
      },
    },
    {
      "@type": "Question",
      name: "What is a reference-level home theater?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A reference-level home theater is a system calibrated to reproduce exactly what the recording artist, film director, and sound designer intended — with nothing added, nothing lost, and nothing distorted by equipment limitations or room acoustics. It delivers the physical, emotional, and visual experience the creators of the content intended, in a room designed from the ground up to make that experience possible.",
      },
    },
    {
      "@type": "Question",
      name: "Why do luxury homes often have poor audio and video systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The primary cause is an awareness gap — most luxury homeowners have never experienced a properly designed reference-level system and therefore don't know to ask for one. Interior designers, who specify entertainment spaces, are trained in visual design rather than acoustic performance, which means audio and video decisions are often made without the expertise needed to make them well.",
      },
    },
    {
      "@type": "Question",
      name: "When should a performance audio specialist be brought into a home design project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At the design stage — before walls are built and materials are specified. Room geometry, surface materials, and speaker placement decisions made during construction profoundly affect acoustic performance. Bringing a performance specialist in early, alongside the architect and interior designer, ensures the room can achieve its acoustic potential rather than working against it.",
      },
    },
    {
      "@type": "Question",
      name: "Is reference-level home theater only for dedicated theater rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Reference-level performance principles apply to any listening or viewing space — dedicated home theaters, living rooms, music rooms, and multi-purpose entertainment spaces. The goal in every case is the same: a system integrated with its room to deliver what the content's creators intended, without compromise.",
      },
    },
  ],
};

const tableSchema = {
  "@context": "https://schema.org",
  "@type": "Table",
  about:
    "Comparison of typical luxury home investments across rooms versus home theater investment",
  description:
    "A structured comparison showing how luxury homeowners typically invest $75,000 to $300,000+ in rooms like kitchens, bathrooms, and wine cellars while home theater and listening rooms receive comparatively minimal investment — not due to budget constraints but due to lack of awareness about what reference-level performance looks like.",
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
      name: "The Most Overlooked Room in Every Luxury Home",
      item: ARTICLE_URL,
    },
  ],
};

// ─── Investment Comparison Component ──────────────────────────────────────────

const RIGHT_ROOMS: [string, string][] = [
  ["Kitchen Appliances", "$75,000 – $150,000+"],
  ["Master Bath", "$50,000 – $120,000+"],
  ["Wine Cellar", "$30,000 – $100,000+"],
  ["Primary Vehicle", "$100,000 – $300,000+"],
  ["Outdoor Living", "$50,000 – $200,000+"],
];

function InvestmentComparison() {
  const colHead: CSSProperties = {
    fontSize: "0.6rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    fontFamily: "sans-serif",
    fontWeight: 400,
  };

  const roomLabel: CSSProperties = {
    color: "rgba(200,200,200,0.85)",
    fontSize: "0.875rem",
    fontFamily: "sans-serif",
    lineHeight: "1.5",
  };

  const amountStyle: CSSProperties = {
    fontSize: "0.8rem",
    fontFamily: "sans-serif",
    letterSpacing: "0.02em",
    whiteSpace: "nowrap",
  };

  return (
    <div
      className="my-12"
      style={{ border: "1px solid rgba(60,60,60,0.9)", background: "#0f0f0f" }}
    >
      {/* Header */}
      <div
        className="px-6 pt-7 pb-5"
        style={{ borderBottom: "1px solid rgba(42,42,42,0.9)" }}
      >
        <p
          className="font-serif text-pearl font-light"
          style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", letterSpacing: "-0.005em" }}
        >
          Where Luxury Investment Goes — And Where It Doesn&rsquo;t
        </p>
      </div>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left column */}
        <div
          style={{ borderRight: "1px solid rgba(42,42,42,0.9)" }}
          className="p-6 md:p-8"
        >
          <p className="mb-6" style={{ ...colHead, color: "#C9A84C" }}>
            The Rooms That Get It Right
          </p>
          <div className="space-y-5">
            {RIGHT_ROOMS.map(([room, amount]) => (
              <div
                key={room}
                className="flex items-baseline justify-between gap-4 pb-4"
                style={{ borderBottom: "1px solid rgba(38,38,38,0.8)" }}
              >
                <span style={roomLabel}>{room}</span>
                <span style={{ ...amountStyle, color: "rgba(201,168,76,0.75)" }}>{amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="p-6 md:p-8 flex flex-col">
          <p className="mb-6" style={{ ...colHead, color: "#7a7a7a" }}>
            The Room That Gets Left Behind
          </p>
          <div className="flex-1 flex flex-col justify-center">
            <div
              className="p-6"
              style={{
                background: "rgba(201,168,76,0.04)",
                border: "1px solid rgba(201,168,76,0.18)",
              }}
            >
              <div
                className="flex items-baseline justify-between gap-4 pb-5 mb-5"
                style={{ borderBottom: "1px solid rgba(60,60,60,0.7)" }}
              >
                <span style={roomLabel}>Home Theater / Listening Room</span>
                <span style={{ ...amountStyle, color: "#9a9a9a" }}>$5,000 – $15,000</span>
              </div>
              <p
                className="font-sans"
                style={{ color: "#6a6a6a", fontSize: "0.72rem", lineHeight: "1.6" }}
              >
                Consumer gear. No acoustic design. No performance specialist.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pull quote */}
      <div
        className="px-6 md:px-8 py-6"
        style={{ borderTop: "1px solid rgba(42,42,42,0.9)" }}
      >
        <p
          className="font-serif italic"
          style={{
            color: "rgba(201,168,76,0.85)",
            fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
            letterSpacing: "-0.005em",
            lineHeight: "1.6",
          }}
        >
          &ldquo;The room used most receives the least considered investment. Not by choice
          &mdash; by awareness.&rdquo;
        </p>
      </div>
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
        className="relative overflow-hidden"
        style={{
          background: "#0a0a0a",
          paddingTop: "7rem",
          paddingBottom: "3.5rem",
          borderBottom: "1px solid rgba(70,70,70,0.7)",
        }}
      >
        <Image
          src="/images/craig-great-room.webp"
          alt="Luxury great room with reference-level audio and video integration — Craig Abplanalp"
          fill
          priority
          className="object-cover object-center"
          quality={85}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.38) 50%, rgba(0,0,0,0.22) 100%)",
          }}
        />
        <div className="craig-container relative z-10">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 mb-10 font-sans"
            style={{ fontSize: "0.7rem" }}
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="transition-colors duration-200 hover:text-gold"
              style={{ color: "#a0a0a0" }}
            >
              Home
            </Link>
            <span style={{ color: "#777777" }}>/</span>
            <Link
              href="/articles"
              className="transition-colors duration-200 hover:text-gold"
              style={{ color: "#a0a0a0" }}
            >
              Articles
            </Link>
            <span style={{ color: "#777777" }}>/</span>
            <span style={{ color: "#909090" }}>The Most Overlooked Room&hellip;</span>
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
              The Most Overlooked Room in Every Luxury Home
            </h1>

            {/* Byline */}
            <div className="flex items-center gap-5 font-sans" style={{ fontSize: "0.75rem" }}>
              <span style={{ color: "#a0a0a0" }}>{PUB_DATE_DISPLAY}</span>
              <div style={{ width: "1px", height: "14px", background: "#707070" }} />
              <span style={{ color: "#a0a0a0" }}>Craig Abplanalp</span>
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
                There are spaces in almost every high-end home that receive less thoughtful
                investment than the garage.
              </p>
              <p style={bodyText}>
                Not because the owner can&rsquo;t afford better. Not because they don&rsquo;t care
                about the experience. But because no one ever showed them what better actually
                looks like.
              </p>
              <p style={bodyText}>
                These are the spaces where they actually live &mdash; the great room where the
                family gathers every evening, the covered outdoor terrace where summer nights are
                spent, the dedicated theater room, the master bedroom, the basement entertainment
                space. Wherever time is spent and quality of life is felt. And in the vast
                majority of luxury homes &mdash; homes with $150,000 kitchens, hand-laid stone
                floors, and wine cellars curated by sommeliers &mdash; every one of those spaces
                has a soundbar.
              </p>
              <p style={bodyText}>
                This is the awareness gap. And it represents the single greatest missed
                opportunity in luxury home design today.
              </p>
            </div>

            {/* H2: The Luxury Standard */}
            <GoldRule />
            <AnimateIn direction="up">
              <h2 className="font-serif text-pearl font-light mb-5" style={h2Style}>
                The Luxury Standard &mdash; Applied Everywhere Except Here
              </h2>
            </AnimateIn>
            <div className="space-y-5">
              <p style={bodyText}>
                Consider how a discerning buyer approaches the rest of their home.
              </p>
              <p style={bodyText}>
                The kitchen receives Sub-Zero refrigeration, Wolf cooking equipment, and Miele
                appliances &mdash; investments that routinely exceed $100,000 not because cooking
                is their primary passion, but because they understand that their home should
                reflect a standard. That the experience of preparing a meal in a well-appointed
                kitchen is fundamentally different from doing so in an ordinary one.
              </p>
              <p style={bodyText}>
                The master bath receives radiant heated floors, steam showers with body spray
                systems, and fixtures sourced from European craftsmen. The wine cellar is
                climate-controlled to the degree. The garage houses vehicles whose engineering
                represents decades of racing heritage.
              </p>
              <p style={bodyText}>
                Every sensory experience in the home has been considered, elevated, and invested
                in accordingly.
              </p>
              <p style={bodyText}>
                Except one category of experience &mdash; and it isn&rsquo;t a single room.
              </p>
              <p style={bodyText}>
                It&rsquo;s every space where sound and vision shape the quality of an evening.
                The great room where the family settles after dinner. The outdoor living area
                where music sets the tone for a gathering. The dedicated theater room. The master
                bedroom. The bar or entertainment space in the lower level. Wherever time is
                spent and atmosphere matters &mdash; in home after home &mdash; these spaces
                receive the same equipment available at any consumer electronics retailer.
              </p>
              <p style={bodyText}>
                Not because it isn&rsquo;t worth more. Because no one told them it could be.
              </p>
            </div>

            {/* H2: What the Awareness Gap Actually Looks Like */}
            <GoldRule />
            <AnimateIn direction="up">
              <h2 className="font-serif text-pearl font-light mb-5" style={h2Style}>
                What the Awareness Gap Actually Looks Like
              </h2>
            </AnimateIn>
            <div className="space-y-5">
              <p style={bodyText}>
                The Sonos soundbar in the $8 million living room isn&rsquo;t a statement about
                priorities. It&rsquo;s a statement about information.
              </p>
              <p style={bodyText}>
                Most luxury homeowners have never experienced a properly designed, reference-level
                audio and video system. They&rsquo;ve heard good systems &mdash; perhaps at a
                friend&rsquo;s home, perhaps briefly in a showroom &mdash; but they&rsquo;ve
                never sat in a room that was designed from the floor up to deliver a specific
                acoustic and visual experience. They don&rsquo;t know what they&rsquo;re missing
                because they&rsquo;ve never been shown.
              </p>
              <p style={bodyText}>
                This is fundamentally different from every other luxury category.
              </p>
              <p style={bodyText}>
                A prospective buyer considering a kitchen renovation is surrounded by reference
                points. Architectural Digest features Sub-Zero. Their friends talk about their
                Wolf range. Their interior designer has strong opinions about appliance selection.
                The standard is visible, discussed, and aspired to.
              </p>
              <p style={bodyText}>
                Reference-level audio and video has no equivalent cultural visibility. The people
                who have it rarely discuss it. The industry that creates it communicates poorly
                with the buyers who could most benefit from it. And so the awareness gap persists
                &mdash; not from lack of interest, but from lack of exposure.
              </p>
            </div>

            {/* H2: The Investment Comparison */}
            <GoldRule />
            <AnimateIn direction="up">
              <h2 className="font-serif text-pearl font-light mb-5" style={h2Style}>
                The Investment Comparison That Changes the Conversation
              </h2>
            </AnimateIn>
            <div className="space-y-5">
              <p style={bodyText}>
                Here is a comparison worth sitting with.
              </p>
              <p style={bodyText}>
                A luxury kitchen is used, generously, perhaps two hours a day. For cooking, for
                casual gathering, for the morning routine. It is a room of extraordinary
                investment that serves its purpose well &mdash; but its hours of active use are
                limited.
              </p>
              <p style={bodyText}>
                Now consider the combined hours spent across every space where audio and video
                shape the experience &mdash; the great room, the outdoor terrace, the theater,
                the bedroom. Films, music, sporting events, family movie nights, dinner parties
                where the playlist matters as much as the menu. The cumulative hours of engagement
                in these spaces dwarf those of almost any other investment in the home. These are
                the spaces where the household actually lives when it isn&rsquo;t sleeping or
                working.
              </p>
              <p style={bodyText}>
                The logic that justifies $150,000 in kitchen appliances &mdash; that a superior
                experience is worth a serious investment, that quality compounds over years of
                daily use, that the home should reflect a standard &mdash; applies with even
                greater force to the spaces that receive the most daily attention.
              </p>
              <p style={bodyText}>
                The math is straightforward. The awareness, historically, has not been.
              </p>
            </div>

            <AnimateIn direction="up">
              <InvestmentComparison />
            </AnimateIn>

            {/* H2: What Reference Level Actually Means */}
            <GoldRule />
            <AnimateIn direction="up">
              <h2 className="font-serif text-pearl font-light mb-5" style={h2Style}>
                What Reference Level Actually Means
              </h2>
            </AnimateIn>
            <div className="space-y-5">
              <p style={bodyText}>
                When I use the term reference level, I mean something specific.
              </p>
              <p style={bodyText}>
                I mean a system calibrated to reproduce exactly what the recording artist, film
                director, and sound designer intended &mdash; with nothing added, nothing lost,
                and nothing distorted by the limitations of the equipment or the room.
              </p>
              <p style={bodyText}>
                I mean bass that you feel in your chest during the moments a film score demands
                it, not because the volume is high, but because the physics of the system and
                the room make that physical experience possible.
              </p>
              <p style={bodyText}>
                I mean a visual presentation &mdash; whether projection or display &mdash; that
                renders the image with the fidelity the cinematographer intended, in a room whose
                lighting has been designed to complement rather than compete with what&rsquo;s on
                screen.
              </p>
              <p style={bodyText}>
                I mean a system so well integrated that it disappears &mdash; where you stop
                thinking about the equipment entirely and simply experience what&rsquo;s in front
                of you.
              </p>
              <p style={bodyText}>
                And critically &mdash; this isn&rsquo;t limited to a dedicated theater room.
                Reference-level thinking applies to every space where experience matters. A great
                room system that fills the space with music without ever sounding like a speaker.
                An outdoor terrace where the audio performs as naturally as it does indoors. A
                master bedroom where a film plays with the same clarity and dimension as a proper
                cinema. The goal in each space is identical: the experience the content&rsquo;s
                creators intended, delivered without compromise in the environment where you
                actually live.
              </p>
            </div>

            {/* Subwoofer image */}
            <AnimateIn direction="up">
              <div className="my-10 relative overflow-hidden" style={{ aspectRatio: "16/7" }}>
                <Image
                  src="/images/craig-infrasonic-subwoofer.webp"
                  alt="Integrated infrasonic subwoofer in a reference home theater installation"
                  fill
                  className="object-cover object-center"
                  quality={85}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(0,0,0,0.22)" }}
                />
                <p
                  className="absolute bottom-0 left-0 right-0 px-5 py-3 font-sans"
                  style={{
                    background: "rgba(0,0,0,0.72)",
                    color: "#7a7a7a",
                    fontSize: "0.65rem",
                    letterSpacing: "0.08em",
                  }}
                >
                  Integrated infrasonic subwoofer &mdash; a reference home theater installation
                </p>
              </div>
            </AnimateIn>

            {/* H2: The Architecture Phase */}
            <GoldRule />
            <AnimateIn direction="up">
              <h2 className="font-serif text-pearl font-light mb-5" style={h2Style}>
                The Architecture Phase Is Where It Starts
              </h2>
            </AnimateIn>
            <div className="space-y-5">
              <p style={bodyText}>
                There is a structural reason the awareness gap persists, and it lives in timing.
              </p>
              <p style={bodyText}>
                The decisions that most profoundly affect how a home sounds and feels &mdash;
                room geometry, ceiling height, wall construction, conduit routing, structural
                blocking for speaker placement &mdash; are made during the architecture phase,
                long before a single piece of equipment is selected. These are decisions made by
                architects working from structural and aesthetic briefs, at a stage when audio
                and video performance isn&rsquo;t yet part of the conversation.
              </p>
              <p style={bodyText}>
                When performance is designed in from the beginning, the results are
                transformative. Speakers disappear seamlessly into walls and ceilings.
                Subwoofers integrate into the architecture itself rather than sitting as visible
                objects in a room. Conduit runs exactly where it needs to. The mechanical
                infrastructure that makes extraordinary performance possible is built into the
                home &mdash; invisible, purposeful, and permanent.
              </p>
              <p style={bodyText}>
                When it isn&rsquo;t, the results are compromises. Equipment gets placed where it
                fits rather than where it performs. Acoustic problems get addressed after the
                fact with treatments that are visible reminders of decisions that should have
                been made earlier. The system works &mdash; but it works around the room rather
                than with it.
              </p>
              <p style={bodyText}>
                The solution is to bring the performance specialist into the conversation at the
                architecture phase &mdash; alongside the architect and the design team, before
                the structural drawings are finalized. Not to redirect the design, but to ensure
                that the spaces where life is actually lived are designed to perform as
                beautifully as they look.
              </p>
              <p style={bodyText}>
                That conversation, had early enough, changes everything.
              </p>
            </div>

            {/* Dedicated theater image */}
            <AnimateIn direction="up">
              <div className="my-10 relative overflow-hidden" style={{ aspectRatio: "16/7" }}>
                <Image
                  src="/images/craig-dedicated-theater.webp"
                  alt="Dedicated reference home theater with leather seating and precision projection — Craig Abplanalp"
                  fill
                  className="object-cover object-center"
                  quality={85}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(0,0,0,0.18)" }}
                />
                <p
                  className="absolute bottom-0 left-0 right-0 px-5 py-3 font-sans"
                  style={{
                    background: "rgba(0,0,0,0.72)",
                    color: "#7a7a7a",
                    fontSize: "0.65rem",
                    letterSpacing: "0.08em",
                  }}
                >
                  A dedicated reference theater &mdash; designed from the floor up to perform
                </p>
              </div>
            </AnimateIn>

            {/* H2: A Different Kind of Investment */}
            <GoldRule />
            <AnimateIn direction="up">
              <h2 className="font-serif text-pearl font-light mb-5" style={h2Style}>
                A Different Kind of Investment
              </h2>
            </AnimateIn>
            <div className="space-y-5">
              <p style={bodyText}>
                I have spent over four decades helping clients understand what&rsquo;s possible
                in their homes. The conversation that changes things most reliably is not a
                technical one.
              </p>
              <p style={bodyText}>
                It is the moment someone sits in a properly designed room for the first time
                &mdash; when the system plays something they know well and they hear it,
                genuinely hear it, the way the people who made it intended for it to be heard.
                When the bass of an orchestra resolves into something physical. When a
                film&rsquo;s soundscape fills the room with a dimensionality they&rsquo;ve never
                experienced at home.
              </p>
              <p style={bodyText}>
                That moment reframes everything. The question is no longer whether to invest.
                The question becomes why they waited.
              </p>
              <p style={bodyText}>
                The awareness gap closes one conversation at a time. This is an invitation to
                have that conversation.
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
                experience designing reference-level audio and home theater environments. He
                works with architects, interior designers, and discerning homeowners throughout
                the Pacific Northwest to create spaces &mdash; dedicated theaters, great rooms,
                outdoor living areas, and beyond &mdash; where performance and design exist
                without compromise.
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
