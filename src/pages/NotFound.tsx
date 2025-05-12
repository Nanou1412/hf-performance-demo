import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <AlertTriangle size={64} className="text-red-600 mb-4" />
      <h1 className="text-4xl font-bold mb-2">Erreur 404</h1>
      <p className="text-gray-400 mb-6">La page que vous cherchez n'existe pas.</p>
      <Link
        to="/"
        className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded text-white font-semibold text-sm transition"
      >
        Retour à l’accueil
      </Link>
    </div>
  );
};

export default NotFound;
