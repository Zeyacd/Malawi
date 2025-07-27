import React, { useState } from 'react';
import './Volontariato.css';

const Volontariato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    foto: null,
  });

  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.nome.trim()) newErrors.nome = 'Il nome è obbligatorio.';
    if (!formData.cognome.trim()) newErrors.cognome = 'Il cognome è obbligatorio.';
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email è obbligatoria.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Formato email non valido.';
    }
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'Il telefono è obbligatorio.';
    } else if (!/^\d{9,15}$/.test(formData.telefono)) {
      newErrors.telefono = 'Numero di telefono non valido.';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'foto') {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, foto: reader.result });
        setPreview(reader.result);
      };
      if (file) reader.readAsDataURL(file);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // Salva localmente nel browser
    localStorage.setItem('datiVolontario', JSON.stringify(formData));
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="form-container">
        <h2 className="success">Registrazione completata!</h2>
        <p>Grazie per aver richiesto di fare volontariato, {formData.nome}!</p>
        {preview && <img src={preview} alt="Foto profilo" className="preview" />}
      </div>
    );
  }

  return (
    <div className="form-container">
      <h2>Richiesta di Volontariato</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome:</label>
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
          {errors.nome && <span className="error">{errors.nome}</span>}
        </div>

        <div className="form-group">
          <label>Cognome:</label>
          <input type="text" name="cognome" value={formData.cognome} onChange={handleChange} />
          {errors.cognome && <span className="error">{errors.cognome}</span>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Telefono:</label>
          <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} />
          {errors.telefono && <span className="error">{errors.telefono}</span>}
        </div>

        <div className="form-group">
          <label>Foto profilo:</label>
          <input type="file" name="foto" accept="image/*" onChange={handleChange} />
          {preview && <img src={preview} alt="Anteprima" className="preview" />}
        </div>

        <button type="submit">Invia richiesta</button>
      </form>
    </div>
  );
};

export default Volontariato;

