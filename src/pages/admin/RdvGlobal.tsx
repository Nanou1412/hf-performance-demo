import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const RdvGlobal = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/admin/login");
    }
  }, [user, navigate]);

  if (!user || user.role !== "admin") return null;

  const rdvs = [
    {
      id: 1,
      nom: "Jean Dupont",
      voiture: "BMW M4",
      prestation: "Stage 1",
      date: "2025-05-20",
      heure: "10:00",
      statut: "Confirmé",
    },
    {
      id: 2,
      nom: "Alice Martin",
      voiture: "Golf 7 GTI",
      prestation: "Décalaminage",
      date: "2025-05-22",
      heure: "14:00",
      statut: "En attente",
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-red-500">Tous les Rendez-vous</h1>

        {rdvs.length === 0 ? (
          <p className="text-gray-400">Aucun rendez-vous à afficher.</p>
        ) : (
          <table className="w-full text-left text-sm bg-neutral-900 border border-neutral-800 rounded overflow-hidden">
            <thead className="bg-neutral-800">
              <tr>
                <th className="px-4 py-2">Client</th>
                <th className="px-4 py-2">Voiture</th>
                <th className="px-4 py-2">Prestation</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Heure</th>
                <th className="px-4 py-2">Statut</th>
              </tr>
            </thead>
            <tbody>
              {rdvs.map((rdv) => (
                <tr key={rdv.id} className="border-t border-neutral-800">
                  <td className="px-4 py-2">{rdv.nom}</td>
                  <td className="px-4 py-2">{rdv.voiture}</td>
                  <td className="px-4 py-2">{rdv.prestation}</td>
                  <td className="px-4 py-2">{rdv.date}</td>
                  <td className="px-4 py-2">{rdv.heure}</td>
                  <td className="px-4 py-2">{rdv.statut}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default RdvGlobal;
