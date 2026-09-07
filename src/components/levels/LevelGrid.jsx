import { levels, getCoursesUrl } from "../../data/levels";
import { Link } from "../../routes/Router";
import Icon from "../ui/Icon";

// The same cards serve the homepage preview and the levels page.
export default function LevelGrid() {
  return (
    <div className="levels-grid">
      {levels.map((level, index) => (
        <Link
          className={`learning-card learning-card-${index}`}
          key={level.id}
          to={getCoursesUrl(level.id)}
        >
          {/* Level identity and decorative course imagery. */}
          <div className="learning-card-top">
            <span>{level.label}</span>
            <span className="learning-number" dir="ltr">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="learning-visual">
            <img src={`/images/${level.image}`} alt="" loading="lazy" />
            <span className="learning-code" dir="ltr">
              {level.code}
            </span>
            <span className="learning-symbol">
              <Icon name={level.icon} size={30} />
            </span>
          </div>
          {/* The full card links to the catalog with this level selected. */}
          <div className="learning-content">
            <span className="level-english" dir="ltr">
              {level.englishName}
            </span>
            {/* Three ascending bars reinforce the level progression without extra copy. */}
            <span className="level-meter" aria-hidden="true">
              {[0, 1, 2].map((step) => (
                <i key={step} className={step <= index ? "filled" : ""} />
              ))}
            </span>
            <h3>{level.name}</h3>
            <p>{level.description}</p>
            <div className="learning-card-footer">
              <span>اكتشف كورسات المستوى</span>
              <span className="learning-arrow">
                <Icon name="arrow" />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
