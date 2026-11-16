import { ArrowUpRight, Menu, X } from 'lucide-react'
import type { MenuType } from '../lib/typeData'


export default function Navbar( {menuOpen, closeMenu,  setMenuOpen} : MenuType) {
  return (
    <div>
        <div className="ambient ambient-one" />
              <div className="ambient ambient-two" />
              <header className="site-header">
                <a className="brand" href="#accueil" onClick={closeMenu}>
                  <span className="brand-mark">FD</span>
                  <span>
                    FOUSSENI<span className="brand-dot">.</span>
                  </span>
                </a>
                <button
                  className="menu-toggle"
                  aria-label="Ouvrir le menu"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? <X /> : <Menu />}
                </button>
                <nav className={menuOpen ? "nav nav-open" : "nav"}>
                  {[
                    ["Accueil", "#accueil"],
                    ["À propos", "#apropos"],
                    ["Compétences", "#competences"],
                    ["Projets", "#projets"],
                    ["Parcours", "#parcours"],
                  ].map(([label, href]) => (
                    <a key={href} href={href} onClick={closeMenu}>
                      {label}
                    </a>
                  ))}
                  <a className="nav-contact" href="#contact" onClick={closeMenu}>
                    Me contacter <ArrowUpRight size={15} />
                  </a>
                </nav>
              </header>
    </div>
  )
}
