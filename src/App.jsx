import { useEffect, useState } from "react";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LevelsPage from "./pages/LevelsPage";
import CoursesPage from "./pages/CoursesPage";
import { Link } from "./routes/Router";
export default function App() {
  // Include query parameters so changing a level rerenders the catalog.
  const [location, setLocation] = useState(() => ({
    path: window.location.pathname,
    search: window.location.search,
  }));
  const { path, search } = location;
  useEffect(() => {
    const update = () => {
      setLocation({ path: window.location.pathname, search: window.location.search });
    };
    window.addEventListener("popstate", update);
    return () => window.removeEventListener("popstate", update);
  }, []);
  // Filter-only navigation keeps the reader in place; page changes start at top.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [path]);
  // Route selection stays explicit for this small frontend application.
  const page =
    path === "/" ? (
      <HomePage />
    ) : path === "/login" ? (
      <LoginPage />
    ) : path === "/levels" ? (
      <LevelsPage />
    ) : path === "/courses" ? (
      <CoursesPage search={search} />
    ) : ["/register", "/signup"].includes(path) ? (
      <RegisterPage />
    ) : (
      <section className="not-found">
        <span className="eyebrow">404</span>
        <h1>الصفحة دي مش موجودة</h1>
        <Link className="button primary" to="/">
          ارجع للرئيسية ←
        </Link>
      </section>
    );
  return <Layout>{page}</Layout>;
}
