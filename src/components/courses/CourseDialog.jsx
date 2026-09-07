import { useEffect, useRef } from "react";
import Icon from "../ui/Icon";
import { Link } from "../../routes/Router";
import { levels } from "../../data/levels";

// Native modal manages focus trapping and Escape; the catalog owns selection.
export default function CourseDialog({ course, onClose }) {
  const ref = useRef(null);
  const level = levels.find((item) => item.id === course.level);
  useEffect(() => {
    const dialog = ref.current;
    const trigger = document.activeElement;
    dialog.showModal();
    // Return keyboard focus to the course card when this modal unmounts.
    return () => {
      dialog.close();
      trigger?.focus({ preventScroll: true });
    };
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
      <div className="course-dialog-scroll">
        {/* Large cover sets the context while the body keeps details easy to scan. */}
        <div className="dialog-cover">
          <img src={"/images/" + course.image} alt="" />
          <div className="dialog-cover-copy">
            <span className="dialog-level">
              <Icon name={level?.icon || "code"} size={18} />
              {level?.name}
            </span>
            <span dir="ltr">{course.tag}</span>
          </div>
        </div>
        <div className="dialog-body">
          <span className="eyebrow">{course.category} · مع م/ محمد الشريف</span>
          <h2 id="course-title">{course.title}</h2>
          <p className="dialog-description">{course.description}</p>
          <div className="dialog-facts">
            <span>
              <Icon name="play" size={20} />
              <strong>{course.lessons}</strong> درس
            </span>
            <span>
              <Icon name="clock" size={20} />
              <strong>{course.hours}</strong> ساعات تعليمية
            </span>
            <span>
              <Icon name={level?.icon || "code"} size={20} />
              مستوى {level?.name}
            </span>
          </div>
          {/* Numbered learning outcomes remain visible alongside the course summary. */}
          <div className="dialog-syllabus">
            <div className="syllabus-heading">
              <h3>هتتعلم إيه؟</h3>
              <span dir="ltr">YOUR NEXT SKILLS</span>
            </div>
            <ol>
              {course.topics.map((topic, index) => (
                <li key={topic}>
                  <span className="topic-number" dir="ltr">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{topic}</span>
                  <Icon name="check" size={18} />
                </li>
              ))}
            </ol>
          </div>
          <div className="dialog-enroll">
            <p className="demo-note">
              ده نموذج لعرض المحتوى. تفاصيل الكورسات والتسجيل الفعلي هتتوفر عند إطلاق
              المنصة.
            </p>
            <Link className="button primary" to="/register">
              انتقل لإنشاء حساب <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </div>
    </dialog>
  );
}
