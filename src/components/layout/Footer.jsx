import { Brand } from "./Header";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <Brand />
        <p>كل سطر كود، خطوة أقرب لمستقبلك.</p>
        <a
          className="parent-link"
          href="https://www.mohamed-elsherief.online/parent/login"
        >
          دخول ولي الأمر لمتابعة الطالب ←
        </a>
      </div>
      <div className="container footer-bottom">
        <span>{new Date().getFullYear()} © جميع الحقوق محفوظة</span>
        <span>
          <a href="https://www.mohamed-elsherief.online/terms">شروط الخدمة</a>
          <span className="divider"> / </span>
          <a href="https://www.mohamed-elsherief.online/privacy">
            سياسة الخصوصية
          </a>
        </span>
        <a
          href="https://www.facebook.com/Marhala.eg"
          target="_blank"
          rel="noreferrer"
          dir="ltr"
        >
          Developed By <strong>Marhala Eg</strong>
        </a>
      </div>
    </footer>
  );
}
