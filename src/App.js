import ChatWidget from "./components/ChatWidget";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <h1>CoachChat AI</h1>
        <p>Dein persönlicher AI-Chatbot für Social Media</p>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Automatisiere dein Social Media Business</h2>
        <p>
          Gewinne mehr Kunden, spare Zeit und steigere deine Reichweite – mit
          deinem eigenen AI-Chatbot.
        </p>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature">
          <h3>🚀 Mehr Reichweite</h3>
          <p>Beantworte Nachrichten 24/7 und steigere deine Sichtbarkeit.</p>
        </div>
        <div className="feature">
          <h3>⏳ Zeit sparen</h3>
          <p>Automatisiere Standardfragen und fokussiere dich auf dein Business.</p>
        </div>
        <div className="feature">
          <h3>💰 Mehr Umsatz</h3>
          <p>Nutze smarte Funnels, um Leads in zahlende Kunden zu verwandeln.</p>
        </div>
      </section>

      {/* Call to Action / Demo-Formular */}
      <section className="cta">
        <h2>Bereit für deinen AI-Chatbot?</h2>
        <form
          action="https://formspree.io/f/xdklbbpr"
          method="POST"
          target="_blank"
        >
          <input
            type="text"
            name="name"
            placeholder="Dein Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Deine E-Mail"
            required
          />
          <textarea
            name="message"
            placeholder="Deine Nachricht"
            required
          ></textarea>
          <button type="submit" className="btn">Demo anfragen</button>
        </form>
        <p>Du bekommst danach eine Bestätigung per E-Mail.</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 CoachChat AI – Alle Rechte vorbehalten</p>
      </footer>

     <ChatWidget persona={`Du bist der offizielle Chat von FitnessCoach Max. 
Sprich motivierend, locker und kurz (max. 3 Sätze). 
Deine Zielgruppe sind Männer und Frauen zwischen 20 und 40, die abnehmen und Muskeln aufbauen wollen. 
Stelle am Anfang 1-2 Fragen (z. B. "Was ist dein aktuelles Fitnessziel?" oder "Hast du schon Erfahrung mit Training?"). 
Deine Hauptaufgabe: ein kostenloses Erstgespräch anzubieten. 
Gib keine Preise im Chat an, sondern leite zum Erstgespräch weiter. 
Verweise bei medizinischen Fragen darauf, dass Max kein Arzt ist.`} />

    </div>
  );
}

export default App;
