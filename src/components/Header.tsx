"use client";

import { useEffect, useState } from "react";
import { asset } from "@/lib/asset";

const NAV_LINKS = [
  { href: "#platform", label: "Platform" },
  { href: "#layer", label: "Operating Layer" },
  { href: "#network", label: "Network" },
  { href: "#founders", label: "Founders" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header${scrolled || menuOpen ? " scrolled" : ""}`}>
      <div className="header-inner">
        <a href="#top" className="header-logo" aria-label="Hyperbuilt home" onClick={closeMenu}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/uploads/FullLogo.svg")} alt="Hyperbuilt" />
        </a>
        <nav className="nav">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#founders" className="btn-sell">
          Sell Your Shop <span className="chev">&rsaquo;</span>
        </a>
        <button
          type="button"
          className={`nav-toggle${menuOpen ? " open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <nav className="mobile-nav">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={closeMenu}>
              {l.label}
            </a>
          ))}
          <a href="#founders" className="mobile-sell" onClick={closeMenu}>
            Sell Your Shop <span className="chev">&rsaquo;</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
