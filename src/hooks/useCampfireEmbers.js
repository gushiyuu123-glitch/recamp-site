import { useEffect } from "react";

export default function useCampfireEmbers(emberRef) {
  useEffect(() => {
    const parent = emberRef.current;
    if (!parent) return;

    function createSpark() {
      const spark = document.createElement("div");
      spark.className = "spark";
      parent.appendChild(spark);

      const rect = parent.getBoundingClientRect();

      /* 発生位置：画面下半分を“霧状”に */
      const baseX = rect.width * Math.random();
      const baseY = rect.height * (0.55 + Math.random() * 0.35);

      /* サイズ：小粒〜幻想的な中粒 */
      const size = 1.5 + Math.random() * 4.5;
      spark.style.width = `${size}px`;
      spark.style.height = `${size}px`;

      spark.style.left = `${baseX}px`;
      spark.style.top = `${baseY}px`;

      /* ゆらぎ */
      const sway = (Math.random() - 0.5) * 80;
      const lift = 140 + Math.random() * 320;

      /* 一部の粒だけ“長く漂う” */
      const longLife = Math.random() < 0.25;

      spark.animate(
        [
          {
            opacity: 0,
            transform: "translate(0,0) scale(0.5)",
            filter: "blur(2px)"
          },
          {
            opacity: longLife ? 0.55 : 0.35,
            transform: `translate(${sway * 0.4}px, ${-lift * 0.4}px) scale(1)`,
            filter: "blur(1.2px)"
          },
          {
            opacity: 0,
            transform: `translate(${sway}px, ${-lift}px) scale(1.3)`,
            filter: "blur(6px)"
          }
        ],
        {
          duration: longLife
            ? 4200 + Math.random() * 2600
            : 2600 + Math.random() * 1600,
          easing: "cubic-bezier(0.18,0.58,0.28,1)"
        }
      ).onfinish = () => spark.remove();
    }

    /* 発生頻度：幻想は「間」をつくる */
    const id = setInterval(() => {
      if (Math.random() < 0.85) createSpark();
    }, 140 + Math.random() * 180);

    return () => clearInterval(id);
  }, [emberRef]);
}
