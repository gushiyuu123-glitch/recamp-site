import { useEffect } from "react";
import heroImage from "../assets/images/top2.jpg";
import "../styles/hero.css";

export default function Hero() {
  // ヘッダー表示用スクロール検知（実在企業仕様）
  useEffect(() => {
    const onScroll = () => {
      const header = document.querySelector("header");
      if (!header) return;
      header.classList.toggle("scrolled", window.scrollY > 120);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero">
      {/* 背景 */}
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden
      />

      {/* コンテンツ */}
      <div className="hero-content">
        <h1>Re:Camp</h1>
        <p>森が目を覚ますとき、私たちの一日が始まる。</p>
        <span className="vertical-text">
          自然と呼吸する。
        </span>
      </div>
    </section>
  );
}
