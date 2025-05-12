import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Commandes = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== "client") {
      navigate("/client/login");
    }
  }, [user, navigate]);

  if (!user || user.role !== "client") return null;

  const commandesMock = [
    {
      id: 1,
      date: "2025-04-10",
      montant: 390,
      statut: "Payé",
    },
    {
      id: 2,
      date: "2025-03-28",
      montant: 99,
      statut: "Payé",
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-4 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-red-500">Mes Commandes</h1>

        {commandesMock.length === 0 ? (
          <p className="text-gray-400">Aucune commande enregistrée.</p>
        ) : (
          <table className="w-full text-left text-sm bg-neutral-900 border border-neutral-800 rounded overflow-hidden">
            <thead className="bg-neutral-800 text-white">
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Montant</th>
                <th className="px-4 py-2">Statut</th>
              </tr>
            </thead>
            <tbody>
              {commandesMock.map((cmd) => (
                <tr key={cmd.id} className="border-t border-neutral-800">
                  <td className="px-4 py-2">{cmd.date}</td>
                  <td className="px-4 py-2">{cmd.montant} €</td>
                  <td className="px-4 py-2">{cmd.statut}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Commandes;
