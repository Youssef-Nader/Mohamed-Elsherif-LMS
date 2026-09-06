export const stages = [
  {
    id: "first",
    number: "01",
    name: "الصف الأول الثانوي",
    description: "أول خطوة في عالم البرمجة",
    image: "laptop.jpg",
    label: "ابدأ صح",
  },
  {
    id: "second",
    number: "02",
    name: "الصف الثاني الثانوي",
    description: "طوّر تفكيرك، ووسّع مهاراتك",
    image: "code.jpg",
    label: "طوّر مهاراتك",
  },
  {
    id: "third",
    number: "03",
    name: "الصف الثالث الثانوي",
    description: "استعد لخطوتك الجاية بثقة",
    image: "team.jpg",
    label: "جاهز للمستقبل",
  },
];
// Preview catalog. Replace these records with the real course API before launch.
export const courses = [
  {
    id: "python",
    stage: "first",
    title: "أساسيات البرمجة بلغة Python",
    category: "البرمجة من الصفر",
    description:
      "ابدأ بالمتغيرات والشروط والحلقات، وطبّق اللي اتعلمته في مشروعك الأول.",
    image: "web.jpg",
    lessons: 12,
    hours: 8,
    tag: "PYTHON",
    topics: [
      "المتغيرات وأنواع البيانات",
      "الشروط والحلقات التكرارية",
      "الدوال وحل المشكلات",
      "بناء أول مشروع عملي",
    ],
  },
  {
    id: "web",
    stage: "second",
    title: "من أول سطر لأول موقع",
    category: "تطوير المواقع",
    description: "حوّل فكرتك لموقع تفاعلي باستخدام HTML وCSS وJavaScript.",
    image: "data.jpg",
    lessons: 16,
    hours: 10,
    tag: "WEB DEVELOPMENT",
    topics: [
      "هيكل الصفحة باستخدام HTML",
      "التصميم والتجاوب باستخدام CSS",
      "التفاعل باستخدام JavaScript",
      "تجميع ونشر مشروعك",
    ],
  },
  {
    id: "ai",
    stage: "third",
    title: "مدخلك لعالم الذكاء الاصطناعي",
    category: "الذكاء الاصطناعي",
    description:
      "افهم إزاي الآلة بتتعلم، واكتشف البيانات والنماذج بأمثلة بسيطة.",
    image: "robot.jpg",
    lessons: 10,
    hours: 6,
    tag: "ARTIFICIAL INTELLIGENCE",
    topics: [
      "ما هو الذكاء الاصطناعي؟",
      "التعامل مع البيانات",
      "مبادئ تعلم الآلة",
      "تجربة نموذج بسيط",
    ],
  },
];
