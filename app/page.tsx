import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">

      {/* ── HERO BACKGROUND IMAGE ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/craig-hero.png"
          alt="Reference audio theater room"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* ── NAVIGATION ── */}
      <nav className="relative z-20 flex items-center justify-between px-10 py-6">

        {/* Logo */}
        <div className="flex flex-col">
          <span
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '18px',
              fontWeight: 400,
              color: '#d4b896',
              letterSpacing: '0.04em',
              lineHeight: 1.2,
            }}
          >
            Craig Abplanalp
          </span>
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '9px',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase' as const,
              color: 'rgba(212,184,150,0.6)',
              marginTop: '2px',
            }}
          >
            Reference Audio Specialist
          </span>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-10">
          {['Philosophy', 'Expertise', 'The Work', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(' ', '-')}`}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase' as const,
                color: 'rgba(255,255,255,0.85)',
                textDecoration: 'none',
              }}
            >
              {item}
            </Link>
          ))}

          {/* CTA Button */}
          <Link
            href="/contact"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase' as const,
              color: '#d4b896',
              border: '1px solid #d4b896',
              padding: '10px 22px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Start a Conversation
          </Link>
        </div>
      </nav>

      {/* ── HERO CONTENT ── */}
      <div
        className="relative z-10 flex flex-col justify-center px-16 pt-16 pb-32"
        style={{ minHeight: 'calc(100vh - 88px)' }}
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
          <span
            style={{
              display: 'inline-block',
              width: '40px',
              height: '1px',
              background: '#d4b896',
            }}
          />
          Craig Abplanalp
        </div>

        {/* Main Headline */}
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
        <div className="flex items-center gap-5">
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
        <div
          className="absolute bottom-10 left-1/2"
          style={{ transform: 'translateX(-50%)' }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column' as const,
              alignItems: 'center',
              gap: '8px',
            }}
          >
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
            <div
              style={{
                width: '1px',
                height: '40px',
                background: 'linear-gradient(180deg, rgba(212,184,150,0.6) 0%, transparent 100%)',
              }}
            />
          </div>
        </div>

      </div>
    </main>
  )
}
