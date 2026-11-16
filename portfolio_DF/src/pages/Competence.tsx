import { skills } from '../lib/data'

export default function Competence() {
  return (
    <div>
        <section
          className="section section-wrap skills-section"
          id="competences"
        >
          <div className="section-label">
            <span>02 / COMPÉTENCES</span>
            <span className="label-line" />
          </div>
          <div className="section-heading">
            <div>
              <p className="eyebrow">MA BOÎTE À OUTILS</p>
              <h2 className="section-title">
                Des compétences
                <br />
                <span>qui se complètent.</span>
              </h2>
            </div>
            <p className="section-aside">
              Un socle technique polyvalent pour imaginer, construire et faire
              évoluer des applications.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map(({ title, icon: Icon, items }, i) => (
              <article className="skill-card" key={title}>
                <div className="skill-card-top">
                  <span className="skill-icon">
                    <Icon size={21} />
                  </span>
                  <span className="skill-index">0{i + 1}</span>
                </div>
                <h3>{title}</h3>
                <div className="tag-list">
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
    </div>
  )
}
