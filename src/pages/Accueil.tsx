import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../components/ui/Hero";

const Accueil = () => {
  return (
    <div className="bg-black text-white">
      <Hero />

      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
        >
          Prépare ton moteur, la performance commence ici.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-lg text-gray-400 max-w-2xl mx-auto"
        >
          HF Performance propose des prestations haut de gamme : reprogrammation moteur,
          décalaminage hydrogène, entretien, stages de puissance et plus encore.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <Link
            to="/reservation"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded text-white font-semibold text-sm uppercase transition"
          >
            Réserver une prestation
          </Link>
        </motion.div>
      </section>

      <section className="bg-neutral-900 py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-bold mb-2 text-red-500">+1000 véhicules</h3>
            <p className="text-gray-400 text-sm">
              déjà optimisés, reprogrammés ou entretenus avec passion.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-red-500">Experts certifiés</h3>
            <p className="text-gray-400 text-sm">
              Une équipe passionnée, équipée des meilleures technologies du marché.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-red-500">Performance & sécurité</h3>
            <p className="text-gray-400 text-sm">
              Chaque prestation est testée, validée et garantie.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;
