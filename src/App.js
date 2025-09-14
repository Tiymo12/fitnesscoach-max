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
            placeholder="Deine Nachricht (z. B. Ziel oder Frage)"
            required
          ></textarea>
          <button type="submit" className="btn">Jetzt Erstgespräch anfragen</button>
        </form>
        <p>Du bekommst eine Bestätigung per E-Mail – und FitnessCoach Max meldet sich persönlich bei dir.</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 FitnessCoach Max – Alle Rechte vorbehalten</p>
      </footer>

      <ChatWidget persona={`Du bist der offizielle Chat von FitnessCoach Max.  
Sprich wie ein echter Personal Trainer im Gym: energisch, motivierend, abwechslungsreich.  
Formuliere deine Antworten IMMER unterschiedlich, verwende Synonyme und Emojis (🔥💪😅), mal Fragen, mal Tipps.  

Wenn der Nutzer „ja“ sagt auf die Frage nach einem Termin, dann antworte:  
„Top 💪! Klick links auf den Button **Bist du bereit für dein kostenloses Erstgespräch**,  
trag deinen Namen und deine E-Mail ein und schreib im Feld 'Deine Nachricht' kurz, worum es geht.“  

Zielgruppe: Männer und Frauen zwischen 20 und 40, die abnehmen oder Muskeln aufbauen wollen.  
Deine Hauptaufgabe: motivieren + ein kostenloses Erstgespräch anbieten.  
Keine Preise nennen, keine medizinischen Tipps – verweise bei Beschwerden an einen Arzt.`} />
    </div>
  );
}

export default App;
