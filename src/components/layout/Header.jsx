import { useEffect, useRef, useState } from "react";
import { Link } from "../../routes/Router";
import Icon from "../ui/Icon";
// Shared identity used by the header, drawer, and footer.
export function Brand({ photo = false }) {
  return (
    <Link className="brand" to="/" aria-label="منصة المهندس — الرئيسية">
      <span className={photo ? "brand-symbol brand-avatar" : "brand-symbol"} dir="ltr">
        {photo ? (
          <img src="/images/mohamed-samir.png" alt="" width={704} height={856} />
        ) : (
          <>
            m<span>.</span>s
          </>
        )}
      </span>
      <span>
        <strong>
          محمد الشريف<span className="brand-dot">.</span>
        </strong>
      </span>
    </Link>
  );
}
// Fixed header, scroll progress, theme control, and fixed side navigation.
export default function Header({ dark, onThemeToggle }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const progress = useRef(null);
  // Batch scroll measurements and observe page-height changes after navigation.
  useEffect(() => {
    let frame;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const fraction =
          height > 0 ? Math.min(1, Math.max(0, window.scrollY / height)) : 0;
        if (progress.current) progress.current.style.transform = `scaleX(${fraction})`;
      });
    };
    const observer = new ResizeObserver(update);
    observer.observe(document.body);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  useEffect(() => {
    if (!sidebarOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSidebarOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [sidebarOpen]);
  const closeMenu = () => setSidebarOpen(false);
  return (
    <>
      <header className="header">
        <div className="reading-progress" aria-hidden="true">
          <span ref={progress} />
        </div>
        <div className="container nav-shell">
          <Brand photo />
          <div className="nav-actions">
            <button
              className="icon-button theme-toggle"
              onClick={onThemeToggle}
              aria-label={dark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"}
              aria-pressed={dark}
            >
              <Icon name={dark ? "sun" : "moon"} size={20} />
            </button>
            <button
              className="icon-button sidebar-toggle"
              onClick={() => setSidebarOpen(true)}
              aria-controls="main-sidebar"
              aria-expanded={sidebarOpen}
              aria-label="القائمة الرئيسية"
            >
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </header>
      <aside
        id="main-sidebar"
        className={`sidebar${sidebarOpen ? " is-open" : ""}`}
        aria-label="القائمة الرئيسية"
        aria-hidden={!sidebarOpen}
        inert={sidebarOpen ? undefined : ""}
      >
        <div className="sidebar-content">
          <div className="sidebar-heading">
            <Brand photo />
            <button className="icon-button sidebar-close" onClick={closeMenu} aria-label="إغلاق القائمة">
              <Icon name="close" />
            </button>
          </div>
          <nav aria-label="التنقل الرئيسي" className="sidebar-links">
            <Link to="/" onClick={closeMenu}>
              <Icon name="home" size={20} />
              الرئيسية
            </Link>
            <Link to="/levels" onClick={closeMenu}>
              <Icon name="layers" size={20} />
              المستويات
            </Link>
            <Link to="/courses" onClick={closeMenu}>
              <Icon name="play" size={20} />
              الكورسات
            </Link>
            <a href="/#benefits" onClick={closeMenu}>
              <Icon name="trophy" size={20} />
              تجربة التعلم
            </a>
            <a href="/#contact" onClick={closeMenu}>
              <Icon name="chat" size={20} />
              تواصل معنا
            </a>
            <Link to="/parent" onClick={closeMenu}>
              <Icon name="chart" size={20} />
              ولي الأمر
            </Link>
          </nav>
          <div className="sidebar-account">
            <Link to="/login" className="button secondary" onClick={closeMenu}>
              <Icon name="lock" size={18} />
              تسجيل الدخول
            </Link>
            <Link to="/register" className="button primary" onClick={closeMenu}>
              <Icon name="user" size={18} />
              حساب جديد
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
