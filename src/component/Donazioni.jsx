import React, { useState } from 'react';
import './Donazioni.css';

function Donazioni() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [donationCount, setDonationCount] = useState(
    parseInt(localStorage.getItem('donationCount')) || 0
  );
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nome: '',
    carta: '',
    scadenza: '',
    cvv: '',
    tipo: 'singola',
  });
  const [showSummary, setShowSummary] = useState(false);

  const handleRegistration = (e) => {
    e.preventDefault();
    setIsRegistered(true);
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDonation = () => {
    // Salva in localStorage
    localStorage.setItem('datiDonazione', JSON.stringify(formData));
    const newCount = donationCount + 1;
    localStorage.setItem('donationCount', newCount);
    setDonationCount(newCount);

    setShowSummary(true);
  };

  return (
    <div className="donazioni-container">
      <h2 className="title">Fai una Donazione</h2>
      <p className="donation-counter">Donazioni ricevute: <strong>{donationCount}</strong></p>

      {showForm && (
        <form className="form-box" onSubmit={handleRegistration}>
          <h3>Registrazione</h3>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn">Registrati</button>
        </form>
      )}

      {isRegistered && !showSummary && (
        <div className="form-box">
          <h3>Dati per la Donazione</h3>
          <input
            type="text"
            placeholder="Nome Intestatario"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Numero Carta"
            name="carta"
            value={formData.carta}
            onChange={handleChange}
            required
          />
          <div className="row">
            <input
              type="text"
              placeholder="Scadenza (MM/AA)"
              name="scadenza"
              value={formData.scadenza}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="CVV"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
            />
          </div>

          <label>Tipo di Donazione:</label>
          <select name="tipo" value={formData.tipo} onChange={handleChange} className="select">
            <option value="singola">Donazione Singola</option>
            <option value="mensile">Donazione Mensile</option>
          </select>

          <button className="btn donate" onClick={handleDonation}>
            Conferma Donazione
          </button>
          <p className="info">Puoi annullare la donazione mensile in qualsiasi momento.</p>
        </div>
      )}

      {showSummary && (
        <div className="form-box success-box">
          <h3>✅ Donazione completata!</h3>
          <p>Grazie <strong>{formData.nome}</strong> per la tua donazione <strong>{formData.tipo}</strong>.</p>
          <p>Una conferma è stata inviata alla tua email: <strong>{formData.email}</strong>.</p>
          <p>Numero carta (mascherato): <strong>**** **** **** {formData.carta.slice(-4)}</strong></p>
          <button className="btn" onClick={() => window.location.reload()}>Fai un'altra donazione</button>
        </div>
      )}
    </div>
  );
}

export default Donazioni;
