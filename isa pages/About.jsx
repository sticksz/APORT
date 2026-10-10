import React from "react";

export default function About() {
  return (
    <section className="section section-border page-panel">
      <div className="section-heading">
        <p className="eyebrow">GET TO KNOW ME</p>
        <h2>A little about me</h2>
      </div>
      <p className="about-text">
        I'm growing my skills in front-end development and graphic design,
        with a focus on making websites that are responsive, accessible, and
        straightforward to use. I enjoy learning by building real projects
        and improving them step by step.
      </p>
      <div className="skill-grid">
        <article className="skill-card">
          <span className="skill-icon">⌘</span>
          <h3>Front-End Development</h3>
          <p>HTML, CSS, JavaScript, React, and responsive web layouts.</p>
        </article>
        <article className="skill-card">
          <span className="skill-icon">✳</span>
          <h3>Graphic Design</h3>
          <p>Flyers, social media graphics, promotional designs, and branding concepts.</p>
        </article>
        <article className="skill-card">
          <span className="skill-icon">↗</span>
          <h3>Creative Projects</h3>
          <p>Exploring ideas and building practical digital experiences for people.</p>
        </article>
      </div>
    </section>
  );
}
