import React from 'react';
import useInView from './useInView';
import './Research.css';

const papers = [
  {
    date: 'Oct 2025',
    title: 'FAITH in AI: A Novel Requirements Engineering Approach for Embedding Societal and Ethical Priorities',
    venue: 'Bandung at 70 — International Conference, Indonesia',
    authors: 'Tanu Singh*, Aashna Suman',
    tag: 'Ethics & RE',
    color: '#8C1515',
  },
  {
    date: 'Sep 2025',
    title: 'IMMUNE: Intelligent Model for Multi-Layered Unsupervised Neural Evolution for Anomaly Detection',
    venue: '9th International Conference on Innovative Computing and Communication (ICICC-2026)',
    authors: 'Aashna Suman, Tanu Singh*',
    tag: 'Deep Learning',
    color: '#007C92',
  },
  {
    date: 'Apr 2025',
    title: 'Innovative Sustainability: A Computational Approach to Carbon Footprint Tracking',
    venue: 'ICSSCT 2025 · Wiley Journal of Engineering',
    authors: 'Tanu Singh, Aashna Suman, Srishti Pundeer',
    tag: 'Sustainability',
    color: '#4A8C15',
  },
  {
    date: 'Dec 2025',
    title: 'EduFAITH: A Requirements Engineering Framework for Ethical and Human-Centered AI in Educational Decision Systems',
    venue: 'Artificial Intelligence in Decision Sciences — ISTE Edited Book',
    authors: 'Aashna Suman, Tanu Singh',
    tag: 'EdTech AI',
    color: '#C9A84C',
  },
];

export default function Research() {
  const [ref, visible] = useInView();

  return (
    <section className="research section" id="research" ref={ref}>
      <div className="container">
        <p className="section-label">Publications</p>
        <h2 className="section-title">Research & Publications</h2>

        <div className={`research__grid fade-in ${visible ? 'visible' : ''}`}>
          {papers.map((p, i) => (
            <div
              key={i}
              className="research__card"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="research__card-top">
                <span
                  className="research__tag"
                  style={{ background: p.color + '18', color: p.color, borderColor: p.color + '30' }}
                >
                  {p.tag}
                </span>
                <span className="research__date">{p.date}</span>
              </div>
              <h3 className="research__card-title">{p.title}</h3>
              <p className="research__venue">{p.venue}</p>
              <p className="research__authors">{p.authors}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
