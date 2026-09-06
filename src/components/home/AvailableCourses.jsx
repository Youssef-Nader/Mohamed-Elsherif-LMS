import { useEffect, useRef } from "react";
import { courses, stages } from "../../data/courses";
import Icon from "../ui/Icon";
import SectionHeading from "./SectionHeading";
import { Link } from "../../routes/Router";
function CourseDialog({ course, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.showModal();
  }, []);
  return (
    <dialog
      ref={ref}
      className="course-dialog"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-labelledby="course-title"
    >
      <button
        className="icon-button dialog-close"
        onClick={onClose}
        aria-label="إغلاق التفاصيل"
      >
        <Icon name="close" />
      </button>
      <img src={"/images/" + course.image} alt="" />
      <div className="dialog-body">
        <span className="eyebrow">معاينة كورس تجريبي</span>
        <h2 id="course-title">{course.title}</h2>
        <p>{course.description}</p>
        <h3>هتتعلم إيه؟</h3>
        <ul>
          {course.topics.map((topic) => (
            <li key={topic}>
              <Icon name="check" size={18} />
              {topic}
            </li>
          ))}
        </ul>
        <p className="demo-note">
          ده نموذج لعرض المحتوى. تفاصيل الكورسات والتسجيل الفعلي هتتوفر عند
          إطلاق المنصة.
        </p>
        <Link className="button primary" to="/register">
          انتقل لإنشاء حساب <Icon name="arrow" />
        </Link>
      </div>
    </dialog>
  );
}
export default function AvailableCourses({
  active,
  onFilter,
  selected,
  onSelect,
}) {
  const filtered = courses.filter(
    (course) => active === "all" || course.stage === active,
  );
  return (
    <section id="courses" className="courses-section">
      <div className="container section">
        <SectionHeading
          eyebrow="اتعلّم حاجة تفرق"
          title={
            <>
              معرفة النهارده. <span>مهارة بكرة.</span>
            </>
          }
          description="شرح تفهمه، وتطبيق يثبت المعلومة. اختار البداية المناسبة ليك."
        >
          <span className="year-badge">
            العام الدراسي <b dir="ltr">2026 / 2027</b>
          </span>
        </SectionHeading>
        <div className="courses-toolbar">
          <div
            className="course-filters"
            role="group"
            aria-label="تصفية الكورسات حسب المرحلة"
          >
            <button
              aria-pressed={active === "all"}
              className={active === "all" ? "active" : ""}
              onClick={() => onFilter("all")}
            >
              كل الكورسات
            </button>
            {stages.map((stage) => (
              <button
                key={stage.id}
                aria-pressed={active === stage.id}
                className={active === stage.id ? "active" : ""}
                onClick={() => onFilter(stage.id)}
              >
                {stage.name}
              </button>
            ))}
          </div>
          <span className="catalog-note">محتوى تجريبي للمعاينة</span>
        </div>
        <div className="courses-grid" aria-live="polite">
          {filtered.map((course) => (
            <article className="course-card" key={course.id}>
              <button
                className="course-image"
                aria-label={"تفاصيل " + course.title}
                onClick={() => onSelect(course)}
              >
                <img src={"/images/" + course.image} alt="" loading="lazy" />
                <span className="course-image-shade" />
                <span className="course-image-tag" dir="ltr">
                  {course.tag}
                </span>
                <span className="course-play">
                  <Icon name="play" size={22} />
                </span>
                <span className="image-bottom-label">
                  م/ محمد سمير <span dir="ltr">&lt;/&gt;</span>
                </span>
              </button>
              <div className="course-body">
                <span className="course-category">{course.category}</span>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="course-meta">
                  <span>
                    <Icon name="play" size={16} />
                    {course.lessons} درس
                  </span>
                  <span>
                    <Icon name="clock" size={16} />
                    {course.hours} ساعات تعليمية
                  </span>
                </div>
                <button
                  className="course-details"
                  onClick={() => onSelect(course)}
                >
                  اكتشف الكورس <Icon name="arrow" size={20} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      {selected && (
        <CourseDialog course={selected} onClose={() => onSelect(null)} />
      )}
    </section>
  );
}
