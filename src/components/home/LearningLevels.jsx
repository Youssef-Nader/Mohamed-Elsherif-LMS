import LevelGrid from "../levels/LevelGrid";
import SectionHeading from "./SectionHeading";
import { Link } from "../../routes/Router";
import Icon from "../ui/Icon";

// Homepage introduction to the dedicated levels page.
export default function LearningLevels() {
  return (
    <section id="levels" className="section container">
      <SectionHeading
        eyebrow="خطوتك الأولى"
        title={
          <>
            لكل مستوى، <span>بداية جديدة.</span>
          </>
        }
        description="اختار مستواك الحالي، وخلّينا نبدأ الطريق سوا."
      />
      <LevelGrid />
      <div className="section-cta">
        <Link to="/levels" className="button secondary">
          شوف كل المستويات <Icon name="arrow" />
        </Link>
      </div>
    </section>
  );
}
