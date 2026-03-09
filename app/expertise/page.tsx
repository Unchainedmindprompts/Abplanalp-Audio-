import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/craig/PageHero";
import AnimateIn from "@/components/craig/AnimateIn";

export const metadata: Metadata = {
  title: "Expertise | Craig Abplanalp — Four Decades at the Frontier",
  description:
    "From Audio Associates and Sound Components to building and leading Definitive Audio — Craig Abplanalp's four-decade career has been defined by one unbroken standard: reference-level performance.",
  alternates: {
    canonical: "https://www.craigabplanalp.com/expertise",
  },
  openGraph: {
    title: "Expertise | Craig Abplanalp",
    description:
      "Four decades at the absolute frontier of reference-level home theater and immersive audio.",
    url: "https://www.craigabplanalp.com/expertise",
    type: "website",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Craig Abplanalp",
  jobTitle: "Custom Sales Manager",
  description:
    "Reference-level home theater and immersive audio specialist with over four decades of experience. Former President of Definitive Audio. THX, Trinnov, and CEDIA certified. Specializes in designing, installing, and calibrating reference-level music and movie systems for residential clients across the Pacific Northwest.",
  url: "https://www.craigabplanalp.com",
  telephone: "206.650.9017",
  email: "craig@craigabplanalp.com",
  image: "https://www.craigabplanalp.com/images/craig-hero.png",
  worksFor: {
    "@type": "Organization",
    name: "Definitive Audio",
    url: "https://definitive.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bellevue",
      addressRegion: "WA",
      addressCountry: "US",
    },
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "THX Level 1 Certified",
      recognizedBy: { "@type": "Organization", name: "THX" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "THX Level 2 Certified",
      recognizedBy: { "@type": "Organization", name: "THX" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "Trinnov Optimizer Certified",
      recognizedBy: { "@type": "Organization", name: "Trinnov" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "CEDIA RP22 Certified",
      recognizedBy: { "@type": "Organization", name: "CEDIA" },
    },
  ],
  memberOf: {
    "@type": "Organization",
    name: "CEDIA",
    description: "Custom Electronics Design & Installation Association",
  },
  knowsAbout: [
    "Reference-level home theater design",
    "Immersive audio systems",
    "Dolby Atmos",
    "Auro-3D",
    "DTS:X",
    "Room acoustics and calibration",
    "Trinnov room correction",
    "THX certified system design",
    "Wilson Audio loudspeakers",
    "Mark Levinson amplification",
    "Ascendo Immersive Audio",
    "Kaleidescape media systems",
    "Wisdom Audio",
    "Revel loudspeakers",
    "Residential lighting design",
    "LED lighting control",
    "Lutron lighting systems",
    "Custom AV integration",
    "High-performance two-channel audio",
    "Private cinema design",
    "Reference music room design",
  ],
  alumniOf: [
    {
      "@type": "Organization",
      name: "Audio Associates",
      description: "High-end audio retailer, Laurel, Maryland",
    },
    {
      "@type": "Organization",
      name: "Sound Advice",
    },
    {
      "@type": "Organization",
      name: "Sound Components",
      description: "High-end audio retailer, Coral Gables, Florida",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Seattle", containedInPlace: { "@type": "State", name: "Washington" } },
    { "@type": "City", name: "Bellevue", containedInPlace: { "@type": "State", name: "Washington" } },
    { "@type": "AdministrativeArea", name: "Pacific Northwest" },
    { "@type": "AdministrativeArea", name: "Western Washington" },
  ],
  knowsPerson: [
    {
      "@type": "Person",
      name: "Peter McGrath",
      jobTitle: "Recording Engineer",
      description: "Highly respected recording engineer and founder of Sound Components",
    },
    {
      "@type": "Person",
      name: "David Wilson",
      jobTitle: "Founder",
      worksFor: { "@type": "Organization", name: "Wilson Audio" },
    },
  ],
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Craig Abplanalp — Reference Audio",
  description:
    "Reference-level home theater design, immersive audio installation, and system calibration for residential clients in the Pacific Northwest. Specializing in Ascendo Immersive Audio, THX-certified designs, and Trinnov-optimized room correction.",
  url: "https://www.craigabplanalp.com",
  telephone: "206.650.9017",
  email: "craig@craigabplanalp.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bellevue",
    addressRegion: "WA",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Seattle" },
    { "@type": "City", name: "Bellevue" },
    { "@type": "City", name: "Kirkland" },
    { "@type": "City", name: "Redmond" },
    { "@type": "City", name: "Mercer Island" },
    { "@type": "AdministrativeArea", name: "Pacific Northwest" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Reference Audio Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Reference Home Theater Design",
          description:
            "Complete design and installation of THX-certified, reference-level private cinema systems",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Immersive Audio System Installation",
          description:
            "Ascendo Immersive Audio, Dolby Atmos, Auro-3D, and DTS:X system design and calibration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Trinnov Room Correction and Calibration",
          description:
            "Professional room measurement, correction, and Trinnov Optimizer calibration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Reference Music Room Design",
          description:
            "Two-channel and multi-channel high-performance music listening room design",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Residential Lighting Design and Control",
          description:
            "Integrated lighting and lighting control design for residential AV environments",
        },
      },
    ],
  },
  knowsAbout: [
    "Ascendo Immersive Audio",
    "THX certified home theater",
    "Trinnov room correction",
    "Wilson Audio",
    "Mark Levinson",
    "Kaleidescape",
    "Dolby Atmos",
    "Reference audio systems",
    "Private cinema design",
    "Residential lighting control",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What certifications does Craig Abplanalp hold?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Craig Abplanalp holds THX Level 1 and Level 2 certifications, Trinnov Optimizer certification, and CEDIA RP22 certification. He has also served as a board member of CEDIA, the Custom Electronics Design & Installation Association, where he contributed to industry training initiatives.",
      },
    },
    {
      "@type": "Question",
      name: "How long has Craig Abplanalp been in the audio industry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Craig Abplanalp has over 40 years of experience in the high-performance audio industry, beginning his career at Audio Associates in Laurel, Maryland in 1978. He went on to work at Sound Advice and Sound Components in Coral Gables, Florida before joining Definitive Audio in Seattle in 1993, where he eventually became President before the company's sale in 2018.",
      },
    },
    {
      "@type": "Question",
      name: "What audio brands does Craig Abplanalp specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Craig Abplanalp has deep expertise with Wilson Audio, Mark Levinson, Revel, Wisdom Audio, Kaleidescape, and is currently an authorized specialist for Ascendo Immersive Audio — a brand he considers the most complete expression of reference-level immersive audio available today.",
      },
    },
    {
      "@type": "Question",
      name: "Where does Craig Abplanalp work and what area does he serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Craig Abplanalp is based in Bellevue, Washington and serves clients throughout the Pacific Northwest, including Seattle, Bellevue, Kirkland, Redmond, and Mercer Island. He currently works as Custom Sales Manager at Definitive Audio in Bellevue, WA.",
      },
    },
    {
      "@type": "Question",
      name: "Does Craig Abplanalp offer lighting design in addition to audio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Craig Abplanalp's expertise extends beyond audio and video to include residential lighting design and lighting control. He integrates lighting as part of a complete system performance approach, creating spaces that are visually comfortable, acoustically optimized, and intuitive for clients to manage.",
      },
    },
    {
      "@type": "Question",
      name: "Who influenced Craig Abplanalp's approach to audio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Craig Abplanalp's philosophy was significantly shaped by Peter McGrath, the respected recording engineer and founder of Sound Components, and by David Wilson, founder of Wilson Audio. Working with both gave Craig a direct understanding of the recording process and what it takes to accurately recreate live music in a residential environment.",
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

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="8.25" stroke="#C9A84C" strokeWidth="1.5" />
      <path d="M5.5 9l2.5 2.5 4.5-4.5" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const timeline = [
  {
    era: "1978–1993",
    title: "The Foundation",
    body: [
      "Craig's journey began at Audio Associates in Laurel, Maryland — one of the finest high-end audio retailers of its era. From there he continued his development at Sound Advice and later Sound Components in Coral Gables, Florida, gaining hands-on experience with many of the world's finest audio systems.",
      "During his time at Sound Components, Craig had the privilege of working with Peter McGrath, a highly respected recording engineer and founder. Through Peter's deep passion for loudspeakers capable of reproducing the sound of live music, Craig was introduced to David Wilson, founder of Wilson Audio.",
      "This experience opened the door to a deeper understanding of the recording process and what it truly takes to recreate the sound and emotional impact of a live musical performance in the home. Learning directly from those involved in both recording and loudspeaker design proved invaluable.",
      "For Craig, these years represented the most formative learning period of his career — shaping the philosophy that would guide every system he would design in the decades to follow.",
    ],
  },
  {
    era: "1993–2018",
    title: "Building Something Extraordinary",
    body: [
      "Craig joined Definitive Audio in 1993 as a salesperson in the Seattle showroom. Later that same year, he was asked to take on the responsibility of managing the company's new Bellevue showroom — an opportunity that quickly demonstrated both his leadership and his ability to build lasting client relationships.",
      "Through years of hard work, successful projects, and an unwavering commitment to performance system design, Craig rose through the organization to become a partner and ultimately President of the company.",
      "During the next 25 years, Craig helped transform Definitive Audio into one of the Pacific Northwest's most respected high-performance audio and custom installation firms. Under his leadership, the company delivered some of the region's most ambitious residential entertainment systems — including reference-level music rooms and private cinemas designed to rival the experience of the world's finest commercial theaters.",
      "In 2018, after a quarter century of growth, leadership, and industry influence, the company was successfully sold — marking the close of a defining chapter in Craig's career and the beginning of a new phase focused once again on the craft he loves most.",
    ],
  },
  {
    era: "2018–Present",
    title: "The Next Frontier",
    body: [
      "Following the sale of the company in 2018, Craig continued with Definitive Audio as Custom Sales Manager, returning to his primary passion — designing, installing, and calibrating reference-level music and movie systems.",
      "In recent years, lighting has also become an increasingly important part of the design process. The industry-wide transition from incandescent lighting to LED technology — driven largely by energy efficiency — has created both new opportunities and new challenges in residential environments.",
      "Craig's commitment to performance extends beyond audio and video to include lighting and lighting control. By carefully integrating these elements, he helps create spaces that feel natural, visually comfortable, and effortless for clients to manage.",
      "Today, Craig's role is best described as that of a system performance specialist — bringing together audio, video, lighting, and control to ensure every element works in harmony to create environments that are immersive, intuitive, and truly exceptional.",
    ],
  },
];

const certifications = [
  {
    title: "THX Level 1 & 2 Certified",
    trainer: "THX",
    description:
      "Trained by the people who literally invented cinema sound standards. THX certification is the industry's gold standard for acoustic performance — and Craig holds both levels.",
  },
  {
    title: "Trinnov Optimizer Certified",
    trainer: "Trinnov",
    description:
      "Certified in the gold standard of immersive audio room correction and processing. Trinnov Optimizer calibration delivers measurable, reference-level results that untrained ears cannot achieve.",
  },
  {
    title: "CEDIA RP22 Certified",
    trainer: "CEDIA",
    description:
      "Certified in the industry's definitive recommended practice for immersive audio design — the framework that defines how properly engineered immersive systems are conceived and executed.",
  },
  {
    title: "CEDIA Board Member",
    trainer: "Custom Electronics Design & Installation Association",
    description:
      "As a board member of CEDIA, Craig contributed to industry training initiatives and helped expand awareness of performance audio within the custom integration community.",
  },
  {
    title: "40+ Years Experience",
    trainer: "1978 – Present",
    description:
      "Four decades working directly with the world's finest audio systems, brands, and clients — from Audio Associates and Sound Components to Definitive Audio and beyond.",
  },
  {
    title: "Ascendo Immersive Audio Authorized",
    trainer: "Ascendo Immersive Audio",
    description:
      "Authorized specialist for Ascendo Immersive Audio — a system Craig considers the most complete expression of reference-level immersive audio available today.",
  },
];

const brands = [
  { name: "Wilson Audio", note: "Grand Slams, WATT/Puppy" },
  { name: "Mark Levinson", note: "No. 33 Monoblocks, multi-channel" },
  { name: "Ascendo", note: "Current partnership, immersive audio" },
  { name: "Revel", note: "Performa & Ultima series" },
  { name: "Wisdom Audio", note: "Planar magnetic systems" },
  { name: "Kaleidescape", note: "Cinema-grade video systems" },
  { name: "Trinnov", note: "Altitude room processing" },
  { name: "Sony", note: "Professional projectors" },
];

export default function ExpertisePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        eyebrow="The Expertise"
        title="Forty Years."
        subtitle="One standard — held without exception from 1978 to today."
      />

      {/* CAREER TIMELINE */}
      <section className="section-padding" style={{ background: "#0d0d0d" }}>
        <div className="craig-container">
          <AnimateIn>
            <div className="flex items-center gap-6 mb-16">
              <div className="gold-divider-left" />
              <span className="text-gold uppercase tracking-widest font-sans" style={{ fontSize: "0.65rem", letterSpacing: "0.24em" }}>
                The Journey
              </span>
            </div>
          </AnimateIn>

          <div className="max-w-4xl">
            <div className="relative">
              {/* Vertical timeline line */}
              <div
                className="absolute left-0 top-0 bottom-0 w-px hidden md:block"
                style={{ background: "linear-gradient(to bottom, transparent, #C9A84C 10%, #C9A84C 90%, transparent)" }}
              />

              <div className="space-y-0">
                {timeline.map((item, i) => (
                  <AnimateIn key={item.era} delay={i * 0.15} direction="up">
                    <div className="relative md:pl-14 pb-16 md:pb-20">
                      {/* Timeline dot */}
                      <div
                        className="hidden md:block absolute left-[-5px] top-2 w-[10px] h-[10px] rounded-full"
                        style={{ background: "#C9A84C", boxShadow: "0 0 12px rgba(201,168,76,0.4)" }}
                      />

                      <span
                        className="inline-block text-gold uppercase tracking-widest font-sans mb-3"
                        style={{ fontSize: "0.7rem", letterSpacing: "0.2em" }}
                      >
                        {item.era}
                      </span>
                      <h3
                        className="font-serif text-pearl font-light mb-5"
                        style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", letterSpacing: "-0.01em" }}
                      >
                        {item.title}
                      </h3>
                      <div
                        className="text-mist font-sans leading-relaxed space-y-4"
                        style={{ fontSize: "1rem", lineHeight: "1.85", maxWidth: "660px" }}
                      >
                        {item.body.map((para, j) => (
                          <p key={j}>{para}</p>
                        ))}
                      </div>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section-padding" style={{ background: "#111111" }}>
        <div className="craig-container">
          <AnimateIn>
            <div className="mb-16">
              <div className="flex items-center gap-6 mb-8">
                <div className="gold-divider-left" />
                <span className="text-gold uppercase tracking-widest font-sans" style={{ fontSize: "0.65rem", letterSpacing: "0.24em" }}>
                  Certifications
                </span>
              </div>
              <h2
                className="font-serif text-pearl font-light"
                style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)", letterSpacing: "-0.01em" }}
              >
                Credentials That Cannot Be Faked
              </h2>
              <p className="text-mist font-sans mt-4 max-w-2xl" style={{ fontSize: "1rem", lineHeight: "1.75" }}>
                These aren&rsquo;t marketing badges. They represent direct training from the people who invented
                the standards — the researchers, engineers, and technologists who defined what reference-level
                audio means.
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {certifications.map((cert, i) => (
              <AnimateIn key={cert.title} delay={i * 0.08} direction="up">
                <div className="cert-card p-8 h-full">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="mt-0.5 flex-shrink-0">
                      <CheckIcon />
                    </div>
                    <div>
                      <h3 className="font-serif text-pearl font-light" style={{ fontSize: "1.25rem", letterSpacing: "-0.005em" }}>
                        {cert.title}
                      </h3>
                      <p className="text-gold/70 font-sans text-xs mt-1 tracking-wide" style={{ fontSize: "0.75rem" }}>
                        {cert.trainer}
                      </p>
                    </div>
                  </div>
                  <p className="text-mist font-sans text-sm leading-relaxed" style={{ lineHeight: "1.8", paddingLeft: "2.25rem" }}>
                    {cert.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* KEY RELATIONSHIPS */}
      <section className="section-padding" style={{ background: "#0d0d0d" }}>
        <div className="craig-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* The Todd relationship */}
            <div>
              <AnimateIn>
                <div className="flex items-center gap-6 mb-10">
                  <div className="gold-divider-left" />
                  <span className="text-gold uppercase tracking-widest font-sans" style={{ fontSize: "0.65rem", letterSpacing: "0.24em" }}>
                    Trust Built Over Decades
                  </span>
                </div>
                <h2
                  className="font-serif text-pearl font-light mb-8"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.01em" }}
                >
                  The Relationships That Define the Work
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <div className="space-y-6 font-sans text-pearl/80 leading-relaxed" style={{ fontSize: "1rem", lineHeight: "1.85" }}>
                  <p>
                    Some of the most important credentials cannot be printed on a certificate.
                    Craig&rsquo;s 20+ year relationship with Todd Sutherland &mdash; spanning
                    the Madrigal/Mark Levinson era through Wisdom Audio, Kaleidescape, and now
                    Ascendo &mdash; represents something deeper than a business partnership.
                  </p>
                  <p>
                    It represents trust. The kind that accumulates when someone has seen your
                    work for two decades and still calls you first.
                  </p>
                  <p>
                    When the U.S. importer of Ascendo Immersive Audio has a client who demands
                    reference-level results in the Pacific Northwest, there is one person he
                    calls.
                  </p>
                  <p
                    className="font-serif italic text-pearl"
                    style={{ fontSize: "1.25rem", lineHeight: "1.55" }}
                  >
                    That says more than any certification.
                  </p>
                </div>
              </AnimateIn>
            </div>

            {/* Brand experience */}
            <div>
              <AnimateIn delay={0.1}>
                <div className="flex items-center gap-6 mb-10">
                  <div className="gold-divider-left" />
                  <span className="text-gold uppercase tracking-widest font-sans" style={{ fontSize: "0.65rem", letterSpacing: "0.24em" }}>
                    The Brands
                  </span>
                </div>
                <h3
                  className="font-serif text-pearl font-light mb-8"
                  style={{ fontSize: "clamp(1.375rem, 3vw, 2rem)", letterSpacing: "-0.01em" }}
                >
                  Four Decades of Working with the World&rsquo;s Best
                </h3>
              </AnimateIn>

              <div className="space-y-3">
                {brands.map((brand, i) => (
                  <AnimateIn key={brand.name} delay={i * 0.06} direction="left">
                    <div
                      className="flex items-center justify-between py-4 border-b"
                      style={{ borderColor: "rgba(42,42,42,0.8)" }}
                    >
                      <span className="font-serif text-pearl font-light" style={{ fontSize: "1.125rem" }}>
                        {brand.name}
                      </span>
                      <span className="text-mist font-sans text-xs tracking-wide" style={{ fontSize: "0.75rem" }}>
                        {brand.note}
                      </span>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE NUMBER */}
      <section
        className="py-24 md:py-32 relative overflow-hidden"
        style={{ background: "#111111" }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(ellipse, #C9A84C, transparent 70%)" }}
        />
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)" }}
        />
        <div className="craig-container relative z-10 text-center">
          <AnimateIn>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 max-w-3xl mx-auto">
              {[
                { number: "40+", label: "Years of Experience" },
                { number: "6", label: "Certifications & Board Roles" },
                { number: "1", label: "Unbroken Standard" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="font-serif text-gold font-light"
                    style={{ fontSize: "clamp(3rem, 6vw, 5rem)", letterSpacing: "-0.03em", lineHeight: 1 }}
                  >
                    {stat.number}
                  </div>
                  <p className="text-mist font-sans uppercase tracking-widest mt-3" style={{ fontSize: "0.7rem", letterSpacing: "0.2em" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-slate/50" style={{ background: "#0a0a0a" }}>
        <div className="craig-container text-center">
          <AnimateIn>
            <div className="max-w-2xl mx-auto">
              <div className="gold-divider mb-10" />
              <h3
                className="font-serif text-pearl font-light mb-6"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", letterSpacing: "-0.01em" }}
              >
                Ready to see what expertise
                <br />
                <span className="italic" style={{ color: "rgba(201,168,76,0.9)" }}>actually delivers?</span>
              </h3>
              <p className="text-mist font-sans mb-10 leading-relaxed" style={{ fontSize: "1rem" }}>
                Explore the work that this four-decade foundation has produced, or start a
                conversation directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/work" className="btn-gold-solid">
                  See the Work
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
