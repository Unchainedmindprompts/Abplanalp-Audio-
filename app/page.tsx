import Image from 'next/image'
import Link from 'next/link'
import AnimateIn from '@/components/craig/AnimateIn'

// ── Icons ──────────────────────────────────────────────────────────────────
function WaveformIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="12" width="2" height="8" rx="1" fill="#C9A84C" />
      <rect x="5" y="8" width="2" height="16" rx="1" fill="#C9A84C" />
      <rect x="9" y="4" width="2" height="24" rx="1" fill="#C9A84C" />
      <rect x="13" y="10" width="2" height="12" rx="1" fill="#C9A84C" />
      <rect x="17" y="6" width="2" height="20" rx="1" fill="#C9A84C" />
      <rect x="21" y="10" width="2" height="12" rx="1" fill="#C9A84C" />
      <rect x="25" y="8" width="2" height="16" rx="1" fill="#C9A84C" />
      <rect x="29" y="12" width="2" height="8" rx="1" fill="#C9A84C" />
    </svg>
  )
}

function CertBadgeIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="14" r="9" stroke="#C9A84C" strokeWidth="1.5" />
      <path d="M11 14l3 3 6-6" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 22l-2 6 8-3 8 3-2-6" stroke="#C9A84C" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

function FilmFrameIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="6" width="28" height="20" rx="2" stroke="#C9A84C" strokeWidth="1.5" />
      <rect x="2" y="10" width="5" height="12" rx="0" stroke="#C9A84C" strokeWidth="1.5" />
      <rect x="25" y="10" width="5" height="12" rx="0" stroke="#C9A84C" strokeWidth="1.5" />
      <line x1="9" y1="6" x2="9" y2="26" stroke="#C9A84C" strokeWidth="1" />
      <line x1="23" y1="6" x2="23" y2="26" stroke="#C9A84C" strokeWidth="1" />
      <rect x="12" y="12" width="8" height="8" rx="1" fill="none" stroke="#C9A84C" strokeWidth="1.5" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen w-full overflow-hidden bg-black">

        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/craig-hero.png"
            alt="Reference audio theater room"
            fill
            priority
            className="object-cover object-center"
            quality={90}
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* Hero Content */}
        <div
          className="relative z-10 flex flex-col justify-center px-6 sm:px-16 pt-32 pb-32"
          style={{ minHeight: '100vh' }}
        >
          {/* Eyebrow */}
          <div
            className="flex items-center gap-4 mb-8"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase' as const,
              color: '#d4b896',
            }}
          >
            <span style={{ display: 'inline-block', width: '40px', height: '1px', background: '#d4b896' }} />
            Craig Abplanalp
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              maxWidth: '760px',
              lineHeight: 1.08,
              margin: '0 0 32px 0',
            }}
          >
            <span style={{ display: 'block', fontSize: 'clamp(52px, 6vw, 88px)', fontWeight: 300, color: '#ffffff', letterSpacing: '-0.01em' }}>
              Some people buy
            </span>
            <span style={{ display: 'block', fontSize: 'clamp(52px, 6vw, 88px)', fontWeight: 300, color: '#ffffff', letterSpacing: '-0.01em' }}>
              home theaters.
            </span>
            <span style={{ display: 'block', fontSize: 'clamp(52px, 6vw, 88px)', fontWeight: 300, fontStyle: 'italic', color: '#ffffff', letterSpacing: '-0.01em' }}>
              A few pursue something
            </span>
            <span style={{ display: 'block', fontSize: 'clamp(52px, 6vw, 88px)', fontWeight: 300, fontStyle: 'italic', color: '#ffffff', letterSpacing: '-0.01em' }}>
              else entirely.
            </span>
          </h1>

          {/* Sub-headline */}
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '18px',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '48px',
              maxWidth: '520px',
              letterSpacing: '0.01em',
              lineHeight: 1.6,
            }}
          >
            Craig Abplanalp has spent four decades building the difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/contact"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase' as const,
                color: '#1a1208',
                background: '#d4b896',
                padding: '16px 32px',
                textDecoration: 'none',
                display: 'inline-block',
                border: '1px solid #d4b896',
              }}
            >
              Start a Conversation
            </Link>
            <Link
              href="/philosophy"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase' as const,
                color: '#d4b896',
                background: 'transparent',
                padding: '16px 32px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                border: '1px solid #d4b896',
              }}
            >
              The Philosophy
              <span style={{ fontSize: '14px' }}>→</span>
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2" style={{ transform: 'translateX(-50%)' }}>
            <div style={{ display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '9px',
                  fontWeight: 600,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase' as const,
                  color: 'rgba(212,184,150,0.6)',
                }}
              >
                Scroll
              </span>
              <div style={{ width: '1px', height: '40px', background: 'linear-gradient(180deg, rgba(212,184,150,0.6) 0%, transparent 100%)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS ── */}
      <section className="bg-void section-padding border-t border-slate/30">
        <div className="craig-container">
          <AnimateIn>
            <div className="text-center mb-16 md:mb-20">
              <p className="text-gold uppercase tracking-widest font-sans mb-4" style={{ fontSize: '0.7rem', letterSpacing: '0.24em' }}>
                The Foundation
              </p>
              <h2
                className="font-serif text-pearl font-light"
                style={{ fontSize: 'clamp(1.875rem, 4vw, 3.25rem)', letterSpacing: '-0.01em' }}
              >
                Forty Years. One Standard.
              </h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <WaveformIcon />,
                title: 'The Philosophy',
                body: 'Some systems are built to impress. Craig builds systems that disappear — leaving only the music, the film, and the feeling of being there. Four decades of listening, learning, and getting it right for the client in front of him.',
                href: '/philosophy',
                delay: 0,
              },
              {
                icon: <CertBadgeIcon />,
                title: 'The Expertise',
                body: 'THX certified. Trinnov trained. CEDIA board member. Forty-five years at the frontier — from Audio Associates and Sound Components to leading one of the Pacific Northwest\'s most respected firms. The experience to know what works, and the honesty to tell you what doesn\'t.',
                href: '/expertise',
                delay: 0.1,
              },
              {
                icon: <FilmFrameIcon />,
                title: 'The Work',
                body: 'Reference-level music rooms. Private cinemas designed to pull you in and hold you there. Systems that earn editorial coverage in TechRadar and recognition at CEDIA Best of Show — because the results speak for themselves.',
                href: '/work',
                delay: 0.2,
              },
            ].map(({ icon, title, body, href, delay }) => (
              <AnimateIn key={title} delay={delay} direction="up">
                <Link href={href} className="block group h-full">
                  <div
                    className="cinema-card relative p-8 md:p-10 h-full cursor-pointer"
                    style={{ borderTop: '1px solid #C9A84C' }}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}
                    />
                    <div className="mb-6">{icon}</div>
                    <h3
                      className="font-serif text-pearl mb-4 font-light"
                      style={{ fontSize: '1.625rem', letterSpacing: '-0.01em' }}
                    >
                      {title}
                    </h3>
                    <p className="text-mist text-sm leading-relaxed font-sans mb-6" style={{ lineHeight: '1.75' }}>
                      {body}
                    </p>
                    <span className="text-link-gold text-xs uppercase tracking-widest flex items-center gap-2" style={{ letterSpacing: '0.14em' }}>
                      Explore <ArrowRight />
                    </span>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORIGIN STORY TEASER ── */}
      <section className="relative py-28 md:py-40 overflow-hidden" style={{ background: '#0d0d0d' }}>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(ellipse, #C9A84C, transparent 70%)' }}
        />
        <div className="craig-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateIn>
              <div className="flex items-center justify-center gap-6 mb-10">
                <div className="gold-divider" style={{ width: '40px' }} />
                <span className="text-gold uppercase tracking-widest font-sans" style={{ fontSize: '0.65rem', letterSpacing: '0.24em' }}>
                  Origin
                </span>
                <div className="gold-divider" style={{ width: '40px' }} />
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <blockquote
                className="pull-quote text-pearl mb-10"
                style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)', lineHeight: '1.7' }}
              >
                &ldquo;In the late 1990s, Craig was driving Wilson Audio Grand Slams with dedicated
                Mark Levinson No.&nbsp;33 Monoblocks &mdash; one amplifier per speaker &mdash;
                in a home theater at a time when most people had never heard the term.&rdquo;
              </blockquote>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p
                className="text-center"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#d4b896', marginTop: '2rem', marginBottom: '2rem' }}
              >
                The standard hasn&rsquo;t changed. The technology has caught up.
              </p>
              <div className="gold-divider mb-10" />
              <Link href="/philosophy" className="text-link-gold uppercase flex items-center justify-center gap-2" style={{ letterSpacing: '0.15em', fontSize: '0.75rem' }}>
                Read the full story <ArrowRight />
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── ASCENDO FEATURE ── */}
      <section className="section-padding" style={{ background: '#111111' }}>
        <div className="craig-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimateIn direction="left">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/ascendo.jpeg"
                  alt="Ascendo Immersive Audio speaker system"
                  fill
                  className="object-cover object-center"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.3) 0%, transparent 60%)' }}
                />
                <div className="absolute bottom-6 left-6">
                  <span className="text-mist/60 uppercase tracking-widest font-sans" style={{ fontSize: '0.6rem', letterSpacing: '0.25em' }}>
                    Ascendo Immersive Audio
                  </span>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn direction="right" delay={0.15}>
              <div>
                <p className="text-gold uppercase tracking-widest font-sans mb-5" style={{ fontSize: '0.7rem', letterSpacing: '0.24em' }}>
                  Current Partnership
                </p>
                <h2
                  className="font-serif text-pearl font-light mb-8 leading-tight"
                  style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)', letterSpacing: '-0.01em' }}
                >
                  The Instrument Has Evolved.
                  <br />
                  <span className="italic" style={{ color: 'rgba(201,168,76,0.9)' }}>The Standard Hasn&rsquo;t.</span>
                </h2>
                <div className="space-y-5 text-mist font-sans leading-relaxed" style={{ fontSize: '0.9375rem', lineHeight: '1.8' }}>
                  <p>
                    After decades working with the world&rsquo;s finest audio brands &mdash; Mark Levinson,
                    Wilson Audio, Revel, Wisdom Audio, Kaleidescape &mdash; Craig has found in Ascendo
                    Immersive Audio the most complete expression of everything he has pursued.
                  </p>
                  <p>
                    Infrasonic bass that pressurizes the room. Coaxial precision that places every
                    sound exactly where it belongs. Reference-level immersion without compromise.
                  </p>
                  <p style={{ color: 'rgba(245,245,245,0.85)' }}>Not marketing. Physics.</p>
                </div>
                <div className="mt-10">
                  <Link href="/work" className="text-link-gold uppercase flex items-center gap-2" style={{ letterSpacing: '0.15em', fontSize: '0.75rem' }}>
                    Discover what&rsquo;s possible <ArrowRight />
                  </Link>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: '#0a0a0a' }}>
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)' }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)' }}
        />
        <div className="craig-container">
          <AnimateIn>
            <div className="text-center mb-12">
              <p className="text-gold uppercase tracking-widest font-sans" style={{ fontSize: '0.65rem', letterSpacing: '0.25em' }}>
                Client Experiences
              </p>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate">
            {[
              { quote: 'I didn\u2019t know this was possible.', delay: 0 },
              { quote: 'It stopped being sound. It became physical.', delay: 0.1 },
              { quote: 'Nothing has been the same since.', delay: 0.2 },
            ].map(({ quote, delay }) => (
              <AnimateIn key={quote} delay={delay} direction="up">
                <div className="text-center px-4 py-8 md:px-8">
                  <div className="quote-mark mb-2">&ldquo;</div>
                  <p
                    className="font-serif italic text-pearl/90"
                    style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.625rem)', lineHeight: '1.5', fontWeight: 300 }}
                  >
                    {quote}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={0.3}>
            <div className="text-center mt-14">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
                Begin the Conversation <ArrowRight />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── CREDENTIALS STRIP ── */}
      <section className="py-12 border-t border-b border-slate/50" style={{ background: '#111111' }}>
        <div className="craig-container">
          <AnimateIn direction="none">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {['THX Level 1 & 2 Certified', 'Trinnov Optimizer Certified', 'CEDIA RP22 Certified', 'CEDIA Board Member', '40+ Years Experience', 'Ascendo Authorized'].map((cred) => (
                <div key={cred} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-gold" />
                  <span className="text-mist font-sans uppercase tracking-widest" style={{ fontSize: '0.65rem', letterSpacing: '0.18em' }}>
                    {cred}
                  </span>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-28 md:py-40" style={{ background: '#0a0a0a' }}>
        <div className="craig-container text-center">
          <AnimateIn>
            <div className="gold-divider mb-10" />
            <h2
              className="font-serif text-pearl font-light mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em', lineHeight: '1.15' }}
            >
              Ready to pursue
              <br />
              <span className="italic" style={{ color: 'rgba(201,168,76,0.9)' }}>something extraordinary?</span>
            </h2>
            <p className="text-mist font-sans mb-12 max-w-lg mx-auto" style={{ fontSize: '1rem', lineHeight: '1.75' }}>
              Reference-level immersive audio begins with a conversation. No sales pitch. Just
              an honest discussion about what&rsquo;s possible and whether it&rsquo;s right for your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-gold-solid">
                Start a Conversation
              </Link>
              <Link href="/expertise" className="btn-gold">
                Explore the Expertise
              </Link>
            </div>
            <div className="gold-divider mt-10" />
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
