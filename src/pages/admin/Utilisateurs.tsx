import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Utilisateurs = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/admin/login");
    }
  }, [user, navigate]);

  if (!user || user.role !== "admin") return null;

  const clientsMock = [
    { id: 1, nom: "Jean Dupont", email: "jean@client.com" },
    { id: 2, nom: "Alice Martin", email: "alice@client.com" },
    { id: 3, nom: "Karim Benzema", email: "kb9@hf.fr" },
  ];

  return (
    <div className="bg-black text-white py-16 px-4 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-red-500">Liste des Clients</h1>

        {clientsMock.length === 0 ? (
          <p className="text-gray-400">Aucun utilisateur inscrit.</p>
        ) : (
          <ul className="space-y-4">
            {clientsMock.map((client) => (
              <li
                key={client.id}
                className="bg-neutral-900 border border-neutral-800 p-4 rounded"
              >
                <p className="text-lg font-semibold">{client.nom}</p>
                <p className="text-sm text-gray-400">{client.email}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Utilisateurs;
