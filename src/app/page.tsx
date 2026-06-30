/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header";
import RevealController from "@/components/RevealController";
import { asset } from "@/lib/asset";

export default function Home() {
  return (
    <>
      <Header />
      <RevealController />

      <main>
        {/* ---------- Hero ---------- */}
        <section id="top" className="hero section-line">
          <video
            className="media-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={asset("/uploads/moment-bg.min.jpg")}
          >
            <source src={asset("/uploads/hero.mp4")} type="video/mp4" />
          </video>
          <div className="hero-scrim" />
          <div className="hero-content reveal">
            <h1>Made in America. Built for what&rsquo;s next.</h1>
            <p>
              We acquire founder-led precision machine shops that have quietly made
              flight-critical parts for defense and aerospace for decades — and modernize
              them into highly automated, software-driven factories.
            </p>
          </div>
        </section>

        {/* ---------- The Moment ---------- */}
        <section id="moment" className="moment section-line">
          <img className="media-cover" src={asset("/uploads/moment-bg.min.jpg")} alt="" />
          <div className="moment-scrim" />
          <div className="moment-grid">
            <div className="reveal">
              <span className="eyebrow">The Moment</span>
              <h2 className="h-section">A generation built the arsenal. They&rsquo;re retiring.</h2>
            </div>
            <div className="body reveal">
              <p>
                For forty years, founder-operators ran the precision shops behind America&rsquo;s
                most critical hardware — the flight-critical parts that defense and aerospace
                depend on. As that generation retires, hard-won capacity and the institutional
                knowledge inside it are at risk of going dark.
              </p>
              <p>
                Hyperbuilt exists to preserve what they built, invest in the people who built it,
                and scale it for what the nation needs next.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- Photo band ---------- */}
        <section className="band section-line">
          <img
            className="media-cover"
            src={asset("/uploads/pexels-mc1012can-8969442.min.jpg")}
            alt=""
          />
          <div className="band-scrim" />
          <div className="band-content reveal">
            <span className="eyebrow">Inside The Network</span>
            <p>Forty years of craft, re-platformed for autonomy.</p>
          </div>
        </section>

        {/* ---------- The Platform ---------- */}
        <section id="platform" className="section-line">
          <div className="wrap" style={{ paddingTop: 88, paddingBottom: 88 }}>
            <div className="platform-head reveal">
              <div>
                <span className="eyebrow">The Platform</span>
                <h2 className="h-section">
                  We don&rsquo;t flip shops.
                  <br />
                  We rebuild them.
                </h2>
              </div>
              <p className="lede">
                A disciplined model: acquire proven capacity, keep the people and pedigree
                intact, and re-platform the factory on automation and software.
              </p>
            </div>
            <div className="cards3">
              {[
                {
                  img: "/uploads/acquire-factory.min.jpg",
                  alt: "Precision machine shop floor",
                  step: "01 / Acquire",
                  title: "Proven, qualified capacity",
                  body: "We acquire founder-led precision machine shops with decades of qualified, flight-critical production for defense and aerospace customers.",
                },
                {
                  img: "/uploads/pexels-bulat843-1243575272-38190063.min.jpg",
                  alt: "Machinist at work",
                  step: "02 / Preserve",
                  title: "People & pedigree",
                  body: "We keep what makes a shop exceptional — its people, its certifications, its reputation — and invest in their future rather than stripping them for parts.",
                },
                {
                  img: "/uploads/pexels-freek-wolsink-508219-34207359.min.jpg",
                  alt: "Robotic automation cell",
                  step: "03 / Modernize",
                  title: "Lights-out automation",
                  body: "We bring lights-out automation and a unified operating layer, turning craft-and-grit shops into highly automated, software-driven factories.",
                },
              ].map((c) => (
                <div className="card reveal" key={c.step}>
                  <div className="card-media">
                    <img src={asset(c.img)} alt={c.alt} />
                  </div>
                  <div className="card-body">
                    <span className="card-step">{c.step}</span>
                    <h3>{c.title}</h3>
                    <p>{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Operating Layer ---------- */}
        <section id="layer" className="layer section-line">
          <img className="media-cover" src={asset("/uploads/layer-bg2.min.jpg")} alt="" />
          <div className="layer-scrim" />
          <div className="layer-grid">
            <div className="copy reveal">
              <span className="eyebrow">The Operating Layer</span>
              <h2 className="h-section">One operating system across every factory.</h2>
              <p>
                Every shop in the network runs on Hyperbuilt&rsquo;s unified operating layer —
                connecting quoting, scheduling, machining, and quality into a single software
                backbone. Craft becomes data. Grit becomes throughput.
              </p>
              <div className="chips">
                <span className="chip">Quoting</span>
                <span className="chip">Scheduling</span>
                <span className="chip">Machining</span>
                <span className="chip">Quality</span>
              </div>
            </div>
            <div className="layer-panel reveal">
              <video className="media-cover" autoPlay muted loop playsInline>
                <source src={asset("/uploads/layer.mp4")} type="video/mp4" />
              </video>
              <div className="panel-scrim" />
              <span className="panel-tag left">HYPERBUILT.OS</span>
              <span className="panel-tag right">
                <span className="dot pulse" />
                Live
              </span>
            </div>
          </div>
        </section>

        {/* ---------- The Result / Network ---------- */}
        <section id="network" className="result section-line">
          <img className="result-watermark" src={asset("/uploads/IconLogo.svg")} alt="" />
          <div className="result-inner">
            <div className="result-head reveal">
              <span className="eyebrow">The Result</span>
              <h2 className="h-section">A growing network of qualified American factories.</h2>
              <p>
                Producing the precision components that defend the nation and rebuild its
                industrial base — faster, more reliably, and made in America.
              </p>
            </div>
            <div className="network-card reveal">
              <span className="tag left">// The Network</span>
              <span className="tag right">
                <span className="dot" />
                Expanding
              </span>
              <img
                className="graphic"
                src={asset("/uploads/network-graphic.svg")}
                alt="Hyperbuilt factory network"
              />
            </div>
            <div className="outcomes">
              <div className="outcome reveal">
                <span className="num">01</span>
                <h3>Faster</h3>
                <p>
                  Automation and a shared operating layer compress lead times across the network.
                </p>
              </div>
              <div className="outcome reveal">
                <span className="num">02</span>
                <h3>More reliable</h3>
                <p>
                  Qualified processes and software-driven quality mean repeatable, flight-critical
                  output.
                </p>
              </div>
              <div className="outcome reveal">
                <span className="num">03</span>
                <h3>Made in America 🇺🇸</h3>
                <p>A domestic supply base for the components the nation depends on.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- For Founders ---------- */}
        <section id="founders" className="founders section-line">
          <video className="media-cover" autoPlay muted loop playsInline>
            <source src={asset("/uploads/founders.mp4")} type="video/mp4" />
          </video>
          <div className="founders-scrim" />
          <div className="founders-inner">
            <div className="founders-content reveal">
              <span className="eyebrow">For Founders</span>
              <h2>Spent your life building something flight-critical?</h2>
              <p>
                We&rsquo;ll carry it forward. If you&rsquo;ve spent decades building a precision
                shop that matters, Hyperbuilt will honor that legacy, take care of your team, and
                give what you built its next chapter — with the capital and technology to scale.
              </p>
              <div className="founders-cta">
                <a href="mailto:founders@hyperbuilt.com" className="btn-primary">
                  Start A Conversation <span className="chev">&rsaquo;</span>
                </a>
                <a href="#platform" className="btn-ghost">
                  See The Platform <span className="chev">&rsaquo;</span>
                </a>
              </div>
              <div className="benefits">
                {[
                  "We keep your team",
                  "Your name stays on the door",
                  "Fair, founder-friendly terms",
                  "Capital to modernize",
                ].map((b) => (
                  <div className="benefit" key={b}>
                    <span className="arrow">&rsaquo;</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Footer ---------- */}
        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-grid">
              <div>
                <img src={asset("/uploads/FullLogo.svg")} alt="Hyperbuilt" />
                <p className="footer-about">
                  America&rsquo;s autonomous precision manufacturing platform — preserving and
                  modernizing the shops that build flight-critical hardware.
                </p>
              </div>
              <div>
                <div className="footer-col-title">Platform</div>
                <div className="footer-links">
                  <a href="#platform">How it works</a>
                  <a href="#layer">Operating layer</a>
                  <a href="#network">The network</a>
                </div>
              </div>
              <div>
                <div className="footer-col-title">Company</div>
                <div className="footer-links">
                  <a href="#moment">Our thesis</a>
                  <a href="#founders">For founders</a>
                </div>
              </div>
              <div>
                <div className="footer-col-title">Connect</div>
                <div className="footer-links">
                  <a href="mailto:founders@hyperbuilt.com">Sell your shop</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <span className="footer-copy">© 2026 Hyperbuilt</span>
              <div className="footer-meta">
                <span>Made In America 🇺🇸</span>
                <span className="sep">/</span>
                <span>Precision Manufacturing</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
