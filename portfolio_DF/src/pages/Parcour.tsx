import { ArrowUpRight, BriefcaseBusiness, GraduationCap } from 'lucide-react'
import { timeline } from '../lib/data'

export default function Parcour() {
  return (
    <div>
        <section className="section section-wrap journey-section" id="parcours">
          <div className="section-label">
            <span>04 / PARCOURS</span>
            <span className="label-line" />
          </div>
          <div className="section-heading">
            <div>
              <p className="eyebrow">APPRENDRE & ÉVOLUER</p>
              <h2 className="section-title">
                Mon parcours
                <br />
                <span>en mouvement.</span>
              </h2>
            </div>
            <p className="section-aside">
              Une formation qui combine logiciel, créativité et apprentissage
              continu.
            </p>
          </div>
          <div className="journey-layout">
            <div className="timeline">
              {timeline.map((item, i) => (
                <div className="timeline-item" key={item.year}>
                  <div className="timeline-marker">
                    {i === 0 ? <GraduationCap size={17} /> : <span />}
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-year">{item.year}</span>
                    <h3>{item.title}</h3>
                    <strong>{item.place}</strong>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <aside className="journey-card">
              <div className="journey-card-icon">
                <BriefcaseBusiness size={23} />
              </div>
              <p className="eyebrow">PROCHAINE ÉTAPE</p>
              <h3>
                Prêt à passer
                <br />à l’expérience
                <br />
                <span>professionnelle.</span>
              </h3>
              <p>
                Je recherche un stage en développement web ou fullstack à
                Abidjan, avec l’envie de contribuer, apprendre et progresser en
                équipe.
              </p>
              <a className="button button-primary" href="#contact">
                Me proposer un stage <ArrowUpRight size={16} />
              </a>
            </aside>
          </div>
        </section>

    </div>
  )
}
