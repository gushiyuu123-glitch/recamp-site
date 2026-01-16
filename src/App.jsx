import Hero from "./sections/Hero";
import HeroGap from "./sections/HeroGap";
import About from "./sections/About";
import AboutGap from "./sections/AboutGap";
import Interlude from "./sections/Interlude";
import Products from "./sections/Products";
import Campfire from "./sections/Campfire";
import Dawn from "./sections/Dawn";
import DawnGap from "./sections/DawnGap";
import After from "./sections/After";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { useEffect } from "react";
import Header from "./components/Header";
export default function App() {
   useEffect(() => {
    const header = document.querySelector(".site-header");

    const onScroll = () => {
      const threshold = window.innerHeight * 0.85; // Hero抜けたら
      if (window.scrollY > threshold) {
        header.classList.add("visible");
      } else {
        header.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <Header /> 
      <Hero />
      <HeroGap />
      <About />
      <AboutGap />
      <Interlude />
      <Products />
      <Campfire />
      <Dawn />
            <DawnGap />   {/* ← 編集点 */}
      <After />
      <Contact />
       <Footer />   {/* ← 完全に自然 */}
    </>
  );
}
