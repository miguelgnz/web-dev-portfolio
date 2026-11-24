"use client";

import { useEffect, useRef, useState } from "react";
import { LuPause, LuPlay } from "react-icons/lu";

type DemoVideoProps = {
  mp4: string;
  webm: string;
  poster: string;
  width: number;
  height: number;
  label: string;
};

// Muted, looping screen recording. It only loads and plays while it is on
// screen, never autoplays for prefers-reduced-motion users, and always offers
// a pause/play control (WCAG 2.2.2). Without JavaScript the poster is shown.
export default function DemoVideo({
  mp4,
  webm,
  poster,
  width,
  height,
  label,
}: DemoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const pausedByUser = useRef(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !pausedByUser.current) {
          video.play().catch(() => undefined);
        } else if (!entry?.isIntersecting) {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }
    if (video.paused) {
      pausedByUser.current = false;
      video.play().catch(() => undefined);
    } else {
      pausedByUser.current = true;
      video.pause();
    }
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        className="block h-auto w-full"
        width={width}
        height={height}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src={webm} type="video/webm" />
        <source src={mp4} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause demo video" : "Play demo video"}
        className="absolute right-3 bottom-3 flex size-11 items-center justify-center rounded-full bg-bg/80 text-fg backdrop-blur transition-colors hover:bg-bg"
      >
        {playing ? (
          <LuPause aria-hidden="true" className="size-5" />
        ) : (
          <LuPlay aria-hidden="true" className="size-5" />
        )}
      </button>
    </div>
  );
}
