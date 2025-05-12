import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";

// Pages publiques
import Accueil from "../pages/Accueil";
import APropos from "../pages/APropos";
import Contact from "../pages/Contact";
import MentionsLegales from "../pages/MentionsLegales";
import PolitiqueConfidentialite from "../pages/PolitiqueConfidentialite";
import Produits from "../pages/Produits";
import ProduitDetails from "../pages/ProduitDetails";
import Reservation from "../pages/Reservation";
import Confirmation from "../pages/Confirmation";
import Panier from "../pages/Panier";
import NotFound from "../pages/NotFound";

// Pages client
import Login from "../pages/client/Login";
import DashboardClient from "../pages/client/Dashboard";
import ProfilClient from "../pages/client/Profil";
import MesRdv from "../pages/client/MesRdv";
import ReservationsClient from "../pages/client/Reservations";
import CommandesClient from "../pages/client/Commandes";
import ForgotPassword from "../pages/client/ForgotPassword";
import ResetPassword from "../pages/client/ResetPassword";

// Pages admin
import LoginAdmin from "../pages/admin/Dashboard";
import DashboardAdmin from "../pages/admin/Dashboard";
import RdvGlobal from "../pages/admin/RdvGlobal";
import Utilisateurs from "../pages/admin/Utilisateurs";

function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public */}
          <Route path="/" element={<Accueil />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/produits/:id" element={<ProduitDetails />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/panier" element={<Panier />} />

          {/* Client */}
          <Route path="/client/login" element={<Login />} />
          <Route path="/client/dashboard" element={<DashboardClient />} />
          <Route path="/client/profil" element={<ProfilClient />} />
          <Route path="/client/mes-rdv" element={<MesRdv />} />
          <Route path="/client/reservations" element={<ReservationsClient />} />
          <Route path="/client/commandes" element={<CommandesClient />} />
          <Route path="/client/forgot-password" element={<ForgotPassword />} />
          <Route path="/client/reset-password" element={<ResetPassword />} />

          {/* Admin */}
          <Route path="/admin/login" element={<LoginAdmin />} />
          <Route path="/admin/dashboard" element={<DashboardAdmin />} />
          <Route path="/admin/rdv-global" element={<RdvGlobal />} />
          <Route path="/admin/utilisateurs" element={<Utilisateurs />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default AppRouter;
