import CourseCatalog from "../courses/CourseCatalog";
import SectionHeading from "./SectionHeading";
import { Link } from "../../routes/Router";
import Icon from "../ui/Icon";

// Keep the homepage concise while the catalog page exposes every course.
export default function AvailableCourses() {
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
        />
        <CourseCatalog limit={3} showInstructor />
        <div className="section-cta">
          <Link to="/courses" className="button primary">
            شوف باقي الكورسات <Icon name="arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
