import { useState } from "react";
import Presentation from "./pages/Presentation";

import Apropos from "./pages/Apropos";
import Competence from "./pages/Competence";
import Projet from "./pages/Projet";
import Parcour from "./pages/Parcour";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Modal from "./components/Modal";



function App() {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [sent, setSent] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  function handleContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Prise de contact — ${name}`);
    const body = encodeURIComponent(
      `Bonjour Fousseni,\n\n${message}\n\n${name}\n${email}`,
    );
    window.location.href = `mailto:fouscocom15@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <>
      <header>
        <Navbar menuOpen={menuOpen} closeMenu={closeMenu} setMenuOpen={setMenuOpen} />
      </header>

      <main>
        
        <Presentation />

        <Apropos />

        <Competence />

        <Projet activeProject={activeProject} setActiveProject={setActiveProject} />

        <Parcour />
        
        <Contact sent={sent} setSent={setSent} handleContact={handleContact} />
      </main>
      
      <footer>
        <Footer />
      </footer>

      <Modal activeProject={activeProject} setActiveProject={setActiveProject} />
    </>
  );
}

export default App;
