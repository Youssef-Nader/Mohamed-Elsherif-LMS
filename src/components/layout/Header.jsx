import { useEffect, useRef } from "react";
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
// Fixed header, scroll progress, theme control, and modal side navigation.
export default function Header({ dark, onThemeToggle }) {
  const sidebar = useRef(null);
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
  const closeMenu = () => sidebar.current?.close();
  return (
    <header className="header">
      <div className="reading-progress" aria-hidden="true">
        <span ref={progress} />
      </div>
      <div className="container nav-shell">
        <Brand photo />
        {/* Native dialog provides keyboard focus containment and Escape support. */}
        <dialog
          ref={sidebar}
          className="sidebar"
          aria-label="القائمة الرئيسية"
          onClick={(event) => {
            if (event.target === sidebar.current) closeMenu();
          }}
        >
          <div className="sidebar-content">
            <div className="sidebar-heading">
              <Brand photo />
              <button
                className="icon-button"
                onClick={closeMenu}
                aria-label="إغلاق القائمة"
              >
                <Icon name="close" />
              </button>
            </div>
            <nav aria-label="التنقل الرئيسي" className="sidebar-links">
              <Link to="/" onClick={closeMenu}>
                الرئيسية
              </Link>
              <Link to="/levels" onClick={closeMenu}>
                المستويات
              </Link>
              <Link to="/courses" onClick={closeMenu}>
                الكورسات
              </Link>
              <a href="/#benefits" onClick={closeMenu}>
                تجربة التعلم
              </a>
              <a href="/#contact" onClick={closeMenu}>
                تواصل معنا
              </a>
            </nav>
            <div className="sidebar-account">
              <Link to="/login" className="button secondary" onClick={closeMenu}>
                تسجيل الدخول
              </Link>
              <Link to="/register" className="button primary" onClick={closeMenu}>
                حساب جديد <Icon name="arrow" />
              </Link>
            </div>
          </div>
        </dialog>
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
            onClick={() => sidebar.current?.showModal()}
            aria-haspopup="dialog"
            aria-label="القائمة الرئيسية"
          >
            <Icon name="menu" />
          </button>
        </div>
      </div>
    </header>
  );
}
