import { useParams, useNavigate } from "react-router-dom";
import produits from "../data/produits.json";
import { useEffect } from "react";

const ProduitDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const produit = produits.find((p) => p.id.toString() === id);

  useEffect(() => {
    if (!produit) navigate("/produits");
  }, [produit, navigate]);

  if (!produit) return null;

  return (
    <div className="bg-black text-white py-16 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <img
          src={produit.image}
          alt={produit.nom}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold text-red-500 mb-4">
            {produit.nom}
          </h1>
          <p className="text-gray-300 mb-6">{produit.description}</p>
          <p className="text-xl font-semibold mb-6">{produit.prix} €</p>
          <button
            onClick={() => navigate("/reservation")}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded text-sm font-semibold"
          >
            Réserver cette prestation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProduitDetails;
