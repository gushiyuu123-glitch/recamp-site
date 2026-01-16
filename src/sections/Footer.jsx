// src/sections/Footer.jsx
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* 左：実在感 */}
        <div className="footer-left">
          <p className="footer-name">Re:Camp</p>
          <p className="footer-meta">Okinawa, Japan</p>
          <p className="footer-meta">info@recamp.jp</p>
        </div>

        {/* 右：署名（控えめ） */}
        <div className="footer-right">
          <a
            href="https://gushikendesign.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-credit"
          >
            Design by Yuto Gushiken
          </a>
        </div>

      </div>
    </footer>
  );
}
