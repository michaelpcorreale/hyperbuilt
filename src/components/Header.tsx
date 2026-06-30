"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <div className="header-inner">
        <a href="#top" className="header-logo" aria-label="Hyperbuilt home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/uploads/FullLogo.svg" alt="Hyperbuilt" />
        </a>
        <nav className="nav">
          <a href="#platform">Platform</a>
          <a href="#layer">Operating Layer</a>
          <a href="#network">Network</a>
          <a href="#founders">Founders</a>
        </nav>
        <a href="#founders" className="btn-sell">
          Sell Your Shop <span className="chev">&rsaquo;</span>
        </a>
      </div>
    </header>
  );
}
