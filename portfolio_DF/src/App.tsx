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
  const [sending, setSending] = useState(false);
  const [contactError, setContactError] = useState("");
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const closeMenu = () => setMenuOpen(false);

  async function handleContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setSent(false);
    setContactError("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/fouscocom15@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Nouveau message de ${name}`,
        }),
      });
      const result = await response.json();
      if(name.trim() === "" || email.trim() === "" || message.trim() === ""){
        setContactError("Veuillez remplir tous les champs.");
        setSending(false);
        return;
      }

      if (!response.ok || result.success !== "true" && result.success !== true) {
        throw new Error("L’envoi du message a échoué.");
      }

      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setContactError("Le message n’a pas pu être envoyé. Réessayez ou écrivez directement à fouscocom15@gmail.com.");
    } finally {
      setSending(false);
    }
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
        
        <Contact sent={sent} sending={sending} contactError={contactError} name={name} email={email} message={message} setName={setName} setEmail={setEmail} setMessage={setMessage} setSent={setSent} handleContact={handleContact} />
      </main>
      
      <footer>
        <Footer />
      </footer>

      <Modal activeProject={activeProject} setActiveProject={setActiveProject} />
    </>
  );
}

export default App;
