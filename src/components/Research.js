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

const upcoming = [
  {
    title: 'HiddenLens',
    tag: 'Requirements Engineering',
    color: '#6A0DAD',
    description:
      'Natural language requirements silently carry hidden assumptions — about performance limits, user behaviour, and environmental conditions — that, when left undetected, cascade into flawed architectures and costly deployment failures. HiddenLens is a six-layer pipeline that fuses fine-tuned transformer models with LLM reasoning to surface, categorise, and resolve these invisible beliefs at both the sentence and paragraph level.',
  },
  {
    title: 'NLP-Assisted AGDI System',
    tag: 'NLP & Automation',
    color: '#007C92',
    description:
      'A novel framework that reimagines how AGDI (Automated Graphical Design and Integration) systems are built — instead of manual configuration, engineers describe what they need in plain language, and the system interprets those instructions using NLP and ML to automatically handle drawing layout, scaling, and structural generation.',
  },
  {
    title: 'Chaotic Graph Walk–Based Coverless Steganography Using Citation Networks',
    tag: 'Steganography',
    color: '#8C1515',
    description:
      'Rather than embedding secrets inside a carrier file, this approach encodes information in the traversal path itself — using chaotic dynamical systems to generate deterministic yet highly unpredictable walks across citation graphs. The sequence of visited nodes carries the hidden message without any modification to the underlying graph, leaving no detectable trace.',
  },
  {
    title: 'COBRA-EV',
    tag: 'EV Systems',
    color: '#4A8C15',
    description:
      'EV charging infrastructure is anything but static — stations go offline, demand surges, and constraints shift in real time. COBRA-EV approaches station recommendation as a feasibility-first online decision problem, continuously benchmarking options against live operational constraints rather than optimising a single metric over a frozen snapshot of the network.',
  },
];

export default function Research() {
  const [ref, visible] = useInView();
  const [upcomingRef, upcomingVisible] = useInView();

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

        {/* Upcoming Section */}
        <div className="upcoming__header" ref={upcomingRef}>
          <p className="section-label">In Progress</p>
          <h2 className="section-title">Upcoming Research</h2>
        </div>
        <div className={`upcoming__grid fade-in ${upcomingVisible ? 'visible' : ''}`}>
          {upcoming.map((u, i) => (
            <div
              key={i}
              className="upcoming__card"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="upcoming__card-top">
                <span
                  className="research__tag upcoming__tag"
                  style={{ background: u.color + '18', color: u.color, borderColor: u.color + '30' }}
                >
                  {u.tag}
                </span>
                <span className="upcoming__badge">Upcoming</span>
              </div>
              <h3 className="research__card-title">{u.title}</h3>
              <p className="upcoming__description">{u.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
