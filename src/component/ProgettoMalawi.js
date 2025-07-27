import React, { useState } from 'react';
import { FaHandHoldingHeart, FaBoxOpen, FaHandsHelping } from 'react-icons/fa';
import MalawiMap from './MalawiMap'; // Assicurati che il percorso sia corretto
import './ProgettoMalawi.css';

function ProgettoMalawi() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [donationCount, setDonationCount] = useState(0);

  const handleRegistration = (e) => {
    e.preventDefault();
    setIsRegistered(true);
    setShowForm(false);
  };

  const handleDonation = () => {
    alert("Grazie per la tua donazione!");
    setDonationCount((prev) => prev + 1);
  };

  return (
    <>
      <div className="page">
        <h1>🌍 Progetto SmartClimate</h1>
        <h2>In collaborazione con TRIM S.R.L.</h2>

        <div className="section">
          <p>
            <strong>SmartClimate</strong> è un progetto innovativo nato dalla collaborazione tra <strong>TRIM S.R.L.</strong> e partner locali, con l’obiettivo di supportare lo sviluppo sostenibile e il monitoraggio ambientale nella regione del <strong>Malawi</strong>, una delle aree più vulnerabili agli effetti del cambiamento climatico.
          </p>
          <p>
            Attraverso tecnologie avanzate di <strong>mappatura territoriale</strong>, il progetto consente di localizzare i punti di interesse fondamentali per le comunità locali — come pozzi d'acqua, scuole, strutture sanitarie, centri di volontariato e aree da riforestare.
          </p>
        </div>

        <div className="section">
          <h3>🗺️ Mappa Collaborativa</h3>
          <p>
            Grazie all'applicazione <strong>3Map</strong>, disponibile su tutti i dispositivi elettronici tramite gli <em>store ufficiali</em>, gli utenti possono:
          </p>
          <ul>
            <li>Visualizzare in tempo reale la mappa aggiornata del territorio malawiano</li>
            <li><strong>Aggiungere nuovi punti di interesse</strong> o aggiornare quelli esistenti</li>
            <li>Segnalare bisogni specifici delle comunità locali</li>
          </ul>
          <p>
            Questa piattaforma collaborativa promuove la partecipazione attiva della popolazione locale e dei volontari internazionali.
          </p>
        </div>

        <div className="section">
          <h3>🤝 Il ruolo di TRIM S.R.L.</h3>
          <p>TRIM S.R.L. fornisce:</p>
          <ul>
            <li>Supporto tecnologico e infrastrutturale</li>
            <li>Risorse digitali e strumenti di mappatura</li>
            <li>Assistenza logistica per le operazioni in loco</li>
            <li>Canali per la raccolta fondi, volontari e materiali</li>
          </ul>
        </div>

        <div className="section">
          <h3>💚 Come puoi aiutare</h3>
          <p>Attraverso questo sito puoi:</p>
          <div className="card-section">
            <div className="card">
              <FaHandHoldingHeart size={40} style={{ color: '#2a9d8f' }} />
              <h3>Donazioni</h3>
              <p>Contribuisci con una donazione singola o mensile.</p>
            </div>
            <div className="card">
              <FaBoxOpen size={40} style={{ color: '#e76f51' }} />
              <h3>Risorse</h3>
              <p>Invia beni utili: cibo, acqua, strumenti sanitari.</p>
            </div>
            <div className="card">
              <FaHandsHelping size={40} style={{ color: '#264653' }} />
              <h3>Volontari</h3>
              <p>Partecipa al progetto direttamente sul campo.</p>
            </div>
          </div>
        </div>

        <p><strong>SmartClimate</strong> non è solo un progetto: è un ponte tra tecnologia, sostenibilità e solidarietà. Unisciti a noi per costruire un futuro più equo, smart e condiviso.</p>

        <MalawiMap />
      </div>
    </>
  );
}

export default ProgettoMalawi;
