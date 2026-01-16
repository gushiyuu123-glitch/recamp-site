// src/sections/Products.jsx
import bag from "../assets/images/bag.png";
import kettle from "../assets/images/ketoru.png";
import tent from "../assets/images/tent.png";
import chair from "../assets/images/chair.png";

import "../styles/products.css";

export default function Products() {
  return (
    <section id="products" className="products">

      {/* =========================
         INTRO – 売り場の入口
      ========================= */}
      <header className="products-intro">
        <h2 className="products-title">Products</h2>
        <p className="products-lead">
          Re:Camp は、実際に使われることを前提に<br />
          プロダクトの設計・制作を行っています。
        </p>
      </header>

      {/* =========================
         PRODUCT LIST
      ========================= */}
      <div className="products-list">

        {/* Everyday Gear */}
        <article className="product-card">
          <div className="product-image">
            <img src={bag} alt="帆布バッグ" />
          </div>
          <div className="product-info">
            <span className="product-category">Everyday Gear</span>
            <h3 className="product-name">帆布バッグ</h3>
            <p className="product-desc">
              日常使用からキャンプまでを想定した、<br />耐久性重視のキャンバスバッグ。
            </p>

            {/* ★ 現実情報（1行） */}
            <p className="product-meta">
              受注生産／参考価格 ¥18,000〜／納期 約3–4週間
            </p>

            <ul className="product-spec">
              <li>素材：国産帆布</li>
              <li>用途：日常／アウトドア</li>
              <li>生産形式：受注生産</li>
            </ul>
          </div>
        </article>

        {/* Cooking Gear */}
        <article className="product-card reverse">
          <div className="product-image">
            <img src={kettle} alt="鉄製ケトル" />
          </div>
          <div className="product-info">
            <span className="product-category">Cooking Gear</span>
            <h3 className="product-name">鉄製ケトル</h3>
            <p className="product-desc">
              直火使用を前提に設計された、重心安定型の鉄製ケトル。
            </p>

            {/* ★ 現実情報 */}
            <p className="product-meta">
              限定生産／参考価格 ¥24,000〜／在庫状況により変動
            </p>

            <ul className="product-spec">
              <li>素材：鋳鉄</li>
              <li>用途：焚き火／直火</li>
              <li>生産形式：限定生産</li>
            </ul>
          </div>
        </article>

        {/* Field Equipment – Tent */}
        <article className="product-card large">
          <div className="product-image">
            <img src={tent} alt="テント" />
          </div>
          <div className="product-info">
            <span className="product-category">Field Equipment</span>
            <h3 className="product-name">テント</h3>
            <p className="product-desc">
              長時間の滞在を想定した、耐候性・居住性重視のフィールドテント。
            </p>

            {/* ★ 現実情報 */}
            <p className="product-meta">
              プロトタイプ／価格・仕様 応相談／制作期間 約2–3ヶ月
            </p>

            <ul className="product-spec">
              <li>用途：宿泊</li>
              <li>構造：自立式</li>
              <li>開発状況：プロトタイプ</li>
            </ul>
          </div>
        </article>

        {/* Field Equipment – Chair */}
        <article className="product-card large reverse">
          <div className="product-image">
            <img src={chair} alt="チェア" />
          </div>
          <div className="product-info">
            <span className="product-category">Field Equipment</span>
            <h3 className="product-name">チェア</h3>
            <p className="product-desc">
              長時間着座を前提にした、姿勢保持設計のアウトドアチェア。
            </p>

            {/* ★ 現実情報 */}
            <p className="product-meta">
              試作段階／仕様調整可／導入について要相談
            </p>

            <ul className="product-spec">
              <li>用途：休息</li>
              <li>構造：折りたたみ式</li>
              <li>開発状況：試作段階</li>
            </ul>
          </div>
        </article>

      </div>

      {/* =========================
         OUTRO – 相談導線
      ========================= */}
      <footer className="products-outro">
<p className="products-outro-text">
  使われる場所や時間を想定しながら、<br />
  プロダクトは一つずつ制作しています。
</p>

      </footer>

    </section>
  );
}
