import React from 'react';
import useInView from './useInView';
import './About.css';

const highlights = [
  { emoji: '🎓', label: 'UPES Dehradun', sub: 'B.Tech CSE · GPA 9.18' },
  { emoji: '🧠', label: 'IIT Ropar', sub: 'Major in Artificial Intelligence' },
  { emoji: '📍', label: 'Delhi & Dehradun', sub: 'India' },
  { emoji: '📞', label: '+91 9871250309', sub: 'Open to opportunities' },
];

export default function About() {
  const [ref, visible] = useInView();

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="container">
        <div className={`about__inner fade-in ${visible ? 'visible' : ''}`}>
          <div className="about__text">
            <p className="section-label">About me</p>
            <h2 className="section-title">
              Building at the edge<br />
              <em>of AI & humanity</em>
            </h2>
            <p className="about__para">
              I'm Aashna — a Computer Science undergrad passionate about building
              intelligent systems that are not just technically sound, but ethically
              grounded and human-centered. My academic journey spans UPES Dehradun
              and IIT Ropar, where I explore everything from fullstack development
              to deep learning architectures.
            </p>
            <p className="about__para">
              Beyond the code, I've conducted fieldwork with 500+ beneficiaries
              through the Saaras Impact Foundation, led teams of student interns
              across 5 NGOs, and represented Google on campus — blending technology
              with meaningful social impact.
            </p>
            <p className="about__para">
              My research on ethical AI requirements engineering (FAITH framework)
              and multi-layered anomaly detection (IMMUNE) reflects a deep belief:
              that the best systems are built with as much care for people as
              for performance.
            </p>
          </div>
          <div className="about__cards">
            {highlights.map((h, i) => (
              <div
                key={h.label}
                className="about__card"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="about__card-emoji">{h.emoji}</span>
                <div>
                  <strong className="about__card-label">{h.label}</strong>
                  <p className="about__card-sub">{h.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
