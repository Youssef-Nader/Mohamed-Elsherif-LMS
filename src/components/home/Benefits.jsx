import Icon from "../ui/Icon";
import SectionHeading from "./SectionHeading";
// Edit the benefit copy here without changing the card layout.
const benefits = [
  [
    "code",
    "نفهم قبل ما نحفظ",
    "شرح بسيط للبرمجة والذكاء الاصطناعي، بأمثلة من حياتك بعيد عن التعقيد.",
  ],
  [
    "chart",
    "متابعة خطوة بخطوة",
    "تقييم مستمر لمستواك، عشان تعرف نقط قوتك وإيه اللي محتاج تشتغل عليه.",
  ],
  [
    "trophy",
    "تحديات تختبر تفكيرك",
    "تمارين وتحديات برمجية بعد كل درس، تخليك تطبّق وتتعلم من كل محاولة.",
  ],
  [
    "play",
    "راجع في أي وقت",
    "فيديوهات مركزة ترجع لها وقت ما تحتاج، وتراجع أهم الأفكار على مهلك.",
  ],
  [
    "chat",
    "مش هتتعلم لوحدك",
    "اسأل عن أي فكرة أو خطأ في الكود، ووصل للحل مع دعم يساعدك تفهم.",
  ],
  [
    "calendar",
    "طريق واضح لقدّام",
    "خطة تعلم منظمة من الأساسيات للتطبيق، تناسب مرحلتك وتخلّيك مكمل.",
  ],
];
// Render the shared learning benefits from the content list.
export default function Benefits() {
  return (
    <section className="section container benefits-section" id="benefits">
      <SectionHeading
        eyebrow="كل اللي تحتاجه، في مكان واحد"
        title={
          <>
            تجربة تعلّم <span>على المنصة.</span>
          </>
        }
        description="مش مجرد فيديوهات. دي رحلة كاملة من أول سؤال لأول إنجاز."
      />
      <div className="benefits-grid">
        {benefits.map(([icon, title, text], i) => (
          <article className="benefit-card" key={title}>
            <div className="benefit-top">
              <span className="benefit-icon">
                <Icon name={icon} size={27} />
              </span>
              <span dir="ltr">0{i + 1}</span>
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
