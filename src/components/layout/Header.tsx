import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

const navItems = [
  { name: 'Accueil', to: '/' },
  { name: 'Produits', to: '/produits' },
  { name: 'Panier', to: '/panier' },
  { name: 'Réservation', to: '/reservation' },
  { name: 'Contact', to: '/contact' }
]

const Header = () => {
  const user = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('hf-demo-user')
    navigate('/')
    window.location.reload()
  }

  return (
    <header className="bg-black border-b border-neutral-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-primary tracking-tight">
          HF<span className="text-white">Performance</span>
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition hover:text-primary ${
                  isActive ? 'text-primary font-bold' : 'text-white'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Dynamique selon statut utilisateur */}
          {!user && (
            <NavLink
              to="/login"
              className="text-white hover:text-primary transition"
            >
              Connexion
            </NavLink>
          )}

          {user?.type === 'client' && (
            <NavLink
              to="/client/rdv"
              className="text-white hover:text-primary transition"
            >
              Mon espace
            </NavLink>
          )}

          {user && (
            <button
              onClick={handleLogout}
              className="text-red-400 hover:text-red-600 transition text-sm"
            >
              Déconnexion
            </button>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header
