import { stages } from "../../data/courses";
import Icon from "../ui/Icon";
import SectionHeading from "./SectionHeading";
export default function AcademicStages({ onSelect }) {
  return (
    <section id="stages" className="section container">
      <SectionHeading
        eyebrow="خطوتك الأولى"
        title={
          <>
            لكل مرحلة، <span>بداية جديدة.</span>
          </>
        }
        description="اختار مرحلتك الدراسية، وخلّينا نبدأ الطريق سوا."
      >
        <span className="section-index" dir="ltr">
          01 / LEARNING PATHS
        </span>
      </SectionHeading>
      <div className="stages-grid">
        {stages.map((stage) => (
          <a
            className="stage-card"
            key={stage.id}
            href="#courses"
            onClick={() => onSelect(stage.id)}
          >
            <img src={"/images/" + stage.image} alt="" loading="lazy" />
            <div className="stage-shade" />
            <span className="stage-pill">{stage.label}</span>
            <span className="stage-number" dir="ltr">
              {stage.number}
            </span>
            <div className="stage-content">
              <div>
                <h3>{stage.name}</h3>
                <p>{stage.description}</p>
              </div>
              <span className="circle-arrow">
                <Icon name="arrow" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
