import "./App.css";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const legacySections = {
  "/about": "#about",
  "/projects": "#projects",
  "/contact": "#contact",
};

function App() {
  const [theme, setTheme] = useState(() =>
    window.localStorage.getItem("theme") === "light" ? "light" : "dark"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const base = (process.env.PUBLIC_URL || "").replace(/\/$/, "");
    const path = window.location.pathname.slice(base.length).replace(/\/$/, "");
    const section = legacySections[path];

    if (section) {
      window.history.replaceState(null, "", `${base}/${window.location.search}${section}`);
    }

    const target = document.getElementById(window.location.hash.slice(1));
    target?.scrollIntoView({ behavior: "instant" });
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === "light" ? "dark" : "light")} />
      <main id="main" className="page-shell" tabIndex={-1}>
        <Home />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
