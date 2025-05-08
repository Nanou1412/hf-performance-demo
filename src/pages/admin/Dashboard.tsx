import Card from '../../components/ui/Card'

const AdminDashboard = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-extrabold text-white mb-10 text-center">
        Tableau de bord Admin HF Performance
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="text-center">
          <h3 className="text-white text-lg font-bold mb-2">🛒 Produits actifs</h3>
          <p className="text-primary text-3xl font-extrabold">3</p>
          <p className="text-neutral-400 text-sm mt-2">Produits affichés dans la boutique</p>
        </Card>

        <Card className="text-center">
          <h3 className="text-white text-lg font-bold mb-2">📦 Commandes en cours</h3>
          <p className="text-primary text-3xl font-extrabold">2</p>
          <p className="text-neutral-400 text-sm mt-2">À préparer / livrer</p>
        </Card>

        <Card className="text-center">
          <h3 className="text-white text-lg font-bold mb-2">📅 Réservations</h3>
          <p className="text-primary text-3xl font-extrabold">1</p>
          <p className="text-neutral-400 text-sm mt-2">Rendez-vous confirmés</p>
        </Card>
      </div>

      <Card className="text-sm text-neutral-400 text-center bg-neutral-900 border border-neutral-700">
        ⚠️ Ceci est une version démo : les données sont fictives, destinées à illustrer la navigation.
      </Card>
    </div>
  )
}

export default AdminDashboard
