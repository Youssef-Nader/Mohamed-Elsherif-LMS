import LevelGrid from "../components/levels/LevelGrid";
import { Link } from "../routes/Router";

// Standalone entry point into the level-filtered catalog.
export default function LevelsPage() {
  return (
    <section className="container section catalog-page">
      <div className="catalog-intro">
        <Link to="/" className="text-link">
          الرئيسية / المستويات
        </Link>
        <span className="eyebrow">ابدأ من المكان المناسب ليك</span>
        <h1>
          كل خطوة بتفتح <span>احتمال جديد.</span>
        </h1>
        <p>من أول سطر كود لخطوتك الجاية. اختار المستوى اللي يناسب خبرتك وشوف كورساته.</p>
      </div>
      <LevelGrid />
    </section>
  );
}
