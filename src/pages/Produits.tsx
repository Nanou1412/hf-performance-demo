import { Link } from 'react-router-dom'
import produits from '../data/produits.json'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const Produits = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
      <h2 className="text-4xl font-extrabold mb-10 text-white text-center">
        Nos Produits Performants
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {produits.map((produit) => (
          <Card key={produit.id}>
            <img
              src={produit.image}
              alt={produit.nom}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-bold text-white mb-2">{produit.nom}</h3>
            <p className="text-sm text-neutral-400 mb-3">{produit.description}</p>
            <p className="text-primary text-lg font-extrabold mb-5">{produit.prix} €</p>
            <Link to={`/produits/${produit.id}`}>
              <Button full>Voir les détails</Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Produits
