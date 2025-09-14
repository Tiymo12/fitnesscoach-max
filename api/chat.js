// api/chat.js
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // in Vercel unter Environment Variables setzen
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message, persona, settings } = req.body;

  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: settings?.temperature || 0.8, // abwechslungsreichere Antworten
      max_tokens: 200,
      messages: [
        { role: "system", content: persona },
        { role: "user", content: message }
      ],
    });

    const reply = completion.choices[0].message.content;

    // Sonderfall: User schreibt "ja" → Termin-Hinweis
    if (message.trim().toLowerCase() === "ja") {
      return res.json({
        reply: "Top 💪! Klick links auf den Button **Bist du bereit für dein kostenloses Erstgespräch**, trag deinen Namen und deine E-Mail ein und schreib im Feld 'Deine Nachricht' kurz, worum es geht."
      });
    }

    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "OpenAI API Error" });
  }
}
