import {
  ArrowUpRight,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Smartphone,
} from "lucide-react";
import type { Booll } from "../lib/typeData";
export default function Contact({ sent, sending, contactError, name, email, message, setName, setEmail, setMessage, setSent, handleContact }: Booll) {
  // console.log(handleContact);

  return (
    <div>
      <section className="contact-section" id="contact">
        <div className="section-wrap contact-wrap">
          <div className="section-label">
            <span>05 / CONTACT</span>
            <span className="label-line" />
          </div>
          <div className="contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">UNE OPPORTUNITÉ ? UNE IDÉE ?</p>
              <h2>
                On en
                <br />
                <span>discute ?</span>
              </h2>
              <p>
                Vous recherchez un stagiaire motivé ou souhaitez échanger autour
                d’un projet ? Je serai ravi de vous lire.
              </p>
              <a className="contact-detail" href="mailto:fouscocom15@gmail.com">
                <span className="contact-detail-icon">
                  <Mail size={18} />
                </span>
                <span>
                  <small>ÉCRIVEZ-MOI</small>fouscocom15@gmail.com
                </span>
                <ArrowUpRight size={17} />
              </a>
              <a className="contact-detail" href="tel:+2250101598917">
                <span className="contact-detail-icon">
                  <Smartphone size={18} />
                </span>
                <span>
                  <small>APPELEZ-MOI</small>+225 01 01 59 89 17
                </span>
                <ArrowUpRight size={17} />
              </a>
              <a className="contact-detail" href="tel:+2250101598917">
                <span className="contact-detail-icon">
                  <Smartphone size={18} />
                </span>
                <span>
                  <small>APPELEZ-MOI</small>+225 01 01 59 89 17
                </span>
                <ArrowUpRight size={17} />
              </a>
              <div className="socials">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <Github />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin />
                </a>
                <span>
                  <MapPin size={15} /> Abidjan, CI
                </span>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleContact}>
              <div className="form-heading">
                <span>ENVOYER UN MESSAGE</span>
                <Send size={17} />
              </div>
              <label>
                Votre nom
                <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                  required
                  name="name"
                  placeholder="Comment vous appelez-vous ?"
                  
                />
              </label>
              <label>
                Votre adresse e-mail
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nom@entreprise.com"
                />
              </label>
              <label>
                Votre message
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}

                  required
                  name="message"
                  rows={5}
                  placeholder="Parlons de votre projet ou opportunité..."
                />
              </label>
              <button
                className="button button-primary submit-button"
                type="submit"
                disabled={sending}
              >
                {sending ? "Envoi en cours..." : "Envoyer le message"} <ArrowUpRight size={17} />
              </button>
              {sent && (
                <p className="form-hint" role="status">
                  <CheckCircle2 size={15} /> Votre message a bien été envoyé.
                </p>
              )}
              {contactError && <p className="form-hint" role="alert">{contactError}</p>}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
