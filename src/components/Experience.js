import React from 'react';
import useInView from './useInView';
import './Experience.css';

const experiences = [
  {
    org: 'Google',
    role: 'Campus Ambassador',
    period: 'Sep 2025 – Dec 2025',
    logo: '🔵',
    color: '#4285F4',
    points: [
      'Represented Google on campus, promoting products & programs among the student body.',
      'Organized 1 workshop and 1 hackathon with 150+ students and faculty in attendance.',
      'Focused on integration of Google AI tools with campus learning ecosystems.',
    ],
  },
  {
    org: 'NASA Open Science Project',
    role: 'Research Intern',
    period: 'Jul 2025 – Sep 2025',
    logo: '🚀',
    color: '#0B3D91',
    points: [
      'Completed the NASA Open Science 101 curriculum to master open science workflows.',
      'Developed skills to share and publish research in open, responsible, and impactful ways.',
      'Gained understanding of how to maximize scientific and economic impact of research.',
    ],
  },
  {
    org: 'Saaras Impact Foundation',
    role: 'Student Intern',
    period: 'Jun 2025 – Jul 2025',
    logo: '🌱',
    color: '#2E7D32',
    points: [
      'Conducted daily fieldwork reaching 500+ beneficiaries in Ghaziabad slum communities.',
      'Manually documented and processed forms for 26 individuals during outreach.',
      'Led a team of 8 student interns, managing operations across 5 NGO centers.',
    ],
  },
];

export default function Experience() {
  const [ref, visible] = useInView();

  return (
    <section className="experience section" id="experience" ref={ref}>
      <div className="container">
        <p className="section-label">Career</p>
        <h2 className="section-title">Work Experience</h2>

        <div className={`experience__timeline fade-in ${visible ? 'visible' : ''}`}>
          {experiences.map((e, i) => (
            <div key={e.org} className="experience__item" style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="experience__line-col">
                <div
                  className="experience__dot"
                  style={{ background: e.color }}
                >
                  {e.logo}
                </div>
                {i < experiences.length - 1 && <div className="experience__connector" />}
              </div>
              <div className="experience__content">
                <div className="experience__meta">
                  <span
                    className="experience__org"
                    style={{ color: e.color }}
                  >
                    {e.org}
                  </span>
                  <span className="experience__period">{e.period}</span>
                </div>
                <h3 className="experience__role">{e.role}</h3>
                <ul className="experience__points">
                  {e.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
