import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MesRdv = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== "client") {
      navigate("/client/login");
    }
  }, [user, navigate]);

  if (!user || user.role !== "client") return null;

  const fakeRdv = [
    {
      date: "2025-05-20",
      heure: "10:00",
      prestation: "Reprogrammation Stage 1",
      statut: "Confirmé",
    },
    {
      date: "2025-06-02",
      heure: "14:30",
      prestation: "Décalaminage Hydrogène",
      statut: "En attente",
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-red-500">Mes Rendez-vous</h1>
        {fakeRdv.length === 0 ? (
          <p className="text-gray-400 text-sm">Aucun rendez-vous enregistré.</p>
        ) : (
          <ul className="space-y-4">
            {fakeRdv.map((rdv, i) => (
              <li
                key={i}
                className="bg-neutral-900 p-4 rounded shadow border border-neutral-700"
              >
                <p className="text-lg font-semibold">{rdv.prestation}</p>
                <p className="text-sm text-gray-400">
                  📅 {rdv.date} – 🕒 {rdv.heure}
                </p>
                <p className="text-sm text-green-400 mt-1">
                  Statut : {rdv.statut}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MesRdv;
