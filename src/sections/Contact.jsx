// src/sections/Contact.jsx
import { useEffect, useRef } from "react";
import "../styles/contact.css";

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect(); // 一度だけ発火
        }
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // ← ページ遷移防止（超重要）
  };

  return (
    <section
      className="contact-section"
      id="contact"
      ref={sectionRef}
    >
      <div className="contact-inner">

        {/* Eyebrow */}
        <p className="contact-eyebrow">CONTACT</p>

        {/* Title */}
        <h2 className="contact-title">
          制作・導入についてのご相談
        </h2>

 {/* Lead */}
<p className="contact-lead">
  Re:Camp は、屋外環境での使用を前提とした<br />プロダクトを
  一点ずつ設計・制作している小さなスタジオです。<br /><br />
  使用場所や用途が固まっていない段階でも、<br />まずはお気軽にご相談ください。
</p>


        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="contact-field">
            <label htmlFor="name">お名前</label>
            <input
              id="name"
              type="text"
              placeholder="例：山田 太郎"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="email">メールアドレス</label>
            <input
              id="email"
              type="email"
              placeholder="example@mail.com"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="message">ご相談内容（用途・使用環境など）</label>
            <textarea
              id="message"
              rows="4"
              className="contact-textarea"
              placeholder="例：キャンプ場で使用するベンチの制作について相談したい"
            />
          </div>

          <button type="submit" className="contact-submit">
            相談内容を送信する
          </button>
        </form>

      </div>
    </section>
  );
}
