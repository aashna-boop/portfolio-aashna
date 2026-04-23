import React from 'react';
import useInView from './useInView';
import './Projects.css';

const projects = [
  {
    name: 'KathaSutra',
    emoji: '🎭',
    period: 'Aug 2025 – Present',
    tagline: 'AI Powered Cultural Storyteller',
    description:
      'An interactive digital storytelling platform that preserves and presents cultural narratives with a modern twist. Combines AI text generation, image synthesis, and voice narration into an immersive multimedia experience.',
    tech: ['Python', 'OpenAI GPT', 'Stable Diffusion', 'Whisper', 'MoviePy', 'Streamlit', 'PIL'],
    highlight: 'Multimedia storytelling with AI narration & image synthesis',
  },
  {
    name: 'IMMUNE',
    emoji: '🧬',
    period: '2025 – Present',
    tagline: 'Neural Framework for Anomaly Detection',
    description:
      'A Mixture-of-Experts (MoE) autoencoder framework with continual learning capabilities for multivariate time-series anomaly detection. Achieves higher AUROC, AUPRC, and F1 while significantly reducing catastrophic forgetting.',
    tech: ['Python', 'PyTorch', 'MoE Architecture', 'EWC', 'Experience Replay', 'AUROC'],
    highlight: 'Under evaluation for patent filing',
  },
];

export default function Projects() {
  const [ref, visible] = useInView();

  return (
    <section className="projects section" id="projects" ref={ref}>
      <div className="container">
        <p className="section-label">Work</p>
        <h2 className="section-title">Featured Projects</h2>

        <div className={`projects__list fade-in ${visible ? 'visible' : ''}`}>
          {projects.map((p, i) => (
            <div key={p.name} className={`project-card project-card--${i % 2 === 0 ? 'light' : 'dark'}`}>
              <div className="project-card__left">
                <div className="project-card__header">
                  <span className="project-card__emoji">{p.emoji}</span>
                  <div>
                    <span className="project-card__period">{p.period}</span>
                    <h3 className="project-card__name">{p.name}</h3>
                    <p className="project-card__tagline">{p.tagline}</p>
                  </div>
                </div>
                <p className="project-card__description">{p.description}</p>
                <div className="project-card__highlight">
                  <span>✦</span> {p.highlight}
                </div>
              </div>
              <div className="project-card__right">
                <p className="project-card__tech-label">Tech Stack</p>
                <div className="project-card__tech">
                  {p.tech.map((t) => (
                    <span key={t} className="project-card__chip">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
