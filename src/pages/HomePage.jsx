import { useState } from "react";
import Hero from "../components/home/Hero";
import AcademicStages from "../components/home/AcademicStages";
import AvailableCourses from "../components/home/AvailableCourses";
import Benefits from "../components/home/Benefits";
import Contact from "../components/home/Contact";
export default function HomePage() {
  const [active, setActive] = useState("all");
  const [selected, setSelected] = useState(null);
  return (
    <>
      <Hero />
      <AcademicStages onSelect={setActive} />
      <AvailableCourses
        active={active}
        onFilter={setActive}
        selected={selected}
        onSelect={setSelected}
      />
      <Benefits />
      <Contact />
    </>
  );
}
