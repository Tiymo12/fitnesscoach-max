import ChatWidget from "./components/ChatWidget";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <h1>FitnessCoach Max</h1>
        <p>Dein Weg zu mehr Kraft, Ausdauer und Motivation – mit AI-Unterstützung.</p>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Starte dein Fitness-Programm jetzt!</h2>
        <p>
          Mit FitnessCoach Max bekommst du die Motivation und Struktur, die du
          brauchst, um deine Ziele zu erreichen – unterstützt durch einen smarten AI-Chatbot.
        </p>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature">
          <h3>🔥 Individuelle Tipps</h3>
          <p>Erhalte motivierende Antworten, angepasst an deine Ziele.</p>
        </div>
        <div className="feature">
          <h3>⏳ Zeit sparen</h3>
          <p>Keine endlosen Suchen – dein CoachBot hat die Antworten sofort.</p>
        </div>
        <div className="feature">
          <h3>🎯 Klare Ziele</h3>
          <p>Werde Schritt für Schritt zu deiner besten Version.</p>
        </div>
      </section>

      {/* Call to Action / Demo */}
      <section className="cta">
        <h2>Bist du bereit für dein kostenloses Erstgespräch?</h2>
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
          <button type="submit" className="btn">Erstgespräch anfragen</button>
        </form>
        <p>Du bekommst eine Bestätigung per E-Mail.</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 FitnessCoach Max – Alle Rechte vorbehalten</p>
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
