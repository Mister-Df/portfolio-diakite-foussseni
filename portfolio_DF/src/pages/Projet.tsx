import { ArrowUpRight } from 'lucide-react';
import { projects } from '../lib/data';
import type { ProjectType } from '../lib/typeData';


export default function Projet({ setActiveProject}: ProjectType) {

    

  return (
    <div>
        <section className="section section-wrap projects-section" id="projets">
          <div className="section-label">
            <span>03 / PROJETS</span>
            <span className="label-line" />
          </div>
          <div className="section-heading">
            <div>
              <p className="eyebrow">CE QUE JE CONSTRUIS</p>
              <h2 className="section-title">
                Du concret,
                <br />
                <span>ligne après ligne.</span>
              </h2>
            </div>
            <p className="section-aside">
              Une sélection de réalisations personnelles qui illustrent ma
              pratique du développement web et mobile.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project, i) => {
              const Icon = project.icon;
              return (
                <article
                  className={`project-card ${project.color}`}
                  key={project.number}
                >
                  <div className={`project-art ${project.image ? 'has-screenshot' : ''}`}>
                    <span className="project-no">{project.number} / 03</span>
                    {project.image ? (
                      <img
                        className="project-screenshot"
                        src={project.image}
                        alt={`Capture d’écran du projet ${project.title}`}
                      />
                    ) : (
                      <>
                        <div className="project-art-icon">
                          <Icon size={54} strokeWidth={1.1} />
                        </div>
                        <div className="art-orbit" />
                        <span className="art-cross">+</span>
                      </>
                    )}
                  </div>
                  <div className="project-info">
                    <p className="project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-bottom">
                      <div className="project-tags">
                        {project.stack.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                      <button
                        className="round-link"
                        aria-label={`Détails ${project.title}`}
                        onClick={() => setActiveProject(i)}
                      >
                        <ArrowUpRight size={19} />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="project-note">
            <span>À SAVOIR</span> Les projets présentés sont des réalisations
            personnelles. Ajoute les liens GitHub et les démonstrations en ligne
            dès qu’ils sont prêts.
          </p>
        </section>
    </div>
  )
}
