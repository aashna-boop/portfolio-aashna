import React, { useState } from 'react';
import './Navbar.css';

const links = ['About', 'Research', 'Projects', 'Experience', 'Skills'];

export default function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <div className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="navbar__logo-name">Aashna Suman</span>
          <span className="navbar__logo-dot">.</span>
        </div>

        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {links.map((link) => (
            <button key={link} className="navbar__link" onClick={() => scrollTo(link)}>
              {link}
            </button>
          ))}
          <a
            href="mailto:aashnasuman19@gmail.com"
            className="navbar__cta"
          >
            Contact
          </a>
        </div>

        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
