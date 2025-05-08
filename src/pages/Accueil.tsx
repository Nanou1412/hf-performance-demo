import { Link } from 'react-router-dom'

const Accueil = () => {
  return (
    <section className="relative text-white min-h-[80vh] flex flex-col items-center justify-center px-6 py-20">
      {/* Arrière-plan image avec overlay sombre */}
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div
        className="absolute inset-0 bg-cover bg-center z-[-1] blur-[1px] brightness-75"
        style={{ backgroundImage: "url('/images/hero-performance.jpg')" }}
      />

      {/* Contenu principal */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          Reprogrammez votre puissance.
        </h1>
        <p className="text-lg text-neutral-300 mb-8">
          HF Performance optimise votre moteur pour révéler son plein potentiel. Découvrez nos services et notre expertise dédiée à la performance automobile.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/produits"
            className="bg-primary hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Voir les produits
          </Link>
          <Link
            to="/reservation"
            className="bg-white text-black hover:bg-neutral-200 px-6 py-3 rounded-xl font-semibold transition"
          >
            Réserver une prestation
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Accueil
