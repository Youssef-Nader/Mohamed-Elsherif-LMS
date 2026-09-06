import { useState } from "react";
import { Link } from "../../routes/Router";
import Icon from "../ui/Icon";
export function Brand() {
  return (
    <Link className="brand" to="/" aria-label="منصة المهندس — الرئيسية">
      <span className="brand-symbol" dir="ltr">
        m<span>.</span>s
      </span>
      <span>
        <strong>
          محمد سمير<span className="brand-dot">.</span>
        </strong>
        <small>منصة المهندس</small>
      </span>
    </Link>
  );
}
export default function Header({ dark, onThemeToggle }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container nav-shell">
        <Brand />
        <nav
          aria-label="التنقل الرئيسي"
          className={open ? "nav-links open" : "nav-links"}
        >
          <Link to="/" onClick={() => setOpen(false)}>
            الرئيسية
          </Link>
          <a href="/#stages" onClick={() => setOpen(false)}>
            المراحل الدراسية
          </a>
          <a href="/#courses" onClick={() => setOpen(false)}>
            الكورسات
          </a>
          <a href="/#contact" onClick={() => setOpen(false)}>
            تواصل معنا
          </a>
        </nav>
        <div className="nav-actions">
          <button
            className="icon-button theme-toggle"
            onClick={onThemeToggle}
            aria-label={dark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"}
            aria-pressed={dark}
          >
            <Icon name={dark ? "sun" : "moon"} size={20} />
          </button>
          <Link to="/login" className="login-link">
            تسجيل الدخول
          </Link>
          <Link to="/register" className="button primary small">
            حساب جديد <Icon name="arrow" size={17} />
          </Link>
          <button
            className="icon-button mobile-menu"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="القائمة الرئيسية"
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
