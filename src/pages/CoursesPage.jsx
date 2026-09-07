import CourseCatalog from "../components/courses/CourseCatalog";
import { getLevelFilter, levels } from "../data/levels";
import { Link } from "../routes/Router";

// URL state preserves the selected level on refresh, sharing, and history navigation.
export default function CoursesPage({ search }) {
  const activeLevel = getLevelFilter(search);
  const level = levels.find((item) => item.id === activeLevel);
  return (
    <section className="container section catalog-page">
      <div className="catalog-intro">
        <Link to="/levels" className="text-link">
          المستويات / الكورسات
        </Link>
        <span className="eyebrow">اتعلّم حاجة تفرق</span>
        <h1>
          {level ? (
            <>
              كورسات المستوى <span>{level.name}.</span>
            </>
          ) : (
            <>
              اختار كورسك. <span>وابدأ حكايتك.</span>
            </>
          )}
        </h1>
        <p>
          {level
            ? level.description
            : "استكشف الكورسات، أو اختار مستواك عشان تلاقي البداية المناسبة ليك."}
        </p>
      </div>
      <CourseCatalog activeLevel={activeLevel} showFilters />
    </section>
  );
}
