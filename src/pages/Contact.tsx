import { useState } from 'react'
import toast from 'react-hot-toast'

const Contact = () => {
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!nom || !email || !message) {
      toast.error("Tous les champs sont obligatoires.")
      return
    }
    toast.success("Message envoyé (fictif) ✅")
    setNom('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Nous contacter</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Votre nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          className="w-full p-3 rounded bg-neutral-800 text-white"
        />
        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded bg-neutral-800 text-white"
        />
        <textarea
          placeholder="Votre message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 rounded bg-neutral-800 text-white h-40 resize-none"
        />
        <button
          type="submit"
          className="bg-primary text-white px-6 py-3 rounded hover:bg-red-600 transition"
        >
          Envoyer
        </button>
      </form>
    </div>
  )
}

export default Contact
