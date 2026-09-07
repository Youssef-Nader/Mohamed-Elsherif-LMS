import { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Icon from "../components/ui/Icon";
// Shared page shell; only the device-local theme preference is persisted.
export default function Layout({ children }) {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("ms-theme") === "dark";
    } catch {
      return false;
    }
  });
  // Apply the theme even when browser storage is unavailable.
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    try {
      localStorage.setItem("ms-theme", dark ? "dark" : "light");
    } catch {
      /* The theme works without storage. */
    }
  }, [dark]);
  return (
    <>
      <a className="skip-link" href="#main">
        انتقل إلى المحتوى
      </a>
      <Header dark={dark} onThemeToggle={() => setDark(!dark)} />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      {/* Persistent contact and reduced-motion-aware return-to-top actions. */}
      <div className="floating-actions">
        <button
          className="floating-action back-to-top"
          aria-label="العودة إلى أعلى الصفحة"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                ? "instant"
                : "smooth",
            });
            document.getElementById("main")?.focus({ preventScroll: true });
          }}
        >
          <Icon name="up" />
        </button>
        <a
          className="floating-action whatsapp"
          href="https://wa.me/201050243333"
          target="_blank"
          rel="noreferrer"
          aria-label="تواصل معنا على واتساب"
        >
          <Icon name="whatsapp" size={29} />
        </a>
      </div>
    </>
  );
}
