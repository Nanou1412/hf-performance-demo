import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Accueil from './pages/Accueil'
import Produits from './pages/Produits'
import ProduitDetails from './pages/ProduitDetails'
import Panier from './pages/Panier'
import Confirmation from './pages/Confirmation'
import Reservation from './pages/Reservation'
import Contact from './pages/Contact'
import APropos from './pages/APropos'
import MentionsLegales from './pages/MentionsLegales'
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite'
import NotFound from './pages/NotFound'

import Login from './pages/client/Login'
import ClientDashboard from './pages/client/Dashboard'
import MesRdv from './pages/client/MesRdv'

import AdminDashboard from './pages/admin/Dashboard'
import RdvGlobal from './pages/admin/RdvGlobal'

import { useAuth } from './hooks/useAuth'

function App() {
  const user = useAuth()

  return (
    <Layout>
      <Routes>
        {/* 🌐 Pages publiques */}
        <Route path="/" element={<Accueil />} />
        <Route path="/produits" element={<Produits />} />
        <Route path="/produits/:id" element={<ProduitDetails />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />

        {/* 🔐 Auth */}
        <Route path="/login" element={<Login />} />

        {/* 👤 Espace client */}
        <Route
          path="/client/dashboard"
          element={user?.type === 'client' ? <ClientDashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/client/rdv"
          element={user?.type === 'client' ? <MesRdv /> : <Navigate to="/login" />}
        />

        {/* 🛠️ Espace admin */}
        <Route
          path="/admin/dashboard"
          element={user?.type === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin/rdv"
          element={user?.type === 'admin' ? <RdvGlobal /> : <Navigate to="/login" />}
        />

        {/* ❌ Page 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
