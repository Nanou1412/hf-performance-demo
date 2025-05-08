import { useState } from 'react'
import toast from 'react-hot-toast'

const Reservation = () => {
  const [nom, setNom] = useState('')
  const [vehicule, setVehicule] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!nom || !vehicule || !date) {
      toast.error("Remplissez tous les champs.")
      return
    }
    toast.success("Réservation simulée ✅")
    setNom('')
    setVehicule('')
    setDate('')
  }

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Réserver une prestation</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nom complet"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          className="w-full p-3 rounded bg-neutral-800 text-white"
        />
        <input
          type="text"
          placeholder="Modèle de véhicule"
          value={vehicule}
          onChange={(e) => setVehicule(e.target.value)}
          className="w-full p-3 rounded bg-neutral-800 text-white"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-3 rounded bg-neutral-800 text-white"
        />
        <button
          type="submit"
          className="bg-primary text-white px-6 py-3 rounded hover:bg-red-600 transition"
        >
          Réserver
        </button>
      </form>
    </div>
  )
}

export default Reservation
