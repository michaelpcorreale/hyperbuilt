"use client";

import { useEffect, useRef } from "react";

/**
 * Looping, muted section video that only downloads and plays while on screen.
 *
 * `preload="none"` keeps it from competing with the hero for bandwidth on first
 * load; playback starts when a quarter of it scrolls into view and pauses when
 * it leaves, so an offscreen loop never burns CPU. Visitors who ask for reduced
 * motion get the poster frame only.
 */
export default function InViewVideo({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    // Also set as a property: the attribute alone can be lost across hydration,
    // and an unmuted element is refused autoplay.
    video.muted = true;

    let inView = false;
    // The first play() also kicks off the download, and Chrome can abort it
    // mid-load ("paused to save power") with no retry of its own. So retry
    // whenever playback becomes possible again while the video is on screen.
    // Low Power Mode and data saver still win; the poster just stays.
    const play = () => {
      if (inView && video.paused && !document.hidden) video.play().catch(() => {});
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView) play();
        else video.pause();
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    video.addEventListener("canplay", play);
    document.addEventListener("visibilitychange", play);
    return () => {
      observer.disconnect();
      video.removeEventListener("canplay", play);
      document.removeEventListener("visibilitychange", play);
    };
  }, []);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-label={label}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
