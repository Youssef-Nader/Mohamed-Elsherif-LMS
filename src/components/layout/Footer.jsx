import { Brand } from "./Header";
import { Link } from "../../routes/Router";
import Icon from "../ui/Icon";

// Keep footer navigation aligned with the public learning routes.
const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/levels", label: "مستويات التعلم" },
  { to: "/courses", label: "الكورسات" },
  { to: "/parent", label: "ولي الأمر" },
  { to: "/login", label: "تسجيل الدخول" },
];

// Shared identity, useful navigation, and the existing contact/policy destinations.
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* The portrait and a short learning message anchor the footer. */}
        <div className="footer-identity">
          <Brand photo />
          <h2>
            فكرة النهارده.
            <br />
            <span>حاجة من صنعك بكرة.</span>
          </h2>
          <p>كل سطر كود، خطوة أقرب لمستقبلك.</p>
        </div>

        {/* Semantic navigation keeps the main pages within easy reach. */}
        <nav className="footer-navigation" aria-label="روابط الفوتر">
          <h3>كمّل رحلتك</h3>
          {links.map(({ to, label }) => (
            <Link key={to} to={to}>
              {label}
              <Icon name="arrow" size={17} />
            </Link>
          ))}
        </nav>

        {/* Contact actions reuse the platform's existing WhatsApp and phone number. */}
        <div className="footer-contact">
          <h3>سؤالك أول خطوة</h3>
          <p>
            محتاج تعرف تبدأ منين؟
            <br />
            تواصل معانا ونساعدك تختار.
          </p>
          <a
            className="footer-whatsapp"
            href="https://wa.me/201050243333"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="whatsapp" size={24} />
            <span>
              كلّمنا على واتساب<small dir="ltr">+20 105 024 3333</small>
            </span>
            <Icon name="arrow" size={20} />
          </a>
          <a className="footer-phone" href="tel:+201050243333">
            <Icon name="phone" size={16} />
            أو اتصل بنا مباشرة
          </a>
        </div>
      </div>

      {/* Legal links retain their original destinations. */}
      <div className="container footer-base">
        <span>© {new Date().getFullYear()}   جميع الحقوق محفوظة.</span>
        <div className="footer-policies">
          <a href="https://www.mohamed-elsherief.online/terms">شروط الخدمة</a>
          <span aria-hidden="true">·</span>
          <a href="https://www.mohamed-elsherief.online/privacy">سياسة الخصوصية</a>
        </div>
      </div>
    </footer>
  );
}
