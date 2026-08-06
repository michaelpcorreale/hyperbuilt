import { Fragment } from "react";
import { asset } from "@/lib/asset";
import HeroVideo from "@/components/v3/HeroVideo";

const PROCESS_STEPS = [
  { num: "01", label: "SCAN", icon: "icon-scan.svg", body: "Industrial CT and metrology capture the part inside and out, internal geometry included." },
  { num: "02", label: "ENGINEER", icon: "icon-file-text.svg", body: "We author the technical data package from measurement, not from a copy. It belongs to us." },
  { num: "03", label: "MAKE", icon: "icon-factory.svg", body: "The cell machines it unattended: robot-loaded, probe-qualified on every load." },
  { num: "04", label: "VERIFY", icon: "icon-check-circle.svg", body: "In-machine probing, an independent in-cell gauge, and a referee CMM. Three instruments, one model." },
  { num: "05", label: "APPROVE", icon: "icon-badge-check.svg", body: "The evidence assembles into a Source Approval Request (SAR). We're on the part number permanently." },
];

const SUBSYSTEMS = [
  {
    cls: "v3-sub-core",
    logo: "core-logo.png",
    name: "Core",
    tagline: "owns the record.",
    desc: "Event-sourced state, compliance traveler, release gates, scheduling against hard resource limits.",
    num: "SUBSYSTEM 02",
  },
  {
    cls: "v3-sub-cell",
    logo: "cell-logo.png",
    name: "Cell",
    tagline: "commands the floor.",
    desc: "Permissives, handshakes, and cell I/O on a deterministic controller.",
    num: "SUBSYSTEM 03",
  },
  {
    cls: "v3-sub-monitor",
    logo: "monitor-logo.png",
    name: "Monitor",
    tagline: "records the truth.",
    desc: "Real-time machine data feeding a historian. It reads; it commands nothing.",
    num: "SUBSYSTEM 04",
  },
];

const CAP_CARDS = [
  { title: "Processes", body: "3- and 5-axis milling · in-process probing" },
  { title: "Tolerance", body: `To ±0.0005" on critical features; ±0.001" routine` },
  {
    title: "Materials",
    body: "Aluminum · carbon and alloy steels · stainless (303/304/316, 15-5PH, 17-4PH) · titanium · nickel alloys (Inconel, Monel) · copper-nickel · nickel-aluminum bronze. Others on request.",
  },
  {
    title: "HMLV Autonomous Production",
    body: "High mix, low volume — lot sizes from one, changeovers measured in minutes. Robot-tended cell built for unattended operation — capacity that doesn't end at shift change.",
  },
  { title: "Inspection", body: "Probing · independent in-cell gauge · referee CMM · industrial CT" },
  {
    title: "Specialty",
    body: "Sole-source and obsolete part numbers — reverse engineered, qualified, and owned",
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
            The defense sourcing crisis{" "}
            <br />
            Fixed autonomously
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
              factories that run on it.
            </h2>
            <p className="sub">
              America can&rsquo;t make thousands of the parts it depends on. We built
              the system that can.
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
            <h2>From solicitation to shipment, without the queue.</h2>
            <p>
              Machined components for defense sustainment — quoted in a day,
              produced in a cell that doesn&rsquo;t stop at shift change.
            </p>
          </div>
          <div className="v3-cap-grid reveal-stagger">
            {CAP_CARDS.map((c) => (
              <div className="v3-cap-card" key={c.title}>
                <div className="v3-cap-accent" />
                <div className="v3-cap-card-title">{c.title}</div>
                <div className="v3-cap-card-body">{c.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section id="process" className="v3-section v3-process">
        <div
          className="v3-process-bg"
          style={{ backgroundImage: `url(${asset("/uploads/v3/process-bg.min.jpg")})` }}
        />
        <div className="v3-process-overlay" />
        <div className="v3-process-inner">
          <span className="v3-eyebrow reveal">Process</span>
          <div className="v3-process-intro reveal">
            <h2>We qualify what the industrial base can no longer supply.</h2>
            <p>
              Where the original manufacturer is gone and the data went with it, we
              rebuild both — and become an approved source for every future buy.
            </p>
          </div>

          <div className="v3-infographic reveal">
            <div className="v3-info-toplabel">
              <span className="v3-badge">HYPERBUILT-OWNED DATA, END TO END</span>
              <div className="v3-info-connector">
                <span className="v3-info-arrow">▸</span>
              </div>
              <span className="v3-badge v3-badge-grotesk">SOURCE APPROVAL PROCESS</span>
            </div>
            <div className="v3-flow">
              {PROCESS_STEPS.map((s, i) => (
                <Fragment key={s.num}>
                  <div className="v3-step">
                    <div className="v3-step-header">
                      <div className="v3-step-num">{s.num}</div>
                      <div className="v3-step-label">{s.label}</div>
                    </div>
                    <div className="v3-step-icon">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img loading="lazy" decoding="async" src={asset(`/uploads/v3/${s.icon}`)} alt="" />
                    </div>
                    <p className="v3-step-body">{s.body}</p>
                  </div>
                  {i < PROCESS_STEPS.length - 1 && (
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

          <div className="v3-timeline reveal">
            <div className="v3-timeline-head">
              <span className="v3-timeline-label">TIMELINE</span>
              <div className="v3-rule" />
            </div>
            <div className="v3-tl-row">
              <span className="v3-tl-rowlabel">THE OLD WAY</span>
              <div className="v3-tl-content">
                <div className="v3-tl-bar v3-tl-bar-old">
                  find a willing shop · hand reverse-engineering · manual SAR
                  paperwork · 12–18-month production leads, forever
                </div>
                <span className="v3-tl-note">Years — if anyone tries at all.</span>
              </div>
            </div>
            <div className="v3-tl-row">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" decoding="async" className="v3-tl-logo" src={asset("/uploads/v3/wordmark-sm.svg")} alt="Hyperbuilt" />
              <div className="v3-tl-content">
                <div className="v3-tl-bar v3-tl-bar-hb">scan · blueprint · verified part</div>
                <span className="v3-tl-note">
                  Engineering and production in days, not years — reorders ship at
                  machine speed.
                </span>
              </div>
            </div>
            <div className="v3-rule" />
          </div>
        </div>
      </section>

      {/* ============ BRAIN ============ */}
      <section id="brain" className="v3-brain">
        <div className="v3-brain-header">
          <span className="v3-eyebrow reveal">Brain</span>
          <div className="v3-brain-intro reveal">
            <h2>We wrote the layer that makes machines a factory.</h2>
            <p>
              Mills, a robot, and a controller are inventory until something
              coordinates them. The <b>[BRAIN]</b> is that something — and its
              authority is bounded by design.
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img loading="lazy" decoding="async" className="v3-brain-logo" src={asset("/uploads/v3/brain-logo.png")} alt="Hyperbuilt Brain" />
        </div>

        <div className="v3-brain-syslabel">
          <span>System Architecture</span>
          <span>4 Subsystems · Single Control Plane</span>
        </div>

        <div className="v3-brain-workbench reveal">
          <div className="v3-wb-panel">
            <div className="v3-wb-chrome">
              <span className="v3-wb-dot" />
              <span className="v3-wb-dot" />
              <span className="v3-wb-dot" />
              <div className="v3-wb-urlbar">hyperbuilt.com · workbench</div>
            </div>
            <div className="v3-wb-shot">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" decoding="async" src={asset("/uploads/v3/workbench.min.jpg")} alt="Hyperbuilt Workbench dashboard" />
            </div>
          </div>
          <div className="v3-wb-info">
            <span className="v3-wb-tag">
              <span className="v3-dot-green" />
              LIVE
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img loading="lazy" decoding="async" className="v3-wb-logo" src={asset("/uploads/v3/workbench-logo.png")} alt="Workbench" />
            <p className="v3-wb-headline">finds the work.</p>
            <p className="v3-wb-desc">
              Reads every government solicitation daily, screens the documents
              itself, prices each against award history.
            </p>
            <div className="v3-wb-divider" />
            <div className="v3-wb-stats">
              <div className="v3-wb-statline">
                <span className="v3-dot-green" />
                5,985 tracked · 3,068 live · $38.4M on the board
              </div>
              <p className="v3-wb-statnote">Updated daily at market open</p>
            </div>
          </div>
        </div>

        <div className="v3-brain-connector">
          <div className="v3-brain-conn-green" />
          <div className="v3-brain-conn-grey" />
        </div>

        <div className="v3-brain-subs reveal-stagger">
          {SUBSYSTEMS.map((s) => (
            <div className={`v3-sub-card ${s.cls}`} key={s.num}>
              <div className="v3-sub-accent" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" decoding="async" className="v3-sub-logo" src={asset(`/uploads/v3/${s.logo}`)} alt={s.name} />
              <div>
                <p className="v3-sub-tagline">{s.tagline}</p>
                <p className="v3-sub-desc">{s.desc}</p>
              </div>
              <span className="v3-sub-num">{s.num}</span>
            </div>
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" decoding="async" src={asset("/uploads/v3/cell-photo.min.jpg")} alt="Autonomous machining cell" />
            </div>
            <div className="v3-cell-badge">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" decoding="async" src={asset("/uploads/v3/icon-shield.svg")} alt="" />
              CELL 04
            </div>
            <div className="v3-cell-status">
              <span className="v3-cell-pill">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="lazy" decoding="async" src={asset("/uploads/v3/icon-check-circle-sm.svg")} alt="" />
                QUALIFIED
              </span>
              <span className="v3-cell-status-txt">MANNED → SUPERVISED</span>
            </div>
            <div className="v3-cell-metrics">
              <div className="v3-metric">
                <span>CYCLES</span>
                <span>12,480</span>
              </div>
              <div className="v3-metric">
                <span>INTERVENTIONS</span>
                <span>0.04%</span>
              </div>
            </div>
          </div>
          <div className="v3-ladder">
            <div className="v3-rung v3-rung-manned">
              <p className="v3-rung-label v3-rung-label-green">Current Status</p>
              <p className="v3-rung-title">MANNED</p>
              <p className="v3-rung-sub">the baseline.</p>
              <p className="v3-rung-desc">
                Every part measured, every cycle recorded. Operators run the cell
                with full manual control.
              </p>
            </div>
            <div className="v3-ladder-arrow v3-arrow-1">→</div>
            <div className="v3-rung v3-rung-supervised">
              <p className="v3-rung-label">Next Phase</p>
              <p className="v3-rung-title">SUPERVISED</p>
              <p className="v3-rung-sub">humans watch.</p>
              <p className="v3-rung-desc">
                The cell runs no-touch with humans monitoring and intervening when
                needed. Measured evidence earns each step.
              </p>
            </div>
            <div className="v3-ladder-arrow v3-arrow-2">→</div>
            <div className="v3-rung v3-rung-lights">
              <p className="v3-rung-label">Target</p>
              <p className="v3-rung-title">LIGHTS-OUT</p>
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
            <h2>Start a conversation.</h2>
            <p>
              Tell us what you&rsquo;re working on. If it involves controlled data,
              we&rsquo;ll open a secure channel.
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
            <p>Industrial defense systems built for speed, reliability, and control.</p>
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
