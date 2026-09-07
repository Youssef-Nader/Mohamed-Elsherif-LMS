import Icon from "../components/ui/Icon";
import { Link } from "../routes/Router";

const summaryCards = [
  {
    icon: "chart",
    title: "متابعة المستوى",
    value: "78%",
    text: "متوسط التقدم في آخر شهر.",
  },
  {
    icon: "calendar",
    title: "الحصة القادمة",
    value: "الثلاثاء",
    text: "مراجعة عملية على مشروع الطالب.",
  },
  {
    icon: "chat",
    title: "آخر ملاحظة",
    value: "ممتاز",
    text: "الطالب ملتزم بالتطبيقات الأسبوعية.",
  },
];

const activity = [
  "حل تطبيق المتغيرات والدوال.",
  "راجع تسجيل حصة أساسيات JavaScript.",
  "استلم ملاحظة جديدة من المهندس محمد الشريف.",
];

export default function ParentPage() {
  return (
    <section className="parent-page">
      <div className="container parent-shell">
        <div className="parent-intro">
          <Link to="/" className="text-link">
            الرئيسية / ولي الأمر
          </Link>
          <span className="eyebrow">
            <span className="status-dot" />
            متابعة هادئة وواضحة
          </span>
          <h1>
            لوحة ولي الأمر لمتابعة <span>رحلة التعلم.</span>
          </h1>
          <p>
            شوف تقدم الطالب، الحصص القادمة، وملاحظات المتابعة في مكان واحد منظم وسهل.
          </p>
          <div className="parent-actions">
            <a className="button primary" href="https://wa.me/201050243333" target="_blank" rel="noreferrer">
              <Icon name="whatsapp" size={22} />
              تواصل واتساب
            </a>
            <Link className="button secondary" to="/courses">
              <Icon name="play" size={20} />
              تصفح الكورسات
            </Link>
          </div>
        </div>

        <div className="parent-login-panel">
          <span className="parent-panel-icon">
            <Icon name="lock" size={28} />
          </span>
          <h2>دخول ولي الأمر</h2>
          <p>اكتب رقم الموبايل أو كود الطالب لعرض لوحة المتابعة الخاصة به.</p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <label>
              رقم الموبايل
              <input type="tel" name="phone" placeholder="01xxxxxxxxx" autoComplete="tel" />
            </label>
            <label>
              كود الطالب
              <input type="text" name="studentCode" placeholder="MS-2026" autoComplete="off" />
            </label>
            <button className="button primary" type="submit">
              دخول لوحة المتابعة
              <Icon name="arrow" size={20} />
            </button>
          </form>
        </div>

        <div className="parent-summary" aria-label="ملخص متابعة الطالب">
          {summaryCards.map((card) => (
            <article className="parent-stat" key={card.title}>
              <span>
                <Icon name={card.icon} size={24} />
              </span>
              <div>
                <h3>{card.title}</h3>
                <strong>{card.value}</strong>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="parent-activity">
          <div>
            <span className="eyebrow">آخر النشاط</span>
            <h2>صورة سريعة عن أداء الطالب</h2>
          </div>
          <ol>
            {activity.map((item) => (
              <li key={item}>
                <Icon name="check" size={18} />
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
