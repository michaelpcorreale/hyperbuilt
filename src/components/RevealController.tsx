"use client";

import { useEffect } from "react";

/**
 * Adds an `.in` class to every `.reveal` element as it scrolls into view,
 * driving a CSS fade/rise. Motion is an enhancement only: the `.motion`
 * class is what hides elements initially, and it is added by an inline
 * pre-paint script in <head> only when reduced-motion is not requested, so
 * content is always visible if JS/motion is unavailable.
 */
export default function RevealController() {
  useEffect(() => {
    if (!document.documentElement.classList.contains("motion")) return;
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
