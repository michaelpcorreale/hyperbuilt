"use client";

import { useEffect, useState } from "react";
import { asset } from "@/lib/asset";

const NAV_LINKS = [
  { href: "#mission", label: "Mission" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#process", label: "Process" },
  { href: "#brain", label: "Brain" },
  { href: "#factory", label: "Factory" },
];

export default function V3Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <header className="v3-header">
      <div className="v3-nav-pill">
        <a href="#top" className="v3-logo" aria-label="Hyperbuilt home" onClick={close}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/uploads/v3/logo-wordmark.svg")} alt="Hyperbuilt" />
        </a>
        <nav className="v3-nav">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="v3-contact-btn">
          CONTACT &gt;
        </a>
        <button
          type="button"
          className={`v3-nav-toggle${menuOpen ? " open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`v3-mobile-menu${menuOpen ? " open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>
            {l.label}
          </a>
        ))}
        <a href="#contact" onClick={close}>
          Contact
        </a>
      </div>
    </header>
  );
}
