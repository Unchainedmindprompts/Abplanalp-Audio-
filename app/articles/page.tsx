import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/craig/PageHero";
import AnimateIn from "@/components/craig/AnimateIn";

export const metadata: Metadata = {
  title: "Articles | Craig Abplanalp — Reference Audio Thinking",
  description:
    "Perspectives on high-performance audio system design, room acoustics, immersive audio, and the philosophy behind reference-level listening environments — written by Craig Abplanalp.",
  alternates: {
    canonical: "https://www.craigabplanalp.com/articles",
  },
  openGraph: {
    title: "Articles | Craig Abplanalp",
    description:
      "Philosophy-driven articles on high-performance audio system design, immersive audio, and reference-level listening environments.",
    url: "https://www.craigabplanalp.com/articles",
    type: "website",
  },
};

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Article card type — ready to accept real content when articles are published
interface ArticleCard {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

const articles: ArticleCard[] = [
  {
    slug: "why-your-home-theater-doesnt-feel-like-a-movie-theater",
    title: "Why Your Home Theater Doesn't Feel Like a Movie Theater — And How to Fix It",
    date: "March 11, 2026",
    excerpt:
      "The gap between a great commercial cinema and your home theater has a name: room pressurization. Here's what infrasonic bass does, why most systems can't reproduce it, and what it takes to close that gap.",
  },
];

export default function ArticlesPage() {
  return (
    <>
      <PageHero
        eyebrow="Perspectives"
        title="The Thinking Behind the Work."
        subtitle="Articles on high-performance audio design, room acoustics, and what it truly takes to build a reference-level listening environment."
      />

      {/* ARTICLE LISTING */}
      <section className="section-padding" style={{ background: "#0d0d0d" }}>
        <div className="craig-container">
          <AnimateIn>
            <div className="flex items-center gap-6 mb-16">
              <div className="gold-divider-left" />
              <span
                className="text-gold uppercase tracking-widest font-sans"
                style={{ fontSize: "0.65rem", letterSpacing: "0.24em" }}
              >
                Articles
              </span>
            </div>
          </AnimateIn>

          {articles.length > 0 ? (
            <div className="space-y-px">
              {articles.map((article, i) => (
                <AnimateIn key={article.slug} delay={i * 0.08} direction="up">
                  <Link
                    href={`/articles/${article.slug}`}
                    className="group block py-10 border-b"
                    style={{ borderColor: "rgba(42,42,42,0.8)" }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-12">
                      <div className="flex-1 max-w-2xl">
                        <span
                          className="text-mist font-sans uppercase tracking-widest block mb-3"
                          style={{ fontSize: "0.65rem", letterSpacing: "0.2em" }}
                        >
                          {article.date}
                        </span>
                        <h2
                          className="font-serif text-pearl font-light mb-4 group-hover:text-gold transition-colors duration-300"
                          style={{ fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)", letterSpacing: "-0.01em" }}
                        >
                          {article.title}
                        </h2>
                        <p
                          className="text-mist font-sans leading-relaxed"
                          style={{ fontSize: "0.9375rem", lineHeight: "1.8" }}
                        >
                          {article.excerpt}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-gold font-sans text-xs tracking-widest uppercase md:pt-8 shrink-0">
                        <span>Read</span>
                        <ArrowRight />
                      </div>
                    </div>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          ) : (
            <AnimateIn direction="up">
              <div
                className="py-24 text-center border"
                style={{ borderColor: "rgba(42,42,42,0.8)" }}
              >
                <div className="gold-divider mx-auto mb-10" />
                <p
                  className="font-serif text-pearl font-light mb-3"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", letterSpacing: "-0.01em" }}
                >
                  Articles coming soon.
                </p>
                <p className="text-mist font-sans" style={{ fontSize: "0.9375rem" }}>
                  Craig is putting his thoughts to paper. Check back shortly.
                </p>
                <div className="gold-divider mx-auto mt-10" />
              </div>
            </AnimateIn>
          )}
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
                Ready to go deeper?
                <br />
                <span className="italic" style={{ color: "rgba(201,168,76,0.9)" }}>Start a conversation.</span>
              </h3>
              <p className="text-mist font-sans mb-10 leading-relaxed" style={{ fontSize: "1rem" }}>
                Four decades of thinking about reference-level audio is best explored directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/expertise" className="btn-gold-solid">
                  Explore the Expertise
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
