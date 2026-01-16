import { useEffect, useRef } from "react";
import "../styles/interlude.css";

export default function Interlude() {
  const interludeRef = useRef(null);

  /* =========================
     RIPPLE INITIALIZE
  ========================= */
  useEffect(() => {
    const el = interludeRef.current;
    if (!el || !window.$ || !$.fn.ripples) return;

    try {
      $(el).ripples({
        resolution: 512,
        dropRadius: 18,
        perturbance: 0.035,
        interactive: false, // 操作はスクロールのみ
      });
    } catch (e) {
      console.error(e);
    }

    return () => {
      try {
        $(el).ripples("destroy");
      } catch {}
    };
  }, []);

  /* =========================
     ENTER FOREST (Observer)
  ========================= */
  useEffect(() => {
    const el = interludeRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
if (entry.isIntersecting) {
  setTimeout(() => {
    el.classList.add("is-visible");
  }, 100);
  observer.disconnect();
}

      },
      {
        rootMargin: "-20% 0px",
        threshold: 0.35,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* =========================
     WALK → RIPPLE (Scroll)
  ========================= */
  useEffect(() => {
    const el = interludeRef.current;
    if (!el || !window.$ || !$.fn.ripples) return;

    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = Math.abs(currentY - lastY);

      if (delta > 6) {
        const rect = el.getBoundingClientRect();
        const x = rect.width * 0.5;
        const y = rect.height * 0.62;

        $(el).ripples("drop", x, y, 14, 0.025);
        lastY = currentY;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="interlude ripple-surface" ref={interludeRef}>
      <p className="interlude-text">森と共に、暮らす。</p>
    </section>
  );
}
