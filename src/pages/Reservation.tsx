import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nom: "",
    telephone: "",
    voiture: "",
    prestation: "",
    date: "",
    heure: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/confirmation");
  };

  return (
    <div className="bg-black text-white py-16 px-4 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Réserver une prestation</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="nom"
            placeholder="Nom complet"
            value={form.nom}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded text-white"
          />
          <input
            type="text"
            name="telephone"
            placeholder="Téléphone"
            value={form.telephone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded text-white"
          />
          <input
            type="text"
            name="voiture"
            placeholder="Modèle du véhicule"
            value={form.voiture}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded text-white"
          />
          <select
            name="prestation"
            value={form.prestation}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded text-white"
          >
            <option value="">-- Sélectionner une prestation --</option>
            <option value="Stage 1">Reprogrammation Stage 1</option>
            <option value="Décalaminage">Décalaminage Hydrogène</option>
            <option value="Boîte">Reprogrammation Boîte de vitesses</option>
          </select>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded text-white"
          />
          <input
            type="time"
            name="heure"
            value={form.heure}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded text-white"
          />

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white font-semibold"
          >
            Valider la réservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
