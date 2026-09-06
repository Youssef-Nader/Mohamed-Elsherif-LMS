import { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
export default function Layout({ children }) {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("ms-theme") === "dark";
    } catch {
      return false;
    }
  });
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
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
