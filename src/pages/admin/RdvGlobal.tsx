import { useEffect, useState } from 'react'

interface Rdv {
  id: number
  prestation: string
  date: string
  vehicule: string
}

const RdvGlobal = () => {
  const [rdvs, setRdvs] = useState<Rdv[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('hf-demo-rdv')
    if (saved) {
      setRdvs(JSON.parse(saved))
    }
  }, [])

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-extrabold text-white mb-8 text-center">Tous les rendez-vous clients</h2>

      {rdvs.length === 0 ? (
        <p className="text-neutral-400 text-center">Aucun rendez-vous enregistré.</p>
      ) : (
        <ul className="space-y-6">
          {rdvs.map((rdv) => (
            <li
              key={rdv.id}
              className="bg-surface p-6 rounded-xl shadow-smooth text-white flex flex-col gap-1"
            >
              <p className="text-lg font-semibold">{rdv.prestation}</p>
              <p className="text-sm text-neutral-400">Véhicule : {rdv.vehicule}</p>
              <p className="text-sm text-neutral-300">📅 {new Date(rdv.date).toLocaleString('fr-FR')}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default RdvGlobal
