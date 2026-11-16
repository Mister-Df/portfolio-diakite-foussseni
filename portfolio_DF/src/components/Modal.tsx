
import { ArrowUpRight, X } from 'lucide-react'
import { projects } from '../lib/data'
import type { ProjectType } from '../lib/typeData'


export default function Modal({activeProject, setActiveProject}: ProjectType) {
  return (
    <>
        {activeProject !== null && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setActiveProject(null)}
              aria-label="Fermer"
            >
              <X />
            </button>
            <p className="project-category">
              {projects[activeProject].category}
            </p>
            <h2>{projects[activeProject].title}</h2>
            <p>{projects[activeProject].details}</p>
            <div className="project-tags">
              {projects[activeProject].stack.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <a
              className="text-link"
              href="#contact"
              onClick={() => setActiveProject(null)}
            >
              Discuter de ce projet <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </>
  )
}

