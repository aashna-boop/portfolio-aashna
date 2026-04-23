import React from 'react';
import useInView from './useInView';
import './Skills.css';

const techSkills = [
  { name: 'Python', level: 90 },
  { name: 'Java', level: 78 },
  { name: 'C', level: 72 },
  { name: 'JavaScript', level: 80 },
  { name: 'React / Frontend', level: 82 },
  { name: 'AI & Machine Learning', level: 88 },
  { name: 'Data Structures & Algorithms', level: 85 },
  { name: 'Technical Research', level: 92 },
];

const softSkills = [
  { name: 'Leadership', icon: '🎯' },
  { name: 'Public Speaking', icon: '🎤' },
  { name: 'Emotional Intelligence', icon: '💡' },
  { name: 'Team Management', icon: '🤝' },
  { name: 'Research Writing', icon: '✍️' },
  { name: 'Problem Solving', icon: '🔍' },
];

export default function Skills() {
  const [ref, visible] = useInView();

  return (
    <section className="skills section" id="skills" ref={ref}>
      <div className="container">
        <p className="section-label">Capabilities</p>
        <h2 className="section-title">Skills & Expertise</h2>

        <div className={`skills__grid fade-in ${visible ? 'visible' : ''}`}>
          <div className="skills__technical">
            <h3 className="skills__sub-title">Technical Skills</h3>
            <div className="skills__bars">
              {techSkills.map((s, i) => (
                <div key={s.name} className="skill-bar">
                  <div className="skill-bar__top">
                    <span className="skill-bar__name">{s.name}</span>
                    <span className="skill-bar__pct">{s.level}%</span>
                  </div>
                  <div className="skill-bar__track">
                    <div
                      className="skill-bar__fill"
                      style={{
                        width: visible ? `${s.level}%` : '0%',
                        transitionDelay: `${i * 0.07}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills__soft">
            <h3 className="skills__sub-title">Soft Skills</h3>
            <div className="skills__soft-grid">
              {softSkills.map((s) => (
                <div key={s.name} className="soft-card">
                  <span className="soft-card__icon">{s.icon}</span>
                  <span className="soft-card__name">{s.name}</span>
                </div>
              ))}
            </div>

            <div className="skills__edu-block">
              <h3 className="skills__sub-title" style={{ marginTop: 40 }}>Education</h3>
              <div className="edu-card">
                <div className="edu-card__year">2024–2028</div>
                <div>
                  <strong>B.Tech Computer Science Engineering</strong>
                  <p>UPES Dehradun · GPA: 9.18 · Major GPA: 10.00</p>
                </div>
              </div>
              <div className="edu-card">
                <div className="edu-card__year">2024–2026</div>
                <div>
                  <strong>Major in Artificial Intelligence</strong>
                  <p>IIT Ropar</p>
                </div>
              </div>
              <div className="edu-card">
                <div className="edu-card__year">2020–2024</div>
                <div>
                  <strong>High School Diploma (PCM + CS)</strong>
                  <p>DPS RK Puram, New Delhi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
