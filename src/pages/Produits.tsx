import produits from "../data/produits.json";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Produits = () => {
  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Nos Prestations</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {produits.map((produit) => (
            <motion.div
              key={produit.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: produit.id * 0.1 }}
              className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-red-600/30 transition"
            >
              <img
                src={produit.image}
                alt={produit.nom}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-red-500 mb-2">
                  {produit.nom}
                </h2>
                <p className="text-sm text-gray-300 mb-4">{produit.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-white">
                    {produit.prix} €
                  </span>
                  <Link
                    to={`/produits/${produit.id}`}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Détails
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Produits;
