import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">Aashna Suman<span className="footer__dot">.</span></span>
          <p className="footer__tagline">CS Engineer · AI Researcher · Builder</p>
        </div>

        <div className="footer__links">
          <a href="mailto:aashnasuman19@gmail.com" className="footer__link">
            📧 aashnasuman19@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/aashna-suman"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            🔗 LinkedIn
          </a>
          <a href="tel:+919871250309" className="footer__link">
            📞 +91 9871250309
          </a>
        </div>

        <p className="footer__copy">
          © {new Date().getFullYear()} Aashna Suman · Built with React
        </p>
      </div>
    </footer>
  );
}
