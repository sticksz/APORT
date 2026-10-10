import React, { useEffect, useState } from "react";
import About from "./isa pages/About.jsx";
import Contact from "./isa pages/Contact.jsx";
import Home from "./isa pages/Home.jsx";

function RealTimeClock() {
  const [currentTime, setCurrentTime] = useState(() => new Date());

  useEffect(() => {
    const timerId = window.setInterval(() => setCurrentTime(new Date()), 60000);
    return () => window.clearInterval(timerId);
  }, []);

  return (
    <time className="real-time-clock" dateTime={currentTime.toISOString()}>
      {currentTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}
    </time>
  );
}

export default function App() {
  const [dark, setDark] = useState(false);
  const [page, setPage] = useState("home");

  function showPage(pageName) {
    setPage(pageName);
  }

  function renderPage() {
    if (page === "about") return <About />;
    if (page === "contact") return <Contact />;
    return <Home onNavigate={showPage} />;
  }

  return (
    <div className={dark ? "site dark" : "site"}>
      <header className="topbar">
        <button
          className="logo-button"
          type="button"
          onClick={() => showPage("home")}
          aria-label="Isa Hosea home"
        >
          <span className="logo">IH<span>.</span></span>
        </button>
        <nav aria-label="Main navigation" className="page-nav">
          <button
            type="button"
            className={page === "home" ? "nav-button active" : "nav-button"}
            onClick={() => showPage("home")}
          >
            Home
          </button>
          <button
            type="button"
            className={page === "about" ? "nav-button active" : "nav-button"}
            onClick={() => showPage("about")}
          >
            About
          </button>
          <button
            type="button"
            className={page === "contact" ? "nav-button active" : "nav-button"}
            onClick={() => showPage("contact")}
          >
            Contact
          </button>
        </nav>
        <div className="header-tools">
          <RealTimeClock />
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setDark((isDark) => !isDark)}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={dark}
          >
            {dark ? "Light mode" : "Dark mode"}
          </button>
        </div>
      </header>

      <main>{renderPage()}</main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Isa Hosea. Built with React.</p>
        <button
          type="button"
          className="back-to-top"
          onClick={() => showPage("home")}
        >
          Back to top ↑
        </button>
      </footer>
    </div>
  );
}
