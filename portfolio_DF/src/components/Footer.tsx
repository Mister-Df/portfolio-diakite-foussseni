
export default function Footer() {
  return (
    <div>
        <footer className="footer section-wrap">
        <a className="brand" href="#accueil">
          <span className="brand-mark">FD</span>
          <span>
            FOUSSENI<span className="brand-dot">.</span>
          </span>
        </a>
        <p>Conçu avec passion · React &amp; TypeScript</p>
        <a href="#accueil">Retour en haut ↑</a>
        <small>
          © {new Date().getFullYear()} Fousseni Diakité. Tous droits réservés.
        </small>
      </footer>
    </div>
  )
}
