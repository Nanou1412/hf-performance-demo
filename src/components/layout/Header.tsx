import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false); // Ferme le menu mobile quand on change de page
  }, [location]);

  const navLinks = [
    { label: "Accueil", path: "/" },
    { label: "Prestations", path: "/produits" },
    { label: "Véhicules", path: "/produits" },
    { label: "Réservation", path: "/reservation" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-black border-b border-neutral-800 z-40 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link to="/" className="text-xl font-bold text-white">
          HF PERFORMANCE
        </Link>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm hover:text-red-500 transition ${
                location.pathname === link.path ? "text-red-500" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex space-x-4">
          <Link
            to="/client/login"
            className="text-sm px-3 py-1 border border-white rounded hover:bg-white hover:text-black transition"
          >
            Espace Client
          </Link>
          <Link
            to="/admin/login"
            className="text-sm px-3 py-1 bg-red-600 rounded hover:bg-red-700 transition"
          >
            Admin
          </Link>
        </div>

        {/* Menu mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-neutral-800 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block py-2 text-sm text-white hover:text-red-500"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 space-y-2">
            <Link
              to="/client/login"
              className="block w-full text-center border border-white text-white px-3 py-2 rounded hover:bg-white hover:text-black"
            >
              Espace Client
            </Link>
            <Link
              to="/admin/login"
              className="block w-full text-center bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700"
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
