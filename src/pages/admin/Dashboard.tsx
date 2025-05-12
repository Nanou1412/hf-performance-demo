import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/admin/login");
    }
  }, [user, navigate]);

  if (!user || user.role !== "admin") return null;

  return (
    <div className="bg-black text-white py-16 px-4 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-red-500">
          Admin – Bonjour {user.nom}
        </h1>
        <p className="text-gray-400 mb-8">
          Espace administrateur HF Performance – accès aux données clients et
          gestion des rendez-vous.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            to="/admin/rdv-global"
            className="bg-neutral-900 hover:bg-neutral-800 p-6 rounded shadow text-center transition"
          >
            📅 Gestion des rendez-vous
          </Link>
          <Link
            to="/admin/utilisateurs"
            className="bg-neutral-900 hover:bg-neutral-800 p-6 rounded shadow text-center transition"
          >
            👥 Liste des clients
          </Link>
          <Link
            to="/produits"
            className="bg-neutral-900 hover:bg-neutral-800 p-6 rounded shadow text-center transition"
          >
            🛠️ Prestations disponibles
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

export default AdminDashboard;
