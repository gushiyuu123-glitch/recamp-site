// src/hooks/useAboutGlow.js
import { useEffect } from "react";

export default function useAboutGlow() {
  useEffect(() => {
    const about = document.querySelector(".about");
    if (!about) return;

    let rafId;

    const onScroll = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const rect = about.getBoundingClientRect();
        const vh = window.innerHeight;

        const progress = 1 - Math.min(Math.max(rect.top / vh, 0), 1);

        // ゆらぎ：-4px〜+4px
        const glowY =
          Math.sin(progress * Math.PI) * 4;

        about.style.setProperty(
          "--about-glow-y",
          `${glowY.toFixed(2)}px`
        );

        rafId = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
}
