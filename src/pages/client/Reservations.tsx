import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Reservations = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== "client") {
      navigate("/client/login");
    }
  }, [user, navigate]);

  if (!user || user.role !== "client") return null;

  const reservationsMock = [
    {
      id: 1,
      prestation: "Stage 1",
      date: "2025-04-18",
      heure: "11:00",
      statut: "Terminé",
    },
    {
      id: 2,
      prestation: "Décalaminage",
      date: "2025-03-05",
      heure: "15:30",
      statut: "Annulé",
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-4 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-red-500">Historique de Réservations</h1>

        {reservationsMock.length === 0 ? (
          <p className="text-gray-400">Aucune réservation trouvée.</p>
        ) : (
          <table className="w-full text-left text-sm bg-neutral-900 border border-neutral-800 rounded overflow-hidden">
            <thead className="bg-neutral-800 text-white">
              <tr>
                <th className="px-4 py-2">Prestation</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Heure</th>
                <th className="px-4 py-2">Statut</th>
              </tr>
            </thead>
            <tbody>
              {reservationsMock.map((res) => (
                <tr key={res.id} className="border-t border-neutral-800">
                  <td className="px-4 py-2">{res.prestation}</td>
                  <td className="px-4 py-2">{res.date}</td>
                  <td className="px-4 py-2">{res.heure}</td>
                  <td className="px-4 py-2">{res.statut}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Reservations;
