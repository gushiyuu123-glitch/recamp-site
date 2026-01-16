import { useEffect, useRef } from "react";
import "../styles/about.css";

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const el = aboutRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    
    <section className="about" ref={aboutRef}>
      
   <div className="about-paper">
    <div className="about-inner">

        {/* 左：定義 */}
        <div className="about-definition">
     <h2>
  <span className="about-word">About</span>
  <span className="about-word">Re:Camp</span>
</h2>

        </div>

        {/* 右：翻訳 */}
        <div className="about-content">
          <p className="lead">
            Re:Campは、<br />アウトドア用品をつくるブランドです。<br />
            ただし、私たちが向き合っているのは<br />
            「便利さ」よりも、「過ごし方」です。
          </p>

          <p>
            焚き火の音に耳を澄ます時間。<br />
            朝の湿った空気に包まれる感覚。<br />
            それらを邪魔しない道具であること。
          </p>

          <p>
            Re:Campのプロダクトは、<br />
            自然を支配するためでも、<br />
            快適さだけを追求するためでもありません。
          </p>

          <p>
            自然と同じ速度で呼吸し、<br />
            その場に「居る」ことを許す。<br />
            そのための、静かな選択肢です。
          </p>
        </div>
 </div>

  <div className="about-forest" aria-hidden />
      </div>
    </section>
  );
}
