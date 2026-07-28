"use client";

import { useEffect, useRef } from "react";

/**
 * Hero background video.
 *
 * `autoplay muted playsinline` is all a permissive browser needs, but mobile
 * refuses autoplay outright under iOS Low Power Mode, Android data saver, and
 * per-site autoplay settings. The `play()` promise simply rejects and the
 * poster stays frozen for the rest of the visit, because nothing ever tries
 * again. This retries on the first user gesture — a context where playback is
 * always permitted — so the hero recovers instead of staying a still image.
 */
export default function HeroVideo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // Also set as a property: an element that is not muted at play() time is
    // blocked, and the attribute alone can be lost across hydration.
    video.muted = true;

    const EVENTS = ["pointerdown", "touchstart", "keydown", "scroll"] as const;

    const attempt = () => {
      video.play().then(detach, () => {});
    };
    const detach = () => {
      EVENTS.forEach((e) => window.removeEventListener(e, attempt));
    };

    video.play().catch(() => {
      EVENTS.forEach((e) => window.addEventListener(e, attempt, { passive: true }));
    });

    return detach;
  }, []);

  return (
    <video
      ref={ref}
      className="v3-hero-media"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
