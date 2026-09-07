import { useState } from "react";
import { Link } from "../../routes/Router";
import Icon from "../ui/Icon";
import { levels } from "../../data/levels";
// Shared account form: signup adds profile fields and password confirmation.
export default function AuthForm({ register = false }) {
  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState("");
  // Validate locally; account services remain unconnected in this preview.
  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (register && data.get("password") !== data.get("confirmPassword")) {
      setNotice("كلمتا المرور غير متطابقتين. راجعهم وجرب تاني.");
      return;
    }
    setNotice(
      "دي نسخة معاينة. خدمة الحسابات لم تُربط بعد، ولم يتم إرسال أو حفظ بياناتك.",
    );
  }
  return (
    <section
      className={`auth-section container ${register ? "auth-register" : "auth-login"}`}
    >
      {/* Welcoming copy and a decorative example of a first program. */}
      <div className="auth-intro">
        <span className="eyebrow">
          <span className="status-dot" />
          مساحة صغيرة. احتمالات كبيرة.
        </span>
        <h1>
          {register ? (
            <>
              أول خطوة
              <br />
              لمستقبل <span>بتصنعه.</span>
            </>
          ) : (
            <>
              كل مرة بترجع،
              <br />
              بتقرّب <span>لحلمك.</span>
            </>
          )}
        </h1>
        <p>
          اتعلّم، جرّب، وغلط عادي.
          <br />
          المهم إنك تكمل. وإحنا معاك في كل خطوة.
        </p>
        <div className="journey-terminal" dir="ltr">
          <div className="terminal-top">
            <span className="terminal-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>{register ? "your-first-step.js" : "welcome-back.js"}</span>
            <Icon name="code" size={18} />
          </div>
          <div className="terminal-code">
            <div>
              <span className="line-number">01</span>
              <span className="syntax-comment">// Every expert was once a beginner.</span>
            </div>
            <div>
              <span className="line-number">02</span>
              <code>
                <span className="syntax-keyword">const</span> you ={" "}
                <span className="syntax-string">"a future developer"</span>;
              </code>
            </div>
            <div>
              <span className="line-number">03</span>
              <code>
                learn.<span className="syntax-function">start</span>({"{"}
              </code>
            </div>
            <div>
              <span className="line-number">04</span>
              <code>
                &nbsp;&nbsp;curiosity: <span className="syntax-keyword">true</span>,
              </code>
            </div>
            <div>
              <span className="line-number">05</span>
              <code>
                &nbsp;&nbsp;possibilities:{" "}
                <span className="syntax-string">"endless"</span>
              </code>
            </div>
            <div>
              <span className="line-number">06</span>
              <code>
                {"}"});<span className="cursor">▍</span>
              </code>
            </div>
          </div>
          <div className="terminal-output">
            <span>↳</span>
            <div>
              <small>CONSOLE</small>
              <p dir="rtl">
                {register ? "أهلاً بأول خطوة في حكايتك!" : "جاهز نكمّل اللي بدأناه؟"}{" "}
                <span aria-hidden="true">✦</span>
              </p>
            </div>
          </div>
        </div>
        <div className="auth-journey">
          <span>
            <Icon name="code" size={18} />
            فكرة بسيطة
          </span>
          <span aria-hidden="true">←</span>
          <span>أول سطر كود</span>
          <span aria-hidden="true">←</span>
          <span>
            حاجة من صنعك <span className="tiny-heart">♥</span>
          </span>
        </div>
        <Link to="/" className="text-link">
          العودة للرئيسية ←
        </Link>
      </div>
      {/* Account mode links and accessible native form fields. */}
      <div className="auth-card">
        <nav className="auth-mode" aria-label="نوع الحساب">
          <Link to="/login" aria-current={!register ? "page" : undefined}>
            تسجيل الدخول
          </Link>
          <Link to="/register" aria-current={register ? "page" : undefined}>
            حساب جديد
          </Link>
        </nav>
        <span className="auth-icon">
          <Icon name={register ? "user" : "lock"} size={28} />
        </span>
        <h2>{register ? "حساب جديد، بداية جديدة" : "أهلاً بيك من تاني"}</h2>
        <p>
          {register ? "خلّينا نبدأ رحلة التعلم سوا." : "ادخل بياناتك وكمّل رحلة التعلم."}
        </p>
        <form onSubmit={submit}>
          {register && (
            <label>
              الاسم بالكامل
              <input
                name="fullName"
                autoComplete="name"
                required
                placeholder="اكتب اسمك بالكامل"
              />
            </label>
          )}
          <label>
            البريد الإلكتروني
            <input
              dir="ltr"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
            />
          </label>
          {register && (
            <label>
              مستواك الحالي
              <select name="level" required defaultValue="">
                <option value="" disabled>
                  اختار مستواك
                </option>
                {levels.map((level) => (
                  <option key={level.id} value={level.id}>
                    {level.name} — {level.englishName}
                  </option>
                ))}
              </select>
            </label>
          )}
          <label>
            كلمة المرور
            <span className="password-field">
              <input
                name="password"
                dir="ltr"
                type={showPassword ? "text" : "password"}
                minLength={8}
                required
                autoComplete={register ? "new-password" : "current-password"}
                placeholder="8 أحرف على الأقل"
              />
              <button
                type="button"
                aria-label={showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
                aria-pressed={showPassword}
                onClick={() => setShowPassword(!showPassword)}
              >
                <Icon name="eye" size={19} />
              </button>
            </span>
          </label>
          {register && (
            <label>
              تأكيد كلمة المرور
              <input
                dir="ltr"
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                minLength={8}
                required
                autoComplete="new-password"
                placeholder="اكتب كلمة المرور مرة تانية"
              />
            </label>
          )}
          <button className="button primary auth-submit" type="submit">
            {register ? "إنشاء حساب" : "تسجيل الدخول"} <Icon name="arrow" />
          </button>
          {notice && (
            <p className="form-notice" role="status">
              {notice}
            </p>
          )}
        </form>
        <p className="auth-switch">
          {register ? "عندك حساب بالفعل؟" : "لسه معندكش حساب؟"}{" "}
          <Link to={register ? "/login" : "/register"}>
            {register ? "سجل دخولك" : "اعمل حساب جديد"}
          </Link>
        </p>
        <small className="auth-preview">
          نسخة معاينة — التسجيل الفعلي غير متاح حالياً
        </small>
      </div>
    </section>
  );
}
