import { useEffect, useRef } from "react";
import "../styles/dawn.css";

export default function Dawn() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect(); // 一回だけ発火（演出を固定）
        }
      },
      { threshold: 0.35 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="dawn" ref={ref}>
      {/* 霧レイヤ */}
      <div className="dawn-fog" aria-hidden />

      {/* コピー */}
      <div className="dawn-inner">
        <div className="dawn-copy-wrap">
          <p className="dawn-copy">「気づけば、世界はもう少し明るい。」</p>
        </div>
      </div>
    </section>
  );
}
