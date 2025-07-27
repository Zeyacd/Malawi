import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./App.css";
import { FaHandHoldingHeart, FaBoxOpen, FaHandsHelping } from "react-icons/fa";
import logo from "./assets/logo.png";
import chiSiamoImage from "./assets/chi-siamo.jpg";
import { FaFlask, FaMobileAlt, FaLaptopCode, FaUniversity, FaProjectDiagram } from "react-icons/fa";
import { MdScience } from "react-icons/md";
import MalawiMap from "./component/MalawiMap"; // Cambia il percorso se si trova in un'altra cartella
import "@fortawesome/fontawesome-free/css/all.min.css";
import Volontariato from "./component/Volontariato";
import Donazioni from "./component/Donazioni";
import ProgettoMalawi from "./component/ProgettoMalawi";



function Header() {
  return (
    <header className="header">
      <div className="logo-title">
        <img src={logo} alt="Logo" className="logo" />
        <h1>SmartClimate</h1>
      </div>
      <nav className="nav">
        <Link to="/">Chi Siamo</Link>
        <Link to="/progettomalawi">Progetto Malawi</Link>
        <Link to="/assistenza">Assistenza</Link>
        <Link to="/donazioni">Donazioni</Link>
        <Link to="/volontariato">Volontariato</Link>
      </nav>
    </header>
  );
}

function ChiSiamo() {
  return (
    <div className="page">
      <div style={{ maxWidth: 900, margin: "auto", padding: 30, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", lineHeight: 1.6 }}>
      <h1 style={{ textAlign: "center", marginBottom: 40, fontWeight: "700", fontSize: 36 }}>Chi è TRIM S.R.L.</h1>

      <p style={{ fontSize: 18, marginBottom: 30 }}>
        Fondata nel 2016 e con sede a Torino, TRIM S.R.L. è una realtà dinamica e innovativa che si occupa di ricerca e sviluppo sperimentale nei settori delle scienze naturali e dell’ingegneria. Con un team altamente qualificato e un forte orientamento all’innovazione tecnologica, TRIM accompagna aziende e istituzioni nel processo di trasformazione digitale, proponendo soluzioni all’avanguardia capaci di rispondere alle sfide più complesse dell’industria 4.0.
      </p>

      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 30, marginBottom: 40 }}>
        <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 25, boxShadow: "0 3px 8px rgba(0,0,0,0.1)" }}>
          <FaLaptopCode size={50} color="green" style={{ marginBottom: 20 }} />
          <h2 style={{ fontSize: 24, marginBottom: 15 }}>Sviluppo Software su Misura</h2>
          <p>
            TRIM S.R.L. progetta e sviluppa software personalizzato per applicazioni web e mobile, focalizzandosi su soluzioni scalabili, sicure e user-friendly. Grazie a una metodologia agile e collaborativa, il team TRIM garantisce prodotti finali che ottimizzano i processi aziendali, migliorano l’esperienza utente e abilitano nuovi modelli di business digitali.
          </p>
          <p>
            Dal design dell’interfaccia utente alla realizzazione di backend robusti, ogni progetto è curato in ogni dettaglio, integrando tecnologie moderne come Intelligenza Artificiale, Machine Learning e IoT.
          </p>
        </div>

        <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 25, boxShadow: "0 3px 8px rgba(0,0,0,0.1)" }}>
          <MdScience size={50} color="green" style={{ marginBottom: 20 }} />
          <h2 style={{ fontSize: 24, marginBottom: 15 }}>Ricerca e Sviluppo Sperimentale</h2>
          <p>
            Specializzata in attività di R&D, TRIM conduce sperimentazioni avanzate nel campo delle scienze naturali e dell’ingegneria, sviluppando prototipi tecnologici capaci di anticipare le esigenze del mercato e dell’industria.
          </p>
          <p>
            I progetti di ricerca spaziano dall’analisi dei big data ambientali alla progettazione di sistemi meccatronici innovativi, con particolare attenzione all’efficienza energetica e alla sostenibilità ambientale.
          </p>
        </div>

        <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 25, boxShadow: "0 3px 8px rgba(0,0,0,0.1)" }}>
          <FaMobileAlt size={50} color="#16a34a" style={{ marginBottom: 20 }} />
          <h2 style={{ fontSize: 24, marginBottom: 15 }}>Applicazioni Web e Mobile</h2>
          <p>
            TRIM realizza applicazioni interattive per dispositivi mobili e piattaforme web, progettate per migliorare la comunicazione e l’interazione con l’utente finale.
          </p>
          <p>
            Le app sviluppate integrano funzionalità avanzate come geolocalizzazione, notifiche push personalizzate e interfacce multilingua, rivolgendosi a settori diversi come il turismo, la sanità e l’automazione industriale.
          </p>
        </div>

        <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 25, boxShadow: "0 3px 8px rgba(0,0,0,0.1)" }}>
          <FaUniversity size={50} color="green" style={{ marginBottom: 20 }} />
          <h2 style={{ fontSize: 24, marginBottom: 15 }}>Collaborazioni e Progetti Accademici</h2>
          <p>
            TRIM mantiene solide collaborazioni con università e centri di ricerca, partecipando attivamente a progetti finanziati a livello regionale, nazionale ed europeo.
          </p>
          <p>
            Queste sinergie permettono di integrare conoscenze accademiche con competenze pratiche, accelerando il trasferimento tecnologico e favorendo lo sviluppo di soluzioni innovative capaci di impattare positivamente sul territorio e sul tessuto produttivo.
          </p>
        </div>
      </section>

      <section>
        <FaProjectDiagram size={50} color="green" style={{ float: "left", marginRight: 20 }} />
        <div>
          <h2 style={{ fontSize: 24, marginBottom: 15 }}>Progetti Innovativi e Futuro</h2>
          <p>
            Tra i progetti più ambiziosi di TRIM S.R.L. vi è lo sviluppo di una piattaforma integrata per il monitoraggio ambientale basata su intelligenza artificiale e sensori IoT, capace di analizzare in tempo reale dati complessi e fornire previsioni precise su qualità dell’aria e consumo energetico.
          </p>
          <p>
            Inoltre, l’azienda sta investendo nella ricerca di nuove soluzioni per l’automazione industriale 4.0, con sistemi intelligenti di manutenzione predittiva che riducono i fermi macchina e ottimizzano i processi produttivi.
          </p>
          <p>
            Guardando al futuro, TRIM punta a diventare un punto di riferimento nazionale nell’innovazione tecnologica applicata all’industria e alla sostenibilità, rafforzando il proprio network e ampliando la gamma di servizi offerti.
          </p>
        </div>
      </section>
    </div>
    </div>
  );
}

function Assistenza() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = (text = input) => {
    if (text.trim() === "") return;

    const lower = text.toLowerCase();
    let botResponse = "Grazie per il tuo messaggio. Un operatore ti risponderà al più presto.";
        if (lower.includes("donazione") && lower.includes("problema")) {
      botResponse = "Se riscontri problemi con la donazione, assicurati che i dati siano corretti o riprova più tardi.";
    } else if (lower.includes("annulla") || lower.includes("cancellare")) {
      botResponse = "Puoi annullare una donazione mensile in qualsiasi momento dalla sezione Progetto Malawi.";
    } else if (lower.includes("smartclimate") || lower.includes("progetto")) {
      botResponse = "SmartClimate è un progetto per mappare e aiutare le comunità del Malawi con risorse e donazioni.";
    } else if (lower.includes("come") && lower.includes("donare")) {
      botResponse = "Puoi effettuare una donazione tramite la sezione Donazioni nel sito. Scegli tra singola o mensile.";
    } else if (lower.includes("volontario") || lower.includes("volontariato")) {
      botResponse = "Grazie per il tuo interesse! Puoi candidarti come volontario nella sezione dedicata sul sito.";
    } else if (lower.includes("dove") && lower.includes("scaricare")) {
      botResponse = "L'app 3Map è scaricabile dagli store ufficiali (Google Play e App Store) su tutti i dispositivi.";
    } else if (lower.includes("contatti") || lower.includes("email")) {
      botResponse = "Puoi contattarci all'indirizzo email supporto@smartclimate.org o tramite il modulo nella pagina Contatti.";
    } else if (lower.includes("risorse") || lower.includes("materiali")) {
      botResponse = "Le risorse accettate includono cibo, acqua potabile, strumenti sanitari e materiali educativi.";
    }

    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: botResponse }]);
    }, 200);
  };

  const quickQuestions = [
    "Come posso donare?",
    "Ho problemi con la donazione",
    "Come annullare la donazione mensile?",
    "Cos’è SmartClimate?"
  ];

  return (
    <div className="page">
      <h2>Assistenza</h2>

      <div className="quick-buttons">
        {quickQuestions.map((q, index) => (
          <button key={index} onClick={() => handleSend(q)}>
            {q}
          </button>
        ))}
      </div>

      <div className="chat-box">
        <div className="chat-box-scroll">
  {messages.map((msg, index) => (
    <div key={index} className={msg.from === "user" ? "msg user-msg" : "msg bot-msg"}>
      {msg.text}
    </div>
  ))}
</div>
      </div>

      <div className="chat-input">
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Scrivi un messaggio..." />
        <button onClick={() => handleSend()}>Invia</button>
      </div>
    </div>
  );
}



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ChiSiamo />} />
        <Route path="/ProgettoMalawi" element={<ProgettoMalawi />} />
        <Route path="/assistenza" element={<Assistenza />} />
        <Route path="/donazioni" element={<Donazioni />} />
        <Route path="/volontariato" element={<Volontariato />} />
      </Routes>
    </Router>
  );
}

export default App;


