import { useEffect, useState } from "react";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Link } from "./routes/Router";
export default function App() {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const update = () => {
      setPath(window.location.pathname);
      window.scrollTo(0, 0);
    };
    window.addEventListener("popstate", update);
    return () => window.removeEventListener("popstate", update);
  }, []);
  const page =
    path === "/" ? (
      <HomePage />
    ) : path === "/login" ? (
      <LoginPage />
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
