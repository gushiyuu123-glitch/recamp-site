import { useEffect, useRef } from "react";
import useCampfireEmbers from "../hooks/useCampfireEmbers";
import "../styles/campfire.css";

export default function Campfire() {
  const sectionRef = useRef(null);
  const emberRef = useRef(null);

  // 表示フェード（OK）
  useEffect(() => {
    const el = sectionRef.current;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) el.classList.add("is-visible");
    }, { threshold: 0.35 });

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // 🔥 火花
  useCampfireEmbers(emberRef);

  return (
    <section className="campfire" ref={sectionRef}>
      <div className="embers" ref={emberRef}></div>

{/* PC ONLY */}
<div className="campfire-copy-wrap pc-copy">
  <p className="campfire-copy">
    夜の静けさと、<br />　　　　　　　ひとつの灯り。
  </p>
</div>

{/* SP ONLY */}
<div className="campfire-copy-wrap-sp sp-copy">
  <p className="campfire-copy-sp">
    夜の静けさと、<br />ひとつの灯り。
  </p>
</div>

    </section>
  );
}
