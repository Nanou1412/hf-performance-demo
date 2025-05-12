import { useAuth } from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ClientDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== "client") {
      navigate("/client/login");
    }
  }, [user, navigate]);

  if (!user || user.role !== "client") return null;

  return (
    <div className="bg-black text-white py-16 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-red-500">
          Bonjour, {user.nom}
        </h1>
        <p className="text-gray-400 mb-8">
          Bienvenue dans votre espace client HF Performance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            to="/client/reservations"
            className="bg-neutral-900 hover:bg-neutral-800 p-6 rounded shadow text-center transition"
          >
            📅 Mes réservations
          </Link>
          <Link
            to="/client/commandes"
            className="bg-neutral-900 hover:bg-neutral-800 p-6 rounded shadow text-center transition"
          >
            🧾 Mes commandes
          </Link>
          <Link
            to="/client/profil"
            className="bg-neutral-900 hover:bg-neutral-800 p-6 rounded shadow text-center transition"
          >
            👤 Mon profil
          </Link>
          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
            className="bg-red-600 hover:bg-red-700 p-6 rounded shadow text-center font-semibold"
          >
            🚪 Déconnexion
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
