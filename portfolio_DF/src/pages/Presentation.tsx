import { ArrowDown, ArrowRight, ArrowUpRight, Globe2, MapPin, Sparkles } from 'lucide-react'


export default function Presentation() {
  return (
    <div>
        <section className="hero section-wrap" id="accueil">
                  <div className="hero-copy">
                    <div className="availability">
                      <span className="pulse" /> DISPONIBLE POUR UN STAGE
                    </div>
                    <p className="eyebrow">BONJOUR, JE SUIS</p>
                    <h1>
                      Fousseni
                      <br />
                      <span>Diakité.</span>
                    </h1>
                    <h2>
                      Développeur <em>Fullstack</em> &amp; Mobile
                    </h2>
                    <p className="hero-description">
                      Je conçois des expériences web et mobiles utiles, intuitives et
                      performantes. Du frontend au backend, je transforme les idées en
                      solutions numériques.
                    </p>
                    <div className="hero-actions">
                      <a className="button button-primary" href="#projets">
                        Découvrir mes projets <ArrowUpRight size={17} />
                      </a>
                      <a className="button button-ghost" href="#contact">
                        Parlons de votre projet <ArrowRight size={16} />
                      </a>
                    </div>
                    <div className="hero-meta">
                      <span>
                        <MapPin size={15} /> Abidjan, Côte d’Ivoire
                      </span>
                      <span>
                        <Globe2 size={15} /> Ouvert aux opportunités à l’international
                      </span>
                    </div>
                  </div>
                  <div className="hero-visual">
                    <div className="orbit orbit-a" />
                    <div className="orbit orbit-b" />
                    <div className="code-card">
                      <div className="code-top">
                        <div className="window-dots">
                          <i />
                          <i />
                          <i />
                        </div>
                        <span>developer.tsx</span>
                        <span className="code-live">● LIVE</span>
                      </div>
                      <div className="code-content">
                        <div>
                          <span className="ln">01</span>
                          <span className="code-purple">const</span>{" "}
                          <span className="code-blue">developer</span> = {"{"}
                        </div>
                        <div>
                          <span className="ln">02</span> &nbsp; name:{" "}
                          <span className="code-green">"Fousseni"</span>,
                        </div>
                        <div>
                          <span className="ln">03</span> &nbsp; role:{" "}
                          <span className="code-green">"Fullstack Dev"</span>,
                        </div>
                        <div>
                          <span className="ln">04</span> &nbsp; stack: [
                        </div>
                        <div>
                          <span className="ln">05</span> &nbsp; &nbsp;{" "}
                          <span className="code-orange">"React"</span>,{" "}
                          <span className="code-orange">"TypeScript"</span>,
                        </div>
                        <div>
                          <span className="ln">06</span> &nbsp; &nbsp;{" "}
                          <span className="code-orange">"Laravel"</span>,{" "}
                          <span className="code-orange">"Flutter"</span>
                        </div>
                        <div>
                          <span className="ln">07</span> &nbsp; ],
                        </div>
                        <div>
                          <span className="ln">08</span> &nbsp; passion:{" "}
                          <span className="code-green">"Building ideas"</span>
                        </div>
                        <div>
                          <span className="ln">09</span>
                          {"}"};
                        </div>
                        <div className="code-cursor">▍</div>
                      </div>
                      <div className="code-footer">
                        <span>
                          <span className="footer-dot" /> TypeScript
                        </span>
                        <span>UTF-8</span>
                        <span>Ln 09, Col 2</span>
                      </div>
                    </div>
                    <div className="float-chip chip-react">
                      <span>⚛</span> React.js
                    </div>
                    <div className="float-chip chip-ts">
                      <span>TS</span> TypeScript
                    </div>
                    <div className="float-chip chip-laravel">
                      <span>◆</span> Laravel
                    </div>
                    <div className="visual-caption">
                      <Sparkles size={15} /> Curieux · Créatif · En progression
                    </div>
                  </div>
                  <a className="scroll-hint" href="#apropos">
                    <span>FAITES DÉFILER</span>
                    <ArrowDown size={15} />
                  </a>
                </section>
        
                <section className="intro-strip">
                  <div>
                    <span className="strip-number">01</span>
                    <span>WEB DEVELOPMENT</span>
                  </div>
                  <div>
                    <span className="strip-number">02</span>
                    <span>FULLSTACK SOLUTIONS</span>
                  </div>
                  <div>
                    <span className="strip-number">03</span>
                    <span>MOBILE DEVELOPMENT</span>
                  </div>
                  <div>
                    <span className="strip-number">04</span>
                    <span>UI &amp; VISUAL DESIGN</span>
                  </div>
                </section>
    </div>
  )
}
