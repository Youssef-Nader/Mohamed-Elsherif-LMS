import Icon from "../ui/Icon";
import { Link } from "../../routes/Router";

// Contact actions and the parent portal entry point.
export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-layout">
        <div>
          <span className="eyebrow">إحنا معاك</span>
          <h2>
            تواصل معنا<span className="orange-dot">.</span>
          </h2>
          <p>محتاج مساعدة؟ تواصل معنا علطول على الأرقام التالية واتساب أو اتصال.</p>
          <Link
            className="button primary parent-contact"
            to="/parent"
          >
            <Icon name="user" size={20} />
            دخول ولي الأمر
            <Icon name="arrow" size={20} />
          </Link>
        </div>
        <div className="contact-cards">
          {["الحجز والاستفسارات", "الدعم الفني"].map((title, index) => (
            <div className="contact-card" key={title}>
              <span className="contact-icon">
                <Icon name={index ? "chat" : "phone"} size={25} />
              </span>
              <div>
                <h3>{title}</h3>
                <a
                  href="https://wa.me/201050243333"
                  target="_blank"
                  rel="noreferrer"
                  dir="ltr"
                >
                  +20 105 024 3333 <span>↗</span>
                </a>
                <a className="call-link" href="tel:+201050243333">
                  أو اتصل بنا
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
