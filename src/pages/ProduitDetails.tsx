import { useParams } from 'react-router-dom'
import produits from '../data/produits.json'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import toast from 'react-hot-toast'
import Button from '../components/ui/Button'

const ProduitDetails = () => {
  const { id } = useParams()
  const produit = produits.find((p) => p.id === id)
  const { ajouterAuPanier } = useContext(CartContext)

  if (!produit) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-red-500">Produit introuvable.</h2>
      </div>
    )
  }

  const handleAjout = () => {
    ajouterAuPanier(produit)
    toast.success(`${produit.nom} ajouté au panier`)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <img
          src={produit.image}
          alt={produit.nom}
          className="w-full h-[400px] object-cover rounded-2xl shadow-smooth"
        />
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-extrabold text-white mb-4">{produit.nom}</h1>
        <p className="text-neutral-400 mb-6">{produit.description}</p>
        <p className="text-2xl text-primary font-extrabold mb-8">{produit.prix} €</p>
        <Button onClick={handleAjout}>Ajouter au panier</Button>
      </div>
    </div>
  )
}

export default ProduitDetails
