import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";


const icons = {
  Ospedale: "fa-hospital",
  Supermercato: "fa-shopping-cart",
  Farmacia: "fa-mortar-pestle",
  Ristorante: "fa-utensils",
  Scuola: "fa-school",
};

const colors = {
  Ospedale: "#dc2626",
  Supermercato: "#16a34a",
  Farmacia: "#0ea5e9",
  Ristorante: "#f59e0b",
  Scuola: "#8b5cf6",
};

const places = [
  { name: "Queen Elizabeth Central Hospital", type: "Ospedale", lat: -15.786, lon: 35.0 },
  { name: "Kamuzu Central Hospital", type: "Ospedale", lat: -13.9769, lon: 33.7864 },
  { name: "Mulanje Mission Hospital", type: "Ospedale", lat: -16.03, lon: 35.52 },
  { name: "Shoprite Blantyre", type: "Supermercato", lat: -15.788, lon: 35.002 },
  { name: "Chichiri Market", type: "Supermercato", lat: -15.795, lon: 35.003 },
  { name: "Bwaila Pharmacy", type: "Farmacia", lat: -13.999, lon: 33.78 },
  { name: "City Pharmacy Lilongwe", type: "Farmacia", lat: -13.967, lon: 33.79 },
  { name: "Chez Maky Café", type: "Ristorante", lat: -15.7801, lon: 35.0005 },
  { name: "Mamma Mia Restaurant", type: "Ristorante", lat: -15.781, lon: 35.005 },
  { name: "Saint Andrews International School", type: "Scuola", lat: -15.7895, lon: 35.001 },
  { name: "Lilongwe International School", type: "Scuola", lat: -13.98, lon: 33.78 },
];

export default function MalawiMap() {
  const [filter, setFilter] = useState("Tutti");

  const filteredPlaces = filter === "Tutti" ? places : places.filter(p => p.type === filter);

  return (
    <div style={{ display: "flex", height: "100vh", width: "100%" }}>
      <div style={{ width: "300px", padding: 20, borderRight: "1px solid #ccc", overflowY: "auto" }}>
        <h2>Luoghi in Malawi</h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ marginBottom: 10, width: "100%", padding: 8 }}
        >
          <option value="Tutti">Tutti</option>
          {Object.keys(icons).map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {filteredPlaces.length === 0 && <li>Nessun luogo trovato.</li>}
          {filteredPlaces.map((place, idx) => (
            <li key={idx} style={{ marginBottom: 10 }}>
              <strong>{place.name}</strong><br />
              <span style={{ color: colors[place.type] }}>{place.type}</span>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ flex: 1 }}>
        <MapContainer center={[-13.5, 34.0]} zoom={6} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filteredPlaces.map((place, idx) => (
            <Marker
              key={idx}
              position={[place.lat, place.lon]}
              icon={L.divIcon({
                html: `<div style='font-size: 22px; color: ${colors[place.type]}'>
                         <i class='fa ${icons[place.type]}'></i>
                       </div>`,
                className: "custom-icon",
                iconSize: [30, 42],
                iconAnchor: [15, 42],
              })}
            >
              <Popup>
                <strong>{place.name}</strong><br />
                {place.type}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

