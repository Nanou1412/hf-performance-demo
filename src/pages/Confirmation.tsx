import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const Confirmation = () => {
  return (
    <div className="bg-black text-white py-20 px-4 min-h-screen flex flex-col items-center justify-center text-center">
      <CheckCircle size={64} className="text-green-500 mb-6" />
      <h1 className="text-3xl font-bold mb-4">Réservation enregistrée !</h1>
      <p className="text-gray-400 mb-6">
        Merci pour votre confiance. Un membre de notre équipe vous contactera rapidement pour confirmer les détails.
      </p>
      <Link
        to="/"
        className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded text-white text-sm font-semibold transition"
      >
        Retour à l’accueil
      </Link>
    </div>
  );
};

export default Confirmation;
