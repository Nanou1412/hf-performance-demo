import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { simulateFakePayment } from '../services/paymentService'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const Panier = () => {
  const { panier, retirerDuPanier, viderPanier } = useContext(CartContext)
  const navigate = useNavigate()

  const total = panier.reduce((sum, item) => sum + item.prix, 0)

  const handlePaiement = async () => {
    const res = await simulateFakePayment()
    if (res.success) {
      toast.success(res.message)
      viderPanier()
      navigate('/confirmation')
    } else {
      toast.error("Échec du paiement.")
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12">
      <h2 className="text-3xl font-extrabold text-white mb-8 text-center">Votre panier</h2>

      {panier.length === 0 ? (
        <p className="text-neutral-400 text-center">Votre panier est vide.</p>
      ) : (
        <>
          <div className="space-y-6 mb-10">
            {panier.map((item) => (
              <Card key={item.id} className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-white font-bold">{item.nom}</h3>
                  <p className="text-sm text-neutral-400">{item.prix} €</p>
                </div>
                <button
                  onClick={() => retirerDuPanier(item.id)}
                  className="text-sm text-red-400 hover:underline"
                >
                  Supprimer
                </button>
              </Card>
            ))}
          </div>

          <div className="flex justify-between items-center text-lg font-semibold mb-6 text-white">
            <span>Total :</span>
            <span className="text-primary text-2xl">{total} €</span>
          </div>

          <Button onClick={handlePaiement} full>
            Simuler le paiement
          </Button>
        </>
      )}
    </div>
  )
}

export default Panier
