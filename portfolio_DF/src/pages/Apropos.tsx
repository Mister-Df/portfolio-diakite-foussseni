import { ArrowUpRight } from 'lucide-react'

export default function Apropos() {
  return (
    <div>
        <section className="section section-wrap about-section" id="apropos">
          <div className="section-label">
            <span>01 / À PROPOS</span>
            <span className="label-line" />
          </div>
          <div className="about-grid">
            <div>
              <p className="eyebrow">MON HISTOIRE</p>
              <h2 className="section-title">
                Le code comme outil.
                <br />
                <span>Les idées comme moteur.</span>
              </h2>
            </div>
            <div className="about-text">
              <p>
                Je suis <strong>Fousseni Diakité</strong>, développeur web
                fullstack et mobile basé à Abidjan. Mon parcours associe le
                développement logiciel et la communication visuelle : deux
                univers qui nourrissent ma façon de concevoir des produits
                numériques.
              </p>
              <p>
                À travers mes projets personnels, je pratique la création
                d’interfaces avec React et TypeScript, le développement d’API et
                de back-offices avec Laravel, ainsi que la réalisation
                d’applications mobiles avec Flutter.
              </p>
              <p>
                Je souhaite aujourd’hui rejoindre une équipe en tant que{" "}
                <strong>stagiaire développeur Fullstack / Mobile</strong>,
                apprendre au contact de développeurs expérimentés et contribuer
                à des projets concrets.
              </p>
              <a className="text-link" href="#contact">
                Construisons quelque chose ensemble <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="stats-row">
            <div>
              <strong>
                03<span>+</span>
              </strong>
              <small>Axes de développement</small>
            </div>
            <div>
              <strong>
                Full<span>stack</span>
              </strong>
              <small>Du frontend au backend</small>
            </div>
            <div>
              <strong>∞</strong>
              <small>Envie d’apprendre</small>
            </div>
          </div>
        </section>
    </div>
  )
}
