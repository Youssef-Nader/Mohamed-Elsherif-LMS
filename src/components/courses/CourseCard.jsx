import Icon from "../ui/Icon";
import instructorPortrait from "../../assets/mohamedsamir.png";

// Present one course and delegate detail selection to the parent catalog.
export default function CourseCard({ course, onSelect, showInstructor = false }) {
  return (
    <article
      className={showInstructor ? "course-card course-card-instructor" : "course-card"}
    >
      <button
        className="course-image"
        aria-label={"تفاصيل " + course.title}
        onClick={() => onSelect(course)}
      >
        {/* Separate the clipped background from the portrait so the head can pop out. */}
        {showInstructor ? (
          <>
            <span className="course-art-background">
              <img src={"/images/" + course.image} alt="" loading="lazy" />
            </span>
            <span className="course-instructor">
              <img src={instructorPortrait} alt="المهندس محمد الشريف" loading="lazy" />
            </span>
          </>
        ) : (
          <img src={"/images/" + course.image} alt="" loading="lazy" />
        )}
        <span className="course-image-shade" />
        {/* <span className="course-play">
          <Icon name="play" size={22} />
        </span> */}
      </button>
      <div className="course-body">
        {/* Course labels stay in the content area, clear of the animated portrait. */}
        <div className="course-labels">
          <span className="course-category">{course.category}</span>
          <span className="course-topic-tag" dir="ltr">
            {course.tag}
          </span>
        </div>
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
        <button className="course-details" onClick={() => onSelect(course)}>
          اكتشف الكورس <Icon name="arrow" size={20} />
        </button>
      </div>
    </article>
  );
}
