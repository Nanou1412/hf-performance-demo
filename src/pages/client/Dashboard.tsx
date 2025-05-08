import Card from '../../components/ui/Card'

const ClientDashboard = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-extrabold text-white mb-10 text-center">
        Tableau de bord Client
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <h3 className="text-xl font-bold text-white mb-2">📦 Mes commandes</h3>
          <p className="text-neutral-400 text-sm mb-4">2 commandes en cours</p>
          <ul className="text-neutral-300 text-sm space-y-2">
            <li>• Stage 1 – Golf 7 GTI – Livraison 12 mai</li>
            <li>• Kit Admission – BMW M4 – Livraison 15 mai</li>
          </ul>
        </Card>

        <Card>
          <h3 className="text-xl font-bold text-white mb-2">📅 Mes rendez-vous</h3>
          <p className="text-neutral-400 text-sm mb-4">1 RDV confirmé</p>
          <p className="text-neutral-300 text-sm">
            Décalaminage moteur – Audi A5<br />le 20 mai à 14h30
          </p>
        </Card>
      </div>
    </div>
  )
}

export default ClientDashboard
