import { Link } from "../../routes/Router";
import Icon from "../ui/Icon";
import portrait from "../../assets/mohamedsamir.png";
// import portrait from "../../../public/images/mohamed-samir.png";
// Reuse the same skill list for the two seamless, opposite-direction ribbons.
const skills = [
  "Python",
  "JavaScript",
  "Artificial Intelligence",
  "Problem Solving",
  "HTML & CSS",
  "React",
  "Data Analysis",
  "Algorithms",
  "Git & GitHub",
  "Creative Thinking",
];
// Introductory copy, supplied portrait, and hover-paused learning skills.
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-background" aria-hidden="true">
        {["code", "robot", "laptop", "data", "web", "team"].map((photo) => (
          <img key={photo} src={`/images/${photo}.jpg`} alt="" />
        ))}
      </div>
      {/* Keep the copy and portrait in a responsive two-column layout. */}
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" /> الجيل القادم من تعليم البرمجة
          </div>
          <h1>
            مستقبلك بيبدأ
            <br />
            بسطر{" "}
            <span className="code-word">
              كود
              <svg viewBox="0 0 220 16" aria-hidden="true">
                <path d="M4 11Q104-3 215 7M20 15Q125 4 191 11" />
              </svg>
            </span>
            <span className="orange-dot">.</span>
          </h1>
          <div className="teacher-name">
            مع المهندس <strong>محمد الشريف</strong>
          </div>
          <p>
            من أول فكرة لأول مشروع حقيقي. هنتعلم البرمجة والذكاء الاصطناعي بطريقة بسيطة،
            ونطبّق سوا خطوة بخطوة.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/register">
              ابدأ رحلة التعلم <Icon name="arrow" size={20} />
            </Link>
            <Link className="button secondary" to="/courses">
              <span className="play-icon">
                <Icon name="play" size={14} />
              </span>
              استكشف الكورسات
            </Link>
          </div>
          <div className="hero-promises">
            <span>
              <Icon name="check" size={16} /> شرح من الصفر
            </span>
            <span>
              <Icon name="check" size={16} /> تطبيق عملي
            </span>
            <span>
              <Icon name="check" size={16} /> متابعة مستمرة
            </span>
          </div>
        </div>
        <div className="hero-art">
          {/* The full-size frame rotates together with the portrait and its background. */}
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="portrait-backdrop">
            <span className="portrait-grid" />
              <img src={portrait} alt="المهندس محمد الشريف" fetchPriority="high" />
          </div>
          <div className="floating-code code-top" dir="ltr">
            <span className="tiny-dots">
              <i />
              <i />
              <i />
            </span>
            <code>
              <span>const</span> future = <em>'you'</em>;<br />
              <b>startLearning</b>();<span className="cursor">▍</span>
            </code>
          </div>
          <span className="art-spark spark-one" aria-hidden="true">
            ✳
          </span>
          <span className="art-spark spark-two" aria-hidden="true">
            +
          </span>
          <div className="floating-code code-bottom" dir="ltr">
            <span className="code-tag">&lt;/&gt;</span>
            <div>
              <code>build. learn. repeat.</code>
              <small>خطوة صغيرة، فرق كبير</small>
            </div>
          </div>
          <div className="teacher-tag">
            <span className="tag-check">
              <Icon name="check" size={17} />
            </span>
            <div>
                <strong>م/ محمد الشريف</strong>
              <small>البرمجة والذكاء الاصطناعي</small>
            </div>
          </div>
          <span className="art-caption" dir="ltr">
            YOUR NEXT CHAPTER STARTS HERE
          </span>
        </div>
      </div>
      {/* Duplicate each ribbon for a seamless loop; hide copies from assistive technology. */}
      <div
        className="container skills-section"
        tabIndex={0}
        aria-label="مهارات تتعلمها، تتوقف الحركة عند المرور أو التركيز"
      >
        <div className="skills-heading">
          <span className="skills-kicker" dir="ltr">
            A LITTLE CURIOSITY. ENDLESS POSSIBILITIES.
          </span>
          <h2>
            <span>فكّر.</span> <span>جرّب.</span> <span>اتعلّم.</span>
          </h2>
          <p>مش لازم تعرف كل حاجة. ابدأ بحاجة تحبّها.</p>
        </div>
        <div className="skills-ribbons" dir="ltr">
          {[skills, [...skills].reverse()].map((row, index) => (
            <div className={`skills-lane lane-${index}`} key={index}>
              <div className="skills-track">
                {[0, 1].map((copy) => (
                  <div
                    className="skills-group"
                    key={copy}
                    aria-hidden={copy === 1 ? true : undefined}
                  >
                    {row.map((skill) => (
                      <span className="skill-chip" key={skill}>
                        <span aria-hidden="true">✳</span>
                        {skill}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <a href="#levels" aria-label="انتقل إلى مستويات التعلم">
          ↓
        </a>
      </div>
    </section>
  );
}
