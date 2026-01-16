// src/sections/After.jsx
import { useEffect, useRef } from "react";
import "../styles/after.css";

export default function After() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
        }
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
<section className="after-section" ref={ref}>


  {/* 右：主役ブロック */}
  <div className="after-inner">

    <p className="after-copy">
      静かな時間のあとに、<br />
      手に残るものがあります。
    </p>

    <p className="after-note">
      Re:Camp は、屋外環境を前提に、<br />
      一点ずつ設計し制作するスタジオです。<br />
      使用条件や目的を伺いながら、<br />
      長く使える素材と構造を選びます。
    </p>

    <ul className="after-list">
      <li>使われる場所から、設計を始めます</li>
      <li>数量ではなく、用途を基準に考えます</li>
      <li>屋外環境に耐える素材・処理のみを採用します</li>
    </ul>

  </div>
</section>



  );
}
