import { Link } from "../../routes/Router";
import Icon from "../ui/Icon";
export default function Hero() {
  return (
    <section className="hero">
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
            مع المهندس <strong>محمد سمير</strong>
          </div>
          <p>
            من أول فكرة لأول مشروع حقيقي. هنتعلم البرمجة والذكاء الاصطناعي
            بطريقة بسيطة، ونطبّق سوا خطوة بخطوة.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/register">
              ابدأ رحلة التعلم <Icon name="arrow" size={20} />
            </Link>
            <a className="button secondary" href="#courses">
              <span className="play-icon">
                <Icon name="play" size={14} />
              </span>
              استكشف الكورسات
            </a>
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
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <span className="art-spark spark-one">✳</span>
          <span className="art-spark spark-two">+</span>
          <div className="portrait-backdrop">
            <span className="portrait-grid" />
            <img
              src="/images/mohamed-samir.png"
              alt="المهندس محمد سمير"
              fetchPriority="high"
            />
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
              <strong>م/ محمد سمير</strong>
              <small>البرمجة والذكاء الاصطناعي</small>
            </div>
          </div>
          <span className="art-caption" dir="ltr">
            YOUR NEXT CHAPTER STARTS HERE
          </span>
        </div>
      </div>
      <div className="container hero-bottom">
        <span>فكّر. جرّب. اتعلّم.</span>
        <div dir="ltr">
          <span>Python</span>
          <i />
          <span>JavaScript</span>
          <i />
          <span>Artificial Intelligence</span>
          <i />
          <span>Problem Solving</span>
        </div>
        <a href="#stages" aria-label="انتقل إلى المراحل الدراسية">
          ↓
        </a>
      </div>
    </section>
  );
}
