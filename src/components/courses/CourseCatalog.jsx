import { useState } from "react";
import { courses } from "../../data/courses";
import { levels, filterCourses, getCoursesUrl } from "../../data/levels";
import { Link } from "../../routes/Router";
import CourseCard from "./CourseCard";
import CourseDialog from "./CourseDialog";
import Icon from "../ui/Icon";

// Shared catalog: homepage limits the preview; the courses page enables filters.
export default function CourseCatalog({
  activeLevel = "all",
  showFilters = false,
  limit,
  showInstructor = false,
}) {
  const [selected, setSelected] = useState(null);
  const filtered = filterCourses(courses, activeLevel);
  const visibleCourses = limit ? filtered.slice(0, limit) : filtered;
  const filters = [
    { id: "all", name: "كل الكورسات", englishName: "Explore all", icon: "code" },
    ...levels,
  ];

  return (
    <>
      {/* Filter links encode selection in the URL instead of duplicating state. */}
      {showFilters && (
        <div className="catalog-filter-panel">
          <div className="filter-panel-heading">
            <span>اختار خطوتك الجاية</span>
            <span className="catalog-note" role="status">
              {filtered.length} كورسات متاحة للمعاينة
            </span>
          </div>
          <nav className="course-filters" aria-label="تصفية الكورسات حسب المستوى">
            {filters.map((level) => (
              <Link
                key={level.id}
                to={getCoursesUrl(level.id)}
                className={activeLevel === level.id ? "active" : ""}
                aria-current={activeLevel === level.id ? "page" : undefined}
              >
                <span className="filter-icon">
                  <Icon name={level.icon} size={22} />
                </span>
                <span className="filter-label">
                  <strong>{level.name}</strong>
                  <small dir="ltr">{level.englishName}</small>
                </span>
                <span className="filter-count">
                  {filterCourses(courses, level.id).length}
                </span>
                {activeLevel === level.id && (
                  <span className="filter-selected" aria-hidden="true">
                    <Icon name="check" size={12} />
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>
      )}
      {/* Cards and the empty state share the same filtered result. */}
      <div className="courses-grid">
        {visibleCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onSelect={setSelected}
            showInstructor={showInstructor}
          />
        ))}
      </div>
      {visibleCourses.length === 0 && (
        <div className="catalog-empty">
          <h2>كورسات المستوى ده قريبًا</h2>
          <p>تقدر تستكشف باقي المستويات لحد ما نضيف محتوى جديد.</p>
          <Link to="/courses" className="button primary">
            شوف كل الكورسات
          </Link>
        </div>
      )}
      {/* Only mount an open dialog; closing clears the selection. */}
      {selected && <CourseDialog course={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
