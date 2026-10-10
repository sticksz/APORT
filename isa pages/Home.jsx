import React from "react";
import portrait from "../assets/isa-hosea.png";

const LINKEDIN_URL = "https://www.linkedin.com/in/isa-hosea-99bb6b369/";
const GITHUB_URL = "https://github.com/sticksz";

export default function Home({ onNavigate }) {
  return (
    <section className="hero section page-panel">
      <div className="hero-copy">
        <p className="eyebrow">FRONT-END DEVELOPER · GRAPHIC DESIGNER</p>
        <h1>Hi, I'm <span>Isa Hosea.</span></h1>
        <h2>I build clean websites and creative digital experiences.</h2>
        <p className="intro">
          I'm an Information Technology student at Nigerian Army University Biu,
          learning and building with HTML, CSS, JavaScript, and React. I also
          enjoy graphic design and creating useful digital projects.
        </p>
        <div className="actions">
          <button className="button primary" type="button" onClick={() => onNavigate("about")}>Learn more</button>
          <button className="button secondary" type="button" onClick={() => onNavigate("contact")}>Contact me</button>
        </div>
        <div className="social-links">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
      <div className="portrait-wrap">
        <div className="portrait-glow"></div>
        <img className="portrait" src={portrait} alt="Portrait of Isa Hosea wearing a navy suit" />
        <div className="portrait-tag">Designing ideas. Building solutions.</div>
      </div>
    </section>
  );
}
