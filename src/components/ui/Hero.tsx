import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-black">
      <div className="relative h-[80vh] w-full overflow-hidden">
        <img
          src="/images/decalaminage.jpg"
          alt="Voiture performance"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            Boostez votre moteur, libérez son vrai potentiel.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-300 max-w-2xl"
          >
            Reprogrammation moteur, stage 1/2/3, entretien haut de gamme, diagnostic, décalaminage hydrogène.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8"
          >
            <Link
              to="/produits"
              className="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded shadow transition"
            >
              Voir nos prestations
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
