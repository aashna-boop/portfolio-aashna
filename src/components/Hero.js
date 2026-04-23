import React, { useState, useRef, useEffect } from 'react';
import './Hero.css';

const ROLES = [
  'CS Engineer',
  'AI Researcher',
  'Fullstack Developer',
  'Published Author',
];

export default function Hero() {
  const [photo, setPhoto] = useState(null);
  const [roleIdx, setRoleIdx] = useState(0);
  const [fade, setFade] = useState(true);
  const fileRef = useRef(null);

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

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setPhoto(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (ev) => setPhoto(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

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
            <a
              href="mailto:aashnasuman19@gmail.com"
              className="hero__btn hero__btn--primary"
            >
              Get in touch
            </a>
            <a
              href="https://www.linkedin.com/in/aashna-suman"
              target="_blank"
              rel="noreferrer"
              className="hero__btn hero__btn--secondary"
            >
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
              <span className="hero__stat-num">500+</span>
              <span className="hero__stat-label">Lives Impacted</span>
            </div>
          </div>
        </div>

        <div className="hero__photo-col">
          <div
            className="hero__photo-frame"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => fileRef.current.click()}
          >
            {photo ? (
              <>
                <img src={photo} alt="Aashna Suman" className="hero__photo-img" />
                <div className="hero__photo-overlay">
                  <span>Change Photo</span>
                </div>
              </>
            ) : (
              <div className="hero__photo-placeholder">
                <div className="hero__photo-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M6 34c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="hero__photo-text">Upload your photo</p>
                <p className="hero__photo-sub">Click or drag & drop</p>
              </div>
            )}
          </div>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            onChange={handlePhoto}
            style={{ display: 'none' }}
          />

          <div className="hero__badge hero__badge--top">
            <span className="hero__badge-emoji">🎓</span>
            <div>
              <strong>UPES + IIT Ropar</strong>
              <p>Dual Degree Track</p>
            </div>
          </div>

          <div className="hero__badge hero__badge--bottom">
            <span className="hero__badge-emoji">🚀</span>
            <div>
              <strong>Google Campus Ambassador</strong>
              <p>150+ students reached</p>
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
