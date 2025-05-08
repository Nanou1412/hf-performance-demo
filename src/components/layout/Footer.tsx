import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-neutral-800 py-10 px-4 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-neutral-400">
        <div>
          <h2 className="text-white font-bold text-lg mb-1">HF Performance</h2>
          <p>Expert en optimisation moteur & préparation automobile.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <Link to="/mentions-legales" className="hover:text-white">Mentions légales</Link>
          <Link to="/politique-confidentialite" className="hover:text-white">Confidentialité</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
        </div>
      </div>

      <div className="text-center text-xs text-neutral-600 mt-6">
        © {new Date().getFullYear()} HF Performance. Démo réalisée par Marwan.
      </div>
    </footer>
  )
}

export default Footer
