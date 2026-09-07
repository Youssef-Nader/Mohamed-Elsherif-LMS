// Shared definitions keep navigation, course filters, and signup in sync.
export const levels = [
  {
    id: "beginner",
    name: "مبتدئ",
    englishName: "Beginner",
    description: "ابدأ من الصفر، وافهم أساسيات البرمجة خطوة بخطوة.",
    image: "laptop.jpg",
    label: "ابدأ صح",
    code: "<start />",
    icon: "code",
  },
  {
    id: "intermediate",
    name: "متوسط",
    englishName: "Intermediate",
    description: "عندك الأساسيات؟ طبّقها في مشاريع ووسّع مهاراتك.",
    image: "code.jpg",
    label: "طوّر مهاراتك",
    code: "{ explore }",
    icon: "chart",
  },
  {
    id: "advanced",
    name: "متقدم",
    englishName: "Advanced",
    description: "خد خطوة أعمق في البيانات والذكاء الاصطناعي.",
    image: "team.jpg",
    label: "جاهز للتحدي",
    code: "build(you)",
    icon: "trophy",
  },
];

// Unknown URL values safely fall back to the full catalog.
export function getLevelFilter(search) {
  const value = new URLSearchParams(search).get("level");
  return levels.some((level) => level.id === value) ? value : "all";
}

export function getCoursesUrl(level = "all") {
  return level === "all" ? "/courses" : `/courses?level=${encodeURIComponent(level)}`;
}

export function filterCourses(courses, level) {
  return level === "all" ? courses : courses.filter((course) => course.level === level);
}
