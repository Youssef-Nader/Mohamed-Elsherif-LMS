import Hero from "../components/home/Hero";
import LearningLevels from "../components/home/LearningLevels";
import AvailableCourses from "../components/home/AvailableCourses";
import Benefits from "../components/home/Benefits";
import Contact from "../components/home/Contact";
// Page composition stays separate from reusable catalog behavior.
export default function HomePage() {
  return (
    <>
      <Hero />
      <LearningLevels />
      <AvailableCourses />
      <Benefits />
      <Contact />
    </>
  );
}
