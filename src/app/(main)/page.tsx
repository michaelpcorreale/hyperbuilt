import { Fragment } from "react";
import { asset } from "@/lib/asset";
import HeroVideo from "@/components/v3/HeroVideo";
import InViewVideo from "@/components/v3/InViewVideo";

const SERVICE_STEPS = [
  {
    num: "01",
    label: "YOUR PART",
    icon: "icon-file-text.svg",
    body: "A 2D file, a spec and a volume. That is the whole ask from your side.",
  },
  {
    num: "02",
    label: "ITS OWN CELL",
    icon: "icon-scan.svg",
    body: "We design the cell around that part: fixturing, gripper, program, probing routine and gauge plan — set up and left set up.",
  },
  {
    num: "03",
    label: "LIGHTS-OUT",
    icon: "icon-factory.svg",
    body: "The cell earns unattended hours on measured evidence, then runs your part through the night.",
  },
  {
    num: "04",
    label: "IN TRACE",
    icon: "icon-check-circle.svg",
    body: "Cell status, quantities complete, measurements and ship dates — live, alongside a digital twin of the cell running your part.",
  },
];

const CELL_STATS = [
  { label: "Cell", value: "04" },
  { label: "Status", value: "Qualified", accent: true },
  { label: "Stage", value: "Manned → Supervised" },
  { label: "Cycles", value: "12,480" },
  { label: "Interventions", value: "0.04%" },
];

const SUBSYSTEMS = [
  {
    cls: "v3-sub-strategy",
    logo: "strat-logo.svg",
    name: "Strat",
    tagline: "turns a print into a cell.",
    desc: "CAD from the 2D file, CAM for the mill-turn, and the CMM routine that proves it — with the fixturing, gripper and gauge plan that go with them.",
    num: "SUBSYSTEM 01",
  },
  {
    cls: "v3-sub-core",
    logo: "core-logo.svg",
    name: "Core",
    tagline: "owns the record.",
    desc: "Event-sourced state, compliance traveler, release gates and scheduling — plus every probe, gauge and CMM measurement, tied to the part it came from. The record Trace reads from.",
    num: "SUBSYSTEM 02",
  },
  {
    cls: "v3-sub-cell",
    logo: "cell-logo.svg",
    name: "Cell",
    tagline: "commands the floor.",
    desc: "Permissives, handshakes, and cell I/O on a deterministic controller.",
    num: "SUBSYSTEM 03",
  },
  {
    cls: "v3-sub-monitor",
    logo: "monitor-logo.svg",
    name: "Monitor",
    tagline: "records the truth.",
    desc: "Real-time machine data feeding a historian. It reads; it commands nothing.",
    num: "SUBSYSTEM 04",
  },
];

const CAP_CARDS = [
  {
    title: "Rocket motor hardware",
    body: "Non-energetic solid rocket motor components, 2.75 to 12 inches in diameter — nozzle shells and housings, throat-insert retainers, igniter bodies, closures and motor case hardware.",
  },
  {
    title: "Missile structures",
    body: "Fins, lugs, adapters and inert fuze bodies — turned bodies with milled features, and concentricity called out between bore and face.",
  },
  {
    title: "Aluminum structures",
    body: "Brackets, housings, adapters and airframe fittings in 6061 and 7075 for missile, UAS and satellite builders.",
  },
  {
    title: "Processes",
    body: "Mill-turn first — turned and milled in one setup, because every re-fixture stacks error. 5-axis and high-speed milling for prismatic and aluminum work.",
  },
  {
    title: "Materials",
    body: "17-4PH · 15-5PH · 4340 · 300M · titanium · Inconel · aluminum 6061 and 7075",
  },
  {
    title: "Evidence",
    body: "In-process probing · in-cell gauging · DCC CMM in a climate-controlled room — every measurement attached to the part it came from, and visible to you.",
  },
];

export default function V3Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section id="top" className="v3-hero">
        <HeroVideo
          src={asset("/uploads/v3/hero.mp4")}
          poster={asset("/uploads/v3/hero-poster.jpg")}
        />
        <div className="v3-hero-scrim" />
        <div className="v3-hero-inner v3-wrap reveal">
          <h1>
            The defense supply&nbsp;chain{" "}
            <br />
            Autonomous and visible
          </h1>
        </div>
        <div className="v3-scroll-hint">
          <span>Scroll to Explore</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img loading="lazy" decoding="async" src={asset("/uploads/v3/scroll-arrow.svg")} alt="" />
        </div>
      </section>

      {/* ============ MISSION ============ */}
      <section id="mission" className="v3-section v3-mission">
        <div className="v3-wrap v3-mission-inner">
          <div className="v3-mission-copy reveal">
            <span className="v3-eyebrow">Mission</span>
            <h2>
              We built the <b>[BRAIN]</b> for autonomous manufacturing — and the
              visibility that comes with it.
            </h2>
            <p className="sub">
              Defense parts vanish into a supply chain nobody can see. We build cells
              that run themselves &mdash; and show you every part they make, as they
              make it.
            </p>
            <p className="flag">Made in America 🇺🇸</p>
          </div>
        </div>
        <div className="v3-mission-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            loading="lazy"
            decoding="async"
            src={asset("/uploads/v3/mission.min.jpg")}
            alt="Operator monitoring an automated manufacturing floor on a tablet"
          />
        </div>
        <div className="v3-mission-whiterect" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img loading="lazy" decoding="async" className="v3-mission-chevron" src={asset("/uploads/v3/chevron-right.svg")} alt="" />
      </section>

      {/* ============ CAPABILITIES ============ */}
      <section id="capabilities" className="v3-section v3-cap">
        <div
          className="v3-cap-bg"
          style={{ backgroundImage: `url(${asset("/uploads/v3/capabilities-bg.min.jpg")})` }}
        />
        <div className="v3-cap-fade" />
        <div className="v3-cap-inner">
          <span className="v3-eyebrow reveal">Capabilities</span>
          <div className="v3-cap-intro reveal">
            <h2>From purchase order to delivery, visible the whole way.</h2>
            <p>
              Turned hard-metal hardware for missiles and solid rocket motors,
              plus aluminum structures — machined in dedicated cells for primes
              and their top-tier suppliers.
            </p>
          </div>
          <div className="v3-cap-grid reveal-stagger">
            {CAP_CARDS.map((c) => (
              <div className="v3-cap-card" key={c.title}>
                <div className="v3-cap-accent" />
                <h3 className="v3-cap-card-title">{c.title}</h3>
                <div className="v3-cap-card-body">{c.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MANUFACTURING AS A SERVICE ==== */}
      <section id="process" className="v3-section v3-deploy">
        <div className="v3-deploy-inner">
          <span className="v3-eyebrow reveal">Process</span>
          <p className="v3-deploy-kicker reveal">Manufacturing as a Service</p>
          <div className="v3-deploy-intro reveal">
            <h2>Your part number gets its own cell.</h2>
            <p>
              You don&rsquo;t buy the machine, hire the operator or wait behind
              someone else&rsquo;s work. We build an automated cell around your part,
              run it on our floor, and give you the record it produces.
            </p>
          </div>
          <p className="v3-deploy-oldway reveal">
            The old way: a supplier buys a machine for your part, or squeezes it onto
            one that is already busy — and your part number queues behind everything
            else on that floor.
          </p>
          <div className="v3-infographic reveal">
            <div className="v3-info-toplabel">
              <span className="v3-badge">YOUR PART NUMBER</span>
              <div className="v3-info-connector">
                <span className="v3-info-arrow">▸</span>
              </div>
              <span className="v3-badge v3-badge-grotesk">A CELL OF ITS OWN</span>
            </div>
            <div className="v3-flow">
              {SERVICE_STEPS.map((st, i) => (
                <Fragment key={st.num}>
                  <div className="v3-step">
                    <div className="v3-step-header">
                      <div className="v3-step-num">{st.num}</div>
                      <h3 className="v3-step-label">{st.label}</h3>
                    </div>
                    <div className="v3-step-icon">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img loading="lazy" decoding="async" src={asset(`/uploads/v3/${st.icon}`)} alt="" />
                    </div>
                    <p className="v3-step-body">{st.body}</p>
                  </div>
                  {i < SERVICE_STEPS.length - 1 && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      loading="lazy"
                      decoding="async"
                      className="v3-step-connector"
                      src={asset("/uploads/v3/step-connector.svg")}
                      alt=""
                    />
                  )}
                </Fragment>
              ))}
            </div>
          </div>
          <div className="v3-twin reveal">
            <div className="v3-twin-media">
              <InViewVideo
                src={asset("/uploads/v3/cell-animation.mp4")}
                poster={asset("/uploads/v3/cell-animation-poster.jpg")}
                label="Digital twin of a rail-robot mill-turn cell"
              />
              <span className="v3-twin-tag">Digital twin · concept animation</span>
            </div>
            <div className="v3-twin-copy">
              <h3>You watch the cell, not a status field.</h3>
              <p>
                Every cell we build ships with a digital twin — the same geometry and
                motion as the machine cutting your part. It sits in Trace next to the
                order it is running, so &ldquo;in production&rdquo; is something you
                can see rather than something we tell you.
              </p>
            </div>
          </div>

          <p className="v3-deploy-note reveal">
            For motor makers, munitions lines and primes carrying part numbers that
            deserve a dedicated cell — our capital, our floor, your part.
          </p>
        </div>
      </section>

      {/* ============ BRAIN ============ */}
      <section id="brain" className="v3-brain">
        <div className="v3-brain-header">
          <span className="v3-eyebrow reveal">Brain</span>
          <div className="v3-brain-intro reveal">
            <h2>We wrote the layer that runs the factory and opens it up.</h2>
            <p>
              Mill-turns, mills, a robot and a controller are inventory until something
              coordinates them. The <b>[BRAIN]</b> is that something — and its
              authority is bounded by design. Four subsystems take a part from print
              to proof. One view opens it to you.
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img loading="lazy" decoding="async" className="v3-brain-logo" src={asset("/uploads/v3/brain-logo.png")} alt="Hyperbuilt Brain" />
        </div>

        <div className="v3-lane v3-lane--customer reveal">
          <span className="v3-lane-side">Your side</span>
          <span className="v3-lane-title">Customer-facing</span>
          <span className="v3-lane-hint">One view. No login to our floor required.</span>
        </div>

        <div className="v3-brain-workbench reveal">
          <div className="v3-wb-panel">
            <div className="v3-wb-chrome">
              <span className="v3-wb-dot" />
              <span className="v3-wb-dot" />
              <span className="v3-wb-dot" />
              <div className="v3-wb-urlbar">hyperbuilt.com · trace</div>
            </div>
            <div className="v3-wb-shot">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" decoding="async" src={asset("/uploads/v3/trace.min.jpg")} alt="Trace dashboard: open orders, cell fleet status, delivery status and ship dates — sample data, in build" />
            </div>
          </div>
          <div className="v3-wb-info">
            <span className="v3-wb-tag v3-wb-tag--build">
              <span className="v3-dot-green" />
              IN BUILD
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img loading="lazy" decoding="async" className="v3-wb-logo" src={asset("/uploads/v3/trace-logo.svg")} alt="Trace" />
            <p className="v3-wb-headline">shows the work.</p>
            <p className="v3-wb-desc">
              Every order you place, live: which cell is running it, how many are
              complete, the measurements behind them, and the date they ship — plus a
              digital twin of your cell, the same geometry and motion as the machine
              cutting your part.
            </p>
            <div className="v3-wb-divider" />
            <div className="v3-wb-stats">
              <p className="v3-wb-statnote">Sample data — live ingest in build</p>
            </div>
          </div>
        </div>

        <div className="v3-brain-link reveal">
          <span className="v3-brain-link-arrow" />
          <span className="v3-brain-link-text">
            Trace reads the record from Core. Nothing flows the other way.
          </span>
        </div>

        <div className="v3-lane v3-lane--internal reveal">
          <span className="v3-lane-side">Our side</span>
          <span className="v3-lane-title">Internal control plane</span>
          <span className="v3-lane-hint">The [BRAIN] proposes · Core authorizes · 4 subsystems</span>
        </div>

        <div className="v3-brain-subs reveal-stagger">
          {SUBSYSTEMS.map((s, i) => (
            <Fragment key={s.num}>
              {i > 0 && (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  loading="lazy"
                  decoding="async"
                  className="v3-sub-arrow"
                  src={asset("/uploads/v3/step-connector.svg")}
                  alt=""
                />
              )}
            <div className={`v3-sub-card ${s.cls}`}>
              <div className="v3-sub-accent" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" decoding="async" className="v3-sub-logo" src={asset(`/uploads/v3/${s.logo}`)} alt={s.name} />
              <div>
                <p className="v3-sub-tagline">{s.tagline}</p>
                <p className="v3-sub-desc">{s.desc}</p>
              </div>
              <span className="v3-sub-num">{s.num}</span>
            </div>
            </Fragment>
          ))}
        </div>

        <div className="v3-brain-quote reveal">
          <div className="v3-quote-bar" />
          <p>
            The <b>[BRAIN]</b> proposes. CORE authorizes. Nothing writes to a
            machine on its own.
          </p>
        </div>
      </section>

      {/* ============ FACTORY ============ */}
      <section id="factory" className="v3-factory">
        <div
          className="v3-factory-bg"
          style={{ backgroundImage: `url(${asset("/uploads/v3/factory-bg.min.jpg")})` }}
        />
        <span className="v3-eyebrow reveal">Factory</span>
        <h2 className="v3-factory-h reveal">Autonomy is earned, not assumed.</h2>
        <p className="v3-factory-sub reveal">
          Every robot load is qualified by measurement, never by trust. Part
          families graduate from manned to supervised to unattended production only
          on measured evidence — never on a calendar.
        </p>
        <div className="v3-cell-ladder reveal">
          <div className="v3-cell-photo">
            <div className="v3-cell-photo-media">
              <InViewVideo
                src={asset("/uploads/v3/cell-animation.mp4")}
                poster={asset("/uploads/v3/cell-animation-poster.jpg")}
                label="Concept animation: a rail-mounted robot tending two mill-turn machines"
              />
            </div>
            <div className="v3-cell-bar">
              {CELL_STATS.map((st) => (
                <div className="v3-stat" key={st.label}>
                  <span className="v3-stat-label">{st.label}</span>
                  <span className={`v3-stat-value${st.accent ? " v3-stat-value--accent" : ""}`}>
                    {st.accent && <span className="v3-stat-dot" />}
                    {st.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="v3-ladder">
            <div className="v3-rung v3-rung-manned">
              <p className="v3-rung-label v3-rung-label-green">Current Status</p>
              <h3 className="v3-rung-title">MANNED</h3>
              <p className="v3-rung-sub">the baseline.</p>
              <p className="v3-rung-desc">
                Every part measured, every cycle recorded. Operators run the cell
                with full manual control.
              </p>
            </div>
            <div className="v3-ladder-arrow v3-arrow-1">→</div>
            <div className="v3-rung v3-rung-supervised">
              <p className="v3-rung-label">Next Phase</p>
              <h3 className="v3-rung-title">SUPERVISED</h3>
              <p className="v3-rung-sub">humans watch.</p>
              <p className="v3-rung-desc">
                The cell runs no-touch with humans monitoring and intervening when
                needed. Measured evidence earns each step.
              </p>
            </div>
            <div className="v3-ladder-arrow v3-arrow-2">→</div>
            <div className="v3-rung v3-rung-lights">
              <p className="v3-rung-label">Target</p>
              <h3 className="v3-rung-title">LIGHTS-OUT</h3>
              <p className="v3-rung-sub">earned on evidence.</p>
              <p className="v3-rung-desc">
                Sustained no-touch success, an intervention-rate threshold, and
                fault-injection testing passed. Calendar dates don&rsquo;t advance
                the ladder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" className="v3-contact">
        <div
          className="v3-contact-bg"
          style={{ backgroundImage: `url(${asset("/uploads/v3/contact-bg.min.jpg")})` }}
        />
        <div className="v3-contact-overlay" />
        <span className="v3-eyebrow reveal">Contact</span>
        <div className="v3-contact-divider reveal" />
        <div className="v3-contact-content reveal">
          <div className="v3-contact-left">
            <h2>Send us a part number.</h2>
            <p>
              Tell us the part number you can&rsquo;t get on time. If it involves
              controlled data, we&rsquo;ll open a secure channel.
            </p>
          </div>
          <div className="v3-contact-right">
            <span className="label">CONTACT</span>
            <a href="mailto:hello@hyperbuilt.com">hello@hyperbuilt.com</a>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="v3-footer">
        <div className="v3-footer-top reveal">
          <div className="v3-footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img loading="lazy" decoding="async" src={asset("/uploads/v3/footer-logo.svg")} alt="Hyperbuilt" />
            <p>Machined hardware for missiles and munitions. Autonomous cells, visible end to end. Made in America.</p>
          </div>
          <nav className="v3-footer-links">
            <a href="#mission">MISSION</a>
            <span className="sep">·</span>
            <a href="#capabilities">CAPABILITIES</a>
            <span className="sep">·</span>
            <a href="#process">PROCESS</a>
            <span className="sep">·</span>
            <a href="#brain">BRAIN</a>
            <span className="sep">·</span>
            <a href="#factory">FACTORY</a>
          </nav>
        </div>
        <div className="v3-footer-divider" />
        <div className="v3-footer-bottom">
          <span className="copy">COPYRIGHT © 2026 HYPERBUILT INDUSTRIES</span>
          <span className="origin">🇺🇸 MADE IN AMERICA</span>
        </div>
      </footer>
    </>
  );
}
