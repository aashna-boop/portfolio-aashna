import React, { useState, useEffect } from 'react';
import './Hero.css';

const ROLES = [
  'CS Engineer',
  'AI Researcher',
  'Fullstack Developer',
  'Published Author',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIdx((i) => (i + 1) % ROLES.length);
        setFade(true);
      }, 400);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero__bg-pattern" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`hero__stripe hero__stripe--${i}`} />
        ))}
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__tag">
            <span className="hero__tag-dot" />
            B.Tech CSE · UPES Dehradun · GPA 9.18
          </div>

          <h1 className="hero__name">
            Aashna<br />
            <em>Suman</em>
          </h1>

          <div className="hero__role-line">
            <span className="hero__role-prefix">I build as a </span>
            <span className={`hero__role ${fade ? 'hero__role--visible' : ''}`}>
              {ROLES[roleIdx]}
            </span>
          </div>

          <p className="hero__bio">
            CS undergrad at UPES & IIT Ropar · 4× published researcher ·
            Google Campus Ambassador · NASA Open Science intern.
            I build things that sit at the intersection of AI and human experience.
          </p>

          <div className="hero__actions">
            <a href="mailto:aashnasuman19@gmail.com" className="hero__btn hero__btn--primary">
              Get in touch
            </a>
            <a href="https://www.linkedin.com/in/aashna-suman" target="_blank" rel="noreferrer" className="hero__btn hero__btn--secondary">
              LinkedIn ↗
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">4+</span>
              <span className="hero__stat-label">Publications</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">9.18</span>
              <span className="hero__stat-label">CGPA</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">150+</span>
              <span className="hero__stat-label">Students Reached</span>
            </div>
          </div>
        </div>

        <div className="hero__photo-col">
          <div className="hero__photo-frame">
            <img src="/profile.jpg" alt="Aashna Suman" className="hero__photo-img" />
          </div>

          <div className="hero__badge hero__badge--top">
            <span className="hero__badge-emoji">🎓</span>
            <div>
              <strong>UPES + IIT Ropar</strong>
              <p>Dual Degree Track</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}