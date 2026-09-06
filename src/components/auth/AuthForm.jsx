import { useState } from "react";
import { Link } from "../../routes/Router";
import Icon from "../ui/Icon";
export default function AuthForm({ register = false }) {
  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState("");
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
    <section className="auth-section container">
      <div className="auth-intro">
        <span className="eyebrow">منصة المهندس</span>
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
        <div className="auth-code" dir="ltr">
          <span>// Your journey starts here</span>
          <br />
          while (learning) {"{"}
          <br />
          &nbsp;&nbsp;skills++;
          <br />
          &nbsp;&nbsp;future.build();
          <br />
          {"}"}
        </div>
        <Link to="/" className="text-link">
          العودة للرئيسية ←
        </Link>
      </div>
      <div className="auth-card">
        <span className="auth-icon">
          <Icon name={register ? "user" : "lock"} size={28} />
        </span>
        <h2>{register ? "حساب جديد، بداية جديدة" : "أهلاً بيك من تاني"}</h2>
        <p>
          {register
            ? "خلّينا نبدأ رحلة التعلم سوا."
            : "ادخل بياناتك وكمّل رحلة التعلم."}
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
              المرحلة الدراسية
              <select name="stage" required defaultValue="">
                <option value="" disabled>
                  اختار مرحلتك الدراسية
                </option>
                <option value="first">الصف الأول الثانوي</option>
                <option value="second">الصف الثاني الثانوي</option>
                <option value="third">الصف الثالث الثانوي</option>
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
                aria-label={
                  showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"
                }
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
