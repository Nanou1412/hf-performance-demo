import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import produits from '../../data/produits.json'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'

interface Rdv {
  id: number
  prestation: string
  date: string
  vehicule: string
}

const MesRdv = () => {
  const [rdvs, setRdvs] = useState<Rdv[]>([])
  const [editingId, setEditingId] = useState<number | null>(null)
  const [newDate, setNewDate] = useState('')

  const [newPrestation, setNewPrestation] = useState('')
  const [newVehicule, setNewVehicule] = useState('')
  const [newRdvDate, setNewRdvDate] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('hf-demo-rdv')
    if (saved) {
      setRdvs(JSON.parse(saved))
    } else {
      const mockData: Rdv[] = [
        {
          id: 1,
          prestation: 'Décalaminage moteur',
          date: '2025-05-20T14:30',
          vehicule: 'Audi A5'
        }
      ]
      localStorage.setItem('hf-demo-rdv', JSON.stringify(mockData))
      setRdvs(mockData)
    }
  }, [])

  const saveChanges = (id: number) => {
    const updated = rdvs.map((rdv) =>
      rdv.id === id ? { ...rdv, date: newDate } : rdv
    )
    setRdvs(updated)
    localStorage.setItem('hf-demo-rdv', JSON.stringify(updated))
    toast.success('Rendez-vous modifié')
    setEditingId(null)
    setNewDate('')
  }

  const deleteRdv = (id: number) => {
    const updated = rdvs.filter((rdv) => rdv.id !== id)
    setRdvs(updated)
    localStorage.setItem('hf-demo-rdv', JSON.stringify(updated))
    toast.success('Rendez-vous supprimé')
  }

  const addRdv = () => {
    if (!newPrestation || !newVehicule || !newRdvDate) {
      toast.error("Remplissez tous les champs")
      return
    }

    const newRdv: Rdv = {
      id: Date.now(),
      prestation: newPrestation,
      date: newRdvDate,
      vehicule: newVehicule
    }

    const updated = [...rdvs, newRdv]
    setRdvs(updated)
    localStorage.setItem('hf-demo-rdv', JSON.stringify(updated))
    toast.success('Nouveau RDV ajouté')

    setNewPrestation('')
    setNewVehicule('')
    setNewRdvDate('')
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-extrabold text-white mb-8 text-center">Mes rendez-vous</h2>

      <Card className="mb-10 text-white">
        <h3 className="text-xl font-bold mb-4">➕ Nouveau RDV</h3>
        <div className="grid gap-4 sm:grid-cols-2 mb-4">
          <select
            value={newPrestation}
            onChange={(e) => setNewPrestation(e.target.value)}
            className="p-2 rounded bg-neutral-800 text-white"
          >
            <option value="">-- Choisir une prestation --</option>
            {produits.map((produit) => (
              <option key={produit.id} value={produit.nom}>
                {produit.nom}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Véhicule"
            value={newVehicule}
            onChange={(e) => setNewVehicule(e.target.value)}
            className="p-2 rounded bg-neutral-800 text-white"
          />
          <input
            type="datetime-local"
            value={newRdvDate}
            onChange={(e) => setNewRdvDate(e.target.value)}
            className="p-2 rounded bg-neutral-800 text-white col-span-2"
          />
        </div>
        <Button onClick={addRdv}>Ajouter le rendez-vous</Button>
      </Card>

      {rdvs.length === 0 ? (
        <p className="text-neutral-400 text-center">Aucun rendez-vous pour le moment.</p>
      ) : (
        <ul className="space-y-6">
          {rdvs.map((rdv) => (
            <Card key={rdv.id}>
              <h4 className="text-lg font-semibold text-white">{rdv.prestation}</h4>
              <p className="text-sm text-neutral-400">Véhicule : {rdv.vehicule}</p>

              {editingId === rdv.id ? (
                <div className="flex flex-col sm:flex-row gap-3 mt-3">
                  <input
                    type="datetime-local"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="p-2 rounded bg-neutral-800 text-white"
                  />
                  <Button onClick={() => saveChanges(rdv.id)}>Enregistrer</Button>
                </div>
              ) : (
                <>
                  <p className="text-sm text-neutral-300 mt-2">
                    📅 {new Date(rdv.date).toLocaleString('fr-FR')}
                  </p>
                  <div className="flex gap-4 mt-3">
                    <Button
                      variant="secondary"
                      onClick={() => {
                        setEditingId(rdv.id)
                        setNewDate(rdv.date)
                      }}
                    >
                      ✏️ Modifier
                    </Button>
                    <Button variant="danger" onClick={() => deleteRdv(rdv.id)}>
                      ❌ Supprimer
                    </Button>
                  </div>
                </>
              )}
            </Card>
          ))}
        </ul>
      )}
    </div>
  )
}

export default MesRdv
