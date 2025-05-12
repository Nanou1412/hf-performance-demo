import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-8 mt-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} HF Performance. Tous droits réservés.
        </div>

        <div className="flex space-x-4 text-sm">
          <Link
            to="/mentions-legales"
            className="hover:text-red-500 transition"
          >
            Mentions légales
          </Link>
          <Link
            to="/politique-confidentialite"
            className="hover:text-red-500 transition"
          >
            Politique de confidentialité
          </Link>
          <Link to="/contact" className="hover:text-red-500 transition">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
